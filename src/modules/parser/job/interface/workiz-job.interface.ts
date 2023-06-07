export interface JobWorkiz {
  id: number;
  uuid: string;
  recurrence_id: string;
  estimate_id: number;
  tip_amount: string;
  metro_id: string;
  totalsArray: string[];
  is_lead: string;
  account_id: string;
  account_name: string;
  job_date: string;
  created_timestamp: string;
  created: string;
  job_date_formatted: string;
  job_hour: string;
  job_min: string;
  job_ampm: string;
  job_end_date: string;
  job_amount_due_date: string;
  job_date_end_formatted: string;
  job_hour_end: string;
  job_minute_end: string;
  job_ampm_end: string;
  status: string;
  updated: string;
  company_id: string;
  adgroup_id: string;
  job_serial: string;
  status_updated: string;
  seen: string;
  use_tech_special_rate: string;
  tech_special_rate: string;
  job_local_time: string;
  job_timezone: string;
  dispatch_id: string;
  tax_amount: string;
  tax_precent: string;
  taxable_amount: string;
  tax_on_off: string;
  job_total_price: string;
  job_amount_due: string;
  sub_total: string;
  external_special_rate: string;
  use_external_special_rate: string;
  client_id: string;
  sub_status_id: string;
  last_sent: string;
  last_progress: string;
  client_confirmed: string;
  leadLost: string;
  converted: string;
  is_stub: string;
  tax_ref_id: string;
  prop_id: string;
  is_parent_recurrence: string;
  recurrence_interval: string;
  recurrence_subsequence: string;
  has_calls: string;
  schedule_type: string;
  utc_updated: string;
  is_deleted: string;
  servicePlanId: string;
  job_id: string;
  primary_phone: string;
  secondary_phone: string;
  primary_ext: string;
  secondary_ext: string;
  job_type: string;
  email_address: string;
  comments: string;
  first_name: string;
  last_name: string;
  company_parts: string;
  parts: string;
  set_price: string;
  client_company_name: string;
  invoice_number: string;
  sub_name: string;
  sub_parent: string;
  city: string;
  state: string;
  zipcode: string;
  address: string;
  country: string;
  location_ob: string;
  location_pb: string;
  unit: string;
  location_key: string;
  location_name: string;
  billing_location_key: string;
  type_name: string;
  avg_duration: string;
  job_source: string;
  invoice_id: string;
  invoice_created: string;
  invoice_sent: string;
  InvoiceNotes: string;
  invoice_id_interval: string;
  user_created: string;
  client_first_name: string;
  client_last_name: string;
  client_email_address: string;
  client_phone_number: string;
  client_hash: string;
  payment_client_id: string;
  client_client_company_name: string;
  tech_list: string;
  tech_names: string;
  tech_emails: string[];
  tech_phone_numbers: string[];
  prop: Prop;
  custom: Custom;
  custom_fields: CustomFields;
  jobTypeInfo: JobTypeInfo;
  job_sub_total: string;
  created_utc: string;
  job_date_utc: string;
  job_end_date_utc: string;
  job_amount_due_date_utc: string;
  invoice_created_utc: string;
  files: File[];
  job_description: string;
  jobTitle: string;
  invoiceId: string;
  jobDate: string;
  jobEndDate: string;
  jobTime: string;
  jobEndTime: string;
  schedule: string;
  invoiceTimestamp: string;
  fullName: string;
  phoneNumber: string;
  secondaryPhone: string;
  cityStateZip: string;
  location_key_br: string;
  balanceDueOn: string;
  addressOnly: string;
  tags: string;
  client_tags: any[];
  job_items: JobItem[];
  payments: Payment[];
  discount: Discount;
  service_fee_totals?: ServiceFeeTotals;
  due_date_formatted: string;
  optional_total: string;
  paid_total: string;
  _id: string;
  techs: Tech2[];
}

export interface Prop {
  id: string;
  city: string;
  state: string;
  zipcode: string;
  address: string;
  country: string;
  location_ob: string;
  location_pb: string;
  unit: string;
  location_name: string;
  location_key: string;
}

export interface Custom {
  f1?: string;
  f2?: string;
  f5: string;
  f6: string;
  f7: string;
  f8: string;
  f17: string;
  f18: string;
  f19: string;
  f20?: string;
  f22?: any;
  f23?: any;
  f24?: any;
  f25?: any;
  f26?: any;
  f27?: string;
  f28?: string;
  f29?: string;
  f30?: string;
  f31?: string;
  f32?: string;
  f33?: string;
  f34?: string;
  f35?: string;
  f36?: string;
  f37?: string;
  f38?: string;
  f39?: string;
  f40?: string;
  f41?: string;
  f42?: string;
  f43?: string;
}

export interface F22 {
  imagesData: any[];
}

export interface F23 {
  imagesData: any[];
}

export interface F24 {
  imagesData: ImagesDaum[];
}

export interface ImagesDaum {
  id: any;
  url: string;
}

export interface F25 {
  imagesData: ImagesDaum2[];
}

export interface ImagesDaum2 {
  id: string;
  url: string;
}

export interface F26 {
  imagesData: ImagesDaum3[];
}

export interface ImagesDaum3 {
  id: string;
  url: string;
}

export interface CustomFields {
  coordinators_checklist: CoordinatorsChecklist;
  bonuses_: Bonuses;
  checklist_dispatch_: ChecklistDispatch;
  dispatchers: Dispatchers;
  other_contact: OtherContact;
  tech: Tech;
  car_key_type: CarKeyType;
}

export interface CoordinatorsChecklist {
  check_job_source: string;
  job_notes: string;
  job_payment_: string;
  job_items_: string;
  files_checks_c_t_item_picture_: string;
  job_end_date: string;
}

export interface Bonuses {
  jobs_dispatch: string;
  coordinators_id: string;
  job_coordinators_: string;
}

export interface ChecklistDispatch {
  full_name_1: string;
  full_address_1: string;
  full_job_description_1_: string;
  job_scheduled_1_: string;
  call_quality_5: string;
  extra_info: string;
  total_call_score: string;
}

export interface Dispatchers {
  payment_type: string;
  manager_note: string;
}

export interface OtherContact {
  additional_number: string;
}

export interface Tech {
  check_image_front: any;
  check_image_back: any;
  tech_parts_cost_: string;
  company_parts_cost_: string;
  parts_image_: any;
  after_job_image_: any;
  before_job_image: any;
}

export interface CarKeyType {
  car_make: string;
  car_model: string;
  car_year: string;
  key_type: string;
}

export interface JobTypeInfo {
  id: string;
  type_name: string;
  avg_duration: string;
}

export interface File {
  id: string;
  account_id: string;
  file_path: string;
  file_type: string;
  timestamp: string;
  job_id: string;
  last_sent: any;
  size: string;
  remote_server: string;
  invoice_id: string;
  file_name: string;
  is_hidden: string;
  description?: string;
  estimate_id: string;
  message_id: string;
  recipient_type: string;
  recipient_id: string;
  item_id: string;
  is_custom_field: string;
  is_deleted: string;
  last_job_id: any;
  proposal_template_id: string;
  category_identifier?: string;
}

export interface JobItem {
  job_id: string;
  container_id?: string;
  jobItemId: string;
  qty: string;
  sync: string;
  jobItemName: string;
  desc_long: string;
  total: string;
  cost: string;
  price: string;
  ammount?: string;
  taxable: string;
  item_id: string;
  custom_attributes: string;
  manage: string;
  p_id: string;
  id: string;
  item_name: string;
  type: string;
  sort_order: string;
  is_hidden: string;
  file_path?: string;
  file_id?: string;
}

export interface Payment {
  id: string;
  payment: string;
  amount: string;
  date: string;
  transaction_id?: string;
  confirmation: string;
  charged: string;
  job_id: string;
  tip_amount: string;
  transId?: string;
  status: string;
  amount_refunded?: string;
  lastfour?: string;
  gateway?: string;
}

export interface Discount {
  is_percentage: boolean;
  sum: number;
  amount: number;
  percentage: number;
  display_string: string;
}

export interface ServiceFeeTotals {
  total: number;
  display_string: string;
}

export interface Tech2 {
  id: string;
  isPrimary: string;
  technition: string;
  tech_id: string;
  email_address: string;
  cell_phone: string;
  user_address?: string;
  extra_phones?: string;
  user_notes?: string;
  color_code: string;
}
