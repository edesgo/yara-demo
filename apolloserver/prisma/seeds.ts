import { Product, Warehouse, StockMovement, Profile, ProfileRight, User, UserWarehouse, PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
async function main(){


const profiles: Profile[] = [
        { profile_id: 1, profile:"Manager", status:"ACTIVE" },
        { profile_id: 2, profile:"Supervisor", status:"ACTIVE" },
    ]   
    
const profilerights: ProfileRight[] = [
        { profile_id: 1, warehouse: 1, product: 1 },
        { profile_id: 2, warehouse: 0, product: 1 },
   ]    

const users: User[] = [
        { user_id: 1, profile_id: 1 ,user_name: "Test Manager User", email: "manager@test.com", password: "1234", status: "ACTIVE" },
        { user_id: 2, profile_id: 2 ,user_name: "Test Superviser User" , email: "supervisor@test.com", password: "4321", status: "ACTIVE" }
    ]

const products: Product[] = [
    { product_id: 1, product_name: "Liquid Cream" ,size_per_unit: 13, risk_type: "NON_HAZARDOUS", status: "ACTIVE" ,createdAt: new Date()},
    { product_id: 2, product_name: "Liquid Soap" ,size_per_unit: 10, risk_type: "NON_HAZARDOUS", status: "ACTIVE" , createdAt: new Date()},
    { product_id: 3, product_name: "Diesel" ,size_per_unit: 3, risk_type: "HAZARDOUS", status: "ACTIVE" ,createdAt: new Date()},
    { product_id: 4, product_name: "Benzin" ,size_per_unit: 2, risk_type: "HAZARDOUS", status: "ACTIVE", createdAt: new Date() }
]


const warehouses: Warehouse[] = [
    { warehouse_id: 1, warehouse_name:"South_wh" ,max_stock_amount: 5000, risk_type: "HAZARDOUS", status:"ACTIVE" ,createdAt: new Date()},
    { warehouse_id: 2, warehouse_name:"North_wh" ,max_stock_amount: 1000, risk_type: "HAZARDOUS", status:"ACTIVE" ,createdAt: new Date()},
    { warehouse_id: 3, warehouse_name:"West_wh" ,max_stock_amount: 500, risk_type: "NON_HAZARDOUS", status:"ACTIVE" ,createdAt: new Date()},
    { warehouse_id: 4, warehouse_name:"East_wh" ,max_stock_amount: 1000, risk_type: "NON_HAZARDOUS", status:"ACTIVE" ,createdAt: new Date()}
]

const stockmovements: StockMovement[] = [
    { movement_id: 1, warehouse_id: 3, exp_imp_warehouse_id: null, product_id: 1, movement_type: "IMPORTED", movement_date: new Date("2023-11-15 09:32:00"), units: 5, amount: 65, status:"ACTIVE" ,createdAt: new Date()},
    { movement_id: 2, warehouse_id: 4, exp_imp_warehouse_id: null ,product_id: 2, movement_type: "IMPORTED", movement_date: new Date("2023-11-16 08:00:00"), units: 3, amount: 30, status:"ACTIVE" ,createdAt: new Date()},
    { movement_id: 3, warehouse_id: 1, exp_imp_warehouse_id: null, product_id: 3, movement_type: "IMPORTED", movement_date: new Date("2023-11-14 12:39:00"), units: 20, amount: 60, status:"ACTIVE" ,createdAt: new Date()},
    { movement_id: 4, warehouse_id: 2, exp_imp_warehouse_id: null, product_id: 4, movement_type: "IMPORTED", movement_date: new Date("2023-11-14 20:19:00"), units: 10, amount: 20, status:"ACTIVE" ,createdAt: new Date()},
    { movement_id: 5, warehouse_id: 1, exp_imp_warehouse_id: 2 , product_id: 3, movement_type: "EXPORTED", movement_date: new Date("2023-11-17 08:00:00"), units: 3, amount: 9, status:"ACTIVE" ,createdAt: new Date()},
    { movement_id: 6, warehouse_id: 2, exp_imp_warehouse_id: 1, product_id: 3, movement_type: "IMPORTED", movement_date: new Date("2023-11-18 18:00:00"), units: 3, amount: 9, status:"ACTIVE" ,createdAt: new Date()},
    { movement_id: 7, warehouse_id: 3, exp_imp_warehouse_id: 4 , product_id: 1, movement_type: "EXPORTED", movement_date: new Date("2023-11-19 08:00:00"), units: 4, amount: 52, status:"ACTIVE" ,createdAt: new Date()},
    { movement_id: 8, warehouse_id: 4, exp_imp_warehouse_id: 3, product_id: 1, movement_type: "IMPORTED", movement_date: new Date("2023-11-19 18:00:00"), units: 4, amount: 52, status:"ACTIVE" ,createdAt: new Date()},
]

const userwarehouses: UserWarehouse[] = [
    { user_id: 1, warehouse_id: 1  },
    { user_id: 1, warehouse_id: 2 },
    { user_id: 1, warehouse_id: 3 },
    { user_id: 1, warehouse_id: 4 },
    { user_id: 2, warehouse_id: 3 },
    { user_id: 2, warehouse_id: 4 }
]

await prisma.product.createMany({
    data: products
})

await prisma.warehouse.createMany({
    data: warehouses
})

await prisma.stockMovement.createMany({
    data: stockmovements
})

await prisma.profile.createMany({
    data: profiles
})

await prisma.profileRight.createMany({
    data: profilerights
})

await prisma.user.createMany({
    data: users
})
await prisma.userWarehouse.createMany({
    data: userwarehouses
})


await prisma.$queryRaw `SELECT setval('warehouse."Profile_profile_id_seq"', 2);`
await prisma.$queryRaw `SELECT setval('warehouse."User_user_id_seq"', 2);`

await prisma.$queryRaw `SELECT setval('warehouse."Product_product_id_seq"', 4);`
await prisma.$queryRaw `SELECT setval('warehouse."Warehouse_warehouse_id_seq"', 4);`
await prisma.$queryRaw `SELECT setval('warehouse."StockMovement_movement_id_seq"', 8);`


}

main()
.catch((e: Error) => {
    console.error(e)
    process.exit(1)
})
.finally( async () => {
    await prisma.$disconnect()
})