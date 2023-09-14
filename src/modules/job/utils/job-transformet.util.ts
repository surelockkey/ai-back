import { Job } from '../entity/job.entity';
import { workiz_tags } from '../const/workiz-tags.const';

export function workizJobToTableJob(
  workiz_job,
  account: 'main' | 'arizona' = 'main',
): Job {
  return {
    uuid: workiz_job?.data?.uuid,
    tip_amount: parseFloat(workiz_job?.data?.tip_amount || '0'),
    is_lead: !!parseInt(workiz_job?.data?.is_lead || '0'),
    scheduled_start: workiz_job?.data?.job_date,
    created_timestamp: workiz_job?.data?.created_timestamp,
    created_date: workiz_job?.data?.created,
    job_date_formatted_start: workiz_job?.data?.job_date_formatted, // delete for gpt
    job_hour_start: workiz_job?.data?.job_hour, // delete for gpt
    job_min_start: workiz_job?.data?.job_min, // delete for gpt
    job_ampm_start: workiz_job?.data?.job_ampm.toLowerCase(), // delete for gpt
    job_end_date: workiz_job?.data?.job_end_date,
    job_amount_due_date: workiz_job?.data?.job_amount_due_date,
    job_date_end_formatted: workiz_job?.data?.job_date_end_formatted, // delete for gpt
    job_hour_end: workiz_job?.data?.job_hour_end, // delete for gpt
    job_minute_end: workiz_job?.data?.job_minute_end, // delete for gpt
    job_ampm_end: workiz_job?.data?.job_ampm_end.toLowerCase(), // delete for gpt
    status: workiz_job?.data?.status,
    sub_status:
      workiz_job?.data?.sub_name === ''
        ? 'n/a'
        : workiz_job?.data?.sub_name.toLowerCase(),
    job_source:
      workiz_job?.data?.job_source === ''
        ? 'n/a'
        : workiz_job?.data?.job_source.toLowerCase(),
    status_updated: workiz_job?.data?.status_updated,
    use_tech_special_rate:
      workiz_job?.data?.use_tech_special_rate === ''
        ? 'n/a'
        : workiz_job?.data?.use_tech_special_rate,
    tech_special_rate: workiz_job?.data?.tech_special_rate || '0',
    tax_amount: parseFloat(workiz_job?.data?.tax_amount || '0'),
    tax_precent: parseFloat(workiz_job?.data?.tax_precent || '0'),
    taxable_amount: parseFloat(workiz_job?.data?.taxable_amount || '0'),
    tax_on_off: workiz_job?.data?.tax_precent ? true : false,
    job_total_price: parseFloat(workiz_job?.data?.job_total_price || '0'),
    job_amount_due: parseFloat(workiz_job?.data?.job_amount_due || '0'),
    items_total: parseFloat(workiz_job?.data?.sub_total || '0'),
    client_id: workiz_job?.data?.client_id,
    has_calls: !!parseInt(workiz_job?.data?.has_calls || '0'),
    primary_phone:
      workiz_job?.data?.primary_phone === ''
        ? 'n/a'
        : workiz_job?.data?.primary_phone,
    secondary_phone:
      workiz_job?.data?.secondary_phone === ''
        ? 'n/a'
        : workiz_job?.data?.secondary_phone,
    email_address:
      workiz_job?.data?.email_address === ''
        ? 'n/a'
        : workiz_job?.data?.email_address,
    company_parts: parseFloat(workiz_job?.data?.company_parts || '0'),
    tech_parts: parseFloat(workiz_job?.data?.parts || '0'),
    client_company_name:
      workiz_job?.data?.client_company_name === ''
        ? 'n/a'
        : workiz_job?.data?.client_company_name.toLowerCase(),
    invoice_number:
      workiz_job?.data?.invoice_number === ''
        ? 'n/a'
        : workiz_job?.data?.invoice_number,
    city: workiz_job?.data?.city === '' ? 'n/a' : workiz_job?.data?.city,
    state: workiz_job?.data?.state === '' ? 'n/a' : workiz_job?.data?.state,
    zipcode:
      workiz_job?.data?.zipcode === '' ? 'n/a' : workiz_job?.data?.zipcode,
    address:
      workiz_job?.data?.address === '' ? 'n/a' : workiz_job?.data?.address,
    location_ob:
      workiz_job?.data?.location_ob === ''
        ? 'n/a'
        : workiz_job?.data?.location_ob, // delete for gpt
    location_pb:
      workiz_job?.data?.location_pb === ''
        ? 'n/a'
        : workiz_job?.data?.location_pb, // delete for gpt
    full_address:
      workiz_job?.data?.location_key === ''
        ? 'n/a'
        : workiz_job?.data?.location_key,
    invoice_created: !!parseInt(workiz_job?.data?.invoice_created || '0'),
    invoice_sent: !!parseInt(workiz_job?.data?.invoice_sent || '0'),
    user_created:
      workiz_job?.data?.user_created === ''
        ? 'n/a'
        : workiz_job?.data?.user_created.toLowerCase(),
    client_first_name:
      workiz_job?.data?.client_first_name === ''
        ? 'n/a'
        : workiz_job?.data?.client_first_name,
    client_last_name:
      workiz_job?.data?.client_last_name === ''
        ? 'n/a'
        : workiz_job?.data?.client_last_name,
    tech_name:
      workiz_job?.data?.tech_names === ''
        ? 'n/a'
        : workiz_job?.data?.tech_names,
    tech_phone_numbers: workiz_job?.data?.tech_phone_numbers || ['n/a'],
    extra_info:
      workiz_job?.data?.custom_fields?.bonuses_?.jobs === ''
        ? 'n/a'
        : workiz_job?.data?.custom_fields?.bonuses_?.jobs,
    dispatch_bonus_type:
      workiz_job?.data?.custom?.f2 === ''
        ? 'n/a'
        : workiz_job?.data?.custom?.f2,
    dispatch_bonus_number:
      workiz_job?.data?.custom?.f3 === ''
        ? 'n/a'
        : workiz_job?.data?.custom?.f3,
    job_type:
      workiz_job?.data?.jobTypeInfo?.type_name === ''
        ? 'n/a'
        : workiz_job?.data?.jobTypeInfo?.type_name.toLowerCase(),
    created_utc: workiz_job?.data?.created_utc,
    invoice_created_utc:
      workiz_job?.data?.invoice_created_utc === ''
        ? 'n/a'
        : workiz_job?.data?.invoice_created_utc,
    tags:
      workiz_job?.data?.tags === ''
        ? 'n/a'
        : workiz_job?.data?.tags
            .split(',')
            .map((tag_id) => {
              return workiz_tags[tag_id].name;
            })
            .join(', '),
    paid_total: parseFloat(workiz_job?.data?.paid_total || '0'),
    job_serial: workiz_job?.data?.job_serial,
    account: account,
  };
}

//  "custom": {
// "f2": "Saved Job (1)", => dispatch_bonus_type
