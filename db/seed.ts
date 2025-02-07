// import { db, Escort } from 'astro:db';

// // https://astro.build/db/seed
// export default async function seed() {
// 	await db.insert(Escort).values([
// 		{
// 			id: 1,
// 			name: "Alejandra",
// 			pictures: [
// 				{
// 					id: 1,
// 					src: "/src/assets/fenix-girls/Alejandra/8c049d0b-c3a3-4fbf-ac43-25660cb53f6c.jpg",
// 					cover: true
// 				},
// 				{
// 					id: 2,
// 					src: "/src/assets/fenix-girls/Alejandra/880169da-d2d0-4eb5-9953-95a4b66e6bf2.jpg",
// 					cover: false
// 				},
// 				{
// 					id: 3,
// 					src: "/src/assets/fenix-girls/Alejandra/a9d27976-548e-4e3d-830c-c14f0fe4fbc3.jpg",
// 					cover: false
// 				},
// 				{
// 					id: 4,
// 					src: "/src/assets/fenix-girls/Alejandra/b19f9e87-2aba-4c86-af1b-ffe62d403651.jpg",
// 					cover: false
// 				}
// 			],
// 			prices: [
// 				{
// 					hours: 1,
// 					value: 100
// 				},
// 				{
// 					hours: 3,
// 					value: 250
// 				},
// 				{
// 					hours: 5,
// 					value: 400
// 				}
// 			],
// 			enabled: true
// 		},
// 		{
// 			id: 2,
// 			name: "Anna",
// 			pictures: [
// 				{
// 					id: 1,
// 					src: "/src/assets/fenix-girls/Anna/2b20acde-2334-4837-8263-aaa233266e93.jpg",
// 					cover: true
// 				},
// 				{
// 					id: 2,
// 					src: "/src/assets/fenix-girls/Anna/8e6569ef-5a60-41dd-bf9e-d13951718e3a.jpg",
// 					cover: false
// 				},
// 				{
// 					id: 3,
// 					src: "/src/assets/fenix-girls/Anna/b57d52d0-d059-48e8-a7d8-361ec3f75d68.jpg",
// 					cover: false
// 				}
// 			],
// 			prices: [
// 				{
// 					hours: 1,
// 					value: 100
// 				},
// 				{
// 					hours: 3,
// 					value: 250
// 				},
// 				{
// 					hours: 5,
// 					value: 400
// 				}
// 			],
// 			enabled: true
// 		},
// 		{
// 			id: 3,
// 			name: "Celeste",
// 			pictures: [
// 				{
// 					id: 1,
// 					src: "/src/assets/fenix-girls/Celeste/1836dc0d-a5cb-47d6-a3a9-e549b62e5eae.jpg",
// 					cover: true
// 				},
// 				{
// 					id: 2,
// 					src: "/src/assets/fenix-girls/Celeste/d1161995-c6b2-4a18-aa0f-22ee77e94f6c.jpg",
// 					cover: false
// 				},
// 				{
// 					id: 3,
// 					src: "/src/assets/fenix-girls/Celeste/ee117147-ca74-4806-b5d9-fdc040702197.jpg",
// 					cover: false
// 				}
// 			],
// 			prices: [
// 				{
// 					hours: 1,
// 					value: 100
// 				},
// 				{
// 					hours: 3,
// 					value: 250
// 				},
// 				{
// 					hours: 5,
// 					value: 400
// 				}
// 			],
// 			enabled: true
// 		},
// 		{
// 			id: 4,
// 			name: "Emy",
// 			pictures: [
// 				{
// 					id: 1,
// 					src: "/src/assets/fenix-girls/Emy/5a566106-a750-4d9c-8fd6-1558e39faadf.jpg",
// 					cover: true
// 				},
// 				{
// 					id: 2,
// 					src: "/src/assets/fenix-girls/Emy/9cd863a0-1d11-4d2d-b4d8-a0fc316e03b1.jpg",
// 					cover: false
// 				},
// 				{
// 					id: 3,
// 					src: "/src/assets/fenix-girls/Emy/703dae44-aa57-4815-98d2-b51d083230ec.jpg",
// 					cover: false
// 				}
// 			],
// 			prices: [
// 				{
// 					hours: 1,
// 					value: 100
// 				},
// 				{
// 					hours: 3,
// 					value: 250
// 				},
// 				{
// 					hours: 5,
// 					value: 400
// 				}
// 			],
// 			enabled: true
// 		},
// 		{
// 			id: 5,
// 			name: "Melissa",
// 			pictures: [
// 				{
// 					id: 1,
// 					src: "/src/assets/fenix-girls/Melissa/5fb4c1e2-60f5-4810-b500-2fc705453e8c.jpg",
// 					cover: true
// 				},
// 				{
// 					id: 2,
// 					src: "/src/assets/fenix-girls/Melissa/18e3abee-163b-4921-b7a9-07759b8209bd.jpg",
// 					cover: false
// 				},
// 				{
// 					id: 3,
// 					src: "/src/assets/fenix-girls/Melissa/4417cb47-9c4a-4d6b-a4d1-301d06195b6f.jpg",
// 					cover: false
// 				},
// 				{
// 					id: 4,
// 					src: "/src/assets/fenix-girls/Melissa/c10731b0-267d-491e-b25a-9e303e33e3c7.jpg",
// 					cover: false
// 				}
// 			],
// 			prices: [
// 				{
// 					hours: 1,
// 					value: 100
// 				},
// 				{
// 					hours: 3,
// 					value: 250
// 				},
// 				{
// 					hours: 5,
// 					value: 400
// 				}
// 			],
// 			enabled: true
// 		},
// 		{
// 			id: 6,
// 			name: "Samantha",
// 			pictures: [
// 				{
// 					id: 1,
// 					src: "/src/assets/fenix-girls/Samantha/f98473d7-591b-4d4e-8df7-42b8f2dc9907.jpg",
// 					cover: true
// 				}
// 			],
// 			prices: [
// 				{
// 					hours: 1,
// 					value: 100
// 				},
// 				{
// 					hours: 3,
// 					value: 250
// 				},
// 				{
// 					hours: 5,
// 					value: 400
// 				}
// 			],
// 			enabled: true
// 		},
// 		{
// 			id: 7,
// 			name: "Valentina",
// 			pictures: [
// 				{
// 					id: 1,
// 					src: "/src/assets/fenix-girls/Valentina/87c9d248-aada-40e8-8972-30ac0185ff28.jpg",
// 					cover: true
// 				},
// 				{
// 					id: 2,
// 					src: "/src/assets/fenix-girls/Valentina/bbdba6a2-5ef5-42fc-9587-0e15d3f90195.jpg",
// 					cover: false
// 				},
// 				{
// 					id: 3,
// 					src: "/src/assets/fenix-girls/Valentina/c78af847-5fc1-4292-bbe7-e8e564c1571b.jpg",
// 					cover: false
// 				}
// 			],
// 			prices: [
// 				{
// 					hours: 1,
// 					value: 100
// 				},
// 				{
// 					hours: 3,
// 					value: 250
// 				},
// 				{
// 					hours: 5,
// 					value: 400
// 				}
// 			],
// 			enabled: true
// 		},
// 		{
// 			id: 8,
// 			name: "Vanessa",
// 			pictures: [
// 				{
// 					id: 1,
// 					src: "/src/assets/fenix-girls/Vanessa/32f463fb-2a83-4113-a920-f0dbf975aeff.jpg",
// 					cover: true
// 				},
// 				{
// 					id: 2,
// 					src: "/src/assets/fenix-girls/Vanessa/20435f5b-6cac-42db-bdb6-d626127fef03.jpg",
// 					cover: false
// 				},
// 				{
// 					id: 3,
// 					src: "/src/assets/fenix-girls/Vanessa/e05784a2-a599-4ae4-b099-0150f08e8a7b.jpg",
// 					cover: false
// 				}
// 			],
// 			prices: [
// 				{
// 					hours: 1,
// 					value: 100
// 				},
// 				{
// 					hours: 3,
// 					value: 250
// 				},
// 				{
// 					hours: 5,
// 					value: 400
// 				}
// 			],
// 			enabled: true
// 		},
// 		{
// 			id: 10,
// 			name: "Yulieth",
// 			pictures: [
// 				{
// 					id: 1,
// 					src: "/src/assets/fenix-girls/Yulieth/98aa03fc-1976-4e2e-8152-eaf4e595a1cc.jpg",
// 					cover: true
// 				},
// 				{
// 					id: 2,
// 					src: "/src/assets/fenix-girls/Yulieth/02965ce4-fcfa-459b-8096-f61bce0ecd2d.jpg",
// 					cover: false
// 				},
// 				{
// 					id: 3,
// 					src: "/src/assets/fenix-girls/Yulieth/921456e6-f757-42b7-8376-eb0adf2e089a.jpg",
// 					cover: false
// 				}
// 			],
// 			prices: [
// 				{
// 					hours: 1,
// 					value: 100
// 				},
// 				{
// 					hours: 3,
// 					value: 250
// 				},
// 				{
// 					hours: 5,
// 					value: 400
// 				}
// 			],
// 			enabled: true
// 		},
// 	  ]);
// }
