import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AccountNumber: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Byte: { input: any; output: any; }
  CountryCode: { input: any; output: any; }
  Cuid: { input: any; output: any; }
  Currency: { input: any; output: any; }
  DID: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  DateTimeISO: { input: any; output: any; }
  DeweyDecimal: { input: any; output: any; }
  Duration: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  GUID: { input: any; output: any; }
  HSL: { input: any; output: any; }
  HSLA: { input: any; output: any; }
  HexColorCode: { input: any; output: any; }
  Hexadecimal: { input: any; output: any; }
  IBAN: { input: any; output: any; }
  IP: { input: any; output: any; }
  IPCPatent: { input: any; output: any; }
  IPv4: { input: any; output: any; }
  IPv6: { input: any; output: any; }
  ISBN: { input: any; output: any; }
  ISO8601Duration: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  JWT: { input: any; output: any; }
  LCCSubclass: { input: any; output: any; }
  Latitude: { input: any; output: any; }
  LocalDate: { input: any; output: any; }
  LocalDateTime: { input: any; output: any; }
  LocalEndTime: { input: any; output: any; }
  LocalTime: { input: any; output: any; }
  Locale: { input: any; output: any; }
  Long: { input: any; output: any; }
  Longitude: { input: any; output: any; }
  MAC: { input: any; output: any; }
  NegativeFloat: { input: any; output: any; }
  NegativeInt: { input: any; output: any; }
  NonEmptyString: { input: any; output: any; }
  NonNegativeFloat: { input: any; output: any; }
  NonNegativeInt: { input: any; output: any; }
  NonPositiveFloat: { input: any; output: any; }
  NonPositiveInt: { input: any; output: any; }
  ObjectID: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
  Port: { input: any; output: any; }
  PositiveFloat: { input: any; output: any; }
  PositiveInt: { input: any; output: any; }
  PostalCode: { input: any; output: any; }
  RGB: { input: any; output: any; }
  RGBA: { input: any; output: any; }
  RoutingNumber: { input: any; output: any; }
  SafeInt: { input: any; output: any; }
  SemVer: { input: any; output: any; }
  Time: { input: any; output: any; }
  TimeZone: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
  URL: { input: any; output: any; }
  USCurrency: { input: any; output: any; }
  UUID: { input: any; output: any; }
  UnsignedFloat: { input: any; output: any; }
  UnsignedInt: { input: any; output: any; }
  UtcOffset: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct?: Maybe<Product>;
  createProfile?: Maybe<Profile>;
  createProfileRight?: Maybe<ProfileRight>;
  createUser?: Maybe<User>;
  createUserWarehouse?: Maybe<UserWarehouse>;
  createWarehouse?: Maybe<Warehouse>;
  exportStockMovement?: Maybe<StockMovement>;
  importStockMovement?: Maybe<StockMovement>;
};


export type MutationCreateProductArgs = {
  input: ProductInput;
};


export type MutationCreateProfileArgs = {
  input: ProfileInput;
};


export type MutationCreateProfileRightArgs = {
  input: ProfileRightInput;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationCreateUserWarehouseArgs = {
  input: UserWarehouseInput;
};


export type MutationCreateWarehouseArgs = {
  input: WarehouseInput;
};


export type MutationExportStockMovementArgs = {
  input: ExportStockMovementInput;
};


export type MutationImportStockMovementArgs = {
  input: ImportStockMovementInput;
};

export type Operation = {
  __typename?: 'Operation';
  wr_availability?: Maybe<Scalars['Int']['output']>;
  wr_stock?: Maybe<Scalars['Int']['output']>;
  wr_utilization?: Maybe<Scalars['Int']['output']>;
};

export type Product = {
  __typename?: 'Product';
  StockMovement?: Maybe<Array<Maybe<StockMovement>>>;
  createdAt: Scalars['DateTime']['output'];
  product_id: Scalars['Int']['output'];
  product_name: Scalars['String']['output'];
  risk_type: TypeRisk;
  size_per_unit: Scalars['Int']['output'];
  status: TypeStatus;
};

export type ProductInput = {
  product_name?: InputMaybe<Scalars['String']['input']>;
  risk_type?: InputMaybe<TypeRisk>;
  size_per_unit?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TypeStatus>;
};

export type Profile = {
  __typename?: 'Profile';
  ProfileRight?: Maybe<ProfileRight>;
  User?: Maybe<Array<Maybe<User>>>;
  profile: Scalars['String']['output'];
  profile_id: Scalars['Int']['output'];
  status: TypeStatus;
};

export type ProfileInput = {
  profile: Scalars['String']['input'];
  status: TypeStatus;
};

export type ProfileRight = {
  __typename?: 'ProfileRight';
  product: Scalars['Int']['output'];
  profile_id: Scalars['Int']['output'];
  warehouse: Scalars['Int']['output'];
};

export type ProfileRightInput = {
  product: Scalars['Int']['input'];
  profile_id: Scalars['Int']['input'];
  warehouse: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  operation?: Maybe<Operation>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  profile?: Maybe<Profile>;
  profileRight?: Maybe<ProfileRight>;
  profileRights?: Maybe<Array<Maybe<ProfileRight>>>;
  profiles?: Maybe<Array<Maybe<Profile>>>;
  stockMovementProduct?: Maybe<Array<Maybe<StockMovement>>>;
  stockMovementWarehouse?: Maybe<Array<Maybe<StockMovement>>>;
  stockMovements?: Maybe<Array<Maybe<StockMovement>>>;
  user?: Maybe<User>;
  userLogin?: Maybe<User>;
  userWarehouses?: Maybe<Array<Maybe<UserWarehouse>>>;
  users?: Maybe<Array<Maybe<User>>>;
  warehouse?: Maybe<Warehouse>;
  warehouses?: Maybe<Array<Maybe<Warehouse>>>;
};


export type QueryOperationArgs = {
  warehouse_id: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  product_id: Scalars['Int']['input'];
};


export type QueryProfileArgs = {
  profile_id: Scalars['Int']['input'];
};


export type QueryProfileRightArgs = {
  profile_id: Scalars['Int']['input'];
};


export type QueryStockMovementProductArgs = {
  product_id: Scalars['Int']['input'];
};


export type QueryStockMovementWarehouseArgs = {
  warehouse_id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  user_id: Scalars['Int']['input'];
};


export type QueryUserLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type QueryWarehouseArgs = {
  warehouse_id: Scalars['Int']['input'];
};

export type StockMovement = {
  __typename?: 'StockMovement';
  amount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  exp_imp_warehouse_id?: Maybe<Scalars['Int']['output']>;
  movement_date: Scalars['DateTime']['output'];
  movement_id: Scalars['Int']['output'];
  movement_type: TypeMovement;
  product_id: Scalars['Int']['output'];
  products_table?: Maybe<Product>;
  status: TypeStatus;
  units: Scalars['Int']['output'];
  warehouse_id: Scalars['Int']['output'];
};

export enum TypeMovement {
  Exported = 'EXPORTED',
  Imported = 'IMPORTED'
}

export enum TypeRisk {
  Hazardous = 'HAZARDOUS',
  NonHazardous = 'NON_HAZARDOUS'
}

export enum TypeStatus {
  Active = 'ACTIVE',
  Disabled = 'DISABLED',
  Locked = 'LOCKED'
}

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  password: Scalars['String']['output'];
  profile_id: Scalars['Int']['output'];
  status: TypeStatus;
  user_id: Scalars['Int']['output'];
  user_name: Scalars['String']['output'];
};

export type UserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profile_id: Scalars['Int']['input'];
  status: TypeStatus;
  user_name: Scalars['String']['input'];
};

export type UserWarehouse = {
  __typename?: 'UserWarehouse';
  user_id: Scalars['Int']['output'];
  warehouse_id: Scalars['Int']['output'];
};

export type UserWarehouseInput = {
  user_id: Scalars['Int']['input'];
  warehouse_id: Scalars['Int']['input'];
};

export type Warehouse = {
  __typename?: 'Warehouse';
  StockMovement?: Maybe<Array<Maybe<StockMovement>>>;
  UserWarehouse?: Maybe<Array<Maybe<UserWarehouse>>>;
  createdAt: Scalars['DateTime']['output'];
  max_stock_amount: Scalars['Int']['output'];
  risk_type: TypeRisk;
  status: TypeStatus;
  warehouse_id: Scalars['Int']['output'];
  warehouse_name: Scalars['String']['output'];
};

export type WarehouseInput = {
  max_stock_amount: Scalars['Int']['input'];
  risk_type: TypeRisk;
  status: TypeStatus;
  warehouse_name?: InputMaybe<Scalars['String']['input']>;
};

export type ExportStockMovementInput = {
  amount: Scalars['Int']['input'];
  exp_imp_warehouse_id: Scalars['Int']['input'];
  movement_date: Scalars['DateTime']['input'];
  movement_type: TypeMovement;
  product_id: Scalars['Int']['input'];
  status: TypeStatus;
  units: Scalars['Int']['input'];
  warehouse_id: Scalars['Int']['input'];
};

export type ImportStockMovementInput = {
  amount: Scalars['Int']['input'];
  movement_date: Scalars['DateTime']['input'];
  movement_type: TypeMovement;
  product_id: Scalars['Int']['input'];
  status: TypeStatus;
  units: Scalars['Int']['input'];
  warehouse_id: Scalars['Int']['input'];
};

export type GetProdAndWerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProdAndWerQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', product_id: number, product_name: string, risk_type: TypeRisk, size_per_unit: number } | null> | null, warehouses?: Array<{ __typename?: 'Warehouse', warehouse_id: number, warehouse_name: string, risk_type: TypeRisk } | null> | null };

export type CreateStocklImportMutationVariables = Exact<{
  input: ImportStockMovementInput;
}>;


export type CreateStocklImportMutation = { __typename?: 'Mutation', importStockMovement?: { __typename?: 'StockMovement', movement_id: number, warehouse_id: number, product_id: number, movement_type: TypeMovement, units: number, amount: number, movement_date: any, status: TypeStatus, createdAt: any } | null };

export type CreateStocklExporttMutationVariables = Exact<{
  input: ExportStockMovementInput;
}>;


export type CreateStocklExporttMutation = { __typename?: 'Mutation', exportStockMovement?: { __typename?: 'StockMovement', movement_id: number, exp_imp_warehouse_id?: number | null, warehouse_id: number, product_id: number, movement_type: TypeMovement, units: number, amount: number, movement_date: any, status: TypeStatus, createdAt: any } | null };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', product_id: number, product_name: string, size_per_unit: number, risk_type: TypeRisk, status: TypeStatus } | null> | null };

export type CreateProductMutationVariables = Exact<{
  input: ProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct?: { __typename?: 'Product', product_id: number, product_name: string, size_per_unit: number, status: TypeStatus } | null };

export type GetWarehousesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWarehousesQuery = { __typename?: 'Query', warehouses?: Array<{ __typename?: 'Warehouse', warehouse_name: string, warehouse_id: number } | null> | null };

export type OperationQueryVariables = Exact<{
  warehouseId: Scalars['Int']['input'];
}>;


export type OperationQuery = { __typename?: 'Query', operation?: { __typename?: 'Operation', wr_utilization?: number | null, wr_stock?: number | null, wr_availability?: number | null } | null };

export type GetStockMovementWarehouseQueryVariables = Exact<{
  warehouseId: Scalars['Int']['input'];
}>;


export type GetStockMovementWarehouseQuery = { __typename?: 'Query', stockMovementWarehouse?: Array<{ __typename?: 'StockMovement', movement_id: number, exp_imp_warehouse_id?: number | null, warehouse_id: number, product_id: number, movement_type: TypeMovement, units: number, amount: number, movement_date: any, status: TypeStatus, createdAt: any, products_table?: { __typename?: 'Product', product_name: string } | null } | null> | null };


export const GetProdAndWerDocument = gql`
    query getProdAndWer {
  products {
    product_id
    product_name
    risk_type
    size_per_unit
  }
  warehouses {
    warehouse_id
    warehouse_name
    risk_type
  }
}
    `;

/**
 * __useGetProdAndWerQuery__
 *
 * To run a query within a React component, call `useGetProdAndWerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProdAndWerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProdAndWerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProdAndWerQuery(baseOptions?: Apollo.QueryHookOptions<GetProdAndWerQuery, GetProdAndWerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProdAndWerQuery, GetProdAndWerQueryVariables>(GetProdAndWerDocument, options);
      }
export function useGetProdAndWerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProdAndWerQuery, GetProdAndWerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProdAndWerQuery, GetProdAndWerQueryVariables>(GetProdAndWerDocument, options);
        }
export function useGetProdAndWerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProdAndWerQuery, GetProdAndWerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProdAndWerQuery, GetProdAndWerQueryVariables>(GetProdAndWerDocument, options);
        }
export type GetProdAndWerQueryHookResult = ReturnType<typeof useGetProdAndWerQuery>;
export type GetProdAndWerLazyQueryHookResult = ReturnType<typeof useGetProdAndWerLazyQuery>;
export type GetProdAndWerSuspenseQueryHookResult = ReturnType<typeof useGetProdAndWerSuspenseQuery>;
export type GetProdAndWerQueryResult = Apollo.QueryResult<GetProdAndWerQuery, GetProdAndWerQueryVariables>;
export const CreateStocklImportDocument = gql`
    mutation CreateStocklImport($input: importStockMovementInput!) {
  importStockMovement(input: $input) {
    movement_id
    warehouse_id
    product_id
    movement_type
    units
    amount
    movement_date
    status
    createdAt
  }
}
    `;
export type CreateStocklImportMutationFn = Apollo.MutationFunction<CreateStocklImportMutation, CreateStocklImportMutationVariables>;

/**
 * __useCreateStocklImportMutation__
 *
 * To run a mutation, you first call `useCreateStocklImportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStocklImportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStocklImportMutation, { data, loading, error }] = useCreateStocklImportMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStocklImportMutation(baseOptions?: Apollo.MutationHookOptions<CreateStocklImportMutation, CreateStocklImportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStocklImportMutation, CreateStocklImportMutationVariables>(CreateStocklImportDocument, options);
      }
export type CreateStocklImportMutationHookResult = ReturnType<typeof useCreateStocklImportMutation>;
export type CreateStocklImportMutationResult = Apollo.MutationResult<CreateStocklImportMutation>;
export type CreateStocklImportMutationOptions = Apollo.BaseMutationOptions<CreateStocklImportMutation, CreateStocklImportMutationVariables>;
export const CreateStocklExporttDocument = gql`
    mutation CreateStocklExportt($input: exportStockMovementInput!) {
  exportStockMovement(input: $input) {
    movement_id
    exp_imp_warehouse_id
    warehouse_id
    product_id
    movement_type
    units
    amount
    movement_date
    status
    createdAt
  }
}
    `;
export type CreateStocklExporttMutationFn = Apollo.MutationFunction<CreateStocklExporttMutation, CreateStocklExporttMutationVariables>;

/**
 * __useCreateStocklExporttMutation__
 *
 * To run a mutation, you first call `useCreateStocklExporttMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStocklExporttMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStocklExporttMutation, { data, loading, error }] = useCreateStocklExporttMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStocklExporttMutation(baseOptions?: Apollo.MutationHookOptions<CreateStocklExporttMutation, CreateStocklExporttMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStocklExporttMutation, CreateStocklExporttMutationVariables>(CreateStocklExporttDocument, options);
      }
export type CreateStocklExporttMutationHookResult = ReturnType<typeof useCreateStocklExporttMutation>;
export type CreateStocklExporttMutationResult = Apollo.MutationResult<CreateStocklExporttMutation>;
export type CreateStocklExporttMutationOptions = Apollo.BaseMutationOptions<CreateStocklExporttMutation, CreateStocklExporttMutationVariables>;
export const GetProductsDocument = gql`
    query getProducts {
  products {
    product_id
    product_name
    size_per_unit
    risk_type
    status
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export function useGetProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsSuspenseQueryHookResult = ReturnType<typeof useGetProductsSuspenseQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($input: ProductInput!) {
  createProduct(input: $input) {
    product_id
    product_name
    size_per_unit
    status
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const GetWarehousesDocument = gql`
    query getWarehouses {
  warehouses {
    warehouse_name
    warehouse_id
  }
}
    `;

/**
 * __useGetWarehousesQuery__
 *
 * To run a query within a React component, call `useGetWarehousesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWarehousesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWarehousesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWarehousesQuery(baseOptions?: Apollo.QueryHookOptions<GetWarehousesQuery, GetWarehousesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWarehousesQuery, GetWarehousesQueryVariables>(GetWarehousesDocument, options);
      }
export function useGetWarehousesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWarehousesQuery, GetWarehousesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWarehousesQuery, GetWarehousesQueryVariables>(GetWarehousesDocument, options);
        }
export function useGetWarehousesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetWarehousesQuery, GetWarehousesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetWarehousesQuery, GetWarehousesQueryVariables>(GetWarehousesDocument, options);
        }
export type GetWarehousesQueryHookResult = ReturnType<typeof useGetWarehousesQuery>;
export type GetWarehousesLazyQueryHookResult = ReturnType<typeof useGetWarehousesLazyQuery>;
export type GetWarehousesSuspenseQueryHookResult = ReturnType<typeof useGetWarehousesSuspenseQuery>;
export type GetWarehousesQueryResult = Apollo.QueryResult<GetWarehousesQuery, GetWarehousesQueryVariables>;
export const OperationDocument = gql`
    query Operation($warehouseId: Int!) {
  operation(warehouse_id: $warehouseId) {
    wr_utilization
    wr_stock
    wr_availability
  }
}
    `;

/**
 * __useOperationQuery__
 *
 * To run a query within a React component, call `useOperationQuery` and pass it any options that fit your needs.
 * When your component renders, `useOperationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOperationQuery({
 *   variables: {
 *      warehouseId: // value for 'warehouseId'
 *   },
 * });
 */
export function useOperationQuery(baseOptions: Apollo.QueryHookOptions<OperationQuery, OperationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OperationQuery, OperationQueryVariables>(OperationDocument, options);
      }
export function useOperationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OperationQuery, OperationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OperationQuery, OperationQueryVariables>(OperationDocument, options);
        }
export function useOperationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OperationQuery, OperationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OperationQuery, OperationQueryVariables>(OperationDocument, options);
        }
export type OperationQueryHookResult = ReturnType<typeof useOperationQuery>;
export type OperationLazyQueryHookResult = ReturnType<typeof useOperationLazyQuery>;
export type OperationSuspenseQueryHookResult = ReturnType<typeof useOperationSuspenseQuery>;
export type OperationQueryResult = Apollo.QueryResult<OperationQuery, OperationQueryVariables>;
export const GetStockMovementWarehouseDocument = gql`
    query getStockMovementWarehouse($warehouseId: Int!) {
  stockMovementWarehouse(warehouse_id: $warehouseId) {
    movement_id
    exp_imp_warehouse_id
    warehouse_id
    product_id
    movement_type
    units
    amount
    movement_date
    status
    createdAt
    products_table {
      product_name
    }
  }
}
    `;

/**
 * __useGetStockMovementWarehouseQuery__
 *
 * To run a query within a React component, call `useGetStockMovementWarehouseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStockMovementWarehouseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStockMovementWarehouseQuery({
 *   variables: {
 *      warehouseId: // value for 'warehouseId'
 *   },
 * });
 */
export function useGetStockMovementWarehouseQuery(baseOptions: Apollo.QueryHookOptions<GetStockMovementWarehouseQuery, GetStockMovementWarehouseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStockMovementWarehouseQuery, GetStockMovementWarehouseQueryVariables>(GetStockMovementWarehouseDocument, options);
      }
export function useGetStockMovementWarehouseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStockMovementWarehouseQuery, GetStockMovementWarehouseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStockMovementWarehouseQuery, GetStockMovementWarehouseQueryVariables>(GetStockMovementWarehouseDocument, options);
        }
export function useGetStockMovementWarehouseSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetStockMovementWarehouseQuery, GetStockMovementWarehouseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStockMovementWarehouseQuery, GetStockMovementWarehouseQueryVariables>(GetStockMovementWarehouseDocument, options);
        }
export type GetStockMovementWarehouseQueryHookResult = ReturnType<typeof useGetStockMovementWarehouseQuery>;
export type GetStockMovementWarehouseLazyQueryHookResult = ReturnType<typeof useGetStockMovementWarehouseLazyQuery>;
export type GetStockMovementWarehouseSuspenseQueryHookResult = ReturnType<typeof useGetStockMovementWarehouseSuspenseQuery>;
export type GetStockMovementWarehouseQueryResult = Apollo.QueryResult<GetStockMovementWarehouseQuery, GetStockMovementWarehouseQueryVariables>;