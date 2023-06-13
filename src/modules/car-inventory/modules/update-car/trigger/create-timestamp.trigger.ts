export const CREATE_TIMESTAMP_FUNCTION = `
CREATE OR REPLACE FUNCTION requested_at_timestamp() 
   RETURNS TRIGGER 
   LANGUAGE PLPGSQL
AS $$
BEGIN
    NEW.requested_at = extract(epoch from now()::timestamp with time zone)::integer;

    RETURN NEW;
END;
$$`;

export const CREATE_TIMESTAMP_TRIGGER = `
CREATE OR REPLACE TRIGGER tr_create_car_request
BEFORE INSERT ON update_car_request
FOR EACH ROW EXECUTE PROCEDURE requested_at_timestamp();
`;

