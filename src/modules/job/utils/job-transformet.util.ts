import { Job } from '../entity/job.entity';

export function workizJobToTableJob(workiz_job): Job {
  return {
    uuid: workiz_job.data.uuid,
    tip_amount: workiz_job.data.tip_amount,
    is_lead: workiz_job.data.is_lead,
    scheduled_start: workiz_job.data.job_date,
    created_timestamp: workiz_job.data.created_timestamp,
    created: workiz_job.data.created,
    job_date_formatted: workiz_job.data.job_date_formatted,
    job_hour: workiz_job.data.job_hour,
    job_min: workiz_job.data.job_min,
    job_ampm: workiz_job.data.job_ampm,
    job_end_date: workiz_job.data.job_end_date,
    job_amount_due_date: workiz_job.data.job_amount_due_date,
    job_date_end_formatted: workiz_job.data.job_date_end_formatted,
    job_hour_end: workiz_job.data.job_hour_end,
    job_minute_end: workiz_job.data.job_minute_end,
    job_ampm_end: workiz_job.data.job_ampm_end,
    status: workiz_job.data.status,
    sub_name: workiz_job.data.sub_name,
    job_source: workiz_job.data.job_source,
    status_updated: workiz_job.data.status_updated,
    use_tech_special_rate: workiz_job.data.use_tech_special_rate,
    tech_special_rate: workiz_job.data.tech_special_rate,
    tax_amount: workiz_job.data.tax_amount,
    tax_precent: workiz_job.data.tax_precent,
    taxable_amount: workiz_job.data.taxable_amount,
    tax_on_off: workiz_job.data.tax_on_off,
    job_total_price: workiz_job.data.job_total_price,
    job_amount_due: workiz_job.data.job_amount_due,
    sub_total: workiz_job.data.sub_total,
    client_id: workiz_job.data.client_id,
    client_confirmed: workiz_job.data.client_confirmed,
    leadLost: workiz_job.data.leadLost,
    has_calls: workiz_job.data.has_calls,
    primary_phone: workiz_job.data.primary_phone,
    secondary_phone: workiz_job.data.secondary_phone,
    email_address: workiz_job.data.email_address,
    company_parts: workiz_job.data.company_parts,
    parts: workiz_job.data.parts,
    client_company_name: workiz_job.data.client_company_name,
    invoice_number: workiz_job.data.invoice_number,
    city: workiz_job.data.city,
    state: workiz_job.data.state,
    zipcode: workiz_job.data.zipcode,
    address: workiz_job.data.address,
    location_ob: workiz_job.data.location_ob,
    location_pb: workiz_job.data.location_pb,
    location_key: workiz_job.data.location_key,
    invoice_created: workiz_job.data.invoice_created,
    invoice_sent: workiz_job.data.invoice_sent,
    user_created: workiz_job.data.user_created,
    client_first_name: workiz_job.data.client_first_name,
    client_last_name: workiz_job.data.client_last_name,
    tech_names: workiz_job.data.tech_names,
    tech_phone_numbers: workiz_job.data.tech_phone_numbers,
    dispatch_bonus_type: workiz_job.data.custom_fields.bonuses_.jobs,
    dispatch_bonus_number: workiz_job.data.custom_fields.bonuses_.team_members_,
    job_type: workiz_job.data.jobTypeInfo.type_name,
    job_sub_total: workiz_job.data.job_sub_total,
    created_utc: workiz_job.data.created_utc,
    invoice_created_utc: workiz_job.data.invoice_created_utc,
    tags: workiz_job.data.tags,
    paid_total: workiz_job.data.paid_total,
  };
}