import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('e0ec7918-7753-4d9b-9f02-b9980ed966ed', '8Holly.Russel14@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=10', 'cus_abcde', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('c93ec276-52de-48c0-9d5e-e36e08c03d1f', '15Tiffany.Weimann-Kunde@gmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=17', 'cus_fghij', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('6b5e27b7-2506-4b23-9707-dbb05ebecf45', '22Narciso1@hotmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=24', 'cus_12345', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('c414d144-62a8-4ab5-96b2-5712bd32f9c7', '29Maci.Anderson@gmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=31', 'cus_67890', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('be1fbb43-b03e-4f57-9345-9f825abf6a40', '36Virgil_Hilll@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=38', 'cus_klmno', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('a61aa945-226d-4886-9a6e-7c461b107679', '43Eugene73@gmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_67890', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('34cb9f5c-abd2-414b-aa16-a17593c974b1', '50Yasmin17@hotmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=52', 'cus_abcde', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('350fa6f1-2c5e-462f-a202-fde081f2a682', '57Ashlee_Hintz@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=59', 'cus_67890', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('3bb164b7-7249-4941-8686-b57c4d747fcb', '64Nannie.Quigley49@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=66', 'cus_12345', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('e2598161-818e-44c3-bf9f-c8fa2e03ae58', 'Mood Tracker Update', 'Your mood tracker has been updated.', 'Mental Health Support', '74Edison.Schiller7@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=75', 'https://i.imgur.com/YfJQV5z.png?id=76', 'be1fbb43-b03e-4f57-9345-9f825abf6a40');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d841cd87-ce6b-4eac-83b5-c1adb8a90b1a', 'Session Reminder', 'We would love to hear your feedback on your recent session.', 'Mental Health Support', '81Vergie.Yost17@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=82', 'https://i.imgur.com/YfJQV5z.png?id=83', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('782d1082-e46a-4a06-8a90-69adec16c1e1', 'Session Reminder', 'Your chat history has been successfully exported.', 'Wellness Team', '88Leann.Erdman@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=89', 'https://i.imgur.com/YfJQV5z.png?id=90', '6b5e27b7-2506-4b23-9707-dbb05ebecf45');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('69c6099b-81c6-4fd5-ae95-86d74d8ee131', 'Session Reminder', 'You have a new message from your therapist.', 'Wellness Team', '95Friedrich_Gutmann@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=96', 'https://i.imgur.com/YfJQV5z.png?id=97', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('bea6aa46-eb87-433e-8079-667353c69d99', 'New Message Received', 'You have a new message from your therapist.', 'Dr. Smith', '102Fabian93@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=103', 'https://i.imgur.com/YfJQV5z.png?id=104', 'e0ec7918-7753-4d9b-9f02-b9980ed966ed');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('592f36ad-af90-4eb7-b86e-8e10d5cfabc1', 'New Message Received', 'Your chat history has been successfully exported.', 'Mental Health Support', '109Mossie.Deckow-Ebert@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=110', 'https://i.imgur.com/YfJQV5z.png?id=111', '3bb164b7-7249-4941-8686-b57c4d747fcb');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('4dadf927-aec4-4013-9d54-02ead75ec808', 'Session Reminder', 'We would love to hear your feedback on your recent session.', 'Chatbot Assistant', '116Howell.OConnell8@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=117', 'https://i.imgur.com/YfJQV5z.png?id=118', 'a61aa945-226d-4886-9a6e-7c461b107679');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d5e7f106-f7f1-4c89-917f-8083d94aa1f5', 'Chat History Export', 'We would love to hear your feedback on your recent session.', 'Wellness Team', '123Salvador.Ritchie@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=124', 'https://i.imgur.com/YfJQV5z.png?id=125', '34cb9f5c-abd2-414b-aa16-a17593c974b1');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('0fbde5b2-2981-43d1-8943-42f60de41288', 'Chat History Export', 'We would love to hear your feedback on your recent session.', 'Chatbot Assistant', '130Krystina20@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=131', 'https://i.imgur.com/YfJQV5z.png?id=132', '350fa6f1-2c5e-462f-a202-fde081f2a682');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('595f9ca5-adf3-4852-89b6-07dcbe714d64', 'Mood Tracker Update', 'Your mood tracker has been updated.', 'Dr. Smith', '137Quinn11@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=138', 'https://i.imgur.com/YfJQV5z.png?id=139', 'c93ec276-52de-48c0-9d5e-e36e08c03d1f');

INSERT INTO "mood" ("id", "moodValue", "timestamp", "userId") VALUES ('14950028-efa0-4487-847f-f185d87f60bb', 'Anxious', '2023-10-24T14:27:38.428Z', 'be1fbb43-b03e-4f57-9345-9f825abf6a40');
INSERT INTO "mood" ("id", "moodValue", "timestamp", "userId") VALUES ('19622ca8-d1d1-472d-930b-cfe226479919', 'Stressed', '2024-03-19T08:17:11.480Z', '34cb9f5c-abd2-414b-aa16-a17593c974b1');
INSERT INTO "mood" ("id", "moodValue", "timestamp", "userId") VALUES ('b6bec442-c8fe-486e-835a-5afd0aeda734', 'Calm', '2024-06-03T15:26:06.651Z', 'be1fbb43-b03e-4f57-9345-9f825abf6a40');
INSERT INTO "mood" ("id", "moodValue", "timestamp", "userId") VALUES ('844cf16a-0386-400e-8991-dd9088b6e645', 'Calm', '2023-07-16T16:37:19.316Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "mood" ("id", "moodValue", "timestamp", "userId") VALUES ('139d94d9-46ff-42c2-ba5a-0b7bd2102732', 'Calm', '2024-05-01T00:38:08.700Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "mood" ("id", "moodValue", "timestamp", "userId") VALUES ('c6d5c339-8bff-4d0d-9c0b-fb82f798c366', 'Anxious', '2025-05-30T03:00:31.293Z', 'be1fbb43-b03e-4f57-9345-9f825abf6a40');
INSERT INTO "mood" ("id", "moodValue", "timestamp", "userId") VALUES ('2751a6b1-bb4b-41e1-99c8-98af0203c96b', 'Sad', '2025-04-09T01:31:11.073Z', 'c414d144-62a8-4ab5-96b2-5712bd32f9c7');
INSERT INTO "mood" ("id", "moodValue", "timestamp", "userId") VALUES ('40e4c3c0-cd33-4e27-9aa8-947b1495f358', 'Happy', '2024-07-27T18:23:12.058Z', '6b5e27b7-2506-4b23-9707-dbb05ebecf45');
INSERT INTO "mood" ("id", "moodValue", "timestamp", "userId") VALUES ('bc2d9649-3818-4adb-8fbe-b03d066834b5', 'Stressed', '2023-10-11T05:01:07.134Z', 'a61aa945-226d-4886-9a6e-7c461b107679');
INSERT INTO "mood" ("id", "moodValue", "timestamp", "userId") VALUES ('ea7cfd47-ca32-4e28-8979-e2830cbcc420', 'Stressed', '2024-11-06T11:32:44.126Z', '3bb164b7-7249-4941-8686-b57c4d747fcb');

INSERT INTO "chat" ("id", "timestamp", "userId") VALUES ('dd186278-edf7-40cf-a82c-1537924d1766', '2025-03-29T22:54:55.249Z', 'be1fbb43-b03e-4f57-9345-9f825abf6a40');
INSERT INTO "chat" ("id", "timestamp", "userId") VALUES ('ec55fd59-6fc2-42e0-be71-8986407c26b5', '2024-11-18T04:37:17.587Z', '34cb9f5c-abd2-414b-aa16-a17593c974b1');
INSERT INTO "chat" ("id", "timestamp", "userId") VALUES ('c1902d1b-358a-48a3-9ac5-66e038aa1bb5', '2023-07-18T21:34:06.732Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "chat" ("id", "timestamp", "userId") VALUES ('56d57b10-e2f3-4471-aebd-05e0f1e11493', '2025-02-04T22:27:27.724Z', 'c414d144-62a8-4ab5-96b2-5712bd32f9c7');
INSERT INTO "chat" ("id", "timestamp", "userId") VALUES ('deaf75d2-09f1-4299-b4de-14a033239ed6', '2024-05-18T19:45:40.716Z', 'c414d144-62a8-4ab5-96b2-5712bd32f9c7');
INSERT INTO "chat" ("id", "timestamp", "userId") VALUES ('246613c8-71e5-443d-ad88-479d618d4dd8', '2024-06-26T22:11:09.655Z', 'a61aa945-226d-4886-9a6e-7c461b107679');
INSERT INTO "chat" ("id", "timestamp", "userId") VALUES ('cc3d2f33-43e3-4c2f-a557-4f8bbf12ff38', '2023-10-26T16:51:46.017Z', '350fa6f1-2c5e-462f-a202-fde081f2a682');
INSERT INTO "chat" ("id", "timestamp", "userId") VALUES ('390635b5-15b2-4c5e-be06-40c2923104d9', '2025-06-26T08:06:35.184Z', 'e0ec7918-7753-4d9b-9f02-b9980ed966ed');
INSERT INTO "chat" ("id", "timestamp", "userId") VALUES ('7e705c7b-256a-4e8d-8b5d-7db7a8664f77', '2024-08-16T17:48:15.368Z', 'e0ec7918-7753-4d9b-9f02-b9980ed966ed');
INSERT INTO "chat" ("id", "timestamp", "userId") VALUES ('11a692c8-d01b-4c9f-a0ca-9e3e715ea548', '2025-06-18T19:41:21.127Z', 'be1fbb43-b03e-4f57-9345-9f825abf6a40');

INSERT INTO "message" ("id", "content", "timestamp", "chatId", "senderId") VALUES ('3b022818-697b-4fec-8435-cb22266b5990', 'Im not sure how to handle my emotions right now.', '2024-11-24T13:48:10.695Z', 'dd186278-edf7-40cf-a82c-1537924d1766', 'a61aa945-226d-4886-9a6e-7c461b107679');
INSERT INTO "message" ("id", "content", "timestamp", "chatId", "senderId") VALUES ('c887af88-238e-496c-9d23-a6dd1dd01eaa', 'Im not sure how to handle my emotions right now.', '2024-12-25T04:36:22.721Z', '56d57b10-e2f3-4471-aebd-05e0f1e11493', 'c414d144-62a8-4ab5-96b2-5712bd32f9c7');
INSERT INTO "message" ("id", "content", "timestamp", "chatId", "senderId") VALUES ('11b387e9-9d95-4d63-ab3f-77a9710304dd', 'What are some techniques to manage stress', '2023-12-20T09:16:03.364Z', 'deaf75d2-09f1-4299-b4de-14a033239ed6', 'a61aa945-226d-4886-9a6e-7c461b107679');
INSERT INTO "message" ("id", "content", "timestamp", "chatId", "senderId") VALUES ('535ac243-e8da-4089-a247-c56c6adbfe71', 'Can you help me understand why Im feeling anxious', '2024-01-06T17:52:45.914Z', 'dd186278-edf7-40cf-a82c-1537924d1766', 'e0ec7918-7753-4d9b-9f02-b9980ed966ed');
INSERT INTO "message" ("id", "content", "timestamp", "chatId", "senderId") VALUES ('d16e0510-9634-4007-b002-92ea090747de', 'What are some techniques to manage stress', '2023-09-24T21:50:51.012Z', 'cc3d2f33-43e3-4c2f-a557-4f8bbf12ff38', '3bb164b7-7249-4941-8686-b57c4d747fcb');
INSERT INTO "message" ("id", "content", "timestamp", "chatId", "senderId") VALUES ('f893ed32-90b6-4985-abc3-4177e574fc55', 'Can you help me understand why Im feeling anxious', '2025-07-09T01:09:55.707Z', '56d57b10-e2f3-4471-aebd-05e0f1e11493', '350fa6f1-2c5e-462f-a202-fde081f2a682');
INSERT INTO "message" ("id", "content", "timestamp", "chatId", "senderId") VALUES ('072a8fe4-9b39-4d99-9482-435f8f897ed9', 'Im feeling a bit overwhelmed today.', '2024-06-06T05:55:55.251Z', '390635b5-15b2-4c5e-be06-40c2923104d9', '3bb164b7-7249-4941-8686-b57c4d747fcb');
INSERT INTO "message" ("id", "content", "timestamp", "chatId", "senderId") VALUES ('2d040df1-3b81-44fc-a7c5-b3be822a4b3b', 'Im feeling a bit overwhelmed today.', '2023-08-06T14:19:50.236Z', '390635b5-15b2-4c5e-be06-40c2923104d9', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "message" ("id", "content", "timestamp", "chatId", "senderId") VALUES ('032aa867-1e8f-45af-b051-011e06cedeed', 'Im not sure how to handle my emotions right now.', '2024-08-29T19:17:15.647Z', 'dd186278-edf7-40cf-a82c-1537924d1766', '3bb164b7-7249-4941-8686-b57c4d747fcb');
INSERT INTO "message" ("id", "content", "timestamp", "chatId", "senderId") VALUES ('7a72af5f-a4aa-4e97-b540-9ecbba9adcd5', 'Im not sure how to handle my emotions right now.', '2025-04-14T15:35:22.120Z', '7e705c7b-256a-4e8d-8b5d-7db7a8664f77', '34cb9f5c-abd2-414b-aa16-a17593c974b1');

INSERT INTO "setting" ("id", "theme", "userId") VALUES ('1096107c-5837-4a78-bd01-5a9a26c3b811', 'calm_blue', '350fa6f1-2c5e-462f-a202-fde081f2a682');
INSERT INTO "setting" ("id", "theme", "userId") VALUES ('5885aa91-b65a-4ba4-9254-913d96d18ecb', 'soothing_green', 'c414d144-62a8-4ab5-96b2-5712bd32f9c7');
INSERT INTO "setting" ("id", "theme", "userId") VALUES ('af2d96a2-ec6f-47a4-b265-de80ad8e92ce', 'calm_blue', '3bb164b7-7249-4941-8686-b57c4d747fcb');
INSERT INTO "setting" ("id", "theme", "userId") VALUES ('a73c4ec1-8617-4c22-8555-c999c15d2eb0', 'soothing_green', 'a61aa945-226d-4886-9a6e-7c461b107679');
INSERT INTO "setting" ("id", "theme", "userId") VALUES ('16d011e5-a2a7-482e-ab2a-dd7efeef23b0', 'calm_blue', 'a61aa945-226d-4886-9a6e-7c461b107679');
INSERT INTO "setting" ("id", "theme", "userId") VALUES ('53c0c6b3-5d4f-454c-9dbf-4f8462867797', 'sunset_orange', '34cb9f5c-abd2-414b-aa16-a17593c974b1');
INSERT INTO "setting" ("id", "theme", "userId") VALUES ('fb5de1ad-46e6-4511-b7b8-fbce87ca54b7', 'midnight_black', 'c414d144-62a8-4ab5-96b2-5712bd32f9c7');
INSERT INTO "setting" ("id", "theme", "userId") VALUES ('4d123ca2-a30e-4b7e-ad8c-b2c79eb9641b', 'forest_green', 'a61aa945-226d-4886-9a6e-7c461b107679');
INSERT INTO "setting" ("id", "theme", "userId") VALUES ('2d67bbc7-9936-468e-933b-44b3cfa37628', 'calm_blue', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "setting" ("id", "theme", "userId") VALUES ('49f83558-c46b-42d9-af44-e191b84036c9', 'calm_blue', '34cb9f5c-abd2-414b-aa16-a17593c974b1');

INSERT INTO "feedback" ("id", "rating", "comments", "userId", "chatId") VALUES ('fd94bc90-1e0a-41dc-808b-3d72350ac7ab', 1000, 'Some suggestions were repetitive but still useful.', 'a61aa945-226d-4886-9a6e-7c461b107679', '11a692c8-d01b-4c9f-a0ca-9e3e715ea548');
INSERT INTO "feedback" ("id", "rating", "comments", "userId", "chatId") VALUES ('42a1c161-ba05-4784-a46c-54ee4a177e9a', 343, 'Some suggestions were repetitive but still useful.', '6b5e27b7-2506-4b23-9707-dbb05ebecf45', '390635b5-15b2-4c5e-be06-40c2923104d9');
INSERT INTO "feedback" ("id", "rating", "comments", "userId", "chatId") VALUES ('ff6810c8-b28d-4039-8504-48f091e7899d', 66, 'The interface is calming but the responses need improvement.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'cc3d2f33-43e3-4c2f-a557-4f8bbf12ff38');
INSERT INTO "feedback" ("id", "rating", "comments", "userId", "chatId") VALUES ('cd9695c5-d977-428d-91a9-94cdd51002c5', 893, 'The chatbot was very helpful and understanding.', 'c414d144-62a8-4ab5-96b2-5712bd32f9c7', 'cc3d2f33-43e3-4c2f-a557-4f8bbf12ff38');
INSERT INTO "feedback" ("id", "rating", "comments", "userId", "chatId") VALUES ('08a23ff4-7f1c-4c5e-9add-55248045840b', 983, 'I found the responses to be a bit slow but overall good.', '3bb164b7-7249-4941-8686-b57c4d747fcb', 'c1902d1b-358a-48a3-9ac5-66e038aa1bb5');
INSERT INTO "feedback" ("id", "rating", "comments", "userId", "chatId") VALUES ('289041e9-0efa-4e4c-9151-eca3c0ef866e', 916, 'Great experience felt like talking to a real therapist.', '350fa6f1-2c5e-462f-a202-fde081f2a682', 'ec55fd59-6fc2-42e0-be71-8986407c26b5');
INSERT INTO "feedback" ("id", "rating", "comments", "userId", "chatId") VALUES ('5c5b787a-fac5-448c-b8a6-506bafc02a58', 715, 'The chatbot was very helpful and understanding.', 'c414d144-62a8-4ab5-96b2-5712bd32f9c7', '7e705c7b-256a-4e8d-8b5d-7db7a8664f77');
INSERT INTO "feedback" ("id", "rating", "comments", "userId", "chatId") VALUES ('dfe61bd9-5b78-4b8c-9ed6-ccbb1c0e8393', 704, 'The chatbot was very helpful and understanding.', '350fa6f1-2c5e-462f-a202-fde081f2a682', '7e705c7b-256a-4e8d-8b5d-7db7a8664f77');
INSERT INTO "feedback" ("id", "rating", "comments", "userId", "chatId") VALUES ('a7c90796-1a39-4513-b58d-af3f6a5f94f0', 699, 'The chatbot was very helpful and understanding.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '56d57b10-e2f3-4471-aebd-05e0f1e11493');
INSERT INTO "feedback" ("id", "rating", "comments", "userId", "chatId") VALUES ('26146650-2c1e-458c-8213-b7e23d362637', 778, 'The chatbot was very helpful and understanding.', '3bb164b7-7249-4941-8686-b57c4d747fcb', '56d57b10-e2f3-4471-aebd-05e0f1e11493');

INSERT INTO "export" ("id", "exportFormat", "timestamp", "userId", "chatId") VALUES ('0f169767-4754-48aa-800c-6064fffb69ce', 'TXT', '2024-10-13T01:03:19.989Z', 'e0ec7918-7753-4d9b-9f02-b9980ed966ed', '390635b5-15b2-4c5e-be06-40c2923104d9');
INSERT INTO "export" ("id", "exportFormat", "timestamp", "userId", "chatId") VALUES ('410881a1-ce2e-424f-bd3d-be2b59b58c64', 'PDF', '2024-08-25T15:09:21.079Z', 'be1fbb43-b03e-4f57-9345-9f825abf6a40', 'cc3d2f33-43e3-4c2f-a557-4f8bbf12ff38');
INSERT INTO "export" ("id", "exportFormat", "timestamp", "userId", "chatId") VALUES ('5d6d7cd8-5fd4-4b3e-bf61-c0685b11db20', 'CSV', '2024-05-10T20:25:54.005Z', '3bb164b7-7249-4941-8686-b57c4d747fcb', 'ec55fd59-6fc2-42e0-be71-8986407c26b5');
INSERT INTO "export" ("id", "exportFormat", "timestamp", "userId", "chatId") VALUES ('18881cef-4da5-4702-92f0-0a42f8f3d631', 'HTML', '2025-03-10T21:46:05.481Z', '6b5e27b7-2506-4b23-9707-dbb05ebecf45', 'dd186278-edf7-40cf-a82c-1537924d1766');
INSERT INTO "export" ("id", "exportFormat", "timestamp", "userId", "chatId") VALUES ('6ac77fdd-6d67-4ac4-80c6-25a8f4116943', 'HTML', '2023-12-26T06:48:50.620Z', 'e0ec7918-7753-4d9b-9f02-b9980ed966ed', 'dd186278-edf7-40cf-a82c-1537924d1766');
INSERT INTO "export" ("id", "exportFormat", "timestamp", "userId", "chatId") VALUES ('ad1a43da-4958-4c92-8942-99e572167f7f', 'HTML', '2024-11-02T08:35:55.551Z', '6b5e27b7-2506-4b23-9707-dbb05ebecf45', '56d57b10-e2f3-4471-aebd-05e0f1e11493');
INSERT INTO "export" ("id", "exportFormat", "timestamp", "userId", "chatId") VALUES ('28cf83c6-5274-40f9-b2bb-46c883ed3c34', 'TXT', '2023-12-17T21:29:54.075Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'cc3d2f33-43e3-4c2f-a557-4f8bbf12ff38');
INSERT INTO "export" ("id", "exportFormat", "timestamp", "userId", "chatId") VALUES ('24af642d-31cc-4614-a6ff-7c5a9e45175b', 'TXT', '2025-06-21T23:35:11.702Z', 'c93ec276-52de-48c0-9d5e-e36e08c03d1f', 'deaf75d2-09f1-4299-b4de-14a033239ed6');
INSERT INTO "export" ("id", "exportFormat", "timestamp", "userId", "chatId") VALUES ('c9dfee9b-369e-4eb1-9d98-1149e4fc96ab', 'PDF', '2024-08-10T02:30:06.443Z', '6b5e27b7-2506-4b23-9707-dbb05ebecf45', 'c1902d1b-358a-48a3-9ac5-66e038aa1bb5');
INSERT INTO "export" ("id", "exportFormat", "timestamp", "userId", "chatId") VALUES ('21051cd6-d2c8-498d-99e5-bd99f855c3e3', 'HTML', '2024-05-26T16:53:45.342Z', 'c93ec276-52de-48c0-9d5e-e36e08c03d1f', 'deaf75d2-09f1-4299-b4de-14a033239ed6');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
