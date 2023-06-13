export const UPDATE_TIMESTAMP_FUNCTION = `
CREATE OR REPLACE FUNCTION update_at_request_timestamp() 
   RETURNS TRIGGER 
   LANGUAGE PLPGSQL
AS $$
BEGIN
    IF (NEW.approved_quantity IS NOT NULL AND OLD.approved_quantity IS NULL) THEN
        NEW.approved_at = extract(epoch from now()::timestamp with time zone)::integer;
    ELSIF (NEW.submitted_quantity IS NOT NULL AND OLD.submitted_quantity IS NULL) THEN
        NEW.submitted_at = extract(epoch from now()::timestamp with time zone)::integer;
    END IF;

    RETURN NEW;
END;
$$`;

export const UPDATE_TIMESTAMP_TRIGGER = `
CREATE OR REPLACE TRIGGER tr_update_car_request
BEFORE UPDATE ON update_car_request
FOR EACH ROW EXECUTE PROCEDURE update_at_request_timestamp();
`;

