import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TechnicianWorkiz {
  @Field(() => String)
  id: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  created: string;
  @Field(() => String)
  role: string;
  @Field(() => Boolean)
  fieldTech: boolean;
  @Field(() => String)
  email: string;
  @Field(() => [String])
  serviceAreas: string[];
  @Field(() => [String])
  skills: string[];
  @Field(() => Boolean)
  active: boolean;
}

@InputType()
export class CreateJobDto {
  @Field(() => String)
  JobDateTime: string;

  @Field(() => String)
  Phone: string;

  @Field(() => String)
  Email: string;

  @Field(() => String)
  FirstName: string;

  @Field(() => String)
  LastName: string;

  @Field(() => String)
  Address: string;

  @Field(() => String)
  City: string;

  @Field(() => String)
  State: string;

  @Field(() => String)
  Metro: string;

  @Field(() => String)
  PostalCode: string;

  @Field(() => String)
  JobType: string;

  @Field(() => String)
  JobNotes: string;
}

@ObjectType()
export class PaginatedJobDto {
  @Field(() => Boolean)
  has_more: boolean;

  @Field(() => [JobDto])
  items: JobDto[];
}

@ObjectType()
export class JobDto {
  @Field(() => String)
  UUID: string;

  @Field(() => Number)
  SerialId: number;

  @Field(() => String, { nullable: true })
  JobDateTime: string;

  @Field(() => String, { nullable: true })
  JobEndDateTime: string;

  @Field(() => String, { nullable: true })
  CreatedDate: string;

  @Field(() => String, { nullable: true })
  JobTotalPrice: string;

  @Field(() => String, { nullable: true })
  JobAmountDue: string;

  @Field(() => String, { nullable: true })
  SubTotal: string;

  @Field(() => Number)
  ClientId: number;

  @Field(() => String)
  Status: string;

  @Field(() => String)
  SubStatus: string;

  @Field(() => String, { nullable: true })
  PaymentDueDate: string;

  @Field(() => String)
  Phone: string;

  @Field(() => String)
  SecondPhone: string;

  @Field(() => String)
  PhoneExt: string;

  @Field(() => String)
  SecondPhoneExt: string;

  @Field(() => String)
  Email: string;

  @Field(() => String)
  Comments: string;

  @Field(() => String)
  FirstName: string;

  @Field(() => String)
  LastName: string;

  @Field(() => String)
  Company: string;

  @Field(() => String)
  Address: string;

  @Field(() => String)
  City: string;

  @Field(() => String)
  State: string;

  @Field(() => String)
  PostalCode: string;

  @Field(() => String)
  Country: string;

  @Field(() => String)
  Unit: string;

  @Field(() => String)
  Latitude: string;

  @Field(() => String)
  Longitude: string;

  @Field(() => String, { nullable: true })
  JobType: string;

  @Field(() => String, { nullable: true })
  JobNotes: string;

  @Field(() => String)
  JobSource: string;

  @Field(() => String)
  CreatedBy: string;

  @Field(() => String, { nullable: true })
  LastStatusUpdate: string;
}
