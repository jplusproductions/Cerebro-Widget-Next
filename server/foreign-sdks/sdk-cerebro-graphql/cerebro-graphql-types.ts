export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: string; output: string; }
  float8: { input: number; output: number; }
  numeric: { input: number; output: number; }
  smallint: { input: any; output: any; }
  time: { input: string; output: string; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "biodata" */
export type Biodata = {
  class_standing?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['timestamptz']['output'];
  draft_eligible_year?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  event?: Maybe<Event>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  height_inches?: Maybe<Scalars['String']['output']>;
  high_school?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  modified_date: Scalars['timestamptz']['output'];
  /** An object relationship */
  player?: Maybe<Player>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  pre_draft_team?: Maybe<Scalars['String']['output']>;
  reported_date?: Maybe<Scalars['timestamptz']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  weight_lb?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "biodata" */
export type Biodata_Aggregate = {
  aggregate?: Maybe<Biodata_Aggregate_Fields>;
  nodes: Array<Biodata>;
};

export type Biodata_Aggregate_Bool_Exp = {
  count?: InputMaybe<Biodata_Aggregate_Bool_Exp_Count>;
};

export type Biodata_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Biodata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Biodata_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "biodata" */
export type Biodata_Aggregate_Fields = {
  avg?: Maybe<Biodata_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Biodata_Max_Fields>;
  min?: Maybe<Biodata_Min_Fields>;
  stddev?: Maybe<Biodata_Stddev_Fields>;
  stddev_pop?: Maybe<Biodata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Biodata_Stddev_Samp_Fields>;
  sum?: Maybe<Biodata_Sum_Fields>;
  var_pop?: Maybe<Biodata_Var_Pop_Fields>;
  var_samp?: Maybe<Biodata_Var_Samp_Fields>;
  variance?: Maybe<Biodata_Variance_Fields>;
};


/** aggregate fields of "biodata" */
export type Biodata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Biodata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "biodata" */
export type Biodata_Aggregate_Order_By = {
  avg?: InputMaybe<Biodata_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Biodata_Max_Order_By>;
  min?: InputMaybe<Biodata_Min_Order_By>;
  stddev?: InputMaybe<Biodata_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Biodata_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Biodata_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Biodata_Sum_Order_By>;
  var_pop?: InputMaybe<Biodata_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Biodata_Var_Samp_Order_By>;
  variance?: InputMaybe<Biodata_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Biodata_Avg_Fields = {
  draft_eligible_year?: Maybe<Scalars['Float']['output']>;
  weight_lb?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "biodata" */
export type Biodata_Avg_Order_By = {
  draft_eligible_year?: InputMaybe<Order_By>;
  weight_lb?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "biodata". All fields are combined with a logical 'AND'. */
export type Biodata_Bool_Exp = {
  _and?: InputMaybe<Array<Biodata_Bool_Exp>>;
  _not?: InputMaybe<Biodata_Bool_Exp>;
  _or?: InputMaybe<Array<Biodata_Bool_Exp>>;
  class_standing?: InputMaybe<String_Comparison_Exp>;
  created_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  draft_eligible_year?: InputMaybe<Int_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  height_inches?: InputMaybe<String_Comparison_Exp>;
  high_school?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  modified_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  player?: InputMaybe<Player_Bool_Exp>;
  player_id?: InputMaybe<Uuid_Comparison_Exp>;
  position?: InputMaybe<String_Comparison_Exp>;
  pre_draft_team?: InputMaybe<String_Comparison_Exp>;
  reported_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
  weight_lb?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Biodata_Max_Fields = {
  class_standing?: Maybe<Scalars['String']['output']>;
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  draft_eligible_year?: Maybe<Scalars['Int']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  height_inches?: Maybe<Scalars['String']['output']>;
  high_school?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  pre_draft_team?: Maybe<Scalars['String']['output']>;
  reported_date?: Maybe<Scalars['timestamptz']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  weight_lb?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "biodata" */
export type Biodata_Max_Order_By = {
  class_standing?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  draft_eligible_year?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  height_inches?: InputMaybe<Order_By>;
  high_school?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  pre_draft_team?: InputMaybe<Order_By>;
  reported_date?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  weight_lb?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Biodata_Min_Fields = {
  class_standing?: Maybe<Scalars['String']['output']>;
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  draft_eligible_year?: Maybe<Scalars['Int']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  height_inches?: Maybe<Scalars['String']['output']>;
  high_school?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  pre_draft_team?: Maybe<Scalars['String']['output']>;
  reported_date?: Maybe<Scalars['timestamptz']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  weight_lb?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "biodata" */
export type Biodata_Min_Order_By = {
  class_standing?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  draft_eligible_year?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  height_inches?: InputMaybe<Order_By>;
  high_school?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  pre_draft_team?: InputMaybe<Order_By>;
  reported_date?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  weight_lb?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "biodata". */
export type Biodata_Order_By = {
  class_standing?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  draft_eligible_year?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  event_id?: InputMaybe<Order_By>;
  height_inches?: InputMaybe<Order_By>;
  high_school?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  player?: InputMaybe<Player_Order_By>;
  player_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  pre_draft_team?: InputMaybe<Order_By>;
  reported_date?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  weight_lb?: InputMaybe<Order_By>;
};

/** select columns of table "biodata" */
export type Biodata_Select_Column =
  /** column name */
  | 'class_standing'
  /** column name */
  | 'created_date'
  /** column name */
  | 'draft_eligible_year'
  /** column name */
  | 'event_id'
  /** column name */
  | 'height_inches'
  /** column name */
  | 'high_school'
  /** column name */
  | 'id'
  /** column name */
  | 'modified_date'
  /** column name */
  | 'player_id'
  /** column name */
  | 'position'
  /** column name */
  | 'pre_draft_team'
  /** column name */
  | 'reported_date'
  /** column name */
  | 'team_id'
  /** column name */
  | 'weight_lb';

/** aggregate stddev on columns */
export type Biodata_Stddev_Fields = {
  draft_eligible_year?: Maybe<Scalars['Float']['output']>;
  weight_lb?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "biodata" */
export type Biodata_Stddev_Order_By = {
  draft_eligible_year?: InputMaybe<Order_By>;
  weight_lb?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Biodata_Stddev_Pop_Fields = {
  draft_eligible_year?: Maybe<Scalars['Float']['output']>;
  weight_lb?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "biodata" */
export type Biodata_Stddev_Pop_Order_By = {
  draft_eligible_year?: InputMaybe<Order_By>;
  weight_lb?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Biodata_Stddev_Samp_Fields = {
  draft_eligible_year?: Maybe<Scalars['Float']['output']>;
  weight_lb?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "biodata" */
export type Biodata_Stddev_Samp_Order_By = {
  draft_eligible_year?: InputMaybe<Order_By>;
  weight_lb?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "biodata" */
export type Biodata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Biodata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Biodata_Stream_Cursor_Value_Input = {
  class_standing?: InputMaybe<Scalars['String']['input']>;
  created_date?: InputMaybe<Scalars['timestamptz']['input']>;
  draft_eligible_year?: InputMaybe<Scalars['Int']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  height_inches?: InputMaybe<Scalars['String']['input']>;
  high_school?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  modified_date?: InputMaybe<Scalars['timestamptz']['input']>;
  player_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  pre_draft_team?: InputMaybe<Scalars['String']['input']>;
  reported_date?: InputMaybe<Scalars['timestamptz']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  weight_lb?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Biodata_Sum_Fields = {
  draft_eligible_year?: Maybe<Scalars['Int']['output']>;
  weight_lb?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "biodata" */
export type Biodata_Sum_Order_By = {
  draft_eligible_year?: InputMaybe<Order_By>;
  weight_lb?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Biodata_Var_Pop_Fields = {
  draft_eligible_year?: Maybe<Scalars['Float']['output']>;
  weight_lb?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "biodata" */
export type Biodata_Var_Pop_Order_By = {
  draft_eligible_year?: InputMaybe<Order_By>;
  weight_lb?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Biodata_Var_Samp_Fields = {
  draft_eligible_year?: Maybe<Scalars['Float']['output']>;
  weight_lb?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "biodata" */
export type Biodata_Var_Samp_Order_By = {
  draft_eligible_year?: InputMaybe<Order_By>;
  weight_lb?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Biodata_Variance_Fields = {
  draft_eligible_year?: Maybe<Scalars['Float']['output']>;
  weight_lb?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "biodata" */
export type Biodata_Variance_Order_By = {
  draft_eligible_year?: InputMaybe<Order_By>;
  weight_lb?: InputMaybe<Order_By>;
};

/** columns and relationships of "conference" */
export type Conference = {
  /** An array relationship */
  conference_ranks: Array<Conference_Rank>;
  created_date: Scalars['timestamptz']['output'];
  /** An array relationship */
  event_conference_teams: Array<Event_Conference_Team>;
  id: Scalars['uuid']['output'];
  league_id: Scalars['uuid']['output'];
  modified_date: Scalars['timestamptz']['output'];
  name: Scalars['String']['output'];
};


/** columns and relationships of "conference" */
export type ConferenceConference_RanksArgs = {
  distinct_on?: InputMaybe<Array<Conference_Rank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conference_Rank_Order_By>>;
  where?: InputMaybe<Conference_Rank_Bool_Exp>;
};


/** columns and relationships of "conference" */
export type ConferenceEvent_Conference_TeamsArgs = {
  distinct_on?: InputMaybe<Array<Event_Conference_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Conference_Team_Order_By>>;
  where?: InputMaybe<Event_Conference_Team_Bool_Exp>;
};

/** aggregated selection of "conference" */
export type Conference_Aggregate = {
  aggregate?: Maybe<Conference_Aggregate_Fields>;
  nodes: Array<Conference>;
};

/** aggregate fields of "conference" */
export type Conference_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Conference_Max_Fields>;
  min?: Maybe<Conference_Min_Fields>;
};


/** aggregate fields of "conference" */
export type Conference_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Conference_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "conference". All fields are combined with a logical 'AND'. */
export type Conference_Bool_Exp = {
  _and?: InputMaybe<Array<Conference_Bool_Exp>>;
  _not?: InputMaybe<Conference_Bool_Exp>;
  _or?: InputMaybe<Array<Conference_Bool_Exp>>;
  conference_ranks?: InputMaybe<Conference_Rank_Bool_Exp>;
  created_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  event_conference_teams?: InputMaybe<Event_Conference_Team_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  league_id?: InputMaybe<Uuid_Comparison_Exp>;
  modified_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Conference_Max_Fields = {
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  league_id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Conference_Min_Fields = {
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  league_id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "conference". */
export type Conference_Order_By = {
  conference_ranks_aggregate?: InputMaybe<Conference_Rank_Aggregate_Order_By>;
  created_date?: InputMaybe<Order_By>;
  event_conference_teams_aggregate?: InputMaybe<Event_Conference_Team_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  league_id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** columns and relationships of "conference_rank" */
export type Conference_Rank = {
  /** An object relationship */
  conference: Conference;
  conference_id: Scalars['uuid']['output'];
  created_date: Scalars['timestamptz']['output'];
  /** An object relationship */
  event: Event;
  event_id: Scalars['uuid']['output'];
  modified_date: Scalars['timestamptz']['output'];
  ranking: Scalars['Int']['output'];
};

/** order by aggregate values of table "conference_rank" */
export type Conference_Rank_Aggregate_Order_By = {
  avg?: InputMaybe<Conference_Rank_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Conference_Rank_Max_Order_By>;
  min?: InputMaybe<Conference_Rank_Min_Order_By>;
  stddev?: InputMaybe<Conference_Rank_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Conference_Rank_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Conference_Rank_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Conference_Rank_Sum_Order_By>;
  var_pop?: InputMaybe<Conference_Rank_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Conference_Rank_Var_Samp_Order_By>;
  variance?: InputMaybe<Conference_Rank_Variance_Order_By>;
};

/** order by avg() on columns of table "conference_rank" */
export type Conference_Rank_Avg_Order_By = {
  ranking?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "conference_rank". All fields are combined with a logical 'AND'. */
export type Conference_Rank_Bool_Exp = {
  _and?: InputMaybe<Array<Conference_Rank_Bool_Exp>>;
  _not?: InputMaybe<Conference_Rank_Bool_Exp>;
  _or?: InputMaybe<Array<Conference_Rank_Bool_Exp>>;
  conference?: InputMaybe<Conference_Bool_Exp>;
  conference_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  modified_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  ranking?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "conference_rank" */
export type Conference_Rank_Max_Order_By = {
  conference_id?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "conference_rank" */
export type Conference_Rank_Min_Order_By = {
  conference_id?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "conference_rank". */
export type Conference_Rank_Order_By = {
  conference?: InputMaybe<Conference_Order_By>;
  conference_id?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  event_id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
};

/** select columns of table "conference_rank" */
export type Conference_Rank_Select_Column =
  /** column name */
  | 'conference_id'
  /** column name */
  | 'created_date'
  /** column name */
  | 'event_id'
  /** column name */
  | 'modified_date'
  /** column name */
  | 'ranking';

/** order by stddev() on columns of table "conference_rank" */
export type Conference_Rank_Stddev_Order_By = {
  ranking?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "conference_rank" */
export type Conference_Rank_Stddev_Pop_Order_By = {
  ranking?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "conference_rank" */
export type Conference_Rank_Stddev_Samp_Order_By = {
  ranking?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "conference_rank" */
export type Conference_Rank_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Conference_Rank_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Conference_Rank_Stream_Cursor_Value_Input = {
  conference_id?: InputMaybe<Scalars['uuid']['input']>;
  created_date?: InputMaybe<Scalars['timestamptz']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  modified_date?: InputMaybe<Scalars['timestamptz']['input']>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "conference_rank" */
export type Conference_Rank_Sum_Order_By = {
  ranking?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "conference_rank" */
export type Conference_Rank_Var_Pop_Order_By = {
  ranking?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "conference_rank" */
export type Conference_Rank_Var_Samp_Order_By = {
  ranking?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "conference_rank" */
export type Conference_Rank_Variance_Order_By = {
  ranking?: InputMaybe<Order_By>;
};

/** select columns of table "conference" */
export type Conference_Select_Column =
  /** column name */
  | 'created_date'
  /** column name */
  | 'id'
  /** column name */
  | 'league_id'
  /** column name */
  | 'modified_date'
  /** column name */
  | 'name';

/** Streaming cursor of the table "conference" */
export type Conference_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Conference_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Conference_Stream_Cursor_Value_Input = {
  created_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  league_id?: InputMaybe<Scalars['uuid']['input']>;
  modified_date?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "division" */
export type Division = {
  conference_id: Scalars['uuid']['output'];
  created_date: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  modified_date: Scalars['timestamptz']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "division" */
export type Division_Aggregate = {
  aggregate?: Maybe<Division_Aggregate_Fields>;
  nodes: Array<Division>;
};

/** aggregate fields of "division" */
export type Division_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Division_Max_Fields>;
  min?: Maybe<Division_Min_Fields>;
};


/** aggregate fields of "division" */
export type Division_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Division_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "division". All fields are combined with a logical 'AND'. */
export type Division_Bool_Exp = {
  _and?: InputMaybe<Array<Division_Bool_Exp>>;
  _not?: InputMaybe<Division_Bool_Exp>;
  _or?: InputMaybe<Array<Division_Bool_Exp>>;
  conference_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  modified_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Division_Max_Fields = {
  conference_id?: Maybe<Scalars['uuid']['output']>;
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Division_Min_Fields = {
  conference_id?: Maybe<Scalars['uuid']['output']>;
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "division". */
export type Division_Order_By = {
  conference_id?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** select columns of table "division" */
export type Division_Select_Column =
  /** column name */
  | 'conference_id'
  /** column name */
  | 'created_date'
  /** column name */
  | 'id'
  /** column name */
  | 'modified_date'
  /** column name */
  | 'name';

/** Streaming cursor of the table "division" */
export type Division_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Division_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Division_Stream_Cursor_Value_Input = {
  conference_id?: InputMaybe<Scalars['uuid']['input']>;
  created_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  modified_date?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "event" */
export type Event = {
  /** An array relationship */
  biodata: Array<Biodata>;
  /** An aggregate relationship */
  biodata_aggregate: Biodata_Aggregate;
  conference_id?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  conference_ranks: Array<Conference_Rank>;
  created_date: Scalars['timestamptz']['output'];
  division_id?: Maybe<Scalars['uuid']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  /** An array relationship */
  event_conference_teams: Array<Event_Conference_Team>;
  /** An array relationship */
  game: Array<Game>;
  /** An aggregate relationship */
  game_aggregate: Game_Aggregate;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  league?: Maybe<League>;
  league_id?: Maybe<Scalars['uuid']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  modified_date: Scalars['timestamptz']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  player_event: Array<Player_Event>;
  /** An aggregate relationship */
  player_event_aggregate: Player_Event_Aggregate;
  region?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  /** An array relationship */
  team_event: Array<Team_Event>;
  /** An aggregate relationship */
  team_event_aggregate: Team_Event_Aggregate;
};


/** columns and relationships of "event" */
export type EventBiodataArgs = {
  distinct_on?: InputMaybe<Array<Biodata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Biodata_Order_By>>;
  where?: InputMaybe<Biodata_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventBiodata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Biodata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Biodata_Order_By>>;
  where?: InputMaybe<Biodata_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventConference_RanksArgs = {
  distinct_on?: InputMaybe<Array<Conference_Rank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conference_Rank_Order_By>>;
  where?: InputMaybe<Conference_Rank_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventEvent_Conference_TeamsArgs = {
  distinct_on?: InputMaybe<Array<Event_Conference_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Conference_Team_Order_By>>;
  where?: InputMaybe<Event_Conference_Team_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventGameArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventGame_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventPlayer_EventArgs = {
  distinct_on?: InputMaybe<Array<Player_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Event_Order_By>>;
  where?: InputMaybe<Player_Event_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventPlayer_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Event_Order_By>>;
  where?: InputMaybe<Player_Event_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventTeam_EventArgs = {
  distinct_on?: InputMaybe<Array<Team_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Event_Order_By>>;
  where?: InputMaybe<Team_Event_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventTeam_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Event_Order_By>>;
  where?: InputMaybe<Team_Event_Bool_Exp>;
};

/** aggregated selection of "event" */
export type Event_Aggregate = {
  aggregate?: Maybe<Event_Aggregate_Fields>;
  nodes: Array<Event>;
};

export type Event_Aggregate_Bool_Exp = {
  count?: InputMaybe<Event_Aggregate_Bool_Exp_Count>;
};

export type Event_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Event_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "event" */
export type Event_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Event_Max_Fields>;
  min?: Maybe<Event_Min_Fields>;
};


/** aggregate fields of "event" */
export type Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "event" */
export type Event_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Event_Max_Order_By>;
  min?: InputMaybe<Event_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "event". All fields are combined with a logical 'AND'. */
export type Event_Bool_Exp = {
  _and?: InputMaybe<Array<Event_Bool_Exp>>;
  _not?: InputMaybe<Event_Bool_Exp>;
  _or?: InputMaybe<Array<Event_Bool_Exp>>;
  biodata?: InputMaybe<Biodata_Bool_Exp>;
  biodata_aggregate?: InputMaybe<Biodata_Aggregate_Bool_Exp>;
  conference_id?: InputMaybe<Uuid_Comparison_Exp>;
  conference_ranks?: InputMaybe<Conference_Rank_Bool_Exp>;
  created_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  division_id?: InputMaybe<Uuid_Comparison_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  event_conference_teams?: InputMaybe<Event_Conference_Team_Bool_Exp>;
  game?: InputMaybe<Game_Bool_Exp>;
  game_aggregate?: InputMaybe<Game_Aggregate_Bool_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  league?: InputMaybe<League_Bool_Exp>;
  league_id?: InputMaybe<Uuid_Comparison_Exp>;
  level?: InputMaybe<String_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  modified_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  player_event?: InputMaybe<Player_Event_Bool_Exp>;
  player_event_aggregate?: InputMaybe<Player_Event_Aggregate_Bool_Exp>;
  region?: InputMaybe<String_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  team_event?: InputMaybe<Team_Event_Bool_Exp>;
  team_event_aggregate?: InputMaybe<Team_Event_Aggregate_Bool_Exp>;
};

/** columns and relationships of "event_conference_team" */
export type Event_Conference_Team = {
  /** An object relationship */
  conference: Conference;
  conference_id: Scalars['uuid']['output'];
  created_date: Scalars['timestamptz']['output'];
  /** An object relationship */
  event: Event;
  event_id: Scalars['uuid']['output'];
  modified_date: Scalars['timestamptz']['output'];
  /** An object relationship */
  team: Team;
  team_id: Scalars['uuid']['output'];
};

/** order by aggregate values of table "event_conference_team" */
export type Event_Conference_Team_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Event_Conference_Team_Max_Order_By>;
  min?: InputMaybe<Event_Conference_Team_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "event_conference_team". All fields are combined with a logical 'AND'. */
export type Event_Conference_Team_Bool_Exp = {
  _and?: InputMaybe<Array<Event_Conference_Team_Bool_Exp>>;
  _not?: InputMaybe<Event_Conference_Team_Bool_Exp>;
  _or?: InputMaybe<Array<Event_Conference_Team_Bool_Exp>>;
  conference?: InputMaybe<Conference_Bool_Exp>;
  conference_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  modified_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  team?: InputMaybe<Team_Bool_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "event_conference_team" */
export type Event_Conference_Team_Max_Order_By = {
  conference_id?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "event_conference_team" */
export type Event_Conference_Team_Min_Order_By = {
  conference_id?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "event_conference_team". */
export type Event_Conference_Team_Order_By = {
  conference?: InputMaybe<Conference_Order_By>;
  conference_id?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  event_id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  team?: InputMaybe<Team_Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** select columns of table "event_conference_team" */
export type Event_Conference_Team_Select_Column =
  /** column name */
  | 'conference_id'
  /** column name */
  | 'created_date'
  /** column name */
  | 'event_id'
  /** column name */
  | 'modified_date'
  /** column name */
  | 'team_id';

/** Streaming cursor of the table "event_conference_team" */
export type Event_Conference_Team_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Event_Conference_Team_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Event_Conference_Team_Stream_Cursor_Value_Input = {
  conference_id?: InputMaybe<Scalars['uuid']['input']>;
  created_date?: InputMaybe<Scalars['timestamptz']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  modified_date?: InputMaybe<Scalars['timestamptz']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Event_Max_Fields = {
  conference_id?: Maybe<Scalars['uuid']['output']>;
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  division_id?: Maybe<Scalars['uuid']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  league_id?: Maybe<Scalars['uuid']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
};

/** order by max() on columns of table "event" */
export type Event_Max_Order_By = {
  conference_id?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  division_id?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league_id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Event_Min_Fields = {
  conference_id?: Maybe<Scalars['uuid']['output']>;
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  division_id?: Maybe<Scalars['uuid']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  league_id?: Maybe<Scalars['uuid']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
};

/** order by min() on columns of table "event" */
export type Event_Min_Order_By = {
  conference_id?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  division_id?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league_id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "event". */
export type Event_Order_By = {
  biodata_aggregate?: InputMaybe<Biodata_Aggregate_Order_By>;
  conference_id?: InputMaybe<Order_By>;
  conference_ranks_aggregate?: InputMaybe<Conference_Rank_Aggregate_Order_By>;
  created_date?: InputMaybe<Order_By>;
  division_id?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  event_conference_teams_aggregate?: InputMaybe<Event_Conference_Team_Aggregate_Order_By>;
  game_aggregate?: InputMaybe<Game_Aggregate_Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league?: InputMaybe<League_Order_By>;
  league_id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  player_event_aggregate?: InputMaybe<Player_Event_Aggregate_Order_By>;
  region?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  team_event_aggregate?: InputMaybe<Team_Event_Aggregate_Order_By>;
};

/** select columns of table "event" */
export type Event_Select_Column =
  /** column name */
  | 'conference_id'
  /** column name */
  | 'created_date'
  /** column name */
  | 'division_id'
  /** column name */
  | 'end_date'
  /** column name */
  | 'gender'
  /** column name */
  | 'id'
  /** column name */
  | 'league_id'
  /** column name */
  | 'level'
  /** column name */
  | 'location'
  /** column name */
  | 'modified_date'
  /** column name */
  | 'name'
  /** column name */
  | 'region'
  /** column name */
  | 'start_date';

/** Streaming cursor of the table "event" */
export type Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Event_Stream_Cursor_Value_Input = {
  conference_id?: InputMaybe<Scalars['uuid']['input']>;
  created_date?: InputMaybe<Scalars['timestamptz']['input']>;
  division_id?: InputMaybe<Scalars['uuid']['input']>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  league_id?: InputMaybe<Scalars['uuid']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  modified_date?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** columns and relationships of "game" */
export type Game = {
  created_date: Scalars['timestamptz']['output'];
  /** An object relationship */
  event: Event;
  event_id: Scalars['uuid']['output'];
  full_boxscore?: Maybe<Scalars['String']['output']>;
  game_date: Scalars['date']['output'];
  game_video_link?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  modified_date: Scalars['timestamptz']['output'];
  /** An array relationship */
  player_game: Array<Player_Game>;
  /** An aggregate relationship */
  player_game_aggregate: Player_Game_Aggregate;
  playoff?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['Boolean']['output']>;
  start_time?: Maybe<Scalars['time']['output']>;
  /** An array relationship */
  team_game: Array<Team_Game>;
  /** An aggregate relationship */
  team_game_aggregate: Team_Game_Aggregate;
  team_one_id: Scalars['uuid']['output'];
  team_one_score: Scalars['Int']['output'];
  team_two_id: Scalars['uuid']['output'];
  team_two_score: Scalars['Int']['output'];
  venue_id?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "game" */
export type GamePlayer_GameArgs = {
  distinct_on?: InputMaybe<Array<Player_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Game_Order_By>>;
  where?: InputMaybe<Player_Game_Bool_Exp>;
};


/** columns and relationships of "game" */
export type GamePlayer_Game_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Game_Order_By>>;
  where?: InputMaybe<Player_Game_Bool_Exp>;
};


/** columns and relationships of "game" */
export type GameTeam_GameArgs = {
  distinct_on?: InputMaybe<Array<Team_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Game_Order_By>>;
  where?: InputMaybe<Team_Game_Bool_Exp>;
};


/** columns and relationships of "game" */
export type GameTeam_Game_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Game_Order_By>>;
  where?: InputMaybe<Team_Game_Bool_Exp>;
};

/** aggregated selection of "game" */
export type Game_Aggregate = {
  aggregate?: Maybe<Game_Aggregate_Fields>;
  nodes: Array<Game>;
};

export type Game_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Game_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Game_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Game_Aggregate_Bool_Exp_Count>;
};

export type Game_Aggregate_Bool_Exp_Bool_And = {
  arguments: Game_Select_Column_Game_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Game_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Game_Select_Column_Game_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Game_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Game_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "game" */
export type Game_Aggregate_Fields = {
  avg?: Maybe<Game_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Game_Max_Fields>;
  min?: Maybe<Game_Min_Fields>;
  stddev?: Maybe<Game_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Sum_Fields>;
  var_pop?: Maybe<Game_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Var_Samp_Fields>;
  variance?: Maybe<Game_Variance_Fields>;
};


/** aggregate fields of "game" */
export type Game_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Game_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "game" */
export type Game_Aggregate_Order_By = {
  avg?: InputMaybe<Game_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Game_Max_Order_By>;
  min?: InputMaybe<Game_Min_Order_By>;
  stddev?: InputMaybe<Game_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Game_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Game_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Game_Sum_Order_By>;
  var_pop?: InputMaybe<Game_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Game_Var_Samp_Order_By>;
  variance?: InputMaybe<Game_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Game_Avg_Fields = {
  team_one_score?: Maybe<Scalars['Float']['output']>;
  team_two_score?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "game" */
export type Game_Avg_Order_By = {
  team_one_score?: InputMaybe<Order_By>;
  team_two_score?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game". All fields are combined with a logical 'AND'. */
export type Game_Bool_Exp = {
  _and?: InputMaybe<Array<Game_Bool_Exp>>;
  _not?: InputMaybe<Game_Bool_Exp>;
  _or?: InputMaybe<Array<Game_Bool_Exp>>;
  created_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  full_boxscore?: InputMaybe<String_Comparison_Exp>;
  game_date?: InputMaybe<Date_Comparison_Exp>;
  game_video_link?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  modified_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  player_game?: InputMaybe<Player_Game_Bool_Exp>;
  player_game_aggregate?: InputMaybe<Player_Game_Aggregate_Bool_Exp>;
  playoff?: InputMaybe<String_Comparison_Exp>;
  result?: InputMaybe<Boolean_Comparison_Exp>;
  start_time?: InputMaybe<Time_Comparison_Exp>;
  team_game?: InputMaybe<Team_Game_Bool_Exp>;
  team_game_aggregate?: InputMaybe<Team_Game_Aggregate_Bool_Exp>;
  team_one_id?: InputMaybe<Uuid_Comparison_Exp>;
  team_one_score?: InputMaybe<Int_Comparison_Exp>;
  team_two_id?: InputMaybe<Uuid_Comparison_Exp>;
  team_two_score?: InputMaybe<Int_Comparison_Exp>;
  venue_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Game_Max_Fields = {
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  full_boxscore?: Maybe<Scalars['String']['output']>;
  game_date?: Maybe<Scalars['date']['output']>;
  game_video_link?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  playoff?: Maybe<Scalars['String']['output']>;
  team_one_id?: Maybe<Scalars['uuid']['output']>;
  team_one_score?: Maybe<Scalars['Int']['output']>;
  team_two_id?: Maybe<Scalars['uuid']['output']>;
  team_two_score?: Maybe<Scalars['Int']['output']>;
  venue_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "game" */
export type Game_Max_Order_By = {
  created_date?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  full_boxscore?: InputMaybe<Order_By>;
  game_date?: InputMaybe<Order_By>;
  game_video_link?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  playoff?: InputMaybe<Order_By>;
  team_one_id?: InputMaybe<Order_By>;
  team_one_score?: InputMaybe<Order_By>;
  team_two_id?: InputMaybe<Order_By>;
  team_two_score?: InputMaybe<Order_By>;
  venue_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Min_Fields = {
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  full_boxscore?: Maybe<Scalars['String']['output']>;
  game_date?: Maybe<Scalars['date']['output']>;
  game_video_link?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  playoff?: Maybe<Scalars['String']['output']>;
  team_one_id?: Maybe<Scalars['uuid']['output']>;
  team_one_score?: Maybe<Scalars['Int']['output']>;
  team_two_id?: Maybe<Scalars['uuid']['output']>;
  team_two_score?: Maybe<Scalars['Int']['output']>;
  venue_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "game" */
export type Game_Min_Order_By = {
  created_date?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  full_boxscore?: InputMaybe<Order_By>;
  game_date?: InputMaybe<Order_By>;
  game_video_link?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  playoff?: InputMaybe<Order_By>;
  team_one_id?: InputMaybe<Order_By>;
  team_one_score?: InputMaybe<Order_By>;
  team_two_id?: InputMaybe<Order_By>;
  team_two_score?: InputMaybe<Order_By>;
  venue_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "game". */
export type Game_Order_By = {
  created_date?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  event_id?: InputMaybe<Order_By>;
  full_boxscore?: InputMaybe<Order_By>;
  game_date?: InputMaybe<Order_By>;
  game_video_link?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  player_game_aggregate?: InputMaybe<Player_Game_Aggregate_Order_By>;
  playoff?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  team_game_aggregate?: InputMaybe<Team_Game_Aggregate_Order_By>;
  team_one_id?: InputMaybe<Order_By>;
  team_one_score?: InputMaybe<Order_By>;
  team_two_id?: InputMaybe<Order_By>;
  team_two_score?: InputMaybe<Order_By>;
  venue_id?: InputMaybe<Order_By>;
};

/** select columns of table "game" */
export type Game_Select_Column =
  /** column name */
  | 'created_date'
  /** column name */
  | 'event_id'
  /** column name */
  | 'full_boxscore'
  /** column name */
  | 'game_date'
  /** column name */
  | 'game_video_link'
  /** column name */
  | 'id'
  /** column name */
  | 'modified_date'
  /** column name */
  | 'playoff'
  /** column name */
  | 'result'
  /** column name */
  | 'start_time'
  /** column name */
  | 'team_one_id'
  /** column name */
  | 'team_one_score'
  /** column name */
  | 'team_two_id'
  /** column name */
  | 'team_two_score'
  /** column name */
  | 'venue_id';

/** select "game_aggregate_bool_exp_bool_and_arguments_columns" columns of table "game" */
export type Game_Select_Column_Game_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'result';

/** select "game_aggregate_bool_exp_bool_or_arguments_columns" columns of table "game" */
export type Game_Select_Column_Game_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'result';

/** aggregate stddev on columns */
export type Game_Stddev_Fields = {
  team_one_score?: Maybe<Scalars['Float']['output']>;
  team_two_score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "game" */
export type Game_Stddev_Order_By = {
  team_one_score?: InputMaybe<Order_By>;
  team_two_score?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Stddev_Pop_Fields = {
  team_one_score?: Maybe<Scalars['Float']['output']>;
  team_two_score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "game" */
export type Game_Stddev_Pop_Order_By = {
  team_one_score?: InputMaybe<Order_By>;
  team_two_score?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Stddev_Samp_Fields = {
  team_one_score?: Maybe<Scalars['Float']['output']>;
  team_two_score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "game" */
export type Game_Stddev_Samp_Order_By = {
  team_one_score?: InputMaybe<Order_By>;
  team_two_score?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "game" */
export type Game_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Game_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Game_Stream_Cursor_Value_Input = {
  created_date?: InputMaybe<Scalars['timestamptz']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  full_boxscore?: InputMaybe<Scalars['String']['input']>;
  game_date?: InputMaybe<Scalars['date']['input']>;
  game_video_link?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  modified_date?: InputMaybe<Scalars['timestamptz']['input']>;
  playoff?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<Scalars['Boolean']['input']>;
  start_time?: InputMaybe<Scalars['time']['input']>;
  team_one_id?: InputMaybe<Scalars['uuid']['input']>;
  team_one_score?: InputMaybe<Scalars['Int']['input']>;
  team_two_id?: InputMaybe<Scalars['uuid']['input']>;
  team_two_score?: InputMaybe<Scalars['Int']['input']>;
  venue_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Game_Sum_Fields = {
  team_one_score?: Maybe<Scalars['Int']['output']>;
  team_two_score?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "game" */
export type Game_Sum_Order_By = {
  team_one_score?: InputMaybe<Order_By>;
  team_two_score?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Game_Var_Pop_Fields = {
  team_one_score?: Maybe<Scalars['Float']['output']>;
  team_two_score?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "game" */
export type Game_Var_Pop_Order_By = {
  team_one_score?: InputMaybe<Order_By>;
  team_two_score?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Var_Samp_Fields = {
  team_one_score?: Maybe<Scalars['Float']['output']>;
  team_two_score?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "game" */
export type Game_Var_Samp_Order_By = {
  team_one_score?: InputMaybe<Order_By>;
  team_two_score?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Variance_Fields = {
  team_one_score?: Maybe<Scalars['Float']['output']>;
  team_two_score?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "game" */
export type Game_Variance_Order_By = {
  team_one_score?: InputMaybe<Order_By>;
  team_two_score?: InputMaybe<Order_By>;
};

/** columns and relationships of "league" */
export type League = {
  created_date: Scalars['timestamptz']['output'];
  /** An array relationship */
  event: Array<Event>;
  /** An aggregate relationship */
  event_aggregate: Event_Aggregate;
  headquarters?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  modified_date: Scalars['timestamptz']['output'];
  name: Scalars['String']['output'];
  num_teams?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  team: Array<Team>;
  /** An aggregate relationship */
  team_aggregate: Team_Aggregate;
};


/** columns and relationships of "league" */
export type LeagueEventArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


/** columns and relationships of "league" */
export type LeagueEvent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


/** columns and relationships of "league" */
export type LeagueTeamArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** columns and relationships of "league" */
export type LeagueTeam_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};

/** aggregated selection of "league" */
export type League_Aggregate = {
  aggregate?: Maybe<League_Aggregate_Fields>;
  nodes: Array<League>;
};

/** aggregate fields of "league" */
export type League_Aggregate_Fields = {
  avg?: Maybe<League_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<League_Max_Fields>;
  min?: Maybe<League_Min_Fields>;
  stddev?: Maybe<League_Stddev_Fields>;
  stddev_pop?: Maybe<League_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<League_Stddev_Samp_Fields>;
  sum?: Maybe<League_Sum_Fields>;
  var_pop?: Maybe<League_Var_Pop_Fields>;
  var_samp?: Maybe<League_Var_Samp_Fields>;
  variance?: Maybe<League_Variance_Fields>;
};


/** aggregate fields of "league" */
export type League_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<League_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type League_Avg_Fields = {
  num_teams?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "league". All fields are combined with a logical 'AND'. */
export type League_Bool_Exp = {
  _and?: InputMaybe<Array<League_Bool_Exp>>;
  _not?: InputMaybe<League_Bool_Exp>;
  _or?: InputMaybe<Array<League_Bool_Exp>>;
  created_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  event_aggregate?: InputMaybe<Event_Aggregate_Bool_Exp>;
  headquarters?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  modified_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  num_teams?: InputMaybe<Int_Comparison_Exp>;
  team?: InputMaybe<Team_Bool_Exp>;
  team_aggregate?: InputMaybe<Team_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type League_Max_Fields = {
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  headquarters?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  num_teams?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type League_Min_Fields = {
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  headquarters?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  num_teams?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "league". */
export type League_Order_By = {
  created_date?: InputMaybe<Order_By>;
  event_aggregate?: InputMaybe<Event_Aggregate_Order_By>;
  headquarters?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  num_teams?: InputMaybe<Order_By>;
  team_aggregate?: InputMaybe<Team_Aggregate_Order_By>;
};

/** select columns of table "league" */
export type League_Select_Column =
  /** column name */
  | 'created_date'
  /** column name */
  | 'headquarters'
  /** column name */
  | 'id'
  /** column name */
  | 'modified_date'
  /** column name */
  | 'name'
  /** column name */
  | 'num_teams';

/** aggregate stddev on columns */
export type League_Stddev_Fields = {
  num_teams?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type League_Stddev_Pop_Fields = {
  num_teams?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type League_Stddev_Samp_Fields = {
  num_teams?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "league" */
export type League_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: League_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type League_Stream_Cursor_Value_Input = {
  created_date?: InputMaybe<Scalars['timestamptz']['input']>;
  headquarters?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  modified_date?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  num_teams?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type League_Sum_Fields = {
  num_teams?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type League_Var_Pop_Fields = {
  num_teams?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type League_Var_Samp_Fields = {
  num_teams?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type League_Variance_Fields = {
  num_teams?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** columns and relationships of "player" */
export type Player = {
  alias?: Maybe<Array<Scalars['String']['output']>>;
  /** An array relationship */
  biodata: Array<Biodata>;
  /** An aggregate relationship */
  biodata_aggregate: Biodata_Aggregate;
  created_date: Scalars['timestamptz']['output'];
  date_of_birth: Scalars['date']['output'];
  grad_year?: Maybe<Scalars['Int']['output']>;
  height_inches?: Maybe<Scalars['Int']['output']>;
  highschool?: Maybe<Scalars['String']['output']>;
  hometown?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  modified_date: Scalars['timestamptz']['output'];
  name: Scalars['String']['output'];
  nationality?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  player_event: Array<Player_Event>;
  /** An aggregate relationship */
  player_event_aggregate: Player_Event_Aggregate;
  /** An array relationship */
  player_game: Array<Player_Game>;
  /** An aggregate relationship */
  player_game_aggregate: Player_Game_Aggregate;
  /** An array relationship */
  player_team: Array<Player_Team>;
  /** An aggregate relationship */
  player_team_aggregate: Player_Team_Aggregate;
  position?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  weight_lb?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "player" */
export type PlayerBiodataArgs = {
  distinct_on?: InputMaybe<Array<Biodata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Biodata_Order_By>>;
  where?: InputMaybe<Biodata_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerBiodata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Biodata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Biodata_Order_By>>;
  where?: InputMaybe<Biodata_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerPlayer_EventArgs = {
  distinct_on?: InputMaybe<Array<Player_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Event_Order_By>>;
  where?: InputMaybe<Player_Event_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerPlayer_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Event_Order_By>>;
  where?: InputMaybe<Player_Event_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerPlayer_GameArgs = {
  distinct_on?: InputMaybe<Array<Player_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Game_Order_By>>;
  where?: InputMaybe<Player_Game_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerPlayer_Game_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Game_Order_By>>;
  where?: InputMaybe<Player_Game_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerPlayer_TeamArgs = {
  distinct_on?: InputMaybe<Array<Player_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Team_Order_By>>;
  where?: InputMaybe<Player_Team_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerPlayer_Team_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Team_Order_By>>;
  where?: InputMaybe<Player_Team_Bool_Exp>;
};

/** aggregated selection of "player" */
export type Player_Aggregate = {
  aggregate?: Maybe<Player_Aggregate_Fields>;
  nodes: Array<Player>;
};

/** aggregate fields of "player" */
export type Player_Aggregate_Fields = {
  avg?: Maybe<Player_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Player_Max_Fields>;
  min?: Maybe<Player_Min_Fields>;
  stddev?: Maybe<Player_Stddev_Fields>;
  stddev_pop?: Maybe<Player_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Player_Stddev_Samp_Fields>;
  sum?: Maybe<Player_Sum_Fields>;
  var_pop?: Maybe<Player_Var_Pop_Fields>;
  var_samp?: Maybe<Player_Var_Samp_Fields>;
  variance?: Maybe<Player_Variance_Fields>;
};


/** aggregate fields of "player" */
export type Player_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Player_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Player_Avg_Fields = {
  grad_year?: Maybe<Scalars['Float']['output']>;
  height_inches?: Maybe<Scalars['Float']['output']>;
  weight_lb?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "player". All fields are combined with a logical 'AND'. */
export type Player_Bool_Exp = {
  _and?: InputMaybe<Array<Player_Bool_Exp>>;
  _not?: InputMaybe<Player_Bool_Exp>;
  _or?: InputMaybe<Array<Player_Bool_Exp>>;
  alias?: InputMaybe<String_Array_Comparison_Exp>;
  biodata?: InputMaybe<Biodata_Bool_Exp>;
  biodata_aggregate?: InputMaybe<Biodata_Aggregate_Bool_Exp>;
  created_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  date_of_birth?: InputMaybe<Date_Comparison_Exp>;
  grad_year?: InputMaybe<Int_Comparison_Exp>;
  height_inches?: InputMaybe<Int_Comparison_Exp>;
  highschool?: InputMaybe<String_Comparison_Exp>;
  hometown?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  modified_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nationality?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  player_event?: InputMaybe<Player_Event_Bool_Exp>;
  player_event_aggregate?: InputMaybe<Player_Event_Aggregate_Bool_Exp>;
  player_game?: InputMaybe<Player_Game_Bool_Exp>;
  player_game_aggregate?: InputMaybe<Player_Game_Aggregate_Bool_Exp>;
  player_team?: InputMaybe<Player_Team_Bool_Exp>;
  player_team_aggregate?: InputMaybe<Player_Team_Aggregate_Bool_Exp>;
  position?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  weight_lb?: InputMaybe<Int_Comparison_Exp>;
};

/** columns and relationships of "player_event" */
export type Player_Event = {
  ast_per_40?: Maybe<Scalars['numeric']['output']>;
  ast_per_game?: Maybe<Scalars['numeric']['output']>;
  ast_tov_ratio?: Maybe<Scalars['numeric']['output']>;
  atr?: Maybe<Scalars['numeric']['output']>;
  blk_per_40?: Maybe<Scalars['numeric']['output']>;
  blk_per_game?: Maybe<Scalars['numeric']['output']>;
  bronze?: Maybe<Scalars['Int']['output']>;
  c_ram?: Maybe<Scalars['numeric']['output']>;
  drb_per_40?: Maybe<Scalars['numeric']['output']>;
  drb_per_game?: Maybe<Scalars['numeric']['output']>;
  dsi?: Maybe<Scalars['numeric']['output']>;
  efg_pct?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  event?: Maybe<Event>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  fg_pct?: Maybe<Scalars['numeric']['output']>;
  fgs?: Maybe<Scalars['numeric']['output']>;
  ft_pct?: Maybe<Scalars['numeric']['output']>;
  games_played?: Maybe<Scalars['smallint']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  id: Scalars['uuid']['output'];
  orb_per_40?: Maybe<Scalars['numeric']['output']>;
  orb_per_game?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  player?: Maybe<Player>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  poss_per_40?: Maybe<Scalars['numeric']['output']>;
  poss_per_game?: Maybe<Scalars['numeric']['output']>;
  ppp?: Maybe<Scalars['numeric']['output']>;
  psp?: Maybe<Scalars['numeric']['output']>;
  pts_per_40?: Maybe<Scalars['numeric']['output']>;
  pts_per_game?: Maybe<Scalars['numeric']['output']>;
  ram?: Maybe<Scalars['numeric']['output']>;
  reb_per_40?: Maybe<Scalars['numeric']['output']>;
  reb_per_game?: Maybe<Scalars['numeric']['output']>;
  silver?: Maybe<Scalars['Int']['output']>;
  stl_per_40?: Maybe<Scalars['numeric']['output']>;
  stl_per_game?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  team?: Maybe<Team>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  three_pa_per_40?: Maybe<Scalars['numeric']['output']>;
  three_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pe?: Maybe<Scalars['numeric']['output']>;
  three_pm_per_40?: Maybe<Scalars['numeric']['output']>;
  three_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pt_pct?: Maybe<Scalars['numeric']['output']>;
  total_ast?: Maybe<Scalars['Int']['output']>;
  total_blk?: Maybe<Scalars['Int']['output']>;
  total_drb?: Maybe<Scalars['Int']['output']>;
  total_fga?: Maybe<Scalars['Int']['output']>;
  total_fgm?: Maybe<Scalars['Int']['output']>;
  total_fta?: Maybe<Scalars['Int']['output']>;
  total_ftm?: Maybe<Scalars['Int']['output']>;
  total_minutes?: Maybe<Scalars['Int']['output']>;
  total_orb?: Maybe<Scalars['Int']['output']>;
  total_pf?: Maybe<Scalars['Int']['output']>;
  total_poss?: Maybe<Scalars['numeric']['output']>;
  total_pts?: Maybe<Scalars['Int']['output']>;
  total_reb?: Maybe<Scalars['Int']['output']>;
  total_stl?: Maybe<Scalars['Int']['output']>;
  total_three_pa?: Maybe<Scalars['Int']['output']>;
  total_three_pm?: Maybe<Scalars['Int']['output']>;
  total_tov?: Maybe<Scalars['Int']['output']>;
  total_two_pa?: Maybe<Scalars['Int']['output']>;
  total_two_pm?: Maybe<Scalars['Int']['output']>;
  tov_per_40?: Maybe<Scalars['numeric']['output']>;
  tov_per_game?: Maybe<Scalars['numeric']['output']>;
  ts_pct?: Maybe<Scalars['numeric']['output']>;
  two_pa_per_40?: Maybe<Scalars['numeric']['output']>;
  two_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pm_per_40?: Maybe<Scalars['numeric']['output']>;
  two_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pt_pct?: Maybe<Scalars['numeric']['output']>;
  usg_pct?: Maybe<Scalars['numeric']['output']>;
};

/** aggregated selection of "player_event" */
export type Player_Event_Aggregate = {
  aggregate?: Maybe<Player_Event_Aggregate_Fields>;
  nodes: Array<Player_Event>;
};

export type Player_Event_Aggregate_Bool_Exp = {
  count?: InputMaybe<Player_Event_Aggregate_Bool_Exp_Count>;
};

export type Player_Event_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Player_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Player_Event_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "player_event" */
export type Player_Event_Aggregate_Fields = {
  avg?: Maybe<Player_Event_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Player_Event_Max_Fields>;
  min?: Maybe<Player_Event_Min_Fields>;
  stddev?: Maybe<Player_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Player_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Player_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Player_Event_Sum_Fields>;
  var_pop?: Maybe<Player_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Player_Event_Var_Samp_Fields>;
  variance?: Maybe<Player_Event_Variance_Fields>;
};


/** aggregate fields of "player_event" */
export type Player_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Player_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "player_event" */
export type Player_Event_Aggregate_Order_By = {
  avg?: InputMaybe<Player_Event_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Player_Event_Max_Order_By>;
  min?: InputMaybe<Player_Event_Min_Order_By>;
  stddev?: InputMaybe<Player_Event_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Player_Event_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Player_Event_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Player_Event_Sum_Order_By>;
  var_pop?: InputMaybe<Player_Event_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Player_Event_Var_Samp_Order_By>;
  variance?: InputMaybe<Player_Event_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Player_Event_Avg_Fields = {
  ast_per_40?: Maybe<Scalars['Float']['output']>;
  ast_per_game?: Maybe<Scalars['Float']['output']>;
  ast_tov_ratio?: Maybe<Scalars['Float']['output']>;
  atr?: Maybe<Scalars['Float']['output']>;
  blk_per_40?: Maybe<Scalars['Float']['output']>;
  blk_per_game?: Maybe<Scalars['Float']['output']>;
  bronze?: Maybe<Scalars['Float']['output']>;
  c_ram?: Maybe<Scalars['Float']['output']>;
  drb_per_40?: Maybe<Scalars['Float']['output']>;
  drb_per_game?: Maybe<Scalars['Float']['output']>;
  dsi?: Maybe<Scalars['Float']['output']>;
  efg_pct?: Maybe<Scalars['Float']['output']>;
  fg_pct?: Maybe<Scalars['Float']['output']>;
  fgs?: Maybe<Scalars['Float']['output']>;
  ft_pct?: Maybe<Scalars['Float']['output']>;
  games_played?: Maybe<Scalars['Float']['output']>;
  gold?: Maybe<Scalars['Float']['output']>;
  orb_per_40?: Maybe<Scalars['Float']['output']>;
  orb_per_game?: Maybe<Scalars['Float']['output']>;
  poss_per_40?: Maybe<Scalars['Float']['output']>;
  poss_per_game?: Maybe<Scalars['Float']['output']>;
  ppp?: Maybe<Scalars['Float']['output']>;
  psp?: Maybe<Scalars['Float']['output']>;
  pts_per_40?: Maybe<Scalars['Float']['output']>;
  pts_per_game?: Maybe<Scalars['Float']['output']>;
  ram?: Maybe<Scalars['Float']['output']>;
  reb_per_40?: Maybe<Scalars['Float']['output']>;
  reb_per_game?: Maybe<Scalars['Float']['output']>;
  silver?: Maybe<Scalars['Float']['output']>;
  stl_per_40?: Maybe<Scalars['Float']['output']>;
  stl_per_game?: Maybe<Scalars['Float']['output']>;
  three_pa_per_40?: Maybe<Scalars['Float']['output']>;
  three_pa_per_game?: Maybe<Scalars['Float']['output']>;
  three_pe?: Maybe<Scalars['Float']['output']>;
  three_pm_per_40?: Maybe<Scalars['Float']['output']>;
  three_pm_per_game?: Maybe<Scalars['Float']['output']>;
  three_pt_pct?: Maybe<Scalars['Float']['output']>;
  total_ast?: Maybe<Scalars['Float']['output']>;
  total_blk?: Maybe<Scalars['Float']['output']>;
  total_drb?: Maybe<Scalars['Float']['output']>;
  total_fga?: Maybe<Scalars['Float']['output']>;
  total_fgm?: Maybe<Scalars['Float']['output']>;
  total_fta?: Maybe<Scalars['Float']['output']>;
  total_ftm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  total_orb?: Maybe<Scalars['Float']['output']>;
  total_pf?: Maybe<Scalars['Float']['output']>;
  total_poss?: Maybe<Scalars['Float']['output']>;
  total_pts?: Maybe<Scalars['Float']['output']>;
  total_reb?: Maybe<Scalars['Float']['output']>;
  total_stl?: Maybe<Scalars['Float']['output']>;
  total_three_pa?: Maybe<Scalars['Float']['output']>;
  total_three_pm?: Maybe<Scalars['Float']['output']>;
  total_tov?: Maybe<Scalars['Float']['output']>;
  total_two_pa?: Maybe<Scalars['Float']['output']>;
  total_two_pm?: Maybe<Scalars['Float']['output']>;
  tov_per_40?: Maybe<Scalars['Float']['output']>;
  tov_per_game?: Maybe<Scalars['Float']['output']>;
  ts_pct?: Maybe<Scalars['Float']['output']>;
  two_pa_per_40?: Maybe<Scalars['Float']['output']>;
  two_pa_per_game?: Maybe<Scalars['Float']['output']>;
  two_pm_per_40?: Maybe<Scalars['Float']['output']>;
  two_pm_per_game?: Maybe<Scalars['Float']['output']>;
  two_pt_pct?: Maybe<Scalars['Float']['output']>;
  usg_pct?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "player_event" */
export type Player_Event_Avg_Order_By = {
  ast_per_40?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  atr?: InputMaybe<Order_By>;
  blk_per_40?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  bronze?: InputMaybe<Order_By>;
  c_ram?: InputMaybe<Order_By>;
  drb_per_40?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  dsi?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  fgs?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  orb_per_40?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_40?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  psp?: InputMaybe<Order_By>;
  pts_per_40?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  ram?: InputMaybe<Order_By>;
  reb_per_40?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  silver?: InputMaybe<Order_By>;
  stl_per_40?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_40?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pe?: InputMaybe<Order_By>;
  three_pm_per_40?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_per_40?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_40?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_40?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  usg_pct?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "player_event". All fields are combined with a logical 'AND'. */
export type Player_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Player_Event_Bool_Exp>>;
  _not?: InputMaybe<Player_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Player_Event_Bool_Exp>>;
  ast_per_40?: InputMaybe<Numeric_Comparison_Exp>;
  ast_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  ast_tov_ratio?: InputMaybe<Numeric_Comparison_Exp>;
  atr?: InputMaybe<Numeric_Comparison_Exp>;
  blk_per_40?: InputMaybe<Numeric_Comparison_Exp>;
  blk_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  bronze?: InputMaybe<Int_Comparison_Exp>;
  c_ram?: InputMaybe<Numeric_Comparison_Exp>;
  drb_per_40?: InputMaybe<Numeric_Comparison_Exp>;
  drb_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  dsi?: InputMaybe<Numeric_Comparison_Exp>;
  efg_pct?: InputMaybe<Numeric_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  fg_pct?: InputMaybe<Numeric_Comparison_Exp>;
  fgs?: InputMaybe<Numeric_Comparison_Exp>;
  ft_pct?: InputMaybe<Numeric_Comparison_Exp>;
  games_played?: InputMaybe<Smallint_Comparison_Exp>;
  gold?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  orb_per_40?: InputMaybe<Numeric_Comparison_Exp>;
  orb_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  player?: InputMaybe<Player_Bool_Exp>;
  player_id?: InputMaybe<Uuid_Comparison_Exp>;
  poss_per_40?: InputMaybe<Numeric_Comparison_Exp>;
  poss_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  ppp?: InputMaybe<Numeric_Comparison_Exp>;
  psp?: InputMaybe<Numeric_Comparison_Exp>;
  pts_per_40?: InputMaybe<Numeric_Comparison_Exp>;
  pts_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  ram?: InputMaybe<Numeric_Comparison_Exp>;
  reb_per_40?: InputMaybe<Numeric_Comparison_Exp>;
  reb_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  silver?: InputMaybe<Int_Comparison_Exp>;
  stl_per_40?: InputMaybe<Numeric_Comparison_Exp>;
  stl_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  team?: InputMaybe<Team_Bool_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
  three_pa_per_40?: InputMaybe<Numeric_Comparison_Exp>;
  three_pa_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  three_pe?: InputMaybe<Numeric_Comparison_Exp>;
  three_pm_per_40?: InputMaybe<Numeric_Comparison_Exp>;
  three_pm_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  three_pt_pct?: InputMaybe<Numeric_Comparison_Exp>;
  total_ast?: InputMaybe<Int_Comparison_Exp>;
  total_blk?: InputMaybe<Int_Comparison_Exp>;
  total_drb?: InputMaybe<Int_Comparison_Exp>;
  total_fga?: InputMaybe<Int_Comparison_Exp>;
  total_fgm?: InputMaybe<Int_Comparison_Exp>;
  total_fta?: InputMaybe<Int_Comparison_Exp>;
  total_ftm?: InputMaybe<Int_Comparison_Exp>;
  total_minutes?: InputMaybe<Int_Comparison_Exp>;
  total_orb?: InputMaybe<Int_Comparison_Exp>;
  total_pf?: InputMaybe<Int_Comparison_Exp>;
  total_poss?: InputMaybe<Numeric_Comparison_Exp>;
  total_pts?: InputMaybe<Int_Comparison_Exp>;
  total_reb?: InputMaybe<Int_Comparison_Exp>;
  total_stl?: InputMaybe<Int_Comparison_Exp>;
  total_three_pa?: InputMaybe<Int_Comparison_Exp>;
  total_three_pm?: InputMaybe<Int_Comparison_Exp>;
  total_tov?: InputMaybe<Int_Comparison_Exp>;
  total_two_pa?: InputMaybe<Int_Comparison_Exp>;
  total_two_pm?: InputMaybe<Int_Comparison_Exp>;
  tov_per_40?: InputMaybe<Numeric_Comparison_Exp>;
  tov_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  ts_pct?: InputMaybe<Numeric_Comparison_Exp>;
  two_pa_per_40?: InputMaybe<Numeric_Comparison_Exp>;
  two_pa_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  two_pm_per_40?: InputMaybe<Numeric_Comparison_Exp>;
  two_pm_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  two_pt_pct?: InputMaybe<Numeric_Comparison_Exp>;
  usg_pct?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Player_Event_Max_Fields = {
  ast_per_40?: Maybe<Scalars['numeric']['output']>;
  ast_per_game?: Maybe<Scalars['numeric']['output']>;
  ast_tov_ratio?: Maybe<Scalars['numeric']['output']>;
  atr?: Maybe<Scalars['numeric']['output']>;
  blk_per_40?: Maybe<Scalars['numeric']['output']>;
  blk_per_game?: Maybe<Scalars['numeric']['output']>;
  bronze?: Maybe<Scalars['Int']['output']>;
  c_ram?: Maybe<Scalars['numeric']['output']>;
  drb_per_40?: Maybe<Scalars['numeric']['output']>;
  drb_per_game?: Maybe<Scalars['numeric']['output']>;
  dsi?: Maybe<Scalars['numeric']['output']>;
  efg_pct?: Maybe<Scalars['numeric']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  fg_pct?: Maybe<Scalars['numeric']['output']>;
  fgs?: Maybe<Scalars['numeric']['output']>;
  ft_pct?: Maybe<Scalars['numeric']['output']>;
  games_played?: Maybe<Scalars['smallint']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  orb_per_40?: Maybe<Scalars['numeric']['output']>;
  orb_per_game?: Maybe<Scalars['numeric']['output']>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  poss_per_40?: Maybe<Scalars['numeric']['output']>;
  poss_per_game?: Maybe<Scalars['numeric']['output']>;
  ppp?: Maybe<Scalars['numeric']['output']>;
  psp?: Maybe<Scalars['numeric']['output']>;
  pts_per_40?: Maybe<Scalars['numeric']['output']>;
  pts_per_game?: Maybe<Scalars['numeric']['output']>;
  ram?: Maybe<Scalars['numeric']['output']>;
  reb_per_40?: Maybe<Scalars['numeric']['output']>;
  reb_per_game?: Maybe<Scalars['numeric']['output']>;
  silver?: Maybe<Scalars['Int']['output']>;
  stl_per_40?: Maybe<Scalars['numeric']['output']>;
  stl_per_game?: Maybe<Scalars['numeric']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  three_pa_per_40?: Maybe<Scalars['numeric']['output']>;
  three_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pe?: Maybe<Scalars['numeric']['output']>;
  three_pm_per_40?: Maybe<Scalars['numeric']['output']>;
  three_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pt_pct?: Maybe<Scalars['numeric']['output']>;
  total_ast?: Maybe<Scalars['Int']['output']>;
  total_blk?: Maybe<Scalars['Int']['output']>;
  total_drb?: Maybe<Scalars['Int']['output']>;
  total_fga?: Maybe<Scalars['Int']['output']>;
  total_fgm?: Maybe<Scalars['Int']['output']>;
  total_fta?: Maybe<Scalars['Int']['output']>;
  total_ftm?: Maybe<Scalars['Int']['output']>;
  total_minutes?: Maybe<Scalars['Int']['output']>;
  total_orb?: Maybe<Scalars['Int']['output']>;
  total_pf?: Maybe<Scalars['Int']['output']>;
  total_poss?: Maybe<Scalars['numeric']['output']>;
  total_pts?: Maybe<Scalars['Int']['output']>;
  total_reb?: Maybe<Scalars['Int']['output']>;
  total_stl?: Maybe<Scalars['Int']['output']>;
  total_three_pa?: Maybe<Scalars['Int']['output']>;
  total_three_pm?: Maybe<Scalars['Int']['output']>;
  total_tov?: Maybe<Scalars['Int']['output']>;
  total_two_pa?: Maybe<Scalars['Int']['output']>;
  total_two_pm?: Maybe<Scalars['Int']['output']>;
  tov_per_40?: Maybe<Scalars['numeric']['output']>;
  tov_per_game?: Maybe<Scalars['numeric']['output']>;
  ts_pct?: Maybe<Scalars['numeric']['output']>;
  two_pa_per_40?: Maybe<Scalars['numeric']['output']>;
  two_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pm_per_40?: Maybe<Scalars['numeric']['output']>;
  two_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pt_pct?: Maybe<Scalars['numeric']['output']>;
  usg_pct?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "player_event" */
export type Player_Event_Max_Order_By = {
  ast_per_40?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  atr?: InputMaybe<Order_By>;
  blk_per_40?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  bronze?: InputMaybe<Order_By>;
  c_ram?: InputMaybe<Order_By>;
  drb_per_40?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  dsi?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  fgs?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orb_per_40?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  poss_per_40?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  psp?: InputMaybe<Order_By>;
  pts_per_40?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  ram?: InputMaybe<Order_By>;
  reb_per_40?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  silver?: InputMaybe<Order_By>;
  stl_per_40?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  three_pa_per_40?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pe?: InputMaybe<Order_By>;
  three_pm_per_40?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_per_40?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_40?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_40?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  usg_pct?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Event_Min_Fields = {
  ast_per_40?: Maybe<Scalars['numeric']['output']>;
  ast_per_game?: Maybe<Scalars['numeric']['output']>;
  ast_tov_ratio?: Maybe<Scalars['numeric']['output']>;
  atr?: Maybe<Scalars['numeric']['output']>;
  blk_per_40?: Maybe<Scalars['numeric']['output']>;
  blk_per_game?: Maybe<Scalars['numeric']['output']>;
  bronze?: Maybe<Scalars['Int']['output']>;
  c_ram?: Maybe<Scalars['numeric']['output']>;
  drb_per_40?: Maybe<Scalars['numeric']['output']>;
  drb_per_game?: Maybe<Scalars['numeric']['output']>;
  dsi?: Maybe<Scalars['numeric']['output']>;
  efg_pct?: Maybe<Scalars['numeric']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  fg_pct?: Maybe<Scalars['numeric']['output']>;
  fgs?: Maybe<Scalars['numeric']['output']>;
  ft_pct?: Maybe<Scalars['numeric']['output']>;
  games_played?: Maybe<Scalars['smallint']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  orb_per_40?: Maybe<Scalars['numeric']['output']>;
  orb_per_game?: Maybe<Scalars['numeric']['output']>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  poss_per_40?: Maybe<Scalars['numeric']['output']>;
  poss_per_game?: Maybe<Scalars['numeric']['output']>;
  ppp?: Maybe<Scalars['numeric']['output']>;
  psp?: Maybe<Scalars['numeric']['output']>;
  pts_per_40?: Maybe<Scalars['numeric']['output']>;
  pts_per_game?: Maybe<Scalars['numeric']['output']>;
  ram?: Maybe<Scalars['numeric']['output']>;
  reb_per_40?: Maybe<Scalars['numeric']['output']>;
  reb_per_game?: Maybe<Scalars['numeric']['output']>;
  silver?: Maybe<Scalars['Int']['output']>;
  stl_per_40?: Maybe<Scalars['numeric']['output']>;
  stl_per_game?: Maybe<Scalars['numeric']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  three_pa_per_40?: Maybe<Scalars['numeric']['output']>;
  three_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pe?: Maybe<Scalars['numeric']['output']>;
  three_pm_per_40?: Maybe<Scalars['numeric']['output']>;
  three_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pt_pct?: Maybe<Scalars['numeric']['output']>;
  total_ast?: Maybe<Scalars['Int']['output']>;
  total_blk?: Maybe<Scalars['Int']['output']>;
  total_drb?: Maybe<Scalars['Int']['output']>;
  total_fga?: Maybe<Scalars['Int']['output']>;
  total_fgm?: Maybe<Scalars['Int']['output']>;
  total_fta?: Maybe<Scalars['Int']['output']>;
  total_ftm?: Maybe<Scalars['Int']['output']>;
  total_minutes?: Maybe<Scalars['Int']['output']>;
  total_orb?: Maybe<Scalars['Int']['output']>;
  total_pf?: Maybe<Scalars['Int']['output']>;
  total_poss?: Maybe<Scalars['numeric']['output']>;
  total_pts?: Maybe<Scalars['Int']['output']>;
  total_reb?: Maybe<Scalars['Int']['output']>;
  total_stl?: Maybe<Scalars['Int']['output']>;
  total_three_pa?: Maybe<Scalars['Int']['output']>;
  total_three_pm?: Maybe<Scalars['Int']['output']>;
  total_tov?: Maybe<Scalars['Int']['output']>;
  total_two_pa?: Maybe<Scalars['Int']['output']>;
  total_two_pm?: Maybe<Scalars['Int']['output']>;
  tov_per_40?: Maybe<Scalars['numeric']['output']>;
  tov_per_game?: Maybe<Scalars['numeric']['output']>;
  ts_pct?: Maybe<Scalars['numeric']['output']>;
  two_pa_per_40?: Maybe<Scalars['numeric']['output']>;
  two_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pm_per_40?: Maybe<Scalars['numeric']['output']>;
  two_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pt_pct?: Maybe<Scalars['numeric']['output']>;
  usg_pct?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "player_event" */
export type Player_Event_Min_Order_By = {
  ast_per_40?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  atr?: InputMaybe<Order_By>;
  blk_per_40?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  bronze?: InputMaybe<Order_By>;
  c_ram?: InputMaybe<Order_By>;
  drb_per_40?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  dsi?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  fgs?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orb_per_40?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  poss_per_40?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  psp?: InputMaybe<Order_By>;
  pts_per_40?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  ram?: InputMaybe<Order_By>;
  reb_per_40?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  silver?: InputMaybe<Order_By>;
  stl_per_40?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  three_pa_per_40?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pe?: InputMaybe<Order_By>;
  three_pm_per_40?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_per_40?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_40?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_40?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  usg_pct?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "player_event". */
export type Player_Event_Order_By = {
  ast_per_40?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  atr?: InputMaybe<Order_By>;
  blk_per_40?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  bronze?: InputMaybe<Order_By>;
  c_ram?: InputMaybe<Order_By>;
  drb_per_40?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  dsi?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  event_id?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  fgs?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orb_per_40?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  player?: InputMaybe<Player_Order_By>;
  player_id?: InputMaybe<Order_By>;
  poss_per_40?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  psp?: InputMaybe<Order_By>;
  pts_per_40?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  ram?: InputMaybe<Order_By>;
  reb_per_40?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  silver?: InputMaybe<Order_By>;
  stl_per_40?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  team?: InputMaybe<Team_Order_By>;
  team_id?: InputMaybe<Order_By>;
  three_pa_per_40?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pe?: InputMaybe<Order_By>;
  three_pm_per_40?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_per_40?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_40?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_40?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  usg_pct?: InputMaybe<Order_By>;
};

/** select columns of table "player_event" */
export type Player_Event_Select_Column =
  /** column name */
  | 'ast_per_40'
  /** column name */
  | 'ast_per_game'
  /** column name */
  | 'ast_tov_ratio'
  /** column name */
  | 'atr'
  /** column name */
  | 'blk_per_40'
  /** column name */
  | 'blk_per_game'
  /** column name */
  | 'bronze'
  /** column name */
  | 'c_ram'
  /** column name */
  | 'drb_per_40'
  /** column name */
  | 'drb_per_game'
  /** column name */
  | 'dsi'
  /** column name */
  | 'efg_pct'
  /** column name */
  | 'event_id'
  /** column name */
  | 'fg_pct'
  /** column name */
  | 'fgs'
  /** column name */
  | 'ft_pct'
  /** column name */
  | 'games_played'
  /** column name */
  | 'gold'
  /** column name */
  | 'id'
  /** column name */
  | 'orb_per_40'
  /** column name */
  | 'orb_per_game'
  /** column name */
  | 'player_id'
  /** column name */
  | 'poss_per_40'
  /** column name */
  | 'poss_per_game'
  /** column name */
  | 'ppp'
  /** column name */
  | 'psp'
  /** column name */
  | 'pts_per_40'
  /** column name */
  | 'pts_per_game'
  /** column name */
  | 'ram'
  /** column name */
  | 'reb_per_40'
  /** column name */
  | 'reb_per_game'
  /** column name */
  | 'silver'
  /** column name */
  | 'stl_per_40'
  /** column name */
  | 'stl_per_game'
  /** column name */
  | 'team_id'
  /** column name */
  | 'three_pa_per_40'
  /** column name */
  | 'three_pa_per_game'
  /** column name */
  | 'three_pe'
  /** column name */
  | 'three_pm_per_40'
  /** column name */
  | 'three_pm_per_game'
  /** column name */
  | 'three_pt_pct'
  /** column name */
  | 'total_ast'
  /** column name */
  | 'total_blk'
  /** column name */
  | 'total_drb'
  /** column name */
  | 'total_fga'
  /** column name */
  | 'total_fgm'
  /** column name */
  | 'total_fta'
  /** column name */
  | 'total_ftm'
  /** column name */
  | 'total_minutes'
  /** column name */
  | 'total_orb'
  /** column name */
  | 'total_pf'
  /** column name */
  | 'total_poss'
  /** column name */
  | 'total_pts'
  /** column name */
  | 'total_reb'
  /** column name */
  | 'total_stl'
  /** column name */
  | 'total_three_pa'
  /** column name */
  | 'total_three_pm'
  /** column name */
  | 'total_tov'
  /** column name */
  | 'total_two_pa'
  /** column name */
  | 'total_two_pm'
  /** column name */
  | 'tov_per_40'
  /** column name */
  | 'tov_per_game'
  /** column name */
  | 'ts_pct'
  /** column name */
  | 'two_pa_per_40'
  /** column name */
  | 'two_pa_per_game'
  /** column name */
  | 'two_pm_per_40'
  /** column name */
  | 'two_pm_per_game'
  /** column name */
  | 'two_pt_pct'
  /** column name */
  | 'usg_pct';

/** aggregate stddev on columns */
export type Player_Event_Stddev_Fields = {
  ast_per_40?: Maybe<Scalars['Float']['output']>;
  ast_per_game?: Maybe<Scalars['Float']['output']>;
  ast_tov_ratio?: Maybe<Scalars['Float']['output']>;
  atr?: Maybe<Scalars['Float']['output']>;
  blk_per_40?: Maybe<Scalars['Float']['output']>;
  blk_per_game?: Maybe<Scalars['Float']['output']>;
  bronze?: Maybe<Scalars['Float']['output']>;
  c_ram?: Maybe<Scalars['Float']['output']>;
  drb_per_40?: Maybe<Scalars['Float']['output']>;
  drb_per_game?: Maybe<Scalars['Float']['output']>;
  dsi?: Maybe<Scalars['Float']['output']>;
  efg_pct?: Maybe<Scalars['Float']['output']>;
  fg_pct?: Maybe<Scalars['Float']['output']>;
  fgs?: Maybe<Scalars['Float']['output']>;
  ft_pct?: Maybe<Scalars['Float']['output']>;
  games_played?: Maybe<Scalars['Float']['output']>;
  gold?: Maybe<Scalars['Float']['output']>;
  orb_per_40?: Maybe<Scalars['Float']['output']>;
  orb_per_game?: Maybe<Scalars['Float']['output']>;
  poss_per_40?: Maybe<Scalars['Float']['output']>;
  poss_per_game?: Maybe<Scalars['Float']['output']>;
  ppp?: Maybe<Scalars['Float']['output']>;
  psp?: Maybe<Scalars['Float']['output']>;
  pts_per_40?: Maybe<Scalars['Float']['output']>;
  pts_per_game?: Maybe<Scalars['Float']['output']>;
  ram?: Maybe<Scalars['Float']['output']>;
  reb_per_40?: Maybe<Scalars['Float']['output']>;
  reb_per_game?: Maybe<Scalars['Float']['output']>;
  silver?: Maybe<Scalars['Float']['output']>;
  stl_per_40?: Maybe<Scalars['Float']['output']>;
  stl_per_game?: Maybe<Scalars['Float']['output']>;
  three_pa_per_40?: Maybe<Scalars['Float']['output']>;
  three_pa_per_game?: Maybe<Scalars['Float']['output']>;
  three_pe?: Maybe<Scalars['Float']['output']>;
  three_pm_per_40?: Maybe<Scalars['Float']['output']>;
  three_pm_per_game?: Maybe<Scalars['Float']['output']>;
  three_pt_pct?: Maybe<Scalars['Float']['output']>;
  total_ast?: Maybe<Scalars['Float']['output']>;
  total_blk?: Maybe<Scalars['Float']['output']>;
  total_drb?: Maybe<Scalars['Float']['output']>;
  total_fga?: Maybe<Scalars['Float']['output']>;
  total_fgm?: Maybe<Scalars['Float']['output']>;
  total_fta?: Maybe<Scalars['Float']['output']>;
  total_ftm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  total_orb?: Maybe<Scalars['Float']['output']>;
  total_pf?: Maybe<Scalars['Float']['output']>;
  total_poss?: Maybe<Scalars['Float']['output']>;
  total_pts?: Maybe<Scalars['Float']['output']>;
  total_reb?: Maybe<Scalars['Float']['output']>;
  total_stl?: Maybe<Scalars['Float']['output']>;
  total_three_pa?: Maybe<Scalars['Float']['output']>;
  total_three_pm?: Maybe<Scalars['Float']['output']>;
  total_tov?: Maybe<Scalars['Float']['output']>;
  total_two_pa?: Maybe<Scalars['Float']['output']>;
  total_two_pm?: Maybe<Scalars['Float']['output']>;
  tov_per_40?: Maybe<Scalars['Float']['output']>;
  tov_per_game?: Maybe<Scalars['Float']['output']>;
  ts_pct?: Maybe<Scalars['Float']['output']>;
  two_pa_per_40?: Maybe<Scalars['Float']['output']>;
  two_pa_per_game?: Maybe<Scalars['Float']['output']>;
  two_pm_per_40?: Maybe<Scalars['Float']['output']>;
  two_pm_per_game?: Maybe<Scalars['Float']['output']>;
  two_pt_pct?: Maybe<Scalars['Float']['output']>;
  usg_pct?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "player_event" */
export type Player_Event_Stddev_Order_By = {
  ast_per_40?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  atr?: InputMaybe<Order_By>;
  blk_per_40?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  bronze?: InputMaybe<Order_By>;
  c_ram?: InputMaybe<Order_By>;
  drb_per_40?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  dsi?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  fgs?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  orb_per_40?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_40?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  psp?: InputMaybe<Order_By>;
  pts_per_40?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  ram?: InputMaybe<Order_By>;
  reb_per_40?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  silver?: InputMaybe<Order_By>;
  stl_per_40?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_40?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pe?: InputMaybe<Order_By>;
  three_pm_per_40?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_per_40?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_40?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_40?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  usg_pct?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Player_Event_Stddev_Pop_Fields = {
  ast_per_40?: Maybe<Scalars['Float']['output']>;
  ast_per_game?: Maybe<Scalars['Float']['output']>;
  ast_tov_ratio?: Maybe<Scalars['Float']['output']>;
  atr?: Maybe<Scalars['Float']['output']>;
  blk_per_40?: Maybe<Scalars['Float']['output']>;
  blk_per_game?: Maybe<Scalars['Float']['output']>;
  bronze?: Maybe<Scalars['Float']['output']>;
  c_ram?: Maybe<Scalars['Float']['output']>;
  drb_per_40?: Maybe<Scalars['Float']['output']>;
  drb_per_game?: Maybe<Scalars['Float']['output']>;
  dsi?: Maybe<Scalars['Float']['output']>;
  efg_pct?: Maybe<Scalars['Float']['output']>;
  fg_pct?: Maybe<Scalars['Float']['output']>;
  fgs?: Maybe<Scalars['Float']['output']>;
  ft_pct?: Maybe<Scalars['Float']['output']>;
  games_played?: Maybe<Scalars['Float']['output']>;
  gold?: Maybe<Scalars['Float']['output']>;
  orb_per_40?: Maybe<Scalars['Float']['output']>;
  orb_per_game?: Maybe<Scalars['Float']['output']>;
  poss_per_40?: Maybe<Scalars['Float']['output']>;
  poss_per_game?: Maybe<Scalars['Float']['output']>;
  ppp?: Maybe<Scalars['Float']['output']>;
  psp?: Maybe<Scalars['Float']['output']>;
  pts_per_40?: Maybe<Scalars['Float']['output']>;
  pts_per_game?: Maybe<Scalars['Float']['output']>;
  ram?: Maybe<Scalars['Float']['output']>;
  reb_per_40?: Maybe<Scalars['Float']['output']>;
  reb_per_game?: Maybe<Scalars['Float']['output']>;
  silver?: Maybe<Scalars['Float']['output']>;
  stl_per_40?: Maybe<Scalars['Float']['output']>;
  stl_per_game?: Maybe<Scalars['Float']['output']>;
  three_pa_per_40?: Maybe<Scalars['Float']['output']>;
  three_pa_per_game?: Maybe<Scalars['Float']['output']>;
  three_pe?: Maybe<Scalars['Float']['output']>;
  three_pm_per_40?: Maybe<Scalars['Float']['output']>;
  three_pm_per_game?: Maybe<Scalars['Float']['output']>;
  three_pt_pct?: Maybe<Scalars['Float']['output']>;
  total_ast?: Maybe<Scalars['Float']['output']>;
  total_blk?: Maybe<Scalars['Float']['output']>;
  total_drb?: Maybe<Scalars['Float']['output']>;
  total_fga?: Maybe<Scalars['Float']['output']>;
  total_fgm?: Maybe<Scalars['Float']['output']>;
  total_fta?: Maybe<Scalars['Float']['output']>;
  total_ftm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  total_orb?: Maybe<Scalars['Float']['output']>;
  total_pf?: Maybe<Scalars['Float']['output']>;
  total_poss?: Maybe<Scalars['Float']['output']>;
  total_pts?: Maybe<Scalars['Float']['output']>;
  total_reb?: Maybe<Scalars['Float']['output']>;
  total_stl?: Maybe<Scalars['Float']['output']>;
  total_three_pa?: Maybe<Scalars['Float']['output']>;
  total_three_pm?: Maybe<Scalars['Float']['output']>;
  total_tov?: Maybe<Scalars['Float']['output']>;
  total_two_pa?: Maybe<Scalars['Float']['output']>;
  total_two_pm?: Maybe<Scalars['Float']['output']>;
  tov_per_40?: Maybe<Scalars['Float']['output']>;
  tov_per_game?: Maybe<Scalars['Float']['output']>;
  ts_pct?: Maybe<Scalars['Float']['output']>;
  two_pa_per_40?: Maybe<Scalars['Float']['output']>;
  two_pa_per_game?: Maybe<Scalars['Float']['output']>;
  two_pm_per_40?: Maybe<Scalars['Float']['output']>;
  two_pm_per_game?: Maybe<Scalars['Float']['output']>;
  two_pt_pct?: Maybe<Scalars['Float']['output']>;
  usg_pct?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "player_event" */
export type Player_Event_Stddev_Pop_Order_By = {
  ast_per_40?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  atr?: InputMaybe<Order_By>;
  blk_per_40?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  bronze?: InputMaybe<Order_By>;
  c_ram?: InputMaybe<Order_By>;
  drb_per_40?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  dsi?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  fgs?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  orb_per_40?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_40?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  psp?: InputMaybe<Order_By>;
  pts_per_40?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  ram?: InputMaybe<Order_By>;
  reb_per_40?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  silver?: InputMaybe<Order_By>;
  stl_per_40?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_40?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pe?: InputMaybe<Order_By>;
  three_pm_per_40?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_per_40?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_40?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_40?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  usg_pct?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Player_Event_Stddev_Samp_Fields = {
  ast_per_40?: Maybe<Scalars['Float']['output']>;
  ast_per_game?: Maybe<Scalars['Float']['output']>;
  ast_tov_ratio?: Maybe<Scalars['Float']['output']>;
  atr?: Maybe<Scalars['Float']['output']>;
  blk_per_40?: Maybe<Scalars['Float']['output']>;
  blk_per_game?: Maybe<Scalars['Float']['output']>;
  bronze?: Maybe<Scalars['Float']['output']>;
  c_ram?: Maybe<Scalars['Float']['output']>;
  drb_per_40?: Maybe<Scalars['Float']['output']>;
  drb_per_game?: Maybe<Scalars['Float']['output']>;
  dsi?: Maybe<Scalars['Float']['output']>;
  efg_pct?: Maybe<Scalars['Float']['output']>;
  fg_pct?: Maybe<Scalars['Float']['output']>;
  fgs?: Maybe<Scalars['Float']['output']>;
  ft_pct?: Maybe<Scalars['Float']['output']>;
  games_played?: Maybe<Scalars['Float']['output']>;
  gold?: Maybe<Scalars['Float']['output']>;
  orb_per_40?: Maybe<Scalars['Float']['output']>;
  orb_per_game?: Maybe<Scalars['Float']['output']>;
  poss_per_40?: Maybe<Scalars['Float']['output']>;
  poss_per_game?: Maybe<Scalars['Float']['output']>;
  ppp?: Maybe<Scalars['Float']['output']>;
  psp?: Maybe<Scalars['Float']['output']>;
  pts_per_40?: Maybe<Scalars['Float']['output']>;
  pts_per_game?: Maybe<Scalars['Float']['output']>;
  ram?: Maybe<Scalars['Float']['output']>;
  reb_per_40?: Maybe<Scalars['Float']['output']>;
  reb_per_game?: Maybe<Scalars['Float']['output']>;
  silver?: Maybe<Scalars['Float']['output']>;
  stl_per_40?: Maybe<Scalars['Float']['output']>;
  stl_per_game?: Maybe<Scalars['Float']['output']>;
  three_pa_per_40?: Maybe<Scalars['Float']['output']>;
  three_pa_per_game?: Maybe<Scalars['Float']['output']>;
  three_pe?: Maybe<Scalars['Float']['output']>;
  three_pm_per_40?: Maybe<Scalars['Float']['output']>;
  three_pm_per_game?: Maybe<Scalars['Float']['output']>;
  three_pt_pct?: Maybe<Scalars['Float']['output']>;
  total_ast?: Maybe<Scalars['Float']['output']>;
  total_blk?: Maybe<Scalars['Float']['output']>;
  total_drb?: Maybe<Scalars['Float']['output']>;
  total_fga?: Maybe<Scalars['Float']['output']>;
  total_fgm?: Maybe<Scalars['Float']['output']>;
  total_fta?: Maybe<Scalars['Float']['output']>;
  total_ftm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  total_orb?: Maybe<Scalars['Float']['output']>;
  total_pf?: Maybe<Scalars['Float']['output']>;
  total_poss?: Maybe<Scalars['Float']['output']>;
  total_pts?: Maybe<Scalars['Float']['output']>;
  total_reb?: Maybe<Scalars['Float']['output']>;
  total_stl?: Maybe<Scalars['Float']['output']>;
  total_three_pa?: Maybe<Scalars['Float']['output']>;
  total_three_pm?: Maybe<Scalars['Float']['output']>;
  total_tov?: Maybe<Scalars['Float']['output']>;
  total_two_pa?: Maybe<Scalars['Float']['output']>;
  total_two_pm?: Maybe<Scalars['Float']['output']>;
  tov_per_40?: Maybe<Scalars['Float']['output']>;
  tov_per_game?: Maybe<Scalars['Float']['output']>;
  ts_pct?: Maybe<Scalars['Float']['output']>;
  two_pa_per_40?: Maybe<Scalars['Float']['output']>;
  two_pa_per_game?: Maybe<Scalars['Float']['output']>;
  two_pm_per_40?: Maybe<Scalars['Float']['output']>;
  two_pm_per_game?: Maybe<Scalars['Float']['output']>;
  two_pt_pct?: Maybe<Scalars['Float']['output']>;
  usg_pct?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "player_event" */
export type Player_Event_Stddev_Samp_Order_By = {
  ast_per_40?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  atr?: InputMaybe<Order_By>;
  blk_per_40?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  bronze?: InputMaybe<Order_By>;
  c_ram?: InputMaybe<Order_By>;
  drb_per_40?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  dsi?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  fgs?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  orb_per_40?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_40?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  psp?: InputMaybe<Order_By>;
  pts_per_40?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  ram?: InputMaybe<Order_By>;
  reb_per_40?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  silver?: InputMaybe<Order_By>;
  stl_per_40?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_40?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pe?: InputMaybe<Order_By>;
  three_pm_per_40?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_per_40?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_40?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_40?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  usg_pct?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "player_event" */
export type Player_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Player_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Player_Event_Stream_Cursor_Value_Input = {
  ast_per_40?: InputMaybe<Scalars['numeric']['input']>;
  ast_per_game?: InputMaybe<Scalars['numeric']['input']>;
  ast_tov_ratio?: InputMaybe<Scalars['numeric']['input']>;
  atr?: InputMaybe<Scalars['numeric']['input']>;
  blk_per_40?: InputMaybe<Scalars['numeric']['input']>;
  blk_per_game?: InputMaybe<Scalars['numeric']['input']>;
  bronze?: InputMaybe<Scalars['Int']['input']>;
  c_ram?: InputMaybe<Scalars['numeric']['input']>;
  drb_per_40?: InputMaybe<Scalars['numeric']['input']>;
  drb_per_game?: InputMaybe<Scalars['numeric']['input']>;
  dsi?: InputMaybe<Scalars['numeric']['input']>;
  efg_pct?: InputMaybe<Scalars['numeric']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  fg_pct?: InputMaybe<Scalars['numeric']['input']>;
  fgs?: InputMaybe<Scalars['numeric']['input']>;
  ft_pct?: InputMaybe<Scalars['numeric']['input']>;
  games_played?: InputMaybe<Scalars['smallint']['input']>;
  gold?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  orb_per_40?: InputMaybe<Scalars['numeric']['input']>;
  orb_per_game?: InputMaybe<Scalars['numeric']['input']>;
  player_id?: InputMaybe<Scalars['uuid']['input']>;
  poss_per_40?: InputMaybe<Scalars['numeric']['input']>;
  poss_per_game?: InputMaybe<Scalars['numeric']['input']>;
  ppp?: InputMaybe<Scalars['numeric']['input']>;
  psp?: InputMaybe<Scalars['numeric']['input']>;
  pts_per_40?: InputMaybe<Scalars['numeric']['input']>;
  pts_per_game?: InputMaybe<Scalars['numeric']['input']>;
  ram?: InputMaybe<Scalars['numeric']['input']>;
  reb_per_40?: InputMaybe<Scalars['numeric']['input']>;
  reb_per_game?: InputMaybe<Scalars['numeric']['input']>;
  silver?: InputMaybe<Scalars['Int']['input']>;
  stl_per_40?: InputMaybe<Scalars['numeric']['input']>;
  stl_per_game?: InputMaybe<Scalars['numeric']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  three_pa_per_40?: InputMaybe<Scalars['numeric']['input']>;
  three_pa_per_game?: InputMaybe<Scalars['numeric']['input']>;
  three_pe?: InputMaybe<Scalars['numeric']['input']>;
  three_pm_per_40?: InputMaybe<Scalars['numeric']['input']>;
  three_pm_per_game?: InputMaybe<Scalars['numeric']['input']>;
  three_pt_pct?: InputMaybe<Scalars['numeric']['input']>;
  total_ast?: InputMaybe<Scalars['Int']['input']>;
  total_blk?: InputMaybe<Scalars['Int']['input']>;
  total_drb?: InputMaybe<Scalars['Int']['input']>;
  total_fga?: InputMaybe<Scalars['Int']['input']>;
  total_fgm?: InputMaybe<Scalars['Int']['input']>;
  total_fta?: InputMaybe<Scalars['Int']['input']>;
  total_ftm?: InputMaybe<Scalars['Int']['input']>;
  total_minutes?: InputMaybe<Scalars['Int']['input']>;
  total_orb?: InputMaybe<Scalars['Int']['input']>;
  total_pf?: InputMaybe<Scalars['Int']['input']>;
  total_poss?: InputMaybe<Scalars['numeric']['input']>;
  total_pts?: InputMaybe<Scalars['Int']['input']>;
  total_reb?: InputMaybe<Scalars['Int']['input']>;
  total_stl?: InputMaybe<Scalars['Int']['input']>;
  total_three_pa?: InputMaybe<Scalars['Int']['input']>;
  total_three_pm?: InputMaybe<Scalars['Int']['input']>;
  total_tov?: InputMaybe<Scalars['Int']['input']>;
  total_two_pa?: InputMaybe<Scalars['Int']['input']>;
  total_two_pm?: InputMaybe<Scalars['Int']['input']>;
  tov_per_40?: InputMaybe<Scalars['numeric']['input']>;
  tov_per_game?: InputMaybe<Scalars['numeric']['input']>;
  ts_pct?: InputMaybe<Scalars['numeric']['input']>;
  two_pa_per_40?: InputMaybe<Scalars['numeric']['input']>;
  two_pa_per_game?: InputMaybe<Scalars['numeric']['input']>;
  two_pm_per_40?: InputMaybe<Scalars['numeric']['input']>;
  two_pm_per_game?: InputMaybe<Scalars['numeric']['input']>;
  two_pt_pct?: InputMaybe<Scalars['numeric']['input']>;
  usg_pct?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Player_Event_Sum_Fields = {
  ast_per_40?: Maybe<Scalars['numeric']['output']>;
  ast_per_game?: Maybe<Scalars['numeric']['output']>;
  ast_tov_ratio?: Maybe<Scalars['numeric']['output']>;
  atr?: Maybe<Scalars['numeric']['output']>;
  blk_per_40?: Maybe<Scalars['numeric']['output']>;
  blk_per_game?: Maybe<Scalars['numeric']['output']>;
  bronze?: Maybe<Scalars['Int']['output']>;
  c_ram?: Maybe<Scalars['numeric']['output']>;
  drb_per_40?: Maybe<Scalars['numeric']['output']>;
  drb_per_game?: Maybe<Scalars['numeric']['output']>;
  dsi?: Maybe<Scalars['numeric']['output']>;
  efg_pct?: Maybe<Scalars['numeric']['output']>;
  fg_pct?: Maybe<Scalars['numeric']['output']>;
  fgs?: Maybe<Scalars['numeric']['output']>;
  ft_pct?: Maybe<Scalars['numeric']['output']>;
  games_played?: Maybe<Scalars['smallint']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  orb_per_40?: Maybe<Scalars['numeric']['output']>;
  orb_per_game?: Maybe<Scalars['numeric']['output']>;
  poss_per_40?: Maybe<Scalars['numeric']['output']>;
  poss_per_game?: Maybe<Scalars['numeric']['output']>;
  ppp?: Maybe<Scalars['numeric']['output']>;
  psp?: Maybe<Scalars['numeric']['output']>;
  pts_per_40?: Maybe<Scalars['numeric']['output']>;
  pts_per_game?: Maybe<Scalars['numeric']['output']>;
  ram?: Maybe<Scalars['numeric']['output']>;
  reb_per_40?: Maybe<Scalars['numeric']['output']>;
  reb_per_game?: Maybe<Scalars['numeric']['output']>;
  silver?: Maybe<Scalars['Int']['output']>;
  stl_per_40?: Maybe<Scalars['numeric']['output']>;
  stl_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pa_per_40?: Maybe<Scalars['numeric']['output']>;
  three_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pe?: Maybe<Scalars['numeric']['output']>;
  three_pm_per_40?: Maybe<Scalars['numeric']['output']>;
  three_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pt_pct?: Maybe<Scalars['numeric']['output']>;
  total_ast?: Maybe<Scalars['Int']['output']>;
  total_blk?: Maybe<Scalars['Int']['output']>;
  total_drb?: Maybe<Scalars['Int']['output']>;
  total_fga?: Maybe<Scalars['Int']['output']>;
  total_fgm?: Maybe<Scalars['Int']['output']>;
  total_fta?: Maybe<Scalars['Int']['output']>;
  total_ftm?: Maybe<Scalars['Int']['output']>;
  total_minutes?: Maybe<Scalars['Int']['output']>;
  total_orb?: Maybe<Scalars['Int']['output']>;
  total_pf?: Maybe<Scalars['Int']['output']>;
  total_poss?: Maybe<Scalars['numeric']['output']>;
  total_pts?: Maybe<Scalars['Int']['output']>;
  total_reb?: Maybe<Scalars['Int']['output']>;
  total_stl?: Maybe<Scalars['Int']['output']>;
  total_three_pa?: Maybe<Scalars['Int']['output']>;
  total_three_pm?: Maybe<Scalars['Int']['output']>;
  total_tov?: Maybe<Scalars['Int']['output']>;
  total_two_pa?: Maybe<Scalars['Int']['output']>;
  total_two_pm?: Maybe<Scalars['Int']['output']>;
  tov_per_40?: Maybe<Scalars['numeric']['output']>;
  tov_per_game?: Maybe<Scalars['numeric']['output']>;
  ts_pct?: Maybe<Scalars['numeric']['output']>;
  two_pa_per_40?: Maybe<Scalars['numeric']['output']>;
  two_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pm_per_40?: Maybe<Scalars['numeric']['output']>;
  two_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pt_pct?: Maybe<Scalars['numeric']['output']>;
  usg_pct?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "player_event" */
export type Player_Event_Sum_Order_By = {
  ast_per_40?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  atr?: InputMaybe<Order_By>;
  blk_per_40?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  bronze?: InputMaybe<Order_By>;
  c_ram?: InputMaybe<Order_By>;
  drb_per_40?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  dsi?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  fgs?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  orb_per_40?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_40?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  psp?: InputMaybe<Order_By>;
  pts_per_40?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  ram?: InputMaybe<Order_By>;
  reb_per_40?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  silver?: InputMaybe<Order_By>;
  stl_per_40?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_40?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pe?: InputMaybe<Order_By>;
  three_pm_per_40?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_per_40?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_40?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_40?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  usg_pct?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Player_Event_Var_Pop_Fields = {
  ast_per_40?: Maybe<Scalars['Float']['output']>;
  ast_per_game?: Maybe<Scalars['Float']['output']>;
  ast_tov_ratio?: Maybe<Scalars['Float']['output']>;
  atr?: Maybe<Scalars['Float']['output']>;
  blk_per_40?: Maybe<Scalars['Float']['output']>;
  blk_per_game?: Maybe<Scalars['Float']['output']>;
  bronze?: Maybe<Scalars['Float']['output']>;
  c_ram?: Maybe<Scalars['Float']['output']>;
  drb_per_40?: Maybe<Scalars['Float']['output']>;
  drb_per_game?: Maybe<Scalars['Float']['output']>;
  dsi?: Maybe<Scalars['Float']['output']>;
  efg_pct?: Maybe<Scalars['Float']['output']>;
  fg_pct?: Maybe<Scalars['Float']['output']>;
  fgs?: Maybe<Scalars['Float']['output']>;
  ft_pct?: Maybe<Scalars['Float']['output']>;
  games_played?: Maybe<Scalars['Float']['output']>;
  gold?: Maybe<Scalars['Float']['output']>;
  orb_per_40?: Maybe<Scalars['Float']['output']>;
  orb_per_game?: Maybe<Scalars['Float']['output']>;
  poss_per_40?: Maybe<Scalars['Float']['output']>;
  poss_per_game?: Maybe<Scalars['Float']['output']>;
  ppp?: Maybe<Scalars['Float']['output']>;
  psp?: Maybe<Scalars['Float']['output']>;
  pts_per_40?: Maybe<Scalars['Float']['output']>;
  pts_per_game?: Maybe<Scalars['Float']['output']>;
  ram?: Maybe<Scalars['Float']['output']>;
  reb_per_40?: Maybe<Scalars['Float']['output']>;
  reb_per_game?: Maybe<Scalars['Float']['output']>;
  silver?: Maybe<Scalars['Float']['output']>;
  stl_per_40?: Maybe<Scalars['Float']['output']>;
  stl_per_game?: Maybe<Scalars['Float']['output']>;
  three_pa_per_40?: Maybe<Scalars['Float']['output']>;
  three_pa_per_game?: Maybe<Scalars['Float']['output']>;
  three_pe?: Maybe<Scalars['Float']['output']>;
  three_pm_per_40?: Maybe<Scalars['Float']['output']>;
  three_pm_per_game?: Maybe<Scalars['Float']['output']>;
  three_pt_pct?: Maybe<Scalars['Float']['output']>;
  total_ast?: Maybe<Scalars['Float']['output']>;
  total_blk?: Maybe<Scalars['Float']['output']>;
  total_drb?: Maybe<Scalars['Float']['output']>;
  total_fga?: Maybe<Scalars['Float']['output']>;
  total_fgm?: Maybe<Scalars['Float']['output']>;
  total_fta?: Maybe<Scalars['Float']['output']>;
  total_ftm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  total_orb?: Maybe<Scalars['Float']['output']>;
  total_pf?: Maybe<Scalars['Float']['output']>;
  total_poss?: Maybe<Scalars['Float']['output']>;
  total_pts?: Maybe<Scalars['Float']['output']>;
  total_reb?: Maybe<Scalars['Float']['output']>;
  total_stl?: Maybe<Scalars['Float']['output']>;
  total_three_pa?: Maybe<Scalars['Float']['output']>;
  total_three_pm?: Maybe<Scalars['Float']['output']>;
  total_tov?: Maybe<Scalars['Float']['output']>;
  total_two_pa?: Maybe<Scalars['Float']['output']>;
  total_two_pm?: Maybe<Scalars['Float']['output']>;
  tov_per_40?: Maybe<Scalars['Float']['output']>;
  tov_per_game?: Maybe<Scalars['Float']['output']>;
  ts_pct?: Maybe<Scalars['Float']['output']>;
  two_pa_per_40?: Maybe<Scalars['Float']['output']>;
  two_pa_per_game?: Maybe<Scalars['Float']['output']>;
  two_pm_per_40?: Maybe<Scalars['Float']['output']>;
  two_pm_per_game?: Maybe<Scalars['Float']['output']>;
  two_pt_pct?: Maybe<Scalars['Float']['output']>;
  usg_pct?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "player_event" */
export type Player_Event_Var_Pop_Order_By = {
  ast_per_40?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  atr?: InputMaybe<Order_By>;
  blk_per_40?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  bronze?: InputMaybe<Order_By>;
  c_ram?: InputMaybe<Order_By>;
  drb_per_40?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  dsi?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  fgs?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  orb_per_40?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_40?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  psp?: InputMaybe<Order_By>;
  pts_per_40?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  ram?: InputMaybe<Order_By>;
  reb_per_40?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  silver?: InputMaybe<Order_By>;
  stl_per_40?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_40?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pe?: InputMaybe<Order_By>;
  three_pm_per_40?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_per_40?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_40?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_40?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  usg_pct?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Player_Event_Var_Samp_Fields = {
  ast_per_40?: Maybe<Scalars['Float']['output']>;
  ast_per_game?: Maybe<Scalars['Float']['output']>;
  ast_tov_ratio?: Maybe<Scalars['Float']['output']>;
  atr?: Maybe<Scalars['Float']['output']>;
  blk_per_40?: Maybe<Scalars['Float']['output']>;
  blk_per_game?: Maybe<Scalars['Float']['output']>;
  bronze?: Maybe<Scalars['Float']['output']>;
  c_ram?: Maybe<Scalars['Float']['output']>;
  drb_per_40?: Maybe<Scalars['Float']['output']>;
  drb_per_game?: Maybe<Scalars['Float']['output']>;
  dsi?: Maybe<Scalars['Float']['output']>;
  efg_pct?: Maybe<Scalars['Float']['output']>;
  fg_pct?: Maybe<Scalars['Float']['output']>;
  fgs?: Maybe<Scalars['Float']['output']>;
  ft_pct?: Maybe<Scalars['Float']['output']>;
  games_played?: Maybe<Scalars['Float']['output']>;
  gold?: Maybe<Scalars['Float']['output']>;
  orb_per_40?: Maybe<Scalars['Float']['output']>;
  orb_per_game?: Maybe<Scalars['Float']['output']>;
  poss_per_40?: Maybe<Scalars['Float']['output']>;
  poss_per_game?: Maybe<Scalars['Float']['output']>;
  ppp?: Maybe<Scalars['Float']['output']>;
  psp?: Maybe<Scalars['Float']['output']>;
  pts_per_40?: Maybe<Scalars['Float']['output']>;
  pts_per_game?: Maybe<Scalars['Float']['output']>;
  ram?: Maybe<Scalars['Float']['output']>;
  reb_per_40?: Maybe<Scalars['Float']['output']>;
  reb_per_game?: Maybe<Scalars['Float']['output']>;
  silver?: Maybe<Scalars['Float']['output']>;
  stl_per_40?: Maybe<Scalars['Float']['output']>;
  stl_per_game?: Maybe<Scalars['Float']['output']>;
  three_pa_per_40?: Maybe<Scalars['Float']['output']>;
  three_pa_per_game?: Maybe<Scalars['Float']['output']>;
  three_pe?: Maybe<Scalars['Float']['output']>;
  three_pm_per_40?: Maybe<Scalars['Float']['output']>;
  three_pm_per_game?: Maybe<Scalars['Float']['output']>;
  three_pt_pct?: Maybe<Scalars['Float']['output']>;
  total_ast?: Maybe<Scalars['Float']['output']>;
  total_blk?: Maybe<Scalars['Float']['output']>;
  total_drb?: Maybe<Scalars['Float']['output']>;
  total_fga?: Maybe<Scalars['Float']['output']>;
  total_fgm?: Maybe<Scalars['Float']['output']>;
  total_fta?: Maybe<Scalars['Float']['output']>;
  total_ftm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  total_orb?: Maybe<Scalars['Float']['output']>;
  total_pf?: Maybe<Scalars['Float']['output']>;
  total_poss?: Maybe<Scalars['Float']['output']>;
  total_pts?: Maybe<Scalars['Float']['output']>;
  total_reb?: Maybe<Scalars['Float']['output']>;
  total_stl?: Maybe<Scalars['Float']['output']>;
  total_three_pa?: Maybe<Scalars['Float']['output']>;
  total_three_pm?: Maybe<Scalars['Float']['output']>;
  total_tov?: Maybe<Scalars['Float']['output']>;
  total_two_pa?: Maybe<Scalars['Float']['output']>;
  total_two_pm?: Maybe<Scalars['Float']['output']>;
  tov_per_40?: Maybe<Scalars['Float']['output']>;
  tov_per_game?: Maybe<Scalars['Float']['output']>;
  ts_pct?: Maybe<Scalars['Float']['output']>;
  two_pa_per_40?: Maybe<Scalars['Float']['output']>;
  two_pa_per_game?: Maybe<Scalars['Float']['output']>;
  two_pm_per_40?: Maybe<Scalars['Float']['output']>;
  two_pm_per_game?: Maybe<Scalars['Float']['output']>;
  two_pt_pct?: Maybe<Scalars['Float']['output']>;
  usg_pct?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "player_event" */
export type Player_Event_Var_Samp_Order_By = {
  ast_per_40?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  atr?: InputMaybe<Order_By>;
  blk_per_40?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  bronze?: InputMaybe<Order_By>;
  c_ram?: InputMaybe<Order_By>;
  drb_per_40?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  dsi?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  fgs?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  orb_per_40?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_40?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  psp?: InputMaybe<Order_By>;
  pts_per_40?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  ram?: InputMaybe<Order_By>;
  reb_per_40?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  silver?: InputMaybe<Order_By>;
  stl_per_40?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_40?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pe?: InputMaybe<Order_By>;
  three_pm_per_40?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_per_40?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_40?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_40?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  usg_pct?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Player_Event_Variance_Fields = {
  ast_per_40?: Maybe<Scalars['Float']['output']>;
  ast_per_game?: Maybe<Scalars['Float']['output']>;
  ast_tov_ratio?: Maybe<Scalars['Float']['output']>;
  atr?: Maybe<Scalars['Float']['output']>;
  blk_per_40?: Maybe<Scalars['Float']['output']>;
  blk_per_game?: Maybe<Scalars['Float']['output']>;
  bronze?: Maybe<Scalars['Float']['output']>;
  c_ram?: Maybe<Scalars['Float']['output']>;
  drb_per_40?: Maybe<Scalars['Float']['output']>;
  drb_per_game?: Maybe<Scalars['Float']['output']>;
  dsi?: Maybe<Scalars['Float']['output']>;
  efg_pct?: Maybe<Scalars['Float']['output']>;
  fg_pct?: Maybe<Scalars['Float']['output']>;
  fgs?: Maybe<Scalars['Float']['output']>;
  ft_pct?: Maybe<Scalars['Float']['output']>;
  games_played?: Maybe<Scalars['Float']['output']>;
  gold?: Maybe<Scalars['Float']['output']>;
  orb_per_40?: Maybe<Scalars['Float']['output']>;
  orb_per_game?: Maybe<Scalars['Float']['output']>;
  poss_per_40?: Maybe<Scalars['Float']['output']>;
  poss_per_game?: Maybe<Scalars['Float']['output']>;
  ppp?: Maybe<Scalars['Float']['output']>;
  psp?: Maybe<Scalars['Float']['output']>;
  pts_per_40?: Maybe<Scalars['Float']['output']>;
  pts_per_game?: Maybe<Scalars['Float']['output']>;
  ram?: Maybe<Scalars['Float']['output']>;
  reb_per_40?: Maybe<Scalars['Float']['output']>;
  reb_per_game?: Maybe<Scalars['Float']['output']>;
  silver?: Maybe<Scalars['Float']['output']>;
  stl_per_40?: Maybe<Scalars['Float']['output']>;
  stl_per_game?: Maybe<Scalars['Float']['output']>;
  three_pa_per_40?: Maybe<Scalars['Float']['output']>;
  three_pa_per_game?: Maybe<Scalars['Float']['output']>;
  three_pe?: Maybe<Scalars['Float']['output']>;
  three_pm_per_40?: Maybe<Scalars['Float']['output']>;
  three_pm_per_game?: Maybe<Scalars['Float']['output']>;
  three_pt_pct?: Maybe<Scalars['Float']['output']>;
  total_ast?: Maybe<Scalars['Float']['output']>;
  total_blk?: Maybe<Scalars['Float']['output']>;
  total_drb?: Maybe<Scalars['Float']['output']>;
  total_fga?: Maybe<Scalars['Float']['output']>;
  total_fgm?: Maybe<Scalars['Float']['output']>;
  total_fta?: Maybe<Scalars['Float']['output']>;
  total_ftm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  total_orb?: Maybe<Scalars['Float']['output']>;
  total_pf?: Maybe<Scalars['Float']['output']>;
  total_poss?: Maybe<Scalars['Float']['output']>;
  total_pts?: Maybe<Scalars['Float']['output']>;
  total_reb?: Maybe<Scalars['Float']['output']>;
  total_stl?: Maybe<Scalars['Float']['output']>;
  total_three_pa?: Maybe<Scalars['Float']['output']>;
  total_three_pm?: Maybe<Scalars['Float']['output']>;
  total_tov?: Maybe<Scalars['Float']['output']>;
  total_two_pa?: Maybe<Scalars['Float']['output']>;
  total_two_pm?: Maybe<Scalars['Float']['output']>;
  tov_per_40?: Maybe<Scalars['Float']['output']>;
  tov_per_game?: Maybe<Scalars['Float']['output']>;
  ts_pct?: Maybe<Scalars['Float']['output']>;
  two_pa_per_40?: Maybe<Scalars['Float']['output']>;
  two_pa_per_game?: Maybe<Scalars['Float']['output']>;
  two_pm_per_40?: Maybe<Scalars['Float']['output']>;
  two_pm_per_game?: Maybe<Scalars['Float']['output']>;
  two_pt_pct?: Maybe<Scalars['Float']['output']>;
  usg_pct?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "player_event" */
export type Player_Event_Variance_Order_By = {
  ast_per_40?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  atr?: InputMaybe<Order_By>;
  blk_per_40?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  bronze?: InputMaybe<Order_By>;
  c_ram?: InputMaybe<Order_By>;
  drb_per_40?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  dsi?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  fgs?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  orb_per_40?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_40?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  psp?: InputMaybe<Order_By>;
  pts_per_40?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  ram?: InputMaybe<Order_By>;
  reb_per_40?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  silver?: InputMaybe<Order_By>;
  stl_per_40?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_40?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pe?: InputMaybe<Order_By>;
  three_pm_per_40?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_per_40?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_40?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_40?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  usg_pct?: InputMaybe<Order_By>;
};

/** columns and relationships of "player_game" */
export type Player_Game = {
  ast?: Maybe<Scalars['Int']['output']>;
  blk?: Maybe<Scalars['Int']['output']>;
  created_date: Scalars['timestamptz']['output'];
  drb?: Maybe<Scalars['Int']['output']>;
  fga?: Maybe<Scalars['Int']['output']>;
  fgm?: Maybe<Scalars['Int']['output']>;
  fta?: Maybe<Scalars['Int']['output']>;
  ftm?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  game: Game;
  game_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  jersey_number?: Maybe<Scalars['String']['output']>;
  minutes?: Maybe<Scalars['numeric']['output']>;
  modified_date: Scalars['timestamptz']['output'];
  opp_team_id: Scalars['uuid']['output'];
  orb?: Maybe<Scalars['Int']['output']>;
  pf?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  player: Player;
  player_id: Scalars['uuid']['output'];
  position?: Maybe<Scalars['String']['output']>;
  pts?: Maybe<Scalars['Int']['output']>;
  reb?: Maybe<Scalars['Int']['output']>;
  stl?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  team: Team;
  team_id: Scalars['uuid']['output'];
  three_pa?: Maybe<Scalars['Int']['output']>;
  three_pm?: Maybe<Scalars['Int']['output']>;
  tov?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "player_game" */
export type Player_Game_Aggregate = {
  aggregate?: Maybe<Player_Game_Aggregate_Fields>;
  nodes: Array<Player_Game>;
};

export type Player_Game_Aggregate_Bool_Exp = {
  count?: InputMaybe<Player_Game_Aggregate_Bool_Exp_Count>;
};

export type Player_Game_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Player_Game_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Player_Game_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "player_game" */
export type Player_Game_Aggregate_Fields = {
  avg?: Maybe<Player_Game_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Player_Game_Max_Fields>;
  min?: Maybe<Player_Game_Min_Fields>;
  stddev?: Maybe<Player_Game_Stddev_Fields>;
  stddev_pop?: Maybe<Player_Game_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Player_Game_Stddev_Samp_Fields>;
  sum?: Maybe<Player_Game_Sum_Fields>;
  var_pop?: Maybe<Player_Game_Var_Pop_Fields>;
  var_samp?: Maybe<Player_Game_Var_Samp_Fields>;
  variance?: Maybe<Player_Game_Variance_Fields>;
};


/** aggregate fields of "player_game" */
export type Player_Game_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Player_Game_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "player_game" */
export type Player_Game_Aggregate_Order_By = {
  avg?: InputMaybe<Player_Game_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Player_Game_Max_Order_By>;
  min?: InputMaybe<Player_Game_Min_Order_By>;
  stddev?: InputMaybe<Player_Game_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Player_Game_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Player_Game_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Player_Game_Sum_Order_By>;
  var_pop?: InputMaybe<Player_Game_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Player_Game_Var_Samp_Order_By>;
  variance?: InputMaybe<Player_Game_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Player_Game_Avg_Fields = {
  ast?: Maybe<Scalars['Float']['output']>;
  blk?: Maybe<Scalars['Float']['output']>;
  drb?: Maybe<Scalars['Float']['output']>;
  fga?: Maybe<Scalars['Float']['output']>;
  fgm?: Maybe<Scalars['Float']['output']>;
  fta?: Maybe<Scalars['Float']['output']>;
  ftm?: Maybe<Scalars['Float']['output']>;
  minutes?: Maybe<Scalars['Float']['output']>;
  orb?: Maybe<Scalars['Float']['output']>;
  pf?: Maybe<Scalars['Float']['output']>;
  pts?: Maybe<Scalars['Float']['output']>;
  reb?: Maybe<Scalars['Float']['output']>;
  stl?: Maybe<Scalars['Float']['output']>;
  three_pa?: Maybe<Scalars['Float']['output']>;
  three_pm?: Maybe<Scalars['Float']['output']>;
  tov?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "player_game" */
export type Player_Game_Avg_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  minutes?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "player_game". All fields are combined with a logical 'AND'. */
export type Player_Game_Bool_Exp = {
  _and?: InputMaybe<Array<Player_Game_Bool_Exp>>;
  _not?: InputMaybe<Player_Game_Bool_Exp>;
  _or?: InputMaybe<Array<Player_Game_Bool_Exp>>;
  ast?: InputMaybe<Int_Comparison_Exp>;
  blk?: InputMaybe<Int_Comparison_Exp>;
  created_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  drb?: InputMaybe<Int_Comparison_Exp>;
  fga?: InputMaybe<Int_Comparison_Exp>;
  fgm?: InputMaybe<Int_Comparison_Exp>;
  fta?: InputMaybe<Int_Comparison_Exp>;
  ftm?: InputMaybe<Int_Comparison_Exp>;
  game?: InputMaybe<Game_Bool_Exp>;
  game_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  jersey_number?: InputMaybe<String_Comparison_Exp>;
  minutes?: InputMaybe<Numeric_Comparison_Exp>;
  modified_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  opp_team_id?: InputMaybe<Uuid_Comparison_Exp>;
  orb?: InputMaybe<Int_Comparison_Exp>;
  pf?: InputMaybe<Int_Comparison_Exp>;
  player?: InputMaybe<Player_Bool_Exp>;
  player_id?: InputMaybe<Uuid_Comparison_Exp>;
  position?: InputMaybe<String_Comparison_Exp>;
  pts?: InputMaybe<Int_Comparison_Exp>;
  reb?: InputMaybe<Int_Comparison_Exp>;
  stl?: InputMaybe<Int_Comparison_Exp>;
  team?: InputMaybe<Team_Bool_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
  three_pa?: InputMaybe<Int_Comparison_Exp>;
  three_pm?: InputMaybe<Int_Comparison_Exp>;
  tov?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Player_Game_Max_Fields = {
  ast?: Maybe<Scalars['Int']['output']>;
  blk?: Maybe<Scalars['Int']['output']>;
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  drb?: Maybe<Scalars['Int']['output']>;
  fga?: Maybe<Scalars['Int']['output']>;
  fgm?: Maybe<Scalars['Int']['output']>;
  fta?: Maybe<Scalars['Int']['output']>;
  ftm?: Maybe<Scalars['Int']['output']>;
  game_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  jersey_number?: Maybe<Scalars['String']['output']>;
  minutes?: Maybe<Scalars['numeric']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  opp_team_id?: Maybe<Scalars['uuid']['output']>;
  orb?: Maybe<Scalars['Int']['output']>;
  pf?: Maybe<Scalars['Int']['output']>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  pts?: Maybe<Scalars['Int']['output']>;
  reb?: Maybe<Scalars['Int']['output']>;
  stl?: Maybe<Scalars['Int']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  three_pa?: Maybe<Scalars['Int']['output']>;
  three_pm?: Maybe<Scalars['Int']['output']>;
  tov?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "player_game" */
export type Player_Game_Max_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  jersey_number?: InputMaybe<Order_By>;
  minutes?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  opp_team_id?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Game_Min_Fields = {
  ast?: Maybe<Scalars['Int']['output']>;
  blk?: Maybe<Scalars['Int']['output']>;
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  drb?: Maybe<Scalars['Int']['output']>;
  fga?: Maybe<Scalars['Int']['output']>;
  fgm?: Maybe<Scalars['Int']['output']>;
  fta?: Maybe<Scalars['Int']['output']>;
  ftm?: Maybe<Scalars['Int']['output']>;
  game_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  jersey_number?: Maybe<Scalars['String']['output']>;
  minutes?: Maybe<Scalars['numeric']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  opp_team_id?: Maybe<Scalars['uuid']['output']>;
  orb?: Maybe<Scalars['Int']['output']>;
  pf?: Maybe<Scalars['Int']['output']>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  pts?: Maybe<Scalars['Int']['output']>;
  reb?: Maybe<Scalars['Int']['output']>;
  stl?: Maybe<Scalars['Int']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  three_pa?: Maybe<Scalars['Int']['output']>;
  three_pm?: Maybe<Scalars['Int']['output']>;
  tov?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "player_game" */
export type Player_Game_Min_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  jersey_number?: InputMaybe<Order_By>;
  minutes?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  opp_team_id?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "player_game". */
export type Player_Game_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  game?: InputMaybe<Game_Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  jersey_number?: InputMaybe<Order_By>;
  minutes?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  opp_team_id?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  player?: InputMaybe<Player_Order_By>;
  player_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  team?: InputMaybe<Team_Order_By>;
  team_id?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** select columns of table "player_game" */
export type Player_Game_Select_Column =
  /** column name */
  | 'ast'
  /** column name */
  | 'blk'
  /** column name */
  | 'created_date'
  /** column name */
  | 'drb'
  /** column name */
  | 'fga'
  /** column name */
  | 'fgm'
  /** column name */
  | 'fta'
  /** column name */
  | 'ftm'
  /** column name */
  | 'game_id'
  /** column name */
  | 'id'
  /** column name */
  | 'jersey_number'
  /** column name */
  | 'minutes'
  /** column name */
  | 'modified_date'
  /** column name */
  | 'opp_team_id'
  /** column name */
  | 'orb'
  /** column name */
  | 'pf'
  /** column name */
  | 'player_id'
  /** column name */
  | 'position'
  /** column name */
  | 'pts'
  /** column name */
  | 'reb'
  /** column name */
  | 'stl'
  /** column name */
  | 'team_id'
  /** column name */
  | 'three_pa'
  /** column name */
  | 'three_pm'
  /** column name */
  | 'tov';

/** aggregate stddev on columns */
export type Player_Game_Stddev_Fields = {
  ast?: Maybe<Scalars['Float']['output']>;
  blk?: Maybe<Scalars['Float']['output']>;
  drb?: Maybe<Scalars['Float']['output']>;
  fga?: Maybe<Scalars['Float']['output']>;
  fgm?: Maybe<Scalars['Float']['output']>;
  fta?: Maybe<Scalars['Float']['output']>;
  ftm?: Maybe<Scalars['Float']['output']>;
  minutes?: Maybe<Scalars['Float']['output']>;
  orb?: Maybe<Scalars['Float']['output']>;
  pf?: Maybe<Scalars['Float']['output']>;
  pts?: Maybe<Scalars['Float']['output']>;
  reb?: Maybe<Scalars['Float']['output']>;
  stl?: Maybe<Scalars['Float']['output']>;
  three_pa?: Maybe<Scalars['Float']['output']>;
  three_pm?: Maybe<Scalars['Float']['output']>;
  tov?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "player_game" */
export type Player_Game_Stddev_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  minutes?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Player_Game_Stddev_Pop_Fields = {
  ast?: Maybe<Scalars['Float']['output']>;
  blk?: Maybe<Scalars['Float']['output']>;
  drb?: Maybe<Scalars['Float']['output']>;
  fga?: Maybe<Scalars['Float']['output']>;
  fgm?: Maybe<Scalars['Float']['output']>;
  fta?: Maybe<Scalars['Float']['output']>;
  ftm?: Maybe<Scalars['Float']['output']>;
  minutes?: Maybe<Scalars['Float']['output']>;
  orb?: Maybe<Scalars['Float']['output']>;
  pf?: Maybe<Scalars['Float']['output']>;
  pts?: Maybe<Scalars['Float']['output']>;
  reb?: Maybe<Scalars['Float']['output']>;
  stl?: Maybe<Scalars['Float']['output']>;
  three_pa?: Maybe<Scalars['Float']['output']>;
  three_pm?: Maybe<Scalars['Float']['output']>;
  tov?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "player_game" */
export type Player_Game_Stddev_Pop_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  minutes?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Player_Game_Stddev_Samp_Fields = {
  ast?: Maybe<Scalars['Float']['output']>;
  blk?: Maybe<Scalars['Float']['output']>;
  drb?: Maybe<Scalars['Float']['output']>;
  fga?: Maybe<Scalars['Float']['output']>;
  fgm?: Maybe<Scalars['Float']['output']>;
  fta?: Maybe<Scalars['Float']['output']>;
  ftm?: Maybe<Scalars['Float']['output']>;
  minutes?: Maybe<Scalars['Float']['output']>;
  orb?: Maybe<Scalars['Float']['output']>;
  pf?: Maybe<Scalars['Float']['output']>;
  pts?: Maybe<Scalars['Float']['output']>;
  reb?: Maybe<Scalars['Float']['output']>;
  stl?: Maybe<Scalars['Float']['output']>;
  three_pa?: Maybe<Scalars['Float']['output']>;
  three_pm?: Maybe<Scalars['Float']['output']>;
  tov?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "player_game" */
export type Player_Game_Stddev_Samp_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  minutes?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "player_game" */
export type Player_Game_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Player_Game_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Player_Game_Stream_Cursor_Value_Input = {
  ast?: InputMaybe<Scalars['Int']['input']>;
  blk?: InputMaybe<Scalars['Int']['input']>;
  created_date?: InputMaybe<Scalars['timestamptz']['input']>;
  drb?: InputMaybe<Scalars['Int']['input']>;
  fga?: InputMaybe<Scalars['Int']['input']>;
  fgm?: InputMaybe<Scalars['Int']['input']>;
  fta?: InputMaybe<Scalars['Int']['input']>;
  ftm?: InputMaybe<Scalars['Int']['input']>;
  game_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  jersey_number?: InputMaybe<Scalars['String']['input']>;
  minutes?: InputMaybe<Scalars['numeric']['input']>;
  modified_date?: InputMaybe<Scalars['timestamptz']['input']>;
  opp_team_id?: InputMaybe<Scalars['uuid']['input']>;
  orb?: InputMaybe<Scalars['Int']['input']>;
  pf?: InputMaybe<Scalars['Int']['input']>;
  player_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  pts?: InputMaybe<Scalars['Int']['input']>;
  reb?: InputMaybe<Scalars['Int']['input']>;
  stl?: InputMaybe<Scalars['Int']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  three_pa?: InputMaybe<Scalars['Int']['input']>;
  three_pm?: InputMaybe<Scalars['Int']['input']>;
  tov?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Player_Game_Sum_Fields = {
  ast?: Maybe<Scalars['Int']['output']>;
  blk?: Maybe<Scalars['Int']['output']>;
  drb?: Maybe<Scalars['Int']['output']>;
  fga?: Maybe<Scalars['Int']['output']>;
  fgm?: Maybe<Scalars['Int']['output']>;
  fta?: Maybe<Scalars['Int']['output']>;
  ftm?: Maybe<Scalars['Int']['output']>;
  minutes?: Maybe<Scalars['numeric']['output']>;
  orb?: Maybe<Scalars['Int']['output']>;
  pf?: Maybe<Scalars['Int']['output']>;
  pts?: Maybe<Scalars['Int']['output']>;
  reb?: Maybe<Scalars['Int']['output']>;
  stl?: Maybe<Scalars['Int']['output']>;
  three_pa?: Maybe<Scalars['Int']['output']>;
  three_pm?: Maybe<Scalars['Int']['output']>;
  tov?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "player_game" */
export type Player_Game_Sum_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  minutes?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Player_Game_Var_Pop_Fields = {
  ast?: Maybe<Scalars['Float']['output']>;
  blk?: Maybe<Scalars['Float']['output']>;
  drb?: Maybe<Scalars['Float']['output']>;
  fga?: Maybe<Scalars['Float']['output']>;
  fgm?: Maybe<Scalars['Float']['output']>;
  fta?: Maybe<Scalars['Float']['output']>;
  ftm?: Maybe<Scalars['Float']['output']>;
  minutes?: Maybe<Scalars['Float']['output']>;
  orb?: Maybe<Scalars['Float']['output']>;
  pf?: Maybe<Scalars['Float']['output']>;
  pts?: Maybe<Scalars['Float']['output']>;
  reb?: Maybe<Scalars['Float']['output']>;
  stl?: Maybe<Scalars['Float']['output']>;
  three_pa?: Maybe<Scalars['Float']['output']>;
  three_pm?: Maybe<Scalars['Float']['output']>;
  tov?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "player_game" */
export type Player_Game_Var_Pop_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  minutes?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Player_Game_Var_Samp_Fields = {
  ast?: Maybe<Scalars['Float']['output']>;
  blk?: Maybe<Scalars['Float']['output']>;
  drb?: Maybe<Scalars['Float']['output']>;
  fga?: Maybe<Scalars['Float']['output']>;
  fgm?: Maybe<Scalars['Float']['output']>;
  fta?: Maybe<Scalars['Float']['output']>;
  ftm?: Maybe<Scalars['Float']['output']>;
  minutes?: Maybe<Scalars['Float']['output']>;
  orb?: Maybe<Scalars['Float']['output']>;
  pf?: Maybe<Scalars['Float']['output']>;
  pts?: Maybe<Scalars['Float']['output']>;
  reb?: Maybe<Scalars['Float']['output']>;
  stl?: Maybe<Scalars['Float']['output']>;
  three_pa?: Maybe<Scalars['Float']['output']>;
  three_pm?: Maybe<Scalars['Float']['output']>;
  tov?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "player_game" */
export type Player_Game_Var_Samp_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  minutes?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Player_Game_Variance_Fields = {
  ast?: Maybe<Scalars['Float']['output']>;
  blk?: Maybe<Scalars['Float']['output']>;
  drb?: Maybe<Scalars['Float']['output']>;
  fga?: Maybe<Scalars['Float']['output']>;
  fgm?: Maybe<Scalars['Float']['output']>;
  fta?: Maybe<Scalars['Float']['output']>;
  ftm?: Maybe<Scalars['Float']['output']>;
  minutes?: Maybe<Scalars['Float']['output']>;
  orb?: Maybe<Scalars['Float']['output']>;
  pf?: Maybe<Scalars['Float']['output']>;
  pts?: Maybe<Scalars['Float']['output']>;
  reb?: Maybe<Scalars['Float']['output']>;
  stl?: Maybe<Scalars['Float']['output']>;
  three_pa?: Maybe<Scalars['Float']['output']>;
  three_pm?: Maybe<Scalars['Float']['output']>;
  tov?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "player_game" */
export type Player_Game_Variance_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  minutes?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Player_Max_Fields = {
  alias?: Maybe<Array<Scalars['String']['output']>>;
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  date_of_birth?: Maybe<Scalars['date']['output']>;
  grad_year?: Maybe<Scalars['Int']['output']>;
  height_inches?: Maybe<Scalars['Int']['output']>;
  highschool?: Maybe<Scalars['String']['output']>;
  hometown?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  weight_lb?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Player_Min_Fields = {
  alias?: Maybe<Array<Scalars['String']['output']>>;
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  date_of_birth?: Maybe<Scalars['date']['output']>;
  grad_year?: Maybe<Scalars['Int']['output']>;
  height_inches?: Maybe<Scalars['Int']['output']>;
  highschool?: Maybe<Scalars['String']['output']>;
  hometown?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  weight_lb?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "player". */
export type Player_Order_By = {
  alias?: InputMaybe<Order_By>;
  biodata_aggregate?: InputMaybe<Biodata_Aggregate_Order_By>;
  created_date?: InputMaybe<Order_By>;
  date_of_birth?: InputMaybe<Order_By>;
  grad_year?: InputMaybe<Order_By>;
  height_inches?: InputMaybe<Order_By>;
  highschool?: InputMaybe<Order_By>;
  hometown?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nationality?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  player_event_aggregate?: InputMaybe<Player_Event_Aggregate_Order_By>;
  player_game_aggregate?: InputMaybe<Player_Game_Aggregate_Order_By>;
  player_team_aggregate?: InputMaybe<Player_Team_Aggregate_Order_By>;
  position?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  weight_lb?: InputMaybe<Order_By>;
};

/** select columns of table "player" */
export type Player_Select_Column =
  /** column name */
  | 'alias'
  /** column name */
  | 'created_date'
  /** column name */
  | 'date_of_birth'
  /** column name */
  | 'grad_year'
  /** column name */
  | 'height_inches'
  /** column name */
  | 'highschool'
  /** column name */
  | 'hometown'
  /** column name */
  | 'id'
  /** column name */
  | 'modified_date'
  /** column name */
  | 'name'
  /** column name */
  | 'nationality'
  /** column name */
  | 'phone'
  /** column name */
  | 'position'
  /** column name */
  | 'state'
  /** column name */
  | 'weight_lb';

/** aggregate stddev on columns */
export type Player_Stddev_Fields = {
  grad_year?: Maybe<Scalars['Float']['output']>;
  height_inches?: Maybe<Scalars['Float']['output']>;
  weight_lb?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Player_Stddev_Pop_Fields = {
  grad_year?: Maybe<Scalars['Float']['output']>;
  height_inches?: Maybe<Scalars['Float']['output']>;
  weight_lb?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Player_Stddev_Samp_Fields = {
  grad_year?: Maybe<Scalars['Float']['output']>;
  height_inches?: Maybe<Scalars['Float']['output']>;
  weight_lb?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "player" */
export type Player_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Player_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Player_Stream_Cursor_Value_Input = {
  alias?: InputMaybe<Array<Scalars['String']['input']>>;
  created_date?: InputMaybe<Scalars['timestamptz']['input']>;
  date_of_birth?: InputMaybe<Scalars['date']['input']>;
  grad_year?: InputMaybe<Scalars['Int']['input']>;
  height_inches?: InputMaybe<Scalars['Int']['input']>;
  highschool?: InputMaybe<Scalars['String']['input']>;
  hometown?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  modified_date?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  weight_lb?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Player_Sum_Fields = {
  grad_year?: Maybe<Scalars['Int']['output']>;
  height_inches?: Maybe<Scalars['Int']['output']>;
  weight_lb?: Maybe<Scalars['Int']['output']>;
};

/** columns and relationships of "player_team" */
export type Player_Team = {
  created_date: Scalars['timestamptz']['output'];
  end_date?: Maybe<Scalars['date']['output']>;
  id: Scalars['uuid']['output'];
  modified_date: Scalars['timestamptz']['output'];
  /** An object relationship */
  player: Player;
  player_id: Scalars['uuid']['output'];
  start_date?: Maybe<Scalars['date']['output']>;
  /** An object relationship */
  team: Team;
  team_id: Scalars['uuid']['output'];
};

/** aggregated selection of "player_team" */
export type Player_Team_Aggregate = {
  aggregate?: Maybe<Player_Team_Aggregate_Fields>;
  nodes: Array<Player_Team>;
};

export type Player_Team_Aggregate_Bool_Exp = {
  count?: InputMaybe<Player_Team_Aggregate_Bool_Exp_Count>;
};

export type Player_Team_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Player_Team_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Player_Team_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "player_team" */
export type Player_Team_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Player_Team_Max_Fields>;
  min?: Maybe<Player_Team_Min_Fields>;
};


/** aggregate fields of "player_team" */
export type Player_Team_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Player_Team_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "player_team" */
export type Player_Team_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Player_Team_Max_Order_By>;
  min?: InputMaybe<Player_Team_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "player_team". All fields are combined with a logical 'AND'. */
export type Player_Team_Bool_Exp = {
  _and?: InputMaybe<Array<Player_Team_Bool_Exp>>;
  _not?: InputMaybe<Player_Team_Bool_Exp>;
  _or?: InputMaybe<Array<Player_Team_Bool_Exp>>;
  created_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  modified_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  player?: InputMaybe<Player_Bool_Exp>;
  player_id?: InputMaybe<Uuid_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  team?: InputMaybe<Team_Bool_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Player_Team_Max_Fields = {
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "player_team" */
export type Player_Team_Max_Order_By = {
  created_date?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Team_Min_Fields = {
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "player_team" */
export type Player_Team_Min_Order_By = {
  created_date?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "player_team". */
export type Player_Team_Order_By = {
  created_date?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  player?: InputMaybe<Player_Order_By>;
  player_id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  team?: InputMaybe<Team_Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** select columns of table "player_team" */
export type Player_Team_Select_Column =
  /** column name */
  | 'created_date'
  /** column name */
  | 'end_date'
  /** column name */
  | 'id'
  /** column name */
  | 'modified_date'
  /** column name */
  | 'player_id'
  /** column name */
  | 'start_date'
  /** column name */
  | 'team_id';

/** Streaming cursor of the table "player_team" */
export type Player_Team_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Player_Team_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Player_Team_Stream_Cursor_Value_Input = {
  created_date?: InputMaybe<Scalars['timestamptz']['input']>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  modified_date?: InputMaybe<Scalars['timestamptz']['input']>;
  player_id?: InputMaybe<Scalars['uuid']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate var_pop on columns */
export type Player_Var_Pop_Fields = {
  grad_year?: Maybe<Scalars['Float']['output']>;
  height_inches?: Maybe<Scalars['Float']['output']>;
  weight_lb?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Player_Var_Samp_Fields = {
  grad_year?: Maybe<Scalars['Float']['output']>;
  height_inches?: Maybe<Scalars['Float']['output']>;
  weight_lb?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Player_Variance_Fields = {
  grad_year?: Maybe<Scalars['Float']['output']>;
  height_inches?: Maybe<Scalars['Float']['output']>;
  weight_lb?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  /** An array relationship */
  biodata: Array<Biodata>;
  /** An aggregate relationship */
  biodata_aggregate: Biodata_Aggregate;
  /** fetch data from the table: "conference" */
  conference: Array<Conference>;
  /** fetch aggregated fields from the table: "conference" */
  conference_aggregate: Conference_Aggregate;
  /** fetch data from the table: "conference" using primary key columns */
  conference_by_pk?: Maybe<Conference>;
  /** fetch data from the table: "conference_rank" */
  conference_rank: Array<Conference_Rank>;
  /** fetch data from the table: "conference_rank" using primary key columns */
  conference_rank_by_pk?: Maybe<Conference_Rank>;
  /** fetch data from the table: "division" */
  division: Array<Division>;
  /** fetch aggregated fields from the table: "division" */
  division_aggregate: Division_Aggregate;
  /** fetch data from the table: "division" using primary key columns */
  division_by_pk?: Maybe<Division>;
  /** An array relationship */
  event: Array<Event>;
  /** An aggregate relationship */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "event" using primary key columns */
  event_by_pk?: Maybe<Event>;
  /** fetch data from the table: "event_conference_team" */
  event_conference_team: Array<Event_Conference_Team>;
  /** fetch data from the table: "event_conference_team" using primary key columns */
  event_conference_team_by_pk?: Maybe<Event_Conference_Team>;
  /** An array relationship */
  game: Array<Game>;
  /** An aggregate relationship */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
  /** fetch data from the table: "league" */
  league: Array<League>;
  /** fetch aggregated fields from the table: "league" */
  league_aggregate: League_Aggregate;
  /** fetch data from the table: "league" using primary key columns */
  league_by_pk?: Maybe<League>;
  /** fetch data from the table: "player" */
  player: Array<Player>;
  /** fetch aggregated fields from the table: "player" */
  player_aggregate: Player_Aggregate;
  /** fetch data from the table: "player" using primary key columns */
  player_by_pk?: Maybe<Player>;
  /** An array relationship */
  player_event: Array<Player_Event>;
  /** An aggregate relationship */
  player_event_aggregate: Player_Event_Aggregate;
  /** fetch data from the table: "player_event" using primary key columns */
  player_event_by_pk?: Maybe<Player_Event>;
  /** An array relationship */
  player_game: Array<Player_Game>;
  /** An aggregate relationship */
  player_game_aggregate: Player_Game_Aggregate;
  /** fetch data from the table: "player_game" using primary key columns */
  player_game_by_pk?: Maybe<Player_Game>;
  /** An array relationship */
  player_team: Array<Player_Team>;
  /** An aggregate relationship */
  player_team_aggregate: Player_Team_Aggregate;
  /** fetch data from the table: "player_team" using primary key columns */
  player_team_by_pk?: Maybe<Player_Team>;
  /** An array relationship */
  team: Array<Team>;
  /** An aggregate relationship */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
  /** An array relationship */
  team_event: Array<Team_Event>;
  /** An aggregate relationship */
  team_event_aggregate: Team_Event_Aggregate;
  /** fetch data from the table: "team_event" using primary key columns */
  team_event_by_pk?: Maybe<Team_Event>;
  /** An array relationship */
  team_game: Array<Team_Game>;
  /** An aggregate relationship */
  team_game_aggregate: Team_Game_Aggregate;
  /** fetch data from the table: "team_game" using primary key columns */
  team_game_by_pk?: Maybe<Team_Game>;
};


export type Query_RootBiodataArgs = {
  distinct_on?: InputMaybe<Array<Biodata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Biodata_Order_By>>;
  where?: InputMaybe<Biodata_Bool_Exp>;
};


export type Query_RootBiodata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Biodata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Biodata_Order_By>>;
  where?: InputMaybe<Biodata_Bool_Exp>;
};


export type Query_RootConferenceArgs = {
  distinct_on?: InputMaybe<Array<Conference_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conference_Order_By>>;
  where?: InputMaybe<Conference_Bool_Exp>;
};


export type Query_RootConference_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conference_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conference_Order_By>>;
  where?: InputMaybe<Conference_Bool_Exp>;
};


export type Query_RootConference_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootConference_RankArgs = {
  distinct_on?: InputMaybe<Array<Conference_Rank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conference_Rank_Order_By>>;
  where?: InputMaybe<Conference_Rank_Bool_Exp>;
};


export type Query_RootConference_Rank_By_PkArgs = {
  conference_id: Scalars['uuid']['input'];
  event_id: Scalars['uuid']['input'];
};


export type Query_RootDivisionArgs = {
  distinct_on?: InputMaybe<Array<Division_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Division_Order_By>>;
  where?: InputMaybe<Division_Bool_Exp>;
};


export type Query_RootDivision_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Division_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Division_Order_By>>;
  where?: InputMaybe<Division_Bool_Exp>;
};


export type Query_RootDivision_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootEventArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


export type Query_RootEvent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


export type Query_RootEvent_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootEvent_Conference_TeamArgs = {
  distinct_on?: InputMaybe<Array<Event_Conference_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Conference_Team_Order_By>>;
  where?: InputMaybe<Event_Conference_Team_Bool_Exp>;
};


export type Query_RootEvent_Conference_Team_By_PkArgs = {
  event_id: Scalars['uuid']['input'];
  team_id: Scalars['uuid']['input'];
};


export type Query_RootGameArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Query_RootGame_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Query_RootGame_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLeagueArgs = {
  distinct_on?: InputMaybe<Array<League_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<League_Order_By>>;
  where?: InputMaybe<League_Bool_Exp>;
};


export type Query_RootLeague_AggregateArgs = {
  distinct_on?: InputMaybe<Array<League_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<League_Order_By>>;
  where?: InputMaybe<League_Bool_Exp>;
};


export type Query_RootLeague_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPlayerArgs = {
  distinct_on?: InputMaybe<Array<Player_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Order_By>>;
  where?: InputMaybe<Player_Bool_Exp>;
};


export type Query_RootPlayer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Order_By>>;
  where?: InputMaybe<Player_Bool_Exp>;
};


export type Query_RootPlayer_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPlayer_EventArgs = {
  distinct_on?: InputMaybe<Array<Player_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Event_Order_By>>;
  where?: InputMaybe<Player_Event_Bool_Exp>;
};


export type Query_RootPlayer_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Event_Order_By>>;
  where?: InputMaybe<Player_Event_Bool_Exp>;
};


export type Query_RootPlayer_Event_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPlayer_GameArgs = {
  distinct_on?: InputMaybe<Array<Player_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Game_Order_By>>;
  where?: InputMaybe<Player_Game_Bool_Exp>;
};


export type Query_RootPlayer_Game_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Game_Order_By>>;
  where?: InputMaybe<Player_Game_Bool_Exp>;
};


export type Query_RootPlayer_Game_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPlayer_TeamArgs = {
  distinct_on?: InputMaybe<Array<Player_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Team_Order_By>>;
  where?: InputMaybe<Player_Team_Bool_Exp>;
};


export type Query_RootPlayer_Team_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Team_Order_By>>;
  where?: InputMaybe<Player_Team_Bool_Exp>;
};


export type Query_RootPlayer_Team_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTeamArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Query_RootTeam_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Query_RootTeam_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTeam_EventArgs = {
  distinct_on?: InputMaybe<Array<Team_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Event_Order_By>>;
  where?: InputMaybe<Team_Event_Bool_Exp>;
};


export type Query_RootTeam_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Event_Order_By>>;
  where?: InputMaybe<Team_Event_Bool_Exp>;
};


export type Query_RootTeam_Event_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTeam_GameArgs = {
  distinct_on?: InputMaybe<Array<Team_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Game_Order_By>>;
  where?: InputMaybe<Team_Game_Bool_Exp>;
};


export type Query_RootTeam_Game_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Game_Order_By>>;
  where?: InputMaybe<Team_Game_Bool_Exp>;
};


export type Query_RootTeam_Game_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

export type Subscription_Root = {
  /** An array relationship */
  biodata: Array<Biodata>;
  /** An aggregate relationship */
  biodata_aggregate: Biodata_Aggregate;
  /** fetch data from the table in a streaming manner: "biodata" */
  biodata_stream: Array<Biodata>;
  /** fetch data from the table: "conference" */
  conference: Array<Conference>;
  /** fetch aggregated fields from the table: "conference" */
  conference_aggregate: Conference_Aggregate;
  /** fetch data from the table: "conference" using primary key columns */
  conference_by_pk?: Maybe<Conference>;
  /** fetch data from the table: "conference_rank" */
  conference_rank: Array<Conference_Rank>;
  /** fetch data from the table: "conference_rank" using primary key columns */
  conference_rank_by_pk?: Maybe<Conference_Rank>;
  /** fetch data from the table in a streaming manner: "conference_rank" */
  conference_rank_stream: Array<Conference_Rank>;
  /** fetch data from the table in a streaming manner: "conference" */
  conference_stream: Array<Conference>;
  /** fetch data from the table: "division" */
  division: Array<Division>;
  /** fetch aggregated fields from the table: "division" */
  division_aggregate: Division_Aggregate;
  /** fetch data from the table: "division" using primary key columns */
  division_by_pk?: Maybe<Division>;
  /** fetch data from the table in a streaming manner: "division" */
  division_stream: Array<Division>;
  /** An array relationship */
  event: Array<Event>;
  /** An aggregate relationship */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "event" using primary key columns */
  event_by_pk?: Maybe<Event>;
  /** fetch data from the table: "event_conference_team" */
  event_conference_team: Array<Event_Conference_Team>;
  /** fetch data from the table: "event_conference_team" using primary key columns */
  event_conference_team_by_pk?: Maybe<Event_Conference_Team>;
  /** fetch data from the table in a streaming manner: "event_conference_team" */
  event_conference_team_stream: Array<Event_Conference_Team>;
  /** fetch data from the table in a streaming manner: "event" */
  event_stream: Array<Event>;
  /** An array relationship */
  game: Array<Game>;
  /** An aggregate relationship */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
  /** fetch data from the table in a streaming manner: "game" */
  game_stream: Array<Game>;
  /** fetch data from the table: "league" */
  league: Array<League>;
  /** fetch aggregated fields from the table: "league" */
  league_aggregate: League_Aggregate;
  /** fetch data from the table: "league" using primary key columns */
  league_by_pk?: Maybe<League>;
  /** fetch data from the table in a streaming manner: "league" */
  league_stream: Array<League>;
  /** fetch data from the table: "player" */
  player: Array<Player>;
  /** fetch aggregated fields from the table: "player" */
  player_aggregate: Player_Aggregate;
  /** fetch data from the table: "player" using primary key columns */
  player_by_pk?: Maybe<Player>;
  /** An array relationship */
  player_event: Array<Player_Event>;
  /** An aggregate relationship */
  player_event_aggregate: Player_Event_Aggregate;
  /** fetch data from the table: "player_event" using primary key columns */
  player_event_by_pk?: Maybe<Player_Event>;
  /** fetch data from the table in a streaming manner: "player_event" */
  player_event_stream: Array<Player_Event>;
  /** An array relationship */
  player_game: Array<Player_Game>;
  /** An aggregate relationship */
  player_game_aggregate: Player_Game_Aggregate;
  /** fetch data from the table: "player_game" using primary key columns */
  player_game_by_pk?: Maybe<Player_Game>;
  /** fetch data from the table in a streaming manner: "player_game" */
  player_game_stream: Array<Player_Game>;
  /** fetch data from the table in a streaming manner: "player" */
  player_stream: Array<Player>;
  /** An array relationship */
  player_team: Array<Player_Team>;
  /** An aggregate relationship */
  player_team_aggregate: Player_Team_Aggregate;
  /** fetch data from the table: "player_team" using primary key columns */
  player_team_by_pk?: Maybe<Player_Team>;
  /** fetch data from the table in a streaming manner: "player_team" */
  player_team_stream: Array<Player_Team>;
  /** An array relationship */
  team: Array<Team>;
  /** An aggregate relationship */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
  /** An array relationship */
  team_event: Array<Team_Event>;
  /** An aggregate relationship */
  team_event_aggregate: Team_Event_Aggregate;
  /** fetch data from the table: "team_event" using primary key columns */
  team_event_by_pk?: Maybe<Team_Event>;
  /** fetch data from the table in a streaming manner: "team_event" */
  team_event_stream: Array<Team_Event>;
  /** An array relationship */
  team_game: Array<Team_Game>;
  /** An aggregate relationship */
  team_game_aggregate: Team_Game_Aggregate;
  /** fetch data from the table: "team_game" using primary key columns */
  team_game_by_pk?: Maybe<Team_Game>;
  /** fetch data from the table in a streaming manner: "team_game" */
  team_game_stream: Array<Team_Game>;
  /** fetch data from the table in a streaming manner: "team" */
  team_stream: Array<Team>;
};


export type Subscription_RootBiodataArgs = {
  distinct_on?: InputMaybe<Array<Biodata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Biodata_Order_By>>;
  where?: InputMaybe<Biodata_Bool_Exp>;
};


export type Subscription_RootBiodata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Biodata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Biodata_Order_By>>;
  where?: InputMaybe<Biodata_Bool_Exp>;
};


export type Subscription_RootBiodata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Biodata_Stream_Cursor_Input>>;
  where?: InputMaybe<Biodata_Bool_Exp>;
};


export type Subscription_RootConferenceArgs = {
  distinct_on?: InputMaybe<Array<Conference_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conference_Order_By>>;
  where?: InputMaybe<Conference_Bool_Exp>;
};


export type Subscription_RootConference_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conference_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conference_Order_By>>;
  where?: InputMaybe<Conference_Bool_Exp>;
};


export type Subscription_RootConference_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootConference_RankArgs = {
  distinct_on?: InputMaybe<Array<Conference_Rank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conference_Rank_Order_By>>;
  where?: InputMaybe<Conference_Rank_Bool_Exp>;
};


export type Subscription_RootConference_Rank_By_PkArgs = {
  conference_id: Scalars['uuid']['input'];
  event_id: Scalars['uuid']['input'];
};


export type Subscription_RootConference_Rank_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Conference_Rank_Stream_Cursor_Input>>;
  where?: InputMaybe<Conference_Rank_Bool_Exp>;
};


export type Subscription_RootConference_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Conference_Stream_Cursor_Input>>;
  where?: InputMaybe<Conference_Bool_Exp>;
};


export type Subscription_RootDivisionArgs = {
  distinct_on?: InputMaybe<Array<Division_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Division_Order_By>>;
  where?: InputMaybe<Division_Bool_Exp>;
};


export type Subscription_RootDivision_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Division_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Division_Order_By>>;
  where?: InputMaybe<Division_Bool_Exp>;
};


export type Subscription_RootDivision_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDivision_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Division_Stream_Cursor_Input>>;
  where?: InputMaybe<Division_Bool_Exp>;
};


export type Subscription_RootEventArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


export type Subscription_RootEvent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


export type Subscription_RootEvent_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootEvent_Conference_TeamArgs = {
  distinct_on?: InputMaybe<Array<Event_Conference_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Conference_Team_Order_By>>;
  where?: InputMaybe<Event_Conference_Team_Bool_Exp>;
};


export type Subscription_RootEvent_Conference_Team_By_PkArgs = {
  event_id: Scalars['uuid']['input'];
  team_id: Scalars['uuid']['input'];
};


export type Subscription_RootEvent_Conference_Team_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Event_Conference_Team_Stream_Cursor_Input>>;
  where?: InputMaybe<Event_Conference_Team_Bool_Exp>;
};


export type Subscription_RootEvent_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


export type Subscription_RootGameArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Subscription_RootGame_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Subscription_RootGame_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGame_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Game_Stream_Cursor_Input>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Subscription_RootLeagueArgs = {
  distinct_on?: InputMaybe<Array<League_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<League_Order_By>>;
  where?: InputMaybe<League_Bool_Exp>;
};


export type Subscription_RootLeague_AggregateArgs = {
  distinct_on?: InputMaybe<Array<League_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<League_Order_By>>;
  where?: InputMaybe<League_Bool_Exp>;
};


export type Subscription_RootLeague_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLeague_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<League_Stream_Cursor_Input>>;
  where?: InputMaybe<League_Bool_Exp>;
};


export type Subscription_RootPlayerArgs = {
  distinct_on?: InputMaybe<Array<Player_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Order_By>>;
  where?: InputMaybe<Player_Bool_Exp>;
};


export type Subscription_RootPlayer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Order_By>>;
  where?: InputMaybe<Player_Bool_Exp>;
};


export type Subscription_RootPlayer_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPlayer_EventArgs = {
  distinct_on?: InputMaybe<Array<Player_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Event_Order_By>>;
  where?: InputMaybe<Player_Event_Bool_Exp>;
};


export type Subscription_RootPlayer_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Event_Order_By>>;
  where?: InputMaybe<Player_Event_Bool_Exp>;
};


export type Subscription_RootPlayer_Event_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPlayer_Event_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Player_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Player_Event_Bool_Exp>;
};


export type Subscription_RootPlayer_GameArgs = {
  distinct_on?: InputMaybe<Array<Player_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Game_Order_By>>;
  where?: InputMaybe<Player_Game_Bool_Exp>;
};


export type Subscription_RootPlayer_Game_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Game_Order_By>>;
  where?: InputMaybe<Player_Game_Bool_Exp>;
};


export type Subscription_RootPlayer_Game_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPlayer_Game_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Player_Game_Stream_Cursor_Input>>;
  where?: InputMaybe<Player_Game_Bool_Exp>;
};


export type Subscription_RootPlayer_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Player_Stream_Cursor_Input>>;
  where?: InputMaybe<Player_Bool_Exp>;
};


export type Subscription_RootPlayer_TeamArgs = {
  distinct_on?: InputMaybe<Array<Player_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Team_Order_By>>;
  where?: InputMaybe<Player_Team_Bool_Exp>;
};


export type Subscription_RootPlayer_Team_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Team_Order_By>>;
  where?: InputMaybe<Player_Team_Bool_Exp>;
};


export type Subscription_RootPlayer_Team_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPlayer_Team_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Player_Team_Stream_Cursor_Input>>;
  where?: InputMaybe<Player_Team_Bool_Exp>;
};


export type Subscription_RootTeamArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Subscription_RootTeam_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Subscription_RootTeam_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTeam_EventArgs = {
  distinct_on?: InputMaybe<Array<Team_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Event_Order_By>>;
  where?: InputMaybe<Team_Event_Bool_Exp>;
};


export type Subscription_RootTeam_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Event_Order_By>>;
  where?: InputMaybe<Team_Event_Bool_Exp>;
};


export type Subscription_RootTeam_Event_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTeam_Event_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Team_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Team_Event_Bool_Exp>;
};


export type Subscription_RootTeam_GameArgs = {
  distinct_on?: InputMaybe<Array<Team_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Game_Order_By>>;
  where?: InputMaybe<Team_Game_Bool_Exp>;
};


export type Subscription_RootTeam_Game_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Game_Order_By>>;
  where?: InputMaybe<Team_Game_Bool_Exp>;
};


export type Subscription_RootTeam_Game_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTeam_Game_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Team_Game_Stream_Cursor_Input>>;
  where?: InputMaybe<Team_Game_Bool_Exp>;
};


export type Subscription_RootTeam_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Team_Stream_Cursor_Input>>;
  where?: InputMaybe<Team_Bool_Exp>;
};

/** columns and relationships of "team" */
export type Team = {
  alias?: Maybe<Array<Scalars['String']['output']>>;
  city?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['timestamptz']['output'];
  /** An array relationship */
  event_conference_teams: Array<Event_Conference_Team>;
  home_arena?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  league: League;
  league_id: Scalars['uuid']['output'];
  modified_date: Scalars['timestamptz']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  player_event: Array<Player_Event>;
  /** An aggregate relationship */
  player_event_aggregate: Player_Event_Aggregate;
  /** An array relationship */
  player_game: Array<Player_Game>;
  /** An aggregate relationship */
  player_game_aggregate: Player_Game_Aggregate;
  /** An array relationship */
  player_team: Array<Player_Team>;
  /** An aggregate relationship */
  player_team_aggregate: Player_Team_Aggregate;
  /** An array relationship */
  team_event: Array<Team_Event>;
  /** An aggregate relationship */
  team_event_aggregate: Team_Event_Aggregate;
  /** An array relationship */
  team_game: Array<Team_Game>;
  /** An aggregate relationship */
  team_game_aggregate: Team_Game_Aggregate;
};


/** columns and relationships of "team" */
export type TeamEvent_Conference_TeamsArgs = {
  distinct_on?: InputMaybe<Array<Event_Conference_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Conference_Team_Order_By>>;
  where?: InputMaybe<Event_Conference_Team_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamPlayer_EventArgs = {
  distinct_on?: InputMaybe<Array<Player_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Event_Order_By>>;
  where?: InputMaybe<Player_Event_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamPlayer_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Event_Order_By>>;
  where?: InputMaybe<Player_Event_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamPlayer_GameArgs = {
  distinct_on?: InputMaybe<Array<Player_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Game_Order_By>>;
  where?: InputMaybe<Player_Game_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamPlayer_Game_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Game_Order_By>>;
  where?: InputMaybe<Player_Game_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamPlayer_TeamArgs = {
  distinct_on?: InputMaybe<Array<Player_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Team_Order_By>>;
  where?: InputMaybe<Player_Team_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamPlayer_Team_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Team_Order_By>>;
  where?: InputMaybe<Player_Team_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamTeam_EventArgs = {
  distinct_on?: InputMaybe<Array<Team_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Event_Order_By>>;
  where?: InputMaybe<Team_Event_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamTeam_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Event_Order_By>>;
  where?: InputMaybe<Team_Event_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamTeam_GameArgs = {
  distinct_on?: InputMaybe<Array<Team_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Game_Order_By>>;
  where?: InputMaybe<Team_Game_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamTeam_Game_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Game_Order_By>>;
  where?: InputMaybe<Team_Game_Bool_Exp>;
};

/** aggregated selection of "team" */
export type Team_Aggregate = {
  aggregate?: Maybe<Team_Aggregate_Fields>;
  nodes: Array<Team>;
};

export type Team_Aggregate_Bool_Exp = {
  count?: InputMaybe<Team_Aggregate_Bool_Exp_Count>;
};

export type Team_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Team_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Team_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "team" */
export type Team_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Team_Max_Fields>;
  min?: Maybe<Team_Min_Fields>;
};


/** aggregate fields of "team" */
export type Team_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Team_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "team" */
export type Team_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Team_Max_Order_By>;
  min?: InputMaybe<Team_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "team". All fields are combined with a logical 'AND'. */
export type Team_Bool_Exp = {
  _and?: InputMaybe<Array<Team_Bool_Exp>>;
  _not?: InputMaybe<Team_Bool_Exp>;
  _or?: InputMaybe<Array<Team_Bool_Exp>>;
  alias?: InputMaybe<String_Array_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  created_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  event_conference_teams?: InputMaybe<Event_Conference_Team_Bool_Exp>;
  home_arena?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  league?: InputMaybe<League_Bool_Exp>;
  league_id?: InputMaybe<Uuid_Comparison_Exp>;
  modified_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  player_event?: InputMaybe<Player_Event_Bool_Exp>;
  player_event_aggregate?: InputMaybe<Player_Event_Aggregate_Bool_Exp>;
  player_game?: InputMaybe<Player_Game_Bool_Exp>;
  player_game_aggregate?: InputMaybe<Player_Game_Aggregate_Bool_Exp>;
  player_team?: InputMaybe<Player_Team_Bool_Exp>;
  player_team_aggregate?: InputMaybe<Player_Team_Aggregate_Bool_Exp>;
  team_event?: InputMaybe<Team_Event_Bool_Exp>;
  team_event_aggregate?: InputMaybe<Team_Event_Aggregate_Bool_Exp>;
  team_game?: InputMaybe<Team_Game_Bool_Exp>;
  team_game_aggregate?: InputMaybe<Team_Game_Aggregate_Bool_Exp>;
};

/** columns and relationships of "team_event" */
export type Team_Event = {
  ast_pct?: Maybe<Scalars['numeric']['output']>;
  ast_per_game?: Maybe<Scalars['numeric']['output']>;
  ast_rating?: Maybe<Scalars['numeric']['output']>;
  ast_tov_ratio?: Maybe<Scalars['numeric']['output']>;
  blk_pct?: Maybe<Scalars['numeric']['output']>;
  blk_per_game?: Maybe<Scalars['numeric']['output']>;
  drb_per_game?: Maybe<Scalars['numeric']['output']>;
  efg_pct?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  event: Event;
  event_id: Scalars['uuid']['output'];
  fg_pct: Scalars['float8']['output'];
  ft_pct?: Maybe<Scalars['numeric']['output']>;
  ft_rating?: Maybe<Scalars['numeric']['output']>;
  games_played: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  orb_per_game?: Maybe<Scalars['numeric']['output']>;
  poss_per_game?: Maybe<Scalars['numeric']['output']>;
  ppp: Scalars['float8']['output'];
  pts_per_game?: Maybe<Scalars['numeric']['output']>;
  reb_per_game?: Maybe<Scalars['numeric']['output']>;
  stl_pct?: Maybe<Scalars['numeric']['output']>;
  stl_per_game?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  team: Team;
  team_id: Scalars['uuid']['output'];
  three_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pt_pct?: Maybe<Scalars['numeric']['output']>;
  three_pt_rating?: Maybe<Scalars['numeric']['output']>;
  total_ast: Scalars['Int']['output'];
  total_blk: Scalars['Int']['output'];
  total_drb?: Maybe<Scalars['Int']['output']>;
  total_fga?: Maybe<Scalars['Int']['output']>;
  total_fgm?: Maybe<Scalars['Int']['output']>;
  total_fta?: Maybe<Scalars['Int']['output']>;
  total_ftm?: Maybe<Scalars['Int']['output']>;
  total_minutes?: Maybe<Scalars['numeric']['output']>;
  total_orb?: Maybe<Scalars['Int']['output']>;
  total_pf: Scalars['Int']['output'];
  total_poss?: Maybe<Scalars['numeric']['output']>;
  total_pts: Scalars['Int']['output'];
  total_reb: Scalars['Int']['output'];
  total_stl: Scalars['Int']['output'];
  total_three_pa?: Maybe<Scalars['Int']['output']>;
  total_three_pm?: Maybe<Scalars['Int']['output']>;
  total_tov: Scalars['Int']['output'];
  total_two_pa?: Maybe<Scalars['Int']['output']>;
  total_two_pm?: Maybe<Scalars['Int']['output']>;
  tov_pct?: Maybe<Scalars['numeric']['output']>;
  tov_per_game?: Maybe<Scalars['numeric']['output']>;
  ts_pct: Scalars['float8']['output'];
  two_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pt_pct?: Maybe<Scalars['numeric']['output']>;
  win_pct?: Maybe<Scalars['numeric']['output']>;
};

/** aggregated selection of "team_event" */
export type Team_Event_Aggregate = {
  aggregate?: Maybe<Team_Event_Aggregate_Fields>;
  nodes: Array<Team_Event>;
};

export type Team_Event_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Team_Event_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Team_Event_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Team_Event_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Team_Event_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Team_Event_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Team_Event_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Team_Event_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Team_Event_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Team_Event_Aggregate_Bool_Exp_Var_Samp>;
};

export type Team_Event_Aggregate_Bool_Exp_Avg = {
  arguments: Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Team_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Team_Event_Aggregate_Bool_Exp_Corr = {
  arguments: Team_Event_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Team_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Team_Event_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Team_Event_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Team_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Team_Event_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Team_Event_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Team_Event_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Team_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Team_Event_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Team_Event_Aggregate_Bool_Exp_Max = {
  arguments: Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Team_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Team_Event_Aggregate_Bool_Exp_Min = {
  arguments: Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Team_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Team_Event_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Team_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Team_Event_Aggregate_Bool_Exp_Sum = {
  arguments: Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Team_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Team_Event_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Team_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "team_event" */
export type Team_Event_Aggregate_Fields = {
  avg?: Maybe<Team_Event_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Team_Event_Max_Fields>;
  min?: Maybe<Team_Event_Min_Fields>;
  stddev?: Maybe<Team_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Team_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Team_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Team_Event_Sum_Fields>;
  var_pop?: Maybe<Team_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Team_Event_Var_Samp_Fields>;
  variance?: Maybe<Team_Event_Variance_Fields>;
};


/** aggregate fields of "team_event" */
export type Team_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Team_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "team_event" */
export type Team_Event_Aggregate_Order_By = {
  avg?: InputMaybe<Team_Event_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Team_Event_Max_Order_By>;
  min?: InputMaybe<Team_Event_Min_Order_By>;
  stddev?: InputMaybe<Team_Event_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Team_Event_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Team_Event_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Team_Event_Sum_Order_By>;
  var_pop?: InputMaybe<Team_Event_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Team_Event_Var_Samp_Order_By>;
  variance?: InputMaybe<Team_Event_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Team_Event_Avg_Fields = {
  ast_pct?: Maybe<Scalars['Float']['output']>;
  ast_per_game?: Maybe<Scalars['Float']['output']>;
  ast_rating?: Maybe<Scalars['Float']['output']>;
  ast_tov_ratio?: Maybe<Scalars['Float']['output']>;
  blk_pct?: Maybe<Scalars['Float']['output']>;
  blk_per_game?: Maybe<Scalars['Float']['output']>;
  drb_per_game?: Maybe<Scalars['Float']['output']>;
  efg_pct?: Maybe<Scalars['Float']['output']>;
  fg_pct?: Maybe<Scalars['Float']['output']>;
  ft_pct?: Maybe<Scalars['Float']['output']>;
  ft_rating?: Maybe<Scalars['Float']['output']>;
  games_played?: Maybe<Scalars['Float']['output']>;
  orb_per_game?: Maybe<Scalars['Float']['output']>;
  poss_per_game?: Maybe<Scalars['Float']['output']>;
  ppp?: Maybe<Scalars['Float']['output']>;
  pts_per_game?: Maybe<Scalars['Float']['output']>;
  reb_per_game?: Maybe<Scalars['Float']['output']>;
  stl_pct?: Maybe<Scalars['Float']['output']>;
  stl_per_game?: Maybe<Scalars['Float']['output']>;
  three_pa_per_game?: Maybe<Scalars['Float']['output']>;
  three_pm_per_game?: Maybe<Scalars['Float']['output']>;
  three_pt_pct?: Maybe<Scalars['Float']['output']>;
  three_pt_rating?: Maybe<Scalars['Float']['output']>;
  total_ast?: Maybe<Scalars['Float']['output']>;
  total_blk?: Maybe<Scalars['Float']['output']>;
  total_drb?: Maybe<Scalars['Float']['output']>;
  total_fga?: Maybe<Scalars['Float']['output']>;
  total_fgm?: Maybe<Scalars['Float']['output']>;
  total_fta?: Maybe<Scalars['Float']['output']>;
  total_ftm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  total_orb?: Maybe<Scalars['Float']['output']>;
  total_pf?: Maybe<Scalars['Float']['output']>;
  total_poss?: Maybe<Scalars['Float']['output']>;
  total_pts?: Maybe<Scalars['Float']['output']>;
  total_reb?: Maybe<Scalars['Float']['output']>;
  total_stl?: Maybe<Scalars['Float']['output']>;
  total_three_pa?: Maybe<Scalars['Float']['output']>;
  total_three_pm?: Maybe<Scalars['Float']['output']>;
  total_tov?: Maybe<Scalars['Float']['output']>;
  total_two_pa?: Maybe<Scalars['Float']['output']>;
  total_two_pm?: Maybe<Scalars['Float']['output']>;
  tov_pct?: Maybe<Scalars['Float']['output']>;
  tov_per_game?: Maybe<Scalars['Float']['output']>;
  ts_pct?: Maybe<Scalars['Float']['output']>;
  two_pa_per_game?: Maybe<Scalars['Float']['output']>;
  two_pm_per_game?: Maybe<Scalars['Float']['output']>;
  two_pt_pct?: Maybe<Scalars['Float']['output']>;
  win_pct?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "team_event" */
export type Team_Event_Avg_Order_By = {
  ast_pct?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_rating?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  blk_pct?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  ft_rating?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  stl_pct?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  three_pt_rating?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_pct?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  win_pct?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "team_event". All fields are combined with a logical 'AND'. */
export type Team_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Team_Event_Bool_Exp>>;
  _not?: InputMaybe<Team_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Team_Event_Bool_Exp>>;
  ast_pct?: InputMaybe<Numeric_Comparison_Exp>;
  ast_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  ast_rating?: InputMaybe<Numeric_Comparison_Exp>;
  ast_tov_ratio?: InputMaybe<Numeric_Comparison_Exp>;
  blk_pct?: InputMaybe<Numeric_Comparison_Exp>;
  blk_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  drb_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  efg_pct?: InputMaybe<Numeric_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  fg_pct?: InputMaybe<Float8_Comparison_Exp>;
  ft_pct?: InputMaybe<Numeric_Comparison_Exp>;
  ft_rating?: InputMaybe<Numeric_Comparison_Exp>;
  games_played?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  orb_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  poss_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  ppp?: InputMaybe<Float8_Comparison_Exp>;
  pts_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  reb_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  stl_pct?: InputMaybe<Numeric_Comparison_Exp>;
  stl_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  team?: InputMaybe<Team_Bool_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
  three_pa_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  three_pm_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  three_pt_pct?: InputMaybe<Numeric_Comparison_Exp>;
  three_pt_rating?: InputMaybe<Numeric_Comparison_Exp>;
  total_ast?: InputMaybe<Int_Comparison_Exp>;
  total_blk?: InputMaybe<Int_Comparison_Exp>;
  total_drb?: InputMaybe<Int_Comparison_Exp>;
  total_fga?: InputMaybe<Int_Comparison_Exp>;
  total_fgm?: InputMaybe<Int_Comparison_Exp>;
  total_fta?: InputMaybe<Int_Comparison_Exp>;
  total_ftm?: InputMaybe<Int_Comparison_Exp>;
  total_minutes?: InputMaybe<Numeric_Comparison_Exp>;
  total_orb?: InputMaybe<Int_Comparison_Exp>;
  total_pf?: InputMaybe<Int_Comparison_Exp>;
  total_poss?: InputMaybe<Numeric_Comparison_Exp>;
  total_pts?: InputMaybe<Int_Comparison_Exp>;
  total_reb?: InputMaybe<Int_Comparison_Exp>;
  total_stl?: InputMaybe<Int_Comparison_Exp>;
  total_three_pa?: InputMaybe<Int_Comparison_Exp>;
  total_three_pm?: InputMaybe<Int_Comparison_Exp>;
  total_tov?: InputMaybe<Int_Comparison_Exp>;
  total_two_pa?: InputMaybe<Int_Comparison_Exp>;
  total_two_pm?: InputMaybe<Int_Comparison_Exp>;
  tov_pct?: InputMaybe<Numeric_Comparison_Exp>;
  tov_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  ts_pct?: InputMaybe<Float8_Comparison_Exp>;
  two_pa_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  two_pm_per_game?: InputMaybe<Numeric_Comparison_Exp>;
  two_pt_pct?: InputMaybe<Numeric_Comparison_Exp>;
  win_pct?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Team_Event_Max_Fields = {
  ast_pct?: Maybe<Scalars['numeric']['output']>;
  ast_per_game?: Maybe<Scalars['numeric']['output']>;
  ast_rating?: Maybe<Scalars['numeric']['output']>;
  ast_tov_ratio?: Maybe<Scalars['numeric']['output']>;
  blk_pct?: Maybe<Scalars['numeric']['output']>;
  blk_per_game?: Maybe<Scalars['numeric']['output']>;
  drb_per_game?: Maybe<Scalars['numeric']['output']>;
  efg_pct?: Maybe<Scalars['numeric']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  fg_pct?: Maybe<Scalars['float8']['output']>;
  ft_pct?: Maybe<Scalars['numeric']['output']>;
  ft_rating?: Maybe<Scalars['numeric']['output']>;
  games_played?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  orb_per_game?: Maybe<Scalars['numeric']['output']>;
  poss_per_game?: Maybe<Scalars['numeric']['output']>;
  ppp?: Maybe<Scalars['float8']['output']>;
  pts_per_game?: Maybe<Scalars['numeric']['output']>;
  reb_per_game?: Maybe<Scalars['numeric']['output']>;
  stl_pct?: Maybe<Scalars['numeric']['output']>;
  stl_per_game?: Maybe<Scalars['numeric']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  three_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pt_pct?: Maybe<Scalars['numeric']['output']>;
  three_pt_rating?: Maybe<Scalars['numeric']['output']>;
  total_ast?: Maybe<Scalars['Int']['output']>;
  total_blk?: Maybe<Scalars['Int']['output']>;
  total_drb?: Maybe<Scalars['Int']['output']>;
  total_fga?: Maybe<Scalars['Int']['output']>;
  total_fgm?: Maybe<Scalars['Int']['output']>;
  total_fta?: Maybe<Scalars['Int']['output']>;
  total_ftm?: Maybe<Scalars['Int']['output']>;
  total_minutes?: Maybe<Scalars['numeric']['output']>;
  total_orb?: Maybe<Scalars['Int']['output']>;
  total_pf?: Maybe<Scalars['Int']['output']>;
  total_poss?: Maybe<Scalars['numeric']['output']>;
  total_pts?: Maybe<Scalars['Int']['output']>;
  total_reb?: Maybe<Scalars['Int']['output']>;
  total_stl?: Maybe<Scalars['Int']['output']>;
  total_three_pa?: Maybe<Scalars['Int']['output']>;
  total_three_pm?: Maybe<Scalars['Int']['output']>;
  total_tov?: Maybe<Scalars['Int']['output']>;
  total_two_pa?: Maybe<Scalars['Int']['output']>;
  total_two_pm?: Maybe<Scalars['Int']['output']>;
  tov_pct?: Maybe<Scalars['numeric']['output']>;
  tov_per_game?: Maybe<Scalars['numeric']['output']>;
  ts_pct?: Maybe<Scalars['float8']['output']>;
  two_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pt_pct?: Maybe<Scalars['numeric']['output']>;
  win_pct?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "team_event" */
export type Team_Event_Max_Order_By = {
  ast_pct?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_rating?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  blk_pct?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  ft_rating?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  stl_pct?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  three_pt_rating?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_pct?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  win_pct?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Event_Min_Fields = {
  ast_pct?: Maybe<Scalars['numeric']['output']>;
  ast_per_game?: Maybe<Scalars['numeric']['output']>;
  ast_rating?: Maybe<Scalars['numeric']['output']>;
  ast_tov_ratio?: Maybe<Scalars['numeric']['output']>;
  blk_pct?: Maybe<Scalars['numeric']['output']>;
  blk_per_game?: Maybe<Scalars['numeric']['output']>;
  drb_per_game?: Maybe<Scalars['numeric']['output']>;
  efg_pct?: Maybe<Scalars['numeric']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  fg_pct?: Maybe<Scalars['float8']['output']>;
  ft_pct?: Maybe<Scalars['numeric']['output']>;
  ft_rating?: Maybe<Scalars['numeric']['output']>;
  games_played?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  orb_per_game?: Maybe<Scalars['numeric']['output']>;
  poss_per_game?: Maybe<Scalars['numeric']['output']>;
  ppp?: Maybe<Scalars['float8']['output']>;
  pts_per_game?: Maybe<Scalars['numeric']['output']>;
  reb_per_game?: Maybe<Scalars['numeric']['output']>;
  stl_pct?: Maybe<Scalars['numeric']['output']>;
  stl_per_game?: Maybe<Scalars['numeric']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  three_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pt_pct?: Maybe<Scalars['numeric']['output']>;
  three_pt_rating?: Maybe<Scalars['numeric']['output']>;
  total_ast?: Maybe<Scalars['Int']['output']>;
  total_blk?: Maybe<Scalars['Int']['output']>;
  total_drb?: Maybe<Scalars['Int']['output']>;
  total_fga?: Maybe<Scalars['Int']['output']>;
  total_fgm?: Maybe<Scalars['Int']['output']>;
  total_fta?: Maybe<Scalars['Int']['output']>;
  total_ftm?: Maybe<Scalars['Int']['output']>;
  total_minutes?: Maybe<Scalars['numeric']['output']>;
  total_orb?: Maybe<Scalars['Int']['output']>;
  total_pf?: Maybe<Scalars['Int']['output']>;
  total_poss?: Maybe<Scalars['numeric']['output']>;
  total_pts?: Maybe<Scalars['Int']['output']>;
  total_reb?: Maybe<Scalars['Int']['output']>;
  total_stl?: Maybe<Scalars['Int']['output']>;
  total_three_pa?: Maybe<Scalars['Int']['output']>;
  total_three_pm?: Maybe<Scalars['Int']['output']>;
  total_tov?: Maybe<Scalars['Int']['output']>;
  total_two_pa?: Maybe<Scalars['Int']['output']>;
  total_two_pm?: Maybe<Scalars['Int']['output']>;
  tov_pct?: Maybe<Scalars['numeric']['output']>;
  tov_per_game?: Maybe<Scalars['numeric']['output']>;
  ts_pct?: Maybe<Scalars['float8']['output']>;
  two_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pt_pct?: Maybe<Scalars['numeric']['output']>;
  win_pct?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "team_event" */
export type Team_Event_Min_Order_By = {
  ast_pct?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_rating?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  blk_pct?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  ft_rating?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  stl_pct?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  three_pt_rating?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_pct?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  win_pct?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "team_event". */
export type Team_Event_Order_By = {
  ast_pct?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_rating?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  blk_pct?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  event_id?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  ft_rating?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  stl_pct?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  team?: InputMaybe<Team_Order_By>;
  team_id?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  three_pt_rating?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_pct?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  win_pct?: InputMaybe<Order_By>;
};

/** select columns of table "team_event" */
export type Team_Event_Select_Column =
  /** column name */
  | 'ast_pct'
  /** column name */
  | 'ast_per_game'
  /** column name */
  | 'ast_rating'
  /** column name */
  | 'ast_tov_ratio'
  /** column name */
  | 'blk_pct'
  /** column name */
  | 'blk_per_game'
  /** column name */
  | 'drb_per_game'
  /** column name */
  | 'efg_pct'
  /** column name */
  | 'event_id'
  /** column name */
  | 'fg_pct'
  /** column name */
  | 'ft_pct'
  /** column name */
  | 'ft_rating'
  /** column name */
  | 'games_played'
  /** column name */
  | 'id'
  /** column name */
  | 'orb_per_game'
  /** column name */
  | 'poss_per_game'
  /** column name */
  | 'ppp'
  /** column name */
  | 'pts_per_game'
  /** column name */
  | 'reb_per_game'
  /** column name */
  | 'stl_pct'
  /** column name */
  | 'stl_per_game'
  /** column name */
  | 'team_id'
  /** column name */
  | 'three_pa_per_game'
  /** column name */
  | 'three_pm_per_game'
  /** column name */
  | 'three_pt_pct'
  /** column name */
  | 'three_pt_rating'
  /** column name */
  | 'total_ast'
  /** column name */
  | 'total_blk'
  /** column name */
  | 'total_drb'
  /** column name */
  | 'total_fga'
  /** column name */
  | 'total_fgm'
  /** column name */
  | 'total_fta'
  /** column name */
  | 'total_ftm'
  /** column name */
  | 'total_minutes'
  /** column name */
  | 'total_orb'
  /** column name */
  | 'total_pf'
  /** column name */
  | 'total_poss'
  /** column name */
  | 'total_pts'
  /** column name */
  | 'total_reb'
  /** column name */
  | 'total_stl'
  /** column name */
  | 'total_three_pa'
  /** column name */
  | 'total_three_pm'
  /** column name */
  | 'total_tov'
  /** column name */
  | 'total_two_pa'
  /** column name */
  | 'total_two_pm'
  /** column name */
  | 'tov_pct'
  /** column name */
  | 'tov_per_game'
  /** column name */
  | 'ts_pct'
  /** column name */
  | 'two_pa_per_game'
  /** column name */
  | 'two_pm_per_game'
  /** column name */
  | 'two_pt_pct'
  /** column name */
  | 'win_pct';

/** select "team_event_aggregate_bool_exp_avg_arguments_columns" columns of table "team_event" */
export type Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Avg_Arguments_Columns =
  /** column name */
  | 'fg_pct'
  /** column name */
  | 'ppp'
  /** column name */
  | 'ts_pct';

/** select "team_event_aggregate_bool_exp_corr_arguments_columns" columns of table "team_event" */
export type Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Corr_Arguments_Columns =
  /** column name */
  | 'fg_pct'
  /** column name */
  | 'ppp'
  /** column name */
  | 'ts_pct';

/** select "team_event_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "team_event" */
export type Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns =
  /** column name */
  | 'fg_pct'
  /** column name */
  | 'ppp'
  /** column name */
  | 'ts_pct';

/** select "team_event_aggregate_bool_exp_max_arguments_columns" columns of table "team_event" */
export type Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Max_Arguments_Columns =
  /** column name */
  | 'fg_pct'
  /** column name */
  | 'ppp'
  /** column name */
  | 'ts_pct';

/** select "team_event_aggregate_bool_exp_min_arguments_columns" columns of table "team_event" */
export type Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Min_Arguments_Columns =
  /** column name */
  | 'fg_pct'
  /** column name */
  | 'ppp'
  /** column name */
  | 'ts_pct';

/** select "team_event_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "team_event" */
export type Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns =
  /** column name */
  | 'fg_pct'
  /** column name */
  | 'ppp'
  /** column name */
  | 'ts_pct';

/** select "team_event_aggregate_bool_exp_sum_arguments_columns" columns of table "team_event" */
export type Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Sum_Arguments_Columns =
  /** column name */
  | 'fg_pct'
  /** column name */
  | 'ppp'
  /** column name */
  | 'ts_pct';

/** select "team_event_aggregate_bool_exp_var_samp_arguments_columns" columns of table "team_event" */
export type Team_Event_Select_Column_Team_Event_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns =
  /** column name */
  | 'fg_pct'
  /** column name */
  | 'ppp'
  /** column name */
  | 'ts_pct';

/** aggregate stddev on columns */
export type Team_Event_Stddev_Fields = {
  ast_pct?: Maybe<Scalars['Float']['output']>;
  ast_per_game?: Maybe<Scalars['Float']['output']>;
  ast_rating?: Maybe<Scalars['Float']['output']>;
  ast_tov_ratio?: Maybe<Scalars['Float']['output']>;
  blk_pct?: Maybe<Scalars['Float']['output']>;
  blk_per_game?: Maybe<Scalars['Float']['output']>;
  drb_per_game?: Maybe<Scalars['Float']['output']>;
  efg_pct?: Maybe<Scalars['Float']['output']>;
  fg_pct?: Maybe<Scalars['Float']['output']>;
  ft_pct?: Maybe<Scalars['Float']['output']>;
  ft_rating?: Maybe<Scalars['Float']['output']>;
  games_played?: Maybe<Scalars['Float']['output']>;
  orb_per_game?: Maybe<Scalars['Float']['output']>;
  poss_per_game?: Maybe<Scalars['Float']['output']>;
  ppp?: Maybe<Scalars['Float']['output']>;
  pts_per_game?: Maybe<Scalars['Float']['output']>;
  reb_per_game?: Maybe<Scalars['Float']['output']>;
  stl_pct?: Maybe<Scalars['Float']['output']>;
  stl_per_game?: Maybe<Scalars['Float']['output']>;
  three_pa_per_game?: Maybe<Scalars['Float']['output']>;
  three_pm_per_game?: Maybe<Scalars['Float']['output']>;
  three_pt_pct?: Maybe<Scalars['Float']['output']>;
  three_pt_rating?: Maybe<Scalars['Float']['output']>;
  total_ast?: Maybe<Scalars['Float']['output']>;
  total_blk?: Maybe<Scalars['Float']['output']>;
  total_drb?: Maybe<Scalars['Float']['output']>;
  total_fga?: Maybe<Scalars['Float']['output']>;
  total_fgm?: Maybe<Scalars['Float']['output']>;
  total_fta?: Maybe<Scalars['Float']['output']>;
  total_ftm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  total_orb?: Maybe<Scalars['Float']['output']>;
  total_pf?: Maybe<Scalars['Float']['output']>;
  total_poss?: Maybe<Scalars['Float']['output']>;
  total_pts?: Maybe<Scalars['Float']['output']>;
  total_reb?: Maybe<Scalars['Float']['output']>;
  total_stl?: Maybe<Scalars['Float']['output']>;
  total_three_pa?: Maybe<Scalars['Float']['output']>;
  total_three_pm?: Maybe<Scalars['Float']['output']>;
  total_tov?: Maybe<Scalars['Float']['output']>;
  total_two_pa?: Maybe<Scalars['Float']['output']>;
  total_two_pm?: Maybe<Scalars['Float']['output']>;
  tov_pct?: Maybe<Scalars['Float']['output']>;
  tov_per_game?: Maybe<Scalars['Float']['output']>;
  ts_pct?: Maybe<Scalars['Float']['output']>;
  two_pa_per_game?: Maybe<Scalars['Float']['output']>;
  two_pm_per_game?: Maybe<Scalars['Float']['output']>;
  two_pt_pct?: Maybe<Scalars['Float']['output']>;
  win_pct?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "team_event" */
export type Team_Event_Stddev_Order_By = {
  ast_pct?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_rating?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  blk_pct?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  ft_rating?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  stl_pct?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  three_pt_rating?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_pct?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  win_pct?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Team_Event_Stddev_Pop_Fields = {
  ast_pct?: Maybe<Scalars['Float']['output']>;
  ast_per_game?: Maybe<Scalars['Float']['output']>;
  ast_rating?: Maybe<Scalars['Float']['output']>;
  ast_tov_ratio?: Maybe<Scalars['Float']['output']>;
  blk_pct?: Maybe<Scalars['Float']['output']>;
  blk_per_game?: Maybe<Scalars['Float']['output']>;
  drb_per_game?: Maybe<Scalars['Float']['output']>;
  efg_pct?: Maybe<Scalars['Float']['output']>;
  fg_pct?: Maybe<Scalars['Float']['output']>;
  ft_pct?: Maybe<Scalars['Float']['output']>;
  ft_rating?: Maybe<Scalars['Float']['output']>;
  games_played?: Maybe<Scalars['Float']['output']>;
  orb_per_game?: Maybe<Scalars['Float']['output']>;
  poss_per_game?: Maybe<Scalars['Float']['output']>;
  ppp?: Maybe<Scalars['Float']['output']>;
  pts_per_game?: Maybe<Scalars['Float']['output']>;
  reb_per_game?: Maybe<Scalars['Float']['output']>;
  stl_pct?: Maybe<Scalars['Float']['output']>;
  stl_per_game?: Maybe<Scalars['Float']['output']>;
  three_pa_per_game?: Maybe<Scalars['Float']['output']>;
  three_pm_per_game?: Maybe<Scalars['Float']['output']>;
  three_pt_pct?: Maybe<Scalars['Float']['output']>;
  three_pt_rating?: Maybe<Scalars['Float']['output']>;
  total_ast?: Maybe<Scalars['Float']['output']>;
  total_blk?: Maybe<Scalars['Float']['output']>;
  total_drb?: Maybe<Scalars['Float']['output']>;
  total_fga?: Maybe<Scalars['Float']['output']>;
  total_fgm?: Maybe<Scalars['Float']['output']>;
  total_fta?: Maybe<Scalars['Float']['output']>;
  total_ftm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  total_orb?: Maybe<Scalars['Float']['output']>;
  total_pf?: Maybe<Scalars['Float']['output']>;
  total_poss?: Maybe<Scalars['Float']['output']>;
  total_pts?: Maybe<Scalars['Float']['output']>;
  total_reb?: Maybe<Scalars['Float']['output']>;
  total_stl?: Maybe<Scalars['Float']['output']>;
  total_three_pa?: Maybe<Scalars['Float']['output']>;
  total_three_pm?: Maybe<Scalars['Float']['output']>;
  total_tov?: Maybe<Scalars['Float']['output']>;
  total_two_pa?: Maybe<Scalars['Float']['output']>;
  total_two_pm?: Maybe<Scalars['Float']['output']>;
  tov_pct?: Maybe<Scalars['Float']['output']>;
  tov_per_game?: Maybe<Scalars['Float']['output']>;
  ts_pct?: Maybe<Scalars['Float']['output']>;
  two_pa_per_game?: Maybe<Scalars['Float']['output']>;
  two_pm_per_game?: Maybe<Scalars['Float']['output']>;
  two_pt_pct?: Maybe<Scalars['Float']['output']>;
  win_pct?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "team_event" */
export type Team_Event_Stddev_Pop_Order_By = {
  ast_pct?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_rating?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  blk_pct?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  ft_rating?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  stl_pct?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  three_pt_rating?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_pct?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  win_pct?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Team_Event_Stddev_Samp_Fields = {
  ast_pct?: Maybe<Scalars['Float']['output']>;
  ast_per_game?: Maybe<Scalars['Float']['output']>;
  ast_rating?: Maybe<Scalars['Float']['output']>;
  ast_tov_ratio?: Maybe<Scalars['Float']['output']>;
  blk_pct?: Maybe<Scalars['Float']['output']>;
  blk_per_game?: Maybe<Scalars['Float']['output']>;
  drb_per_game?: Maybe<Scalars['Float']['output']>;
  efg_pct?: Maybe<Scalars['Float']['output']>;
  fg_pct?: Maybe<Scalars['Float']['output']>;
  ft_pct?: Maybe<Scalars['Float']['output']>;
  ft_rating?: Maybe<Scalars['Float']['output']>;
  games_played?: Maybe<Scalars['Float']['output']>;
  orb_per_game?: Maybe<Scalars['Float']['output']>;
  poss_per_game?: Maybe<Scalars['Float']['output']>;
  ppp?: Maybe<Scalars['Float']['output']>;
  pts_per_game?: Maybe<Scalars['Float']['output']>;
  reb_per_game?: Maybe<Scalars['Float']['output']>;
  stl_pct?: Maybe<Scalars['Float']['output']>;
  stl_per_game?: Maybe<Scalars['Float']['output']>;
  three_pa_per_game?: Maybe<Scalars['Float']['output']>;
  three_pm_per_game?: Maybe<Scalars['Float']['output']>;
  three_pt_pct?: Maybe<Scalars['Float']['output']>;
  three_pt_rating?: Maybe<Scalars['Float']['output']>;
  total_ast?: Maybe<Scalars['Float']['output']>;
  total_blk?: Maybe<Scalars['Float']['output']>;
  total_drb?: Maybe<Scalars['Float']['output']>;
  total_fga?: Maybe<Scalars['Float']['output']>;
  total_fgm?: Maybe<Scalars['Float']['output']>;
  total_fta?: Maybe<Scalars['Float']['output']>;
  total_ftm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  total_orb?: Maybe<Scalars['Float']['output']>;
  total_pf?: Maybe<Scalars['Float']['output']>;
  total_poss?: Maybe<Scalars['Float']['output']>;
  total_pts?: Maybe<Scalars['Float']['output']>;
  total_reb?: Maybe<Scalars['Float']['output']>;
  total_stl?: Maybe<Scalars['Float']['output']>;
  total_three_pa?: Maybe<Scalars['Float']['output']>;
  total_three_pm?: Maybe<Scalars['Float']['output']>;
  total_tov?: Maybe<Scalars['Float']['output']>;
  total_two_pa?: Maybe<Scalars['Float']['output']>;
  total_two_pm?: Maybe<Scalars['Float']['output']>;
  tov_pct?: Maybe<Scalars['Float']['output']>;
  tov_per_game?: Maybe<Scalars['Float']['output']>;
  ts_pct?: Maybe<Scalars['Float']['output']>;
  two_pa_per_game?: Maybe<Scalars['Float']['output']>;
  two_pm_per_game?: Maybe<Scalars['Float']['output']>;
  two_pt_pct?: Maybe<Scalars['Float']['output']>;
  win_pct?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "team_event" */
export type Team_Event_Stddev_Samp_Order_By = {
  ast_pct?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_rating?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  blk_pct?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  ft_rating?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  stl_pct?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  three_pt_rating?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_pct?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  win_pct?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "team_event" */
export type Team_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Team_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Team_Event_Stream_Cursor_Value_Input = {
  ast_pct?: InputMaybe<Scalars['numeric']['input']>;
  ast_per_game?: InputMaybe<Scalars['numeric']['input']>;
  ast_rating?: InputMaybe<Scalars['numeric']['input']>;
  ast_tov_ratio?: InputMaybe<Scalars['numeric']['input']>;
  blk_pct?: InputMaybe<Scalars['numeric']['input']>;
  blk_per_game?: InputMaybe<Scalars['numeric']['input']>;
  drb_per_game?: InputMaybe<Scalars['numeric']['input']>;
  efg_pct?: InputMaybe<Scalars['numeric']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  fg_pct?: InputMaybe<Scalars['float8']['input']>;
  ft_pct?: InputMaybe<Scalars['numeric']['input']>;
  ft_rating?: InputMaybe<Scalars['numeric']['input']>;
  games_played?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  orb_per_game?: InputMaybe<Scalars['numeric']['input']>;
  poss_per_game?: InputMaybe<Scalars['numeric']['input']>;
  ppp?: InputMaybe<Scalars['float8']['input']>;
  pts_per_game?: InputMaybe<Scalars['numeric']['input']>;
  reb_per_game?: InputMaybe<Scalars['numeric']['input']>;
  stl_pct?: InputMaybe<Scalars['numeric']['input']>;
  stl_per_game?: InputMaybe<Scalars['numeric']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  three_pa_per_game?: InputMaybe<Scalars['numeric']['input']>;
  three_pm_per_game?: InputMaybe<Scalars['numeric']['input']>;
  three_pt_pct?: InputMaybe<Scalars['numeric']['input']>;
  three_pt_rating?: InputMaybe<Scalars['numeric']['input']>;
  total_ast?: InputMaybe<Scalars['Int']['input']>;
  total_blk?: InputMaybe<Scalars['Int']['input']>;
  total_drb?: InputMaybe<Scalars['Int']['input']>;
  total_fga?: InputMaybe<Scalars['Int']['input']>;
  total_fgm?: InputMaybe<Scalars['Int']['input']>;
  total_fta?: InputMaybe<Scalars['Int']['input']>;
  total_ftm?: InputMaybe<Scalars['Int']['input']>;
  total_minutes?: InputMaybe<Scalars['numeric']['input']>;
  total_orb?: InputMaybe<Scalars['Int']['input']>;
  total_pf?: InputMaybe<Scalars['Int']['input']>;
  total_poss?: InputMaybe<Scalars['numeric']['input']>;
  total_pts?: InputMaybe<Scalars['Int']['input']>;
  total_reb?: InputMaybe<Scalars['Int']['input']>;
  total_stl?: InputMaybe<Scalars['Int']['input']>;
  total_three_pa?: InputMaybe<Scalars['Int']['input']>;
  total_three_pm?: InputMaybe<Scalars['Int']['input']>;
  total_tov?: InputMaybe<Scalars['Int']['input']>;
  total_two_pa?: InputMaybe<Scalars['Int']['input']>;
  total_two_pm?: InputMaybe<Scalars['Int']['input']>;
  tov_pct?: InputMaybe<Scalars['numeric']['input']>;
  tov_per_game?: InputMaybe<Scalars['numeric']['input']>;
  ts_pct?: InputMaybe<Scalars['float8']['input']>;
  two_pa_per_game?: InputMaybe<Scalars['numeric']['input']>;
  two_pm_per_game?: InputMaybe<Scalars['numeric']['input']>;
  two_pt_pct?: InputMaybe<Scalars['numeric']['input']>;
  win_pct?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Team_Event_Sum_Fields = {
  ast_pct?: Maybe<Scalars['numeric']['output']>;
  ast_per_game?: Maybe<Scalars['numeric']['output']>;
  ast_rating?: Maybe<Scalars['numeric']['output']>;
  ast_tov_ratio?: Maybe<Scalars['numeric']['output']>;
  blk_pct?: Maybe<Scalars['numeric']['output']>;
  blk_per_game?: Maybe<Scalars['numeric']['output']>;
  drb_per_game?: Maybe<Scalars['numeric']['output']>;
  efg_pct?: Maybe<Scalars['numeric']['output']>;
  fg_pct?: Maybe<Scalars['float8']['output']>;
  ft_pct?: Maybe<Scalars['numeric']['output']>;
  ft_rating?: Maybe<Scalars['numeric']['output']>;
  games_played?: Maybe<Scalars['Int']['output']>;
  orb_per_game?: Maybe<Scalars['numeric']['output']>;
  poss_per_game?: Maybe<Scalars['numeric']['output']>;
  ppp?: Maybe<Scalars['float8']['output']>;
  pts_per_game?: Maybe<Scalars['numeric']['output']>;
  reb_per_game?: Maybe<Scalars['numeric']['output']>;
  stl_pct?: Maybe<Scalars['numeric']['output']>;
  stl_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  three_pt_pct?: Maybe<Scalars['numeric']['output']>;
  three_pt_rating?: Maybe<Scalars['numeric']['output']>;
  total_ast?: Maybe<Scalars['Int']['output']>;
  total_blk?: Maybe<Scalars['Int']['output']>;
  total_drb?: Maybe<Scalars['Int']['output']>;
  total_fga?: Maybe<Scalars['Int']['output']>;
  total_fgm?: Maybe<Scalars['Int']['output']>;
  total_fta?: Maybe<Scalars['Int']['output']>;
  total_ftm?: Maybe<Scalars['Int']['output']>;
  total_minutes?: Maybe<Scalars['numeric']['output']>;
  total_orb?: Maybe<Scalars['Int']['output']>;
  total_pf?: Maybe<Scalars['Int']['output']>;
  total_poss?: Maybe<Scalars['numeric']['output']>;
  total_pts?: Maybe<Scalars['Int']['output']>;
  total_reb?: Maybe<Scalars['Int']['output']>;
  total_stl?: Maybe<Scalars['Int']['output']>;
  total_three_pa?: Maybe<Scalars['Int']['output']>;
  total_three_pm?: Maybe<Scalars['Int']['output']>;
  total_tov?: Maybe<Scalars['Int']['output']>;
  total_two_pa?: Maybe<Scalars['Int']['output']>;
  total_two_pm?: Maybe<Scalars['Int']['output']>;
  tov_pct?: Maybe<Scalars['numeric']['output']>;
  tov_per_game?: Maybe<Scalars['numeric']['output']>;
  ts_pct?: Maybe<Scalars['float8']['output']>;
  two_pa_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pm_per_game?: Maybe<Scalars['numeric']['output']>;
  two_pt_pct?: Maybe<Scalars['numeric']['output']>;
  win_pct?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "team_event" */
export type Team_Event_Sum_Order_By = {
  ast_pct?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_rating?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  blk_pct?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  ft_rating?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  stl_pct?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  three_pt_rating?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_pct?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  win_pct?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Team_Event_Var_Pop_Fields = {
  ast_pct?: Maybe<Scalars['Float']['output']>;
  ast_per_game?: Maybe<Scalars['Float']['output']>;
  ast_rating?: Maybe<Scalars['Float']['output']>;
  ast_tov_ratio?: Maybe<Scalars['Float']['output']>;
  blk_pct?: Maybe<Scalars['Float']['output']>;
  blk_per_game?: Maybe<Scalars['Float']['output']>;
  drb_per_game?: Maybe<Scalars['Float']['output']>;
  efg_pct?: Maybe<Scalars['Float']['output']>;
  fg_pct?: Maybe<Scalars['Float']['output']>;
  ft_pct?: Maybe<Scalars['Float']['output']>;
  ft_rating?: Maybe<Scalars['Float']['output']>;
  games_played?: Maybe<Scalars['Float']['output']>;
  orb_per_game?: Maybe<Scalars['Float']['output']>;
  poss_per_game?: Maybe<Scalars['Float']['output']>;
  ppp?: Maybe<Scalars['Float']['output']>;
  pts_per_game?: Maybe<Scalars['Float']['output']>;
  reb_per_game?: Maybe<Scalars['Float']['output']>;
  stl_pct?: Maybe<Scalars['Float']['output']>;
  stl_per_game?: Maybe<Scalars['Float']['output']>;
  three_pa_per_game?: Maybe<Scalars['Float']['output']>;
  three_pm_per_game?: Maybe<Scalars['Float']['output']>;
  three_pt_pct?: Maybe<Scalars['Float']['output']>;
  three_pt_rating?: Maybe<Scalars['Float']['output']>;
  total_ast?: Maybe<Scalars['Float']['output']>;
  total_blk?: Maybe<Scalars['Float']['output']>;
  total_drb?: Maybe<Scalars['Float']['output']>;
  total_fga?: Maybe<Scalars['Float']['output']>;
  total_fgm?: Maybe<Scalars['Float']['output']>;
  total_fta?: Maybe<Scalars['Float']['output']>;
  total_ftm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  total_orb?: Maybe<Scalars['Float']['output']>;
  total_pf?: Maybe<Scalars['Float']['output']>;
  total_poss?: Maybe<Scalars['Float']['output']>;
  total_pts?: Maybe<Scalars['Float']['output']>;
  total_reb?: Maybe<Scalars['Float']['output']>;
  total_stl?: Maybe<Scalars['Float']['output']>;
  total_three_pa?: Maybe<Scalars['Float']['output']>;
  total_three_pm?: Maybe<Scalars['Float']['output']>;
  total_tov?: Maybe<Scalars['Float']['output']>;
  total_two_pa?: Maybe<Scalars['Float']['output']>;
  total_two_pm?: Maybe<Scalars['Float']['output']>;
  tov_pct?: Maybe<Scalars['Float']['output']>;
  tov_per_game?: Maybe<Scalars['Float']['output']>;
  ts_pct?: Maybe<Scalars['Float']['output']>;
  two_pa_per_game?: Maybe<Scalars['Float']['output']>;
  two_pm_per_game?: Maybe<Scalars['Float']['output']>;
  two_pt_pct?: Maybe<Scalars['Float']['output']>;
  win_pct?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "team_event" */
export type Team_Event_Var_Pop_Order_By = {
  ast_pct?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_rating?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  blk_pct?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  ft_rating?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  stl_pct?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  three_pt_rating?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_pct?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  win_pct?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Team_Event_Var_Samp_Fields = {
  ast_pct?: Maybe<Scalars['Float']['output']>;
  ast_per_game?: Maybe<Scalars['Float']['output']>;
  ast_rating?: Maybe<Scalars['Float']['output']>;
  ast_tov_ratio?: Maybe<Scalars['Float']['output']>;
  blk_pct?: Maybe<Scalars['Float']['output']>;
  blk_per_game?: Maybe<Scalars['Float']['output']>;
  drb_per_game?: Maybe<Scalars['Float']['output']>;
  efg_pct?: Maybe<Scalars['Float']['output']>;
  fg_pct?: Maybe<Scalars['Float']['output']>;
  ft_pct?: Maybe<Scalars['Float']['output']>;
  ft_rating?: Maybe<Scalars['Float']['output']>;
  games_played?: Maybe<Scalars['Float']['output']>;
  orb_per_game?: Maybe<Scalars['Float']['output']>;
  poss_per_game?: Maybe<Scalars['Float']['output']>;
  ppp?: Maybe<Scalars['Float']['output']>;
  pts_per_game?: Maybe<Scalars['Float']['output']>;
  reb_per_game?: Maybe<Scalars['Float']['output']>;
  stl_pct?: Maybe<Scalars['Float']['output']>;
  stl_per_game?: Maybe<Scalars['Float']['output']>;
  three_pa_per_game?: Maybe<Scalars['Float']['output']>;
  three_pm_per_game?: Maybe<Scalars['Float']['output']>;
  three_pt_pct?: Maybe<Scalars['Float']['output']>;
  three_pt_rating?: Maybe<Scalars['Float']['output']>;
  total_ast?: Maybe<Scalars['Float']['output']>;
  total_blk?: Maybe<Scalars['Float']['output']>;
  total_drb?: Maybe<Scalars['Float']['output']>;
  total_fga?: Maybe<Scalars['Float']['output']>;
  total_fgm?: Maybe<Scalars['Float']['output']>;
  total_fta?: Maybe<Scalars['Float']['output']>;
  total_ftm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  total_orb?: Maybe<Scalars['Float']['output']>;
  total_pf?: Maybe<Scalars['Float']['output']>;
  total_poss?: Maybe<Scalars['Float']['output']>;
  total_pts?: Maybe<Scalars['Float']['output']>;
  total_reb?: Maybe<Scalars['Float']['output']>;
  total_stl?: Maybe<Scalars['Float']['output']>;
  total_three_pa?: Maybe<Scalars['Float']['output']>;
  total_three_pm?: Maybe<Scalars['Float']['output']>;
  total_tov?: Maybe<Scalars['Float']['output']>;
  total_two_pa?: Maybe<Scalars['Float']['output']>;
  total_two_pm?: Maybe<Scalars['Float']['output']>;
  tov_pct?: Maybe<Scalars['Float']['output']>;
  tov_per_game?: Maybe<Scalars['Float']['output']>;
  ts_pct?: Maybe<Scalars['Float']['output']>;
  two_pa_per_game?: Maybe<Scalars['Float']['output']>;
  two_pm_per_game?: Maybe<Scalars['Float']['output']>;
  two_pt_pct?: Maybe<Scalars['Float']['output']>;
  win_pct?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "team_event" */
export type Team_Event_Var_Samp_Order_By = {
  ast_pct?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_rating?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  blk_pct?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  ft_rating?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  stl_pct?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  three_pt_rating?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_pct?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  win_pct?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Team_Event_Variance_Fields = {
  ast_pct?: Maybe<Scalars['Float']['output']>;
  ast_per_game?: Maybe<Scalars['Float']['output']>;
  ast_rating?: Maybe<Scalars['Float']['output']>;
  ast_tov_ratio?: Maybe<Scalars['Float']['output']>;
  blk_pct?: Maybe<Scalars['Float']['output']>;
  blk_per_game?: Maybe<Scalars['Float']['output']>;
  drb_per_game?: Maybe<Scalars['Float']['output']>;
  efg_pct?: Maybe<Scalars['Float']['output']>;
  fg_pct?: Maybe<Scalars['Float']['output']>;
  ft_pct?: Maybe<Scalars['Float']['output']>;
  ft_rating?: Maybe<Scalars['Float']['output']>;
  games_played?: Maybe<Scalars['Float']['output']>;
  orb_per_game?: Maybe<Scalars['Float']['output']>;
  poss_per_game?: Maybe<Scalars['Float']['output']>;
  ppp?: Maybe<Scalars['Float']['output']>;
  pts_per_game?: Maybe<Scalars['Float']['output']>;
  reb_per_game?: Maybe<Scalars['Float']['output']>;
  stl_pct?: Maybe<Scalars['Float']['output']>;
  stl_per_game?: Maybe<Scalars['Float']['output']>;
  three_pa_per_game?: Maybe<Scalars['Float']['output']>;
  three_pm_per_game?: Maybe<Scalars['Float']['output']>;
  three_pt_pct?: Maybe<Scalars['Float']['output']>;
  three_pt_rating?: Maybe<Scalars['Float']['output']>;
  total_ast?: Maybe<Scalars['Float']['output']>;
  total_blk?: Maybe<Scalars['Float']['output']>;
  total_drb?: Maybe<Scalars['Float']['output']>;
  total_fga?: Maybe<Scalars['Float']['output']>;
  total_fgm?: Maybe<Scalars['Float']['output']>;
  total_fta?: Maybe<Scalars['Float']['output']>;
  total_ftm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  total_orb?: Maybe<Scalars['Float']['output']>;
  total_pf?: Maybe<Scalars['Float']['output']>;
  total_poss?: Maybe<Scalars['Float']['output']>;
  total_pts?: Maybe<Scalars['Float']['output']>;
  total_reb?: Maybe<Scalars['Float']['output']>;
  total_stl?: Maybe<Scalars['Float']['output']>;
  total_three_pa?: Maybe<Scalars['Float']['output']>;
  total_three_pm?: Maybe<Scalars['Float']['output']>;
  total_tov?: Maybe<Scalars['Float']['output']>;
  total_two_pa?: Maybe<Scalars['Float']['output']>;
  total_two_pm?: Maybe<Scalars['Float']['output']>;
  tov_pct?: Maybe<Scalars['Float']['output']>;
  tov_per_game?: Maybe<Scalars['Float']['output']>;
  ts_pct?: Maybe<Scalars['Float']['output']>;
  two_pa_per_game?: Maybe<Scalars['Float']['output']>;
  two_pm_per_game?: Maybe<Scalars['Float']['output']>;
  two_pt_pct?: Maybe<Scalars['Float']['output']>;
  win_pct?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "team_event" */
export type Team_Event_Variance_Order_By = {
  ast_pct?: InputMaybe<Order_By>;
  ast_per_game?: InputMaybe<Order_By>;
  ast_rating?: InputMaybe<Order_By>;
  ast_tov_ratio?: InputMaybe<Order_By>;
  blk_pct?: InputMaybe<Order_By>;
  blk_per_game?: InputMaybe<Order_By>;
  drb_per_game?: InputMaybe<Order_By>;
  efg_pct?: InputMaybe<Order_By>;
  fg_pct?: InputMaybe<Order_By>;
  ft_pct?: InputMaybe<Order_By>;
  ft_rating?: InputMaybe<Order_By>;
  games_played?: InputMaybe<Order_By>;
  orb_per_game?: InputMaybe<Order_By>;
  poss_per_game?: InputMaybe<Order_By>;
  ppp?: InputMaybe<Order_By>;
  pts_per_game?: InputMaybe<Order_By>;
  reb_per_game?: InputMaybe<Order_By>;
  stl_pct?: InputMaybe<Order_By>;
  stl_per_game?: InputMaybe<Order_By>;
  three_pa_per_game?: InputMaybe<Order_By>;
  three_pm_per_game?: InputMaybe<Order_By>;
  three_pt_pct?: InputMaybe<Order_By>;
  three_pt_rating?: InputMaybe<Order_By>;
  total_ast?: InputMaybe<Order_By>;
  total_blk?: InputMaybe<Order_By>;
  total_drb?: InputMaybe<Order_By>;
  total_fga?: InputMaybe<Order_By>;
  total_fgm?: InputMaybe<Order_By>;
  total_fta?: InputMaybe<Order_By>;
  total_ftm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  total_orb?: InputMaybe<Order_By>;
  total_pf?: InputMaybe<Order_By>;
  total_poss?: InputMaybe<Order_By>;
  total_pts?: InputMaybe<Order_By>;
  total_reb?: InputMaybe<Order_By>;
  total_stl?: InputMaybe<Order_By>;
  total_three_pa?: InputMaybe<Order_By>;
  total_three_pm?: InputMaybe<Order_By>;
  total_tov?: InputMaybe<Order_By>;
  total_two_pa?: InputMaybe<Order_By>;
  total_two_pm?: InputMaybe<Order_By>;
  tov_pct?: InputMaybe<Order_By>;
  tov_per_game?: InputMaybe<Order_By>;
  ts_pct?: InputMaybe<Order_By>;
  two_pa_per_game?: InputMaybe<Order_By>;
  two_pm_per_game?: InputMaybe<Order_By>;
  two_pt_pct?: InputMaybe<Order_By>;
  win_pct?: InputMaybe<Order_By>;
};

/** columns and relationships of "team_game" */
export type Team_Game = {
  ast?: Maybe<Scalars['Int']['output']>;
  blk?: Maybe<Scalars['Int']['output']>;
  drb?: Maybe<Scalars['Int']['output']>;
  fga?: Maybe<Scalars['Int']['output']>;
  fgm?: Maybe<Scalars['Int']['output']>;
  fta?: Maybe<Scalars['Int']['output']>;
  ftm?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  game: Game;
  game_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  orb?: Maybe<Scalars['Int']['output']>;
  pf?: Maybe<Scalars['Int']['output']>;
  pts?: Maybe<Scalars['Int']['output']>;
  reb?: Maybe<Scalars['Int']['output']>;
  stl?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  team: Team;
  team_id: Scalars['uuid']['output'];
  three_pa?: Maybe<Scalars['Int']['output']>;
  three_pm?: Maybe<Scalars['Int']['output']>;
  total_minutes?: Maybe<Scalars['numeric']['output']>;
  tov?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "team_game" */
export type Team_Game_Aggregate = {
  aggregate?: Maybe<Team_Game_Aggregate_Fields>;
  nodes: Array<Team_Game>;
};

export type Team_Game_Aggregate_Bool_Exp = {
  count?: InputMaybe<Team_Game_Aggregate_Bool_Exp_Count>;
};

export type Team_Game_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Team_Game_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Team_Game_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "team_game" */
export type Team_Game_Aggregate_Fields = {
  avg?: Maybe<Team_Game_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Team_Game_Max_Fields>;
  min?: Maybe<Team_Game_Min_Fields>;
  stddev?: Maybe<Team_Game_Stddev_Fields>;
  stddev_pop?: Maybe<Team_Game_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Team_Game_Stddev_Samp_Fields>;
  sum?: Maybe<Team_Game_Sum_Fields>;
  var_pop?: Maybe<Team_Game_Var_Pop_Fields>;
  var_samp?: Maybe<Team_Game_Var_Samp_Fields>;
  variance?: Maybe<Team_Game_Variance_Fields>;
};


/** aggregate fields of "team_game" */
export type Team_Game_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Team_Game_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "team_game" */
export type Team_Game_Aggregate_Order_By = {
  avg?: InputMaybe<Team_Game_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Team_Game_Max_Order_By>;
  min?: InputMaybe<Team_Game_Min_Order_By>;
  stddev?: InputMaybe<Team_Game_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Team_Game_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Team_Game_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Team_Game_Sum_Order_By>;
  var_pop?: InputMaybe<Team_Game_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Team_Game_Var_Samp_Order_By>;
  variance?: InputMaybe<Team_Game_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Team_Game_Avg_Fields = {
  ast?: Maybe<Scalars['Float']['output']>;
  blk?: Maybe<Scalars['Float']['output']>;
  drb?: Maybe<Scalars['Float']['output']>;
  fga?: Maybe<Scalars['Float']['output']>;
  fgm?: Maybe<Scalars['Float']['output']>;
  fta?: Maybe<Scalars['Float']['output']>;
  ftm?: Maybe<Scalars['Float']['output']>;
  orb?: Maybe<Scalars['Float']['output']>;
  pf?: Maybe<Scalars['Float']['output']>;
  pts?: Maybe<Scalars['Float']['output']>;
  reb?: Maybe<Scalars['Float']['output']>;
  stl?: Maybe<Scalars['Float']['output']>;
  three_pa?: Maybe<Scalars['Float']['output']>;
  three_pm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  tov?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "team_game" */
export type Team_Game_Avg_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "team_game". All fields are combined with a logical 'AND'. */
export type Team_Game_Bool_Exp = {
  _and?: InputMaybe<Array<Team_Game_Bool_Exp>>;
  _not?: InputMaybe<Team_Game_Bool_Exp>;
  _or?: InputMaybe<Array<Team_Game_Bool_Exp>>;
  ast?: InputMaybe<Int_Comparison_Exp>;
  blk?: InputMaybe<Int_Comparison_Exp>;
  drb?: InputMaybe<Int_Comparison_Exp>;
  fga?: InputMaybe<Int_Comparison_Exp>;
  fgm?: InputMaybe<Int_Comparison_Exp>;
  fta?: InputMaybe<Int_Comparison_Exp>;
  ftm?: InputMaybe<Int_Comparison_Exp>;
  game?: InputMaybe<Game_Bool_Exp>;
  game_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  orb?: InputMaybe<Int_Comparison_Exp>;
  pf?: InputMaybe<Int_Comparison_Exp>;
  pts?: InputMaybe<Int_Comparison_Exp>;
  reb?: InputMaybe<Int_Comparison_Exp>;
  stl?: InputMaybe<Int_Comparison_Exp>;
  team?: InputMaybe<Team_Bool_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
  three_pa?: InputMaybe<Int_Comparison_Exp>;
  three_pm?: InputMaybe<Int_Comparison_Exp>;
  total_minutes?: InputMaybe<Numeric_Comparison_Exp>;
  tov?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Team_Game_Max_Fields = {
  ast?: Maybe<Scalars['Int']['output']>;
  blk?: Maybe<Scalars['Int']['output']>;
  drb?: Maybe<Scalars['Int']['output']>;
  fga?: Maybe<Scalars['Int']['output']>;
  fgm?: Maybe<Scalars['Int']['output']>;
  fta?: Maybe<Scalars['Int']['output']>;
  ftm?: Maybe<Scalars['Int']['output']>;
  game_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  orb?: Maybe<Scalars['Int']['output']>;
  pf?: Maybe<Scalars['Int']['output']>;
  pts?: Maybe<Scalars['Int']['output']>;
  reb?: Maybe<Scalars['Int']['output']>;
  stl?: Maybe<Scalars['Int']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  three_pa?: Maybe<Scalars['Int']['output']>;
  three_pm?: Maybe<Scalars['Int']['output']>;
  total_minutes?: Maybe<Scalars['numeric']['output']>;
  tov?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "team_game" */
export type Team_Game_Max_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Game_Min_Fields = {
  ast?: Maybe<Scalars['Int']['output']>;
  blk?: Maybe<Scalars['Int']['output']>;
  drb?: Maybe<Scalars['Int']['output']>;
  fga?: Maybe<Scalars['Int']['output']>;
  fgm?: Maybe<Scalars['Int']['output']>;
  fta?: Maybe<Scalars['Int']['output']>;
  ftm?: Maybe<Scalars['Int']['output']>;
  game_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  orb?: Maybe<Scalars['Int']['output']>;
  pf?: Maybe<Scalars['Int']['output']>;
  pts?: Maybe<Scalars['Int']['output']>;
  reb?: Maybe<Scalars['Int']['output']>;
  stl?: Maybe<Scalars['Int']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  three_pa?: Maybe<Scalars['Int']['output']>;
  three_pm?: Maybe<Scalars['Int']['output']>;
  total_minutes?: Maybe<Scalars['numeric']['output']>;
  tov?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "team_game" */
export type Team_Game_Min_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "team_game". */
export type Team_Game_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  game?: InputMaybe<Game_Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  team?: InputMaybe<Team_Order_By>;
  team_id?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** select columns of table "team_game" */
export type Team_Game_Select_Column =
  /** column name */
  | 'ast'
  /** column name */
  | 'blk'
  /** column name */
  | 'drb'
  /** column name */
  | 'fga'
  /** column name */
  | 'fgm'
  /** column name */
  | 'fta'
  /** column name */
  | 'ftm'
  /** column name */
  | 'game_id'
  /** column name */
  | 'id'
  /** column name */
  | 'orb'
  /** column name */
  | 'pf'
  /** column name */
  | 'pts'
  /** column name */
  | 'reb'
  /** column name */
  | 'stl'
  /** column name */
  | 'team_id'
  /** column name */
  | 'three_pa'
  /** column name */
  | 'three_pm'
  /** column name */
  | 'total_minutes'
  /** column name */
  | 'tov';

/** aggregate stddev on columns */
export type Team_Game_Stddev_Fields = {
  ast?: Maybe<Scalars['Float']['output']>;
  blk?: Maybe<Scalars['Float']['output']>;
  drb?: Maybe<Scalars['Float']['output']>;
  fga?: Maybe<Scalars['Float']['output']>;
  fgm?: Maybe<Scalars['Float']['output']>;
  fta?: Maybe<Scalars['Float']['output']>;
  ftm?: Maybe<Scalars['Float']['output']>;
  orb?: Maybe<Scalars['Float']['output']>;
  pf?: Maybe<Scalars['Float']['output']>;
  pts?: Maybe<Scalars['Float']['output']>;
  reb?: Maybe<Scalars['Float']['output']>;
  stl?: Maybe<Scalars['Float']['output']>;
  three_pa?: Maybe<Scalars['Float']['output']>;
  three_pm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  tov?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "team_game" */
export type Team_Game_Stddev_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Team_Game_Stddev_Pop_Fields = {
  ast?: Maybe<Scalars['Float']['output']>;
  blk?: Maybe<Scalars['Float']['output']>;
  drb?: Maybe<Scalars['Float']['output']>;
  fga?: Maybe<Scalars['Float']['output']>;
  fgm?: Maybe<Scalars['Float']['output']>;
  fta?: Maybe<Scalars['Float']['output']>;
  ftm?: Maybe<Scalars['Float']['output']>;
  orb?: Maybe<Scalars['Float']['output']>;
  pf?: Maybe<Scalars['Float']['output']>;
  pts?: Maybe<Scalars['Float']['output']>;
  reb?: Maybe<Scalars['Float']['output']>;
  stl?: Maybe<Scalars['Float']['output']>;
  three_pa?: Maybe<Scalars['Float']['output']>;
  three_pm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  tov?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "team_game" */
export type Team_Game_Stddev_Pop_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Team_Game_Stddev_Samp_Fields = {
  ast?: Maybe<Scalars['Float']['output']>;
  blk?: Maybe<Scalars['Float']['output']>;
  drb?: Maybe<Scalars['Float']['output']>;
  fga?: Maybe<Scalars['Float']['output']>;
  fgm?: Maybe<Scalars['Float']['output']>;
  fta?: Maybe<Scalars['Float']['output']>;
  ftm?: Maybe<Scalars['Float']['output']>;
  orb?: Maybe<Scalars['Float']['output']>;
  pf?: Maybe<Scalars['Float']['output']>;
  pts?: Maybe<Scalars['Float']['output']>;
  reb?: Maybe<Scalars['Float']['output']>;
  stl?: Maybe<Scalars['Float']['output']>;
  three_pa?: Maybe<Scalars['Float']['output']>;
  three_pm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  tov?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "team_game" */
export type Team_Game_Stddev_Samp_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "team_game" */
export type Team_Game_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Team_Game_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Team_Game_Stream_Cursor_Value_Input = {
  ast?: InputMaybe<Scalars['Int']['input']>;
  blk?: InputMaybe<Scalars['Int']['input']>;
  drb?: InputMaybe<Scalars['Int']['input']>;
  fga?: InputMaybe<Scalars['Int']['input']>;
  fgm?: InputMaybe<Scalars['Int']['input']>;
  fta?: InputMaybe<Scalars['Int']['input']>;
  ftm?: InputMaybe<Scalars['Int']['input']>;
  game_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  orb?: InputMaybe<Scalars['Int']['input']>;
  pf?: InputMaybe<Scalars['Int']['input']>;
  pts?: InputMaybe<Scalars['Int']['input']>;
  reb?: InputMaybe<Scalars['Int']['input']>;
  stl?: InputMaybe<Scalars['Int']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  three_pa?: InputMaybe<Scalars['Int']['input']>;
  three_pm?: InputMaybe<Scalars['Int']['input']>;
  total_minutes?: InputMaybe<Scalars['numeric']['input']>;
  tov?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Team_Game_Sum_Fields = {
  ast?: Maybe<Scalars['Int']['output']>;
  blk?: Maybe<Scalars['Int']['output']>;
  drb?: Maybe<Scalars['Int']['output']>;
  fga?: Maybe<Scalars['Int']['output']>;
  fgm?: Maybe<Scalars['Int']['output']>;
  fta?: Maybe<Scalars['Int']['output']>;
  ftm?: Maybe<Scalars['Int']['output']>;
  orb?: Maybe<Scalars['Int']['output']>;
  pf?: Maybe<Scalars['Int']['output']>;
  pts?: Maybe<Scalars['Int']['output']>;
  reb?: Maybe<Scalars['Int']['output']>;
  stl?: Maybe<Scalars['Int']['output']>;
  three_pa?: Maybe<Scalars['Int']['output']>;
  three_pm?: Maybe<Scalars['Int']['output']>;
  total_minutes?: Maybe<Scalars['numeric']['output']>;
  tov?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "team_game" */
export type Team_Game_Sum_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Team_Game_Var_Pop_Fields = {
  ast?: Maybe<Scalars['Float']['output']>;
  blk?: Maybe<Scalars['Float']['output']>;
  drb?: Maybe<Scalars['Float']['output']>;
  fga?: Maybe<Scalars['Float']['output']>;
  fgm?: Maybe<Scalars['Float']['output']>;
  fta?: Maybe<Scalars['Float']['output']>;
  ftm?: Maybe<Scalars['Float']['output']>;
  orb?: Maybe<Scalars['Float']['output']>;
  pf?: Maybe<Scalars['Float']['output']>;
  pts?: Maybe<Scalars['Float']['output']>;
  reb?: Maybe<Scalars['Float']['output']>;
  stl?: Maybe<Scalars['Float']['output']>;
  three_pa?: Maybe<Scalars['Float']['output']>;
  three_pm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  tov?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "team_game" */
export type Team_Game_Var_Pop_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Team_Game_Var_Samp_Fields = {
  ast?: Maybe<Scalars['Float']['output']>;
  blk?: Maybe<Scalars['Float']['output']>;
  drb?: Maybe<Scalars['Float']['output']>;
  fga?: Maybe<Scalars['Float']['output']>;
  fgm?: Maybe<Scalars['Float']['output']>;
  fta?: Maybe<Scalars['Float']['output']>;
  ftm?: Maybe<Scalars['Float']['output']>;
  orb?: Maybe<Scalars['Float']['output']>;
  pf?: Maybe<Scalars['Float']['output']>;
  pts?: Maybe<Scalars['Float']['output']>;
  reb?: Maybe<Scalars['Float']['output']>;
  stl?: Maybe<Scalars['Float']['output']>;
  three_pa?: Maybe<Scalars['Float']['output']>;
  three_pm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  tov?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "team_game" */
export type Team_Game_Var_Samp_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Team_Game_Variance_Fields = {
  ast?: Maybe<Scalars['Float']['output']>;
  blk?: Maybe<Scalars['Float']['output']>;
  drb?: Maybe<Scalars['Float']['output']>;
  fga?: Maybe<Scalars['Float']['output']>;
  fgm?: Maybe<Scalars['Float']['output']>;
  fta?: Maybe<Scalars['Float']['output']>;
  ftm?: Maybe<Scalars['Float']['output']>;
  orb?: Maybe<Scalars['Float']['output']>;
  pf?: Maybe<Scalars['Float']['output']>;
  pts?: Maybe<Scalars['Float']['output']>;
  reb?: Maybe<Scalars['Float']['output']>;
  stl?: Maybe<Scalars['Float']['output']>;
  three_pa?: Maybe<Scalars['Float']['output']>;
  three_pm?: Maybe<Scalars['Float']['output']>;
  total_minutes?: Maybe<Scalars['Float']['output']>;
  tov?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "team_game" */
export type Team_Game_Variance_Order_By = {
  ast?: InputMaybe<Order_By>;
  blk?: InputMaybe<Order_By>;
  drb?: InputMaybe<Order_By>;
  fga?: InputMaybe<Order_By>;
  fgm?: InputMaybe<Order_By>;
  fta?: InputMaybe<Order_By>;
  ftm?: InputMaybe<Order_By>;
  orb?: InputMaybe<Order_By>;
  pf?: InputMaybe<Order_By>;
  pts?: InputMaybe<Order_By>;
  reb?: InputMaybe<Order_By>;
  stl?: InputMaybe<Order_By>;
  three_pa?: InputMaybe<Order_By>;
  three_pm?: InputMaybe<Order_By>;
  total_minutes?: InputMaybe<Order_By>;
  tov?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Team_Max_Fields = {
  alias?: Maybe<Array<Scalars['String']['output']>>;
  city?: Maybe<Scalars['String']['output']>;
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  home_arena?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  league_id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "team" */
export type Team_Max_Order_By = {
  alias?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  home_arena?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league_id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Min_Fields = {
  alias?: Maybe<Array<Scalars['String']['output']>>;
  city?: Maybe<Scalars['String']['output']>;
  created_date?: Maybe<Scalars['timestamptz']['output']>;
  home_arena?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  league_id?: Maybe<Scalars['uuid']['output']>;
  modified_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "team" */
export type Team_Min_Order_By = {
  alias?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  home_arena?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league_id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "team". */
export type Team_Order_By = {
  alias?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  created_date?: InputMaybe<Order_By>;
  event_conference_teams_aggregate?: InputMaybe<Event_Conference_Team_Aggregate_Order_By>;
  home_arena?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league?: InputMaybe<League_Order_By>;
  league_id?: InputMaybe<Order_By>;
  modified_date?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  player_event_aggregate?: InputMaybe<Player_Event_Aggregate_Order_By>;
  player_game_aggregate?: InputMaybe<Player_Game_Aggregate_Order_By>;
  player_team_aggregate?: InputMaybe<Player_Team_Aggregate_Order_By>;
  team_event_aggregate?: InputMaybe<Team_Event_Aggregate_Order_By>;
  team_game_aggregate?: InputMaybe<Team_Game_Aggregate_Order_By>;
};

/** select columns of table "team" */
export type Team_Select_Column =
  /** column name */
  | 'alias'
  /** column name */
  | 'city'
  /** column name */
  | 'created_date'
  /** column name */
  | 'home_arena'
  /** column name */
  | 'id'
  /** column name */
  | 'league_id'
  /** column name */
  | 'modified_date'
  /** column name */
  | 'name';

/** Streaming cursor of the table "team" */
export type Team_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Team_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Team_Stream_Cursor_Value_Input = {
  alias?: InputMaybe<Array<Scalars['String']['input']>>;
  city?: InputMaybe<Scalars['String']['input']>;
  created_date?: InputMaybe<Scalars['timestamptz']['input']>;
  home_arena?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  league_id?: InputMaybe<Scalars['uuid']['input']>;
  modified_date?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "time". All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['time']['input']>;
  _gt?: InputMaybe<Scalars['time']['input']>;
  _gte?: InputMaybe<Scalars['time']['input']>;
  _in?: InputMaybe<Array<Scalars['time']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['time']['input']>;
  _lte?: InputMaybe<Scalars['time']['input']>;
  _neq?: InputMaybe<Scalars['time']['input']>;
  _nin?: InputMaybe<Array<Scalars['time']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};
