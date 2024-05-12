export interface RootDatabase {
	profile: ProfileDatabase;
}

// ENUM

export enum DatabasePath {
	Profile = 'profile',
}

export interface ProfileDatabase {
	fullname: string;
	career: string;
	about: AboutProfile;
	experiences: ExperienceProfile[];
}

export interface AboutProfile {
	descriptions: string[];
}
export interface ExperienceProfile {
	position: string;
	company: string;
	perios: DataStartStop;
	short_description: string;
}

export type DataStartStop = { date_start: string; date_stop: string };
