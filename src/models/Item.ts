export enum ItemType {
	AUDIO,
	VIDEO,
	PDF,
}

export interface Item {
	itemType: ItemType;
	id?: Number;
	title?: String;
	page_count?: Number;
	type?: String;
	cover?: String;
	file?: String;
	file_data?: FileData;
	text?: String;
	video_url?: String;
	book?: Number;
	chapter?: Chapter;
	hadith?: Number;
	video_tafsir?: String;
	audio_tafsir?: String;
	subject?: Number;
	sura?: Number;
	aya_start?: Number;
	aya_end?: Number;
	aya_start_count?: Number;
	aya_end_count?: Number;
	category?: Number;
	text_without_tashkil?: String;
}

interface FileData {
	size?: Number;
	sizify?: String;
	type?: String;
}
interface Chapter {
	chapter_url?: String;
	key?: String;
}

/* 
export interface Item {
	id: Number;
	title: String;
	itemType: ItemType;
	cover: String;
	url: String;
	size: String;
	pageCount: Number;
	type: String;
} */

/*
Article:
{
	"id": 28,
	"title": "آخر ساعة 1-4-1992",
	"page_count": 4,
	"type": "artical",
	"status": "p",
	"cover": "/media/filer_public/a7/02/a702b2a6-4947-4c89-8a14-dc24ee4b47eb/18.png",
	"file": 28080,
	"file_data": {
		"size": 22202548,
		"sizify": "21.17 ميجا بايت",
		"type": "application/pdf"
	}
}
Book:
{
	"id": 1,
	"title": "هو الله",
	"page_count": 163,
	"type": "book",
	"status": "p",
	"cover": "/media/filer_public/82/07/8207eaa4-08bb-4ac4-afde-f96b475bd342/thumbnail_image_15.jpg",
	"file": 28059,
	"file_data": {
		"size": 1337866,
		"sizify": "1.28 ميجا بايت",
		"type": "application/pdf"
	}
}
Fatwa:
{
	"id": 1,
	"title": "حب الرسول صلي الله عليه و سلم",
	"text": null,
	"status": "p",
	"file": "/media/filer_public/61/a0/61a04a7e-21bb-4e5e-a7a9-0c1172d65e56/fatwa01.mp3"
}
Hadith Tafsir:
{
	"id": 3,
	"text": null,
	"video_url": "SMeM39yQSjI",
	"status": "p",
	"book": 1,
	"chapter": 2,
	"hadith": 2,
	"video_tafsir": "/media/filer_public/01/b3/01b3b023-6955-424f-a093-2eeb12db4b75/bokhv00002.flv",
	"audio_tafsir": "/media/filer_public/2e/a2/2ea22420-a384-481e-af44-7658c5bf73cc/bokh00002.mp3"
}
Other Science Audio:
{
	"id": 577,
	"title": "السيدة أسماء بنت أبي بكر",
	"status": "p",
	"video_url": null,
	"file": "/media/filer_public/27/48/27485d70-5f6e-41c7-ab2c-ee4b1e307170/omhat18.mp3",
	"subject": 8
}
Other Science Video:
{
	"id": 1254,
	"title": "أهل المعروف 1",
	"status": "p",
	"video_url": "-mghi_M6iTU",
	"file": "/media/filer_public/18/c5/18c53f31-8c88-4214-9e34-7423be778c4a/a7adths030.flv",
	"subject": 16
}
Quran Telawa:
{
	"id": 175,
	"status": "p",
	"sura": 232,
	"aya_start": 6237,
	"aya_end": 6286,
	"file": "/media/filer_public/a8/22/a8225da3-ade4-48f3-87b8-ed65e86306f1/telwa002.mp3",
	"aya_start_count": 1,
	"aya_end_count": 43
}
Quran Tafsir Audio:
{
	"id": 1265,
	"text": null,
	"status": "p",
	"sura": 232,
	"aya_start": 6244,
	"aya_end": 6248,
	"file": "/media/filer_public/6c/16/6c16a076-d10c-4f6c-86e8-e2a4a6d5f360/002_001-005.mp3",
	"aya_start_count": 1,
	"aya_end_count": 5
}
Quran Tafsir Video:
{
	"id": 25488,
	"video_url": "qF5E6SLv4XM",
	"text": null,
	"status": "p",
	"sura": 232,
	"aya_start": 6244,
	"aya_end": 6245,
	"file": "/media/filer_public/27/f4/27f474bb-af33-4981-bae7-224fda3b7845/quranv00008.flv",
	"aya_start_count": 1,
	"aya_end_count": 2
}
Session Quran:
{
	"id": 702,
	"title": "الفاتحة ٢.mp4",
	"type": "quran",
	"video_url": null,
	"status": "p",
	"file": "/media/filer_public/22/7f/227fc195-c4eb-45ee-87a4-1d4764dcc245/lfth_2.mp4",
	"category": 73
}
Session Hadith:
{
	"id": 1233,
	"title": "VTS_02_1.mp4",
	"type": "hadith",
	"video_url": null,
	"status": "p",
	"file": "/media/filer_public/27/6d/276d8f17-e69e-4e88-97aa-bfe715aab304/vts_02_1.mp4",
	"category": 177
}
Session Other Science:
{
	"id": 4078,
	"title": "SalahS002.mp4",
	"type": "OtherScience",
	"video_url": null,
	"status": "p",
	"file": "/media/filer_public/c2/14/c2145866-d04d-47a8-86ec-ca3a7b613b89/salahs002.mp4",
	"category": 109
}
*/
