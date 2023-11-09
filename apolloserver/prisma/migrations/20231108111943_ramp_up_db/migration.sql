-- CreateEnum
CREATE TYPE "TypeMovement" AS ENUM ('EXPORTED', 'IMPORTED');

-- CreateEnum
CREATE TYPE "TypeRisk" AS ENUM ('HAZARDOUS', 'NON_HAZARDOUS');

-- CreateEnum
CREATE TYPE "TypeStatus" AS ENUM ('ACTIVE', 'LOCKED', 'DISABLED');

-- CreateTable
CREATE TABLE "Product" (
    "product_id" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "size_per_unit" INTEGER NOT NULL,
    "risk_type" "TypeRisk" NOT NULL,
    "status" "TypeStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) DEFAULT NOW(),

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "Warehouse" (
    "warehouse_id" SERIAL NOT NULL,
    "warehouse_name" TEXT NOT NULL,
    "max_stock_amount" INTEGER NOT NULL,
    "risk_type" "TypeRisk" NOT NULL,
    "status" "TypeStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) DEFAULT NOW(),

    CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("warehouse_id")
);

-- CreateTable
CREATE TABLE "StockMovement" (
    "movement_id" SERIAL NOT NULL,
    "warehouse_id" INTEGER NOT NULL,
    "exp_imp_warehouse_id" INTEGER,
    "product_id" INTEGER NOT NULL,
    "movement_type" "TypeMovement" NOT NULL,
    "amount" INTEGER NOT NULL,
    "units" INTEGER NOT NULL,
    "movement_date" TIMESTAMP(3) NOT NULL,
    "status" "TypeStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) DEFAULT NOW(),

    CONSTRAINT "StockMovement_pkey" PRIMARY KEY ("movement_id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "profile_id" INTEGER NOT NULL,
    "user_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" "TypeStatus" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "UserWarehouse" (
    "user_id" INTEGER NOT NULL,
    "warehouse_id" INTEGER NOT NULL,

    CONSTRAINT "UserWarehouse_pkey" PRIMARY KEY ("warehouse_id","user_id")
);

-- CreateTable
CREATE TABLE "ProfileRight" (
    "profile_id" SERIAL NOT NULL,
    "warehouse" INTEGER NOT NULL,
    "product" INTEGER NOT NULL,

    CONSTRAINT "ProfileRight_pkey" PRIMARY KEY ("profile_id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "profile_id" SERIAL NOT NULL,
    "profile" TEXT NOT NULL,
    "status" "TypeStatus" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("profile_id")
);

-- AddForeignKey
ALTER TABLE "StockMovement" ADD CONSTRAINT "StockMovement_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockMovement" ADD CONSTRAINT "StockMovement_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "Warehouse"("warehouse_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWarehouse" ADD CONSTRAINT "UserWarehouse_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWarehouse" ADD CONSTRAINT "UserWarehouse_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "Warehouse"("warehouse_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileRight" ADD CONSTRAINT "ProfileRight_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;
