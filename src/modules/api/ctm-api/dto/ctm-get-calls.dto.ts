import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";

@InputType()
export class CtmGetCallsOptionDto {
    @Field(() => String, { description: 'search string to look for messages with specific callerid, caller_number, called_number, source name, etc.', nullable: true })
    filter: string;

    @Field(() => Int, { description: 'the page number' })
    page: number;

    @Field(() => Int, { description: 'the number of items per page, defaults to 10', nullable: true })
    per_page: number;

    @Field(() => String, { description: 'the start date for the search (YYYY-MM-DD)', nullable: true })
    start_date: string;

    @Field(() => String, { description: 'the end date for the search (YYYY-MM-DD)', nullable: true })
    end_date: string;

}

@ObjectType()
export class CtmGetCallsDto {
    @Field(() => [CtmCall])
    calls: CtmCall[];

    @Field(() => Int)
    page: number;

    @Field(() => Int)
    total_entries: number;

    @Field(() => Int)
    total_pages: number;

    @Field(() => Int)
    per_page: number;
}

@ObjectType()
export class CtmCall {
    @Field(() => Int)
    id: number;

    @Field(() => String)
    sid: string;

    @Field(() => Int)
    account_id: number;

    @Field(() => String)
    name: string;

    @Field(() => String)
    cnam: string;

    @Field(() => String)
    source: string;

    @Field(() => Int)
    source_id: number;

    @Field(() => String)
    source_sid: string;

    @Field(() => Int)
    tgid: number;

    @Field(() => Int)
    duration: number;

    @Field(() => String)
    direction: string;

    @Field(() => Int)
    talk_time: number;

    @Field(() => Int)
    ring_time: number;

    @Field(() => Int)
    hold_time: number;

    @Field(() => Int)
    wait_time: number;

    @Field(() => String)
    city: string;

    @Field(() => String)
    state: string;

    @Field(() => String)
    country: string;

    @Field(() => String)
    postal_code: string;

    @Field(() => String)
    called_at: string;

    @Field(() => Int)
    unix_time: number;

    @Field(() => String)
    tracking_number: string;

    @Field(() => String)
    tracking_label: string;

    @Field(() => String)
    dial_status: string;

    @Field(() => Int)
    billed_amount: number;

    @Field(() => String)
    billed_at: string;

    @Field(() => String)
    tracking_number_format: string;

    @Field(() => String)
    caller_number_format: string;

    @Field(() => String)
    call_status: string;

    @Field(() => String)
    status: string;

    @Field(() => String)
    day: string;

    @Field(() => String)
    month: string;

    @Field(() => String)
    hour: string;

    @Field(() => String)
    notes: string;
}