export type Root = IJobList[];

export interface IJobList {
  job_id: string;
  agency: string;
  posting_type: string;
  number_of_positions: string;
  business_title: string;
  civil_service_title: string;
  title_classification: string;
  title_code_no: string;
  level: string;
  job_category: string;
  full_time_part_time_indicator?: string;
  career_level: string;
  salary_range_from: string;
  salary_range_to: string;
  salary_frequency: string;
  work_location: string;
  division_work_unit: string;
  job_description: string;
  minimum_qual_requirements?: string;
  preferred_skills?: string;
  additional_information?: string;
  to_apply?: string;
  hours_shift?: string;
  work_location_1?: string;
  residency_requirement: string;
  posting_date: string;
  posting_updated: string;
  process_date: string;
  post_until?: string;
}
