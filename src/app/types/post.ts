export interface Dimension {
    id: string;
    dimension_id: string;
    user_id: string;
    value: string;
}

export interface Author {
    user_id: string;
    user_username: string;
    user_firstname: string;
    user_lastname: string;
    user_icon: string;
    user_datecreated: string;
    user_avatar: string;
    dimensions: Dimension[];
}

export interface Bucket {
    bucket_id: string;
    bucket_display: string;
    bucket_name: string;
}

export interface Tag {
    tag_id: string;
    tag_name: string;
    tag_score: string;
    tag_type: string;
    tag_image: string;
    content_id: string;
    type_name: string;
}

export interface Action {
    action_id: string;
    action_name: string;
    action_type: string;
    action_icon: string;
    action_button: string;
    action_xpreward: string;
    action_coinreward: string;
    action_lang: string;
    action_sortlang: string;
    action_buttonlang_state1: string;
    action_buttonlang_state2: string;
    action_api_oncomplete: string;
    content_id: string;
    total_completed: string;
    user_completed: string;
}

export interface VolunteerRecord {
    record_id: string;
    record_status: string;
    record_image: string;
    record_hours: string;
    record_date: string;
    user_id: string;
    record_description: string;
    record_event: string;
    volunteer_form_response_id?: any;
}

export interface Dimension2 {
    id: string;
    dimension_id: string;
    user_id: string;
    value: string;
}

export interface Attendee {
    user_id: string;
    user_username: string;
    user_firstname: string;
    user_lastname: string;
    user_rank: string;
    user_points: string;
    user_coins: string;
    user_icon: string;
    user_datecreated: string;
    user_avatar: string;
    user_banned: string;
    dimensions: Dimension2[];
}

export interface Content {
    content_slug: string;
    campaign: string;
    content_id: string;
    content_name: string;
    content_author: string;
    content_partner: string;
    content_date: string;
    content_date_start: string;
    content_date_end: string;
    content_image: string;
    content_icon: string;
    content_num_views: string;
    content_num_responses: string;
    content_lat: string;
    content_long: string;
    content_featured: string;
    content_featured_alt: string;
    content_social_description: string;
    content_intoption1: string;
    content_stringoption1: string;
    content_stringoption2: string;
    content_stringoption3: string;
    content_private: string;
    bucket_intersect: string;
    content_date_literal_released: string;
    content_date_literal_range: string;
    content_date_literal_end: string;
    content_date_literal_until: string;
    content_date_literal_datetime: string;
    author: Author;
    children: any[];
    num_children: string;
    parents: any[];
    meta_data: any[];
    buckets: Bucket[];
    tags: Tag[];
    actions: Action[];
    user_commented: string;
    volunteer_records: VolunteerRecord[];
    attendees: Attendee[];
}

export interface Post {
    content: Content[];
    success: string;
}

