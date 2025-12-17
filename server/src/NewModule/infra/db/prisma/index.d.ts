
/**
 * Client
**/

import * as runtime from './runtime/binary.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model FileVersion
 * 
 */
export type FileVersion = $Result.DefaultSelection<Prisma.$FileVersionPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model FileTag
 * 
 */
export type FileTag = $Result.DefaultSelection<Prisma.$FileTagPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model UserDevice
 * 
 */
export type UserDevice = $Result.DefaultSelection<Prisma.$UserDevicePayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model UserLocation
 * 
 */
export type UserLocation = $Result.DefaultSelection<Prisma.$UserLocationPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FileStatus: {
  uploaded: 'uploaded',
  queued: 'queued',
  processing: 'processing',
  virus_failed: 'virus_failed',
  duplicate: 'duplicate',
  failed: 'failed',
  completed: 'completed'
};

export type FileStatus = (typeof FileStatus)[keyof typeof FileStatus]


export const JobStatus: {
  queued: 'queued',
  in_progress: 'in_progress',
  succeeded: 'succeeded',
  failed: 'failed',
  dead_letter: 'dead_letter'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]

}

export type FileStatus = $Enums.FileStatus

export const FileStatus: typeof $Enums.FileStatus

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => $Utils.JsPromise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs>;

  /**
   * `prisma.fileVersion`: Exposes CRUD operations for the **FileVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileVersions
    * const fileVersions = await prisma.fileVersion.findMany()
    * ```
    */
  get fileVersion(): Prisma.FileVersionDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs>;

  /**
   * `prisma.fileTag`: Exposes CRUD operations for the **FileTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileTags
    * const fileTags = await prisma.fileTag.findMany()
    * ```
    */
  get fileTag(): Prisma.FileTagDelegate<ExtArgs>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs>;

  /**
   * `prisma.userDevice`: Exposes CRUD operations for the **UserDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDevices
    * const userDevices = await prisma.userDevice.findMany()
    * ```
    */
  get userDevice(): Prisma.UserDeviceDelegate<ExtArgs>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs>;

  /**
   * `prisma.userLocation`: Exposes CRUD operations for the **UserLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLocations
    * const userLocations = await prisma.userLocation.findMany()
    * ```
    */
  get userLocation(): Prisma.UserLocationDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    File: 'File',
    FileVersion: 'FileVersion',
    Tag: 'Tag',
    FileTag: 'FileTag',
    Device: 'Device',
    UserDevice: 'UserDevice',
    Location: 'Location',
    UserLocation: 'UserLocation',
    AuditLog: 'AuditLog',
    Job: 'Job',
    Notification: 'Notification',
    Session: 'Session'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "file" | "fileVersion" | "tag" | "fileTag" | "device" | "userDevice" | "location" | "userLocation" | "auditLog" | "job" | "notification" | "session"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      FileVersion: {
        payload: Prisma.$FileVersionPayload<ExtArgs>
        fields: Prisma.FileVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          findFirst: {
            args: Prisma.FileVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          findMany: {
            args: Prisma.FileVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>[]
          }
          create: {
            args: Prisma.FileVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          createMany: {
            args: Prisma.FileVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>[]
          }
          delete: {
            args: Prisma.FileVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          update: {
            args: Prisma.FileVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          deleteMany: {
            args: Prisma.FileVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FileVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          aggregate: {
            args: Prisma.FileVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileVersion>
          }
          groupBy: {
            args: Prisma.FileVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileVersionCountArgs<ExtArgs>
            result: $Utils.Optional<FileVersionCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      FileTag: {
        payload: Prisma.$FileTagPayload<ExtArgs>
        fields: Prisma.FileTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTagPayload>
          }
          findFirst: {
            args: Prisma.FileTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTagPayload>
          }
          findMany: {
            args: Prisma.FileTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTagPayload>[]
          }
          create: {
            args: Prisma.FileTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTagPayload>
          }
          createMany: {
            args: Prisma.FileTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTagPayload>[]
          }
          delete: {
            args: Prisma.FileTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTagPayload>
          }
          update: {
            args: Prisma.FileTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTagPayload>
          }
          deleteMany: {
            args: Prisma.FileTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FileTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTagPayload>
          }
          aggregate: {
            args: Prisma.FileTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileTag>
          }
          groupBy: {
            args: Prisma.FileTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileTagCountArgs<ExtArgs>
            result: $Utils.Optional<FileTagCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      UserDevice: {
        payload: Prisma.$UserDevicePayload<ExtArgs>
        fields: Prisma.UserDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          findFirst: {
            args: Prisma.UserDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          findMany: {
            args: Prisma.UserDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>[]
          }
          create: {
            args: Prisma.UserDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          createMany: {
            args: Prisma.UserDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>[]
          }
          delete: {
            args: Prisma.UserDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          update: {
            args: Prisma.UserDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          deleteMany: {
            args: Prisma.UserDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          aggregate: {
            args: Prisma.UserDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDevice>
          }
          groupBy: {
            args: Prisma.UserDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<UserDeviceCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      UserLocation: {
        payload: Prisma.$UserLocationPayload<ExtArgs>
        fields: Prisma.UserLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          findFirst: {
            args: Prisma.UserLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          findMany: {
            args: Prisma.UserLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>[]
          }
          create: {
            args: Prisma.UserLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          createMany: {
            args: Prisma.UserLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>[]
          }
          delete: {
            args: Prisma.UserLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          update: {
            args: Prisma.UserLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          deleteMany: {
            args: Prisma.UserLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          aggregate: {
            args: Prisma.UserLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLocation>
          }
          groupBy: {
            args: Prisma.UserLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLocationCountArgs<ExtArgs>
            result: $Utils.Optional<UserLocationCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    auditLogs: number
    files: number
    notifications: number
    sessions: number
    devices: number
    locations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    files?: boolean | UserCountOutputTypeCountFilesArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    devices?: boolean | UserCountOutputTypeCountDevicesArgs
    locations?: boolean | UserCountOutputTypeCountLocationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDeviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLocationWhereInput
  }


  /**
   * Count Type FileCountOutputType
   */

  export type FileCountOutputType = {
    tags: number
    versions: number
  }

  export type FileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | FileCountOutputTypeCountTagsArgs
    versions?: boolean | FileCountOutputTypeCountVersionsArgs
  }

  // Custom InputTypes
  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileCountOutputType
     */
    select?: FileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileTagWhereInput
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileVersionWhereInput
  }


  /**
   * Count Type FileVersionCountOutputType
   */

  export type FileVersionCountOutputType = {
    jobs: number
  }

  export type FileVersionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | FileVersionCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * FileVersionCountOutputType without action
   */
  export type FileVersionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersionCountOutputType
     */
    select?: FileVersionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FileVersionCountOutputType without action
   */
  export type FileVersionCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    files: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | TagCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileTagWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    users: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DeviceCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDeviceWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    users: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | LocationCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLocationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    handle: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    isBanned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    handle: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    isBanned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    handle: number
    name: number
    email: number
    passwordHash: number
    role: number
    isBanned: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    handle?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isBanned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    handle?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isBanned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    handle?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isBanned?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role: string
    isBanned: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    handle?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isBanned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    locations?: boolean | User$locationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    handle?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isBanned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    handle?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isBanned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    locations?: boolean | User$locationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      files: Prisma.$FilePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      devices: Prisma.$UserDevicePayload<ExtArgs>[]
      locations: Prisma.$UserLocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      handle: string
      name: string
      email: string
      passwordHash: string
      role: string
      isBanned: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany"> | Null>
    files<T extends User$filesArgs<ExtArgs> = {}>(args?: Subset<T, User$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany"> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    devices<T extends User$devicesArgs<ExtArgs> = {}>(args?: Subset<T, User$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findMany"> | Null>
    locations<T extends User$locationsArgs<ExtArgs> = {}>(args?: Subset<T, User$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly handle: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isBanned: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.files
   */
  export type User$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.devices
   */
  export type User$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    where?: UserDeviceWhereInput
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    cursor?: UserDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * User.locations
   */
  export type User$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    where?: UserLocationWhereInput
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    cursor?: UserLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    displayName: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    displayName: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    ownerId: number
    displayName: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileMinAggregateInputType = {
    id?: true
    ownerId?: true
    displayName?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    ownerId?: true
    displayName?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    ownerId?: true
    displayName?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: string
    ownerId: string
    displayName: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: FileCountAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    displayName?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tags?: boolean | File$tagsArgs<ExtArgs>
    versions?: boolean | File$versionsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    displayName?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    ownerId?: boolean
    displayName?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | File$tagsArgs<ExtArgs>
    versions?: boolean | File$versionsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      tags: Prisma.$FileTagPayload<ExtArgs>[]
      versions: Prisma.$FileVersionPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      displayName: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tags<T extends File$tagsArgs<ExtArgs> = {}>(args?: Subset<T, File$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileTagPayload<ExtArgs>, T, "findMany"> | Null>
    versions<T extends File$versionsArgs<ExtArgs> = {}>(args?: Subset<T, File$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findMany"> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the File model
   */ 
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'String'>
    readonly ownerId: FieldRef<"File", 'String'>
    readonly displayName: FieldRef<"File", 'String'>
    readonly isDeleted: FieldRef<"File", 'Boolean'>
    readonly createdAt: FieldRef<"File", 'DateTime'>
    readonly updatedAt: FieldRef<"File", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
  }

  /**
   * File.tags
   */
  export type File$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileTag
     */
    select?: FileTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTagInclude<ExtArgs> | null
    where?: FileTagWhereInput
    orderBy?: FileTagOrderByWithRelationInput | FileTagOrderByWithRelationInput[]
    cursor?: FileTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileTagScalarFieldEnum | FileTagScalarFieldEnum[]
  }

  /**
   * File.versions
   */
  export type File$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    where?: FileVersionWhereInput
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    cursor?: FileVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileVersionScalarFieldEnum | FileVersionScalarFieldEnum[]
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model FileVersion
   */

  export type AggregateFileVersion = {
    _count: FileVersionCountAggregateOutputType | null
    _avg: FileVersionAvgAggregateOutputType | null
    _sum: FileVersionSumAggregateOutputType | null
    _min: FileVersionMinAggregateOutputType | null
    _max: FileVersionMaxAggregateOutputType | null
  }

  export type FileVersionAvgAggregateOutputType = {
    versionNumber: number | null
    sizeBytes: number | null
  }

  export type FileVersionSumAggregateOutputType = {
    versionNumber: number | null
    sizeBytes: number | null
  }

  export type FileVersionMinAggregateOutputType = {
    id: string | null
    fileId: string | null
    versionNumber: number | null
    storagePath: string | null
    tmpPath: string | null
    filename: string | null
    mimeType: string | null
    sizeBytes: number | null
    hash: string | null
    status: $Enums.FileStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileVersionMaxAggregateOutputType = {
    id: string | null
    fileId: string | null
    versionNumber: number | null
    storagePath: string | null
    tmpPath: string | null
    filename: string | null
    mimeType: string | null
    sizeBytes: number | null
    hash: string | null
    status: $Enums.FileStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileVersionCountAggregateOutputType = {
    id: number
    fileId: number
    versionNumber: number
    storagePath: number
    tmpPath: number
    filename: number
    mimeType: number
    sizeBytes: number
    hash: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileVersionAvgAggregateInputType = {
    versionNumber?: true
    sizeBytes?: true
  }

  export type FileVersionSumAggregateInputType = {
    versionNumber?: true
    sizeBytes?: true
  }

  export type FileVersionMinAggregateInputType = {
    id?: true
    fileId?: true
    versionNumber?: true
    storagePath?: true
    tmpPath?: true
    filename?: true
    mimeType?: true
    sizeBytes?: true
    hash?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileVersionMaxAggregateInputType = {
    id?: true
    fileId?: true
    versionNumber?: true
    storagePath?: true
    tmpPath?: true
    filename?: true
    mimeType?: true
    sizeBytes?: true
    hash?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileVersionCountAggregateInputType = {
    id?: true
    fileId?: true
    versionNumber?: true
    storagePath?: true
    tmpPath?: true
    filename?: true
    mimeType?: true
    sizeBytes?: true
    hash?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileVersion to aggregate.
     */
    where?: FileVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileVersions to fetch.
     */
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileVersions
    **/
    _count?: true | FileVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileVersionMaxAggregateInputType
  }

  export type GetFileVersionAggregateType<T extends FileVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateFileVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileVersion[P]>
      : GetScalarType<T[P], AggregateFileVersion[P]>
  }




  export type FileVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileVersionWhereInput
    orderBy?: FileVersionOrderByWithAggregationInput | FileVersionOrderByWithAggregationInput[]
    by: FileVersionScalarFieldEnum[] | FileVersionScalarFieldEnum
    having?: FileVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileVersionCountAggregateInputType | true
    _avg?: FileVersionAvgAggregateInputType
    _sum?: FileVersionSumAggregateInputType
    _min?: FileVersionMinAggregateInputType
    _max?: FileVersionMaxAggregateInputType
  }

  export type FileVersionGroupByOutputType = {
    id: string
    fileId: string
    versionNumber: number
    storagePath: string
    tmpPath: string | null
    filename: string
    mimeType: string | null
    sizeBytes: number | null
    hash: string
    status: $Enums.FileStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: FileVersionCountAggregateOutputType | null
    _avg: FileVersionAvgAggregateOutputType | null
    _sum: FileVersionSumAggregateOutputType | null
    _min: FileVersionMinAggregateOutputType | null
    _max: FileVersionMaxAggregateOutputType | null
  }

  type GetFileVersionGroupByPayload<T extends FileVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileVersionGroupByOutputType[P]>
            : GetScalarType<T[P], FileVersionGroupByOutputType[P]>
        }
      >
    >


  export type FileVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    versionNumber?: boolean
    storagePath?: boolean
    tmpPath?: boolean
    filename?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    hash?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
    jobs?: boolean | FileVersion$jobsArgs<ExtArgs>
    _count?: boolean | FileVersionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileVersion"]>

  export type FileVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    versionNumber?: boolean
    storagePath?: boolean
    tmpPath?: boolean
    filename?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    hash?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileVersion"]>

  export type FileVersionSelectScalar = {
    id?: boolean
    fileId?: boolean
    versionNumber?: boolean
    storagePath?: boolean
    tmpPath?: boolean
    filename?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    hash?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
    jobs?: boolean | FileVersion$jobsArgs<ExtArgs>
    _count?: boolean | FileVersionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FileVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
  }

  export type $FileVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileVersion"
    objects: {
      file: Prisma.$FilePayload<ExtArgs>
      jobs: Prisma.$JobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileId: string
      versionNumber: number
      storagePath: string
      tmpPath: string | null
      filename: string
      mimeType: string | null
      sizeBytes: number | null
      hash: string
      status: $Enums.FileStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fileVersion"]>
    composites: {}
  }

  type FileVersionGetPayload<S extends boolean | null | undefined | FileVersionDefaultArgs> = $Result.GetResult<Prisma.$FileVersionPayload, S>

  type FileVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FileVersionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FileVersionCountAggregateInputType | true
    }

  export interface FileVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileVersion'], meta: { name: 'FileVersion' } }
    /**
     * Find zero or one FileVersion that matches the filter.
     * @param {FileVersionFindUniqueArgs} args - Arguments to find a FileVersion
     * @example
     * // Get one FileVersion
     * const fileVersion = await prisma.fileVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileVersionFindUniqueArgs>(args: SelectSubset<T, FileVersionFindUniqueArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FileVersion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FileVersionFindUniqueOrThrowArgs} args - Arguments to find a FileVersion
     * @example
     * // Get one FileVersion
     * const fileVersion = await prisma.fileVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, FileVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FileVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionFindFirstArgs} args - Arguments to find a FileVersion
     * @example
     * // Get one FileVersion
     * const fileVersion = await prisma.fileVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileVersionFindFirstArgs>(args?: SelectSubset<T, FileVersionFindFirstArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FileVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionFindFirstOrThrowArgs} args - Arguments to find a FileVersion
     * @example
     * // Get one FileVersion
     * const fileVersion = await prisma.fileVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, FileVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FileVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileVersions
     * const fileVersions = await prisma.fileVersion.findMany()
     * 
     * // Get first 10 FileVersions
     * const fileVersions = await prisma.fileVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileVersionWithIdOnly = await prisma.fileVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileVersionFindManyArgs>(args?: SelectSubset<T, FileVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FileVersion.
     * @param {FileVersionCreateArgs} args - Arguments to create a FileVersion.
     * @example
     * // Create one FileVersion
     * const FileVersion = await prisma.fileVersion.create({
     *   data: {
     *     // ... data to create a FileVersion
     *   }
     * })
     * 
     */
    create<T extends FileVersionCreateArgs>(args: SelectSubset<T, FileVersionCreateArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FileVersions.
     * @param {FileVersionCreateManyArgs} args - Arguments to create many FileVersions.
     * @example
     * // Create many FileVersions
     * const fileVersion = await prisma.fileVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileVersionCreateManyArgs>(args?: SelectSubset<T, FileVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileVersions and returns the data saved in the database.
     * @param {FileVersionCreateManyAndReturnArgs} args - Arguments to create many FileVersions.
     * @example
     * // Create many FileVersions
     * const fileVersion = await prisma.fileVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileVersions and only return the `id`
     * const fileVersionWithIdOnly = await prisma.fileVersion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, FileVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FileVersion.
     * @param {FileVersionDeleteArgs} args - Arguments to delete one FileVersion.
     * @example
     * // Delete one FileVersion
     * const FileVersion = await prisma.fileVersion.delete({
     *   where: {
     *     // ... filter to delete one FileVersion
     *   }
     * })
     * 
     */
    delete<T extends FileVersionDeleteArgs>(args: SelectSubset<T, FileVersionDeleteArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FileVersion.
     * @param {FileVersionUpdateArgs} args - Arguments to update one FileVersion.
     * @example
     * // Update one FileVersion
     * const fileVersion = await prisma.fileVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileVersionUpdateArgs>(args: SelectSubset<T, FileVersionUpdateArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FileVersions.
     * @param {FileVersionDeleteManyArgs} args - Arguments to filter FileVersions to delete.
     * @example
     * // Delete a few FileVersions
     * const { count } = await prisma.fileVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileVersionDeleteManyArgs>(args?: SelectSubset<T, FileVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileVersions
     * const fileVersion = await prisma.fileVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileVersionUpdateManyArgs>(args: SelectSubset<T, FileVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FileVersion.
     * @param {FileVersionUpsertArgs} args - Arguments to update or create a FileVersion.
     * @example
     * // Update or create a FileVersion
     * const fileVersion = await prisma.fileVersion.upsert({
     *   create: {
     *     // ... data to create a FileVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileVersion we want to update
     *   }
     * })
     */
    upsert<T extends FileVersionUpsertArgs>(args: SelectSubset<T, FileVersionUpsertArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FileVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionCountArgs} args - Arguments to filter FileVersions to count.
     * @example
     * // Count the number of FileVersions
     * const count = await prisma.fileVersion.count({
     *   where: {
     *     // ... the filter for the FileVersions we want to count
     *   }
     * })
    **/
    count<T extends FileVersionCountArgs>(
      args?: Subset<T, FileVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileVersionAggregateArgs>(args: Subset<T, FileVersionAggregateArgs>): Prisma.PrismaPromise<GetFileVersionAggregateType<T>>

    /**
     * Group by FileVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileVersionGroupByArgs['orderBy'] }
        : { orderBy?: FileVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileVersion model
   */
  readonly fields: FileVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    jobs<T extends FileVersion$jobsArgs<ExtArgs> = {}>(args?: Subset<T, FileVersion$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FileVersion model
   */ 
  interface FileVersionFieldRefs {
    readonly id: FieldRef<"FileVersion", 'String'>
    readonly fileId: FieldRef<"FileVersion", 'String'>
    readonly versionNumber: FieldRef<"FileVersion", 'Int'>
    readonly storagePath: FieldRef<"FileVersion", 'String'>
    readonly tmpPath: FieldRef<"FileVersion", 'String'>
    readonly filename: FieldRef<"FileVersion", 'String'>
    readonly mimeType: FieldRef<"FileVersion", 'String'>
    readonly sizeBytes: FieldRef<"FileVersion", 'Int'>
    readonly hash: FieldRef<"FileVersion", 'String'>
    readonly status: FieldRef<"FileVersion", 'FileStatus'>
    readonly notes: FieldRef<"FileVersion", 'String'>
    readonly createdAt: FieldRef<"FileVersion", 'DateTime'>
    readonly updatedAt: FieldRef<"FileVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileVersion findUnique
   */
  export type FileVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter, which FileVersion to fetch.
     */
    where: FileVersionWhereUniqueInput
  }

  /**
   * FileVersion findUniqueOrThrow
   */
  export type FileVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter, which FileVersion to fetch.
     */
    where: FileVersionWhereUniqueInput
  }

  /**
   * FileVersion findFirst
   */
  export type FileVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter, which FileVersion to fetch.
     */
    where?: FileVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileVersions to fetch.
     */
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileVersions.
     */
    cursor?: FileVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileVersions.
     */
    distinct?: FileVersionScalarFieldEnum | FileVersionScalarFieldEnum[]
  }

  /**
   * FileVersion findFirstOrThrow
   */
  export type FileVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter, which FileVersion to fetch.
     */
    where?: FileVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileVersions to fetch.
     */
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileVersions.
     */
    cursor?: FileVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileVersions.
     */
    distinct?: FileVersionScalarFieldEnum | FileVersionScalarFieldEnum[]
  }

  /**
   * FileVersion findMany
   */
  export type FileVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter, which FileVersions to fetch.
     */
    where?: FileVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileVersions to fetch.
     */
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileVersions.
     */
    cursor?: FileVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileVersions.
     */
    skip?: number
    distinct?: FileVersionScalarFieldEnum | FileVersionScalarFieldEnum[]
  }

  /**
   * FileVersion create
   */
  export type FileVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a FileVersion.
     */
    data: XOR<FileVersionCreateInput, FileVersionUncheckedCreateInput>
  }

  /**
   * FileVersion createMany
   */
  export type FileVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileVersions.
     */
    data: FileVersionCreateManyInput | FileVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileVersion createManyAndReturn
   */
  export type FileVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FileVersions.
     */
    data: FileVersionCreateManyInput | FileVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileVersion update
   */
  export type FileVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a FileVersion.
     */
    data: XOR<FileVersionUpdateInput, FileVersionUncheckedUpdateInput>
    /**
     * Choose, which FileVersion to update.
     */
    where: FileVersionWhereUniqueInput
  }

  /**
   * FileVersion updateMany
   */
  export type FileVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileVersions.
     */
    data: XOR<FileVersionUpdateManyMutationInput, FileVersionUncheckedUpdateManyInput>
    /**
     * Filter which FileVersions to update
     */
    where?: FileVersionWhereInput
  }

  /**
   * FileVersion upsert
   */
  export type FileVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the FileVersion to update in case it exists.
     */
    where: FileVersionWhereUniqueInput
    /**
     * In case the FileVersion found by the `where` argument doesn't exist, create a new FileVersion with this data.
     */
    create: XOR<FileVersionCreateInput, FileVersionUncheckedCreateInput>
    /**
     * In case the FileVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileVersionUpdateInput, FileVersionUncheckedUpdateInput>
  }

  /**
   * FileVersion delete
   */
  export type FileVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter which FileVersion to delete.
     */
    where: FileVersionWhereUniqueInput
  }

  /**
   * FileVersion deleteMany
   */
  export type FileVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileVersions to delete
     */
    where?: FileVersionWhereInput
  }

  /**
   * FileVersion.jobs
   */
  export type FileVersion$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * FileVersion without action
   */
  export type FileVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    files?: boolean | Tag$filesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | Tag$filesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      files: Prisma.$FileTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    files<T extends Tag$filesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileTagPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
  }

  /**
   * Tag.files
   */
  export type Tag$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileTag
     */
    select?: FileTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTagInclude<ExtArgs> | null
    where?: FileTagWhereInput
    orderBy?: FileTagOrderByWithRelationInput | FileTagOrderByWithRelationInput[]
    cursor?: FileTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileTagScalarFieldEnum | FileTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model FileTag
   */

  export type AggregateFileTag = {
    _count: FileTagCountAggregateOutputType | null
    _min: FileTagMinAggregateOutputType | null
    _max: FileTagMaxAggregateOutputType | null
  }

  export type FileTagMinAggregateOutputType = {
    fileId: string | null
    tagId: string | null
  }

  export type FileTagMaxAggregateOutputType = {
    fileId: string | null
    tagId: string | null
  }

  export type FileTagCountAggregateOutputType = {
    fileId: number
    tagId: number
    _all: number
  }


  export type FileTagMinAggregateInputType = {
    fileId?: true
    tagId?: true
  }

  export type FileTagMaxAggregateInputType = {
    fileId?: true
    tagId?: true
  }

  export type FileTagCountAggregateInputType = {
    fileId?: true
    tagId?: true
    _all?: true
  }

  export type FileTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileTag to aggregate.
     */
    where?: FileTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileTags to fetch.
     */
    orderBy?: FileTagOrderByWithRelationInput | FileTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileTags
    **/
    _count?: true | FileTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileTagMaxAggregateInputType
  }

  export type GetFileTagAggregateType<T extends FileTagAggregateArgs> = {
        [P in keyof T & keyof AggregateFileTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileTag[P]>
      : GetScalarType<T[P], AggregateFileTag[P]>
  }




  export type FileTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileTagWhereInput
    orderBy?: FileTagOrderByWithAggregationInput | FileTagOrderByWithAggregationInput[]
    by: FileTagScalarFieldEnum[] | FileTagScalarFieldEnum
    having?: FileTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileTagCountAggregateInputType | true
    _min?: FileTagMinAggregateInputType
    _max?: FileTagMaxAggregateInputType
  }

  export type FileTagGroupByOutputType = {
    fileId: string
    tagId: string
    _count: FileTagCountAggregateOutputType | null
    _min: FileTagMinAggregateOutputType | null
    _max: FileTagMaxAggregateOutputType | null
  }

  type GetFileTagGroupByPayload<T extends FileTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileTagGroupByOutputType[P]>
            : GetScalarType<T[P], FileTagGroupByOutputType[P]>
        }
      >
    >


  export type FileTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fileId?: boolean
    tagId?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileTag"]>

  export type FileTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fileId?: boolean
    tagId?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileTag"]>

  export type FileTagSelectScalar = {
    fileId?: boolean
    tagId?: boolean
  }

  export type FileTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type FileTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $FileTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileTag"
    objects: {
      file: Prisma.$FilePayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      fileId: string
      tagId: string
    }, ExtArgs["result"]["fileTag"]>
    composites: {}
  }

  type FileTagGetPayload<S extends boolean | null | undefined | FileTagDefaultArgs> = $Result.GetResult<Prisma.$FileTagPayload, S>

  type FileTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FileTagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FileTagCountAggregateInputType | true
    }

  export interface FileTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileTag'], meta: { name: 'FileTag' } }
    /**
     * Find zero or one FileTag that matches the filter.
     * @param {FileTagFindUniqueArgs} args - Arguments to find a FileTag
     * @example
     * // Get one FileTag
     * const fileTag = await prisma.fileTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileTagFindUniqueArgs>(args: SelectSubset<T, FileTagFindUniqueArgs<ExtArgs>>): Prisma__FileTagClient<$Result.GetResult<Prisma.$FileTagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FileTag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FileTagFindUniqueOrThrowArgs} args - Arguments to find a FileTag
     * @example
     * // Get one FileTag
     * const fileTag = await prisma.fileTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileTagFindUniqueOrThrowArgs>(args: SelectSubset<T, FileTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileTagClient<$Result.GetResult<Prisma.$FileTagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FileTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileTagFindFirstArgs} args - Arguments to find a FileTag
     * @example
     * // Get one FileTag
     * const fileTag = await prisma.fileTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileTagFindFirstArgs>(args?: SelectSubset<T, FileTagFindFirstArgs<ExtArgs>>): Prisma__FileTagClient<$Result.GetResult<Prisma.$FileTagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FileTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileTagFindFirstOrThrowArgs} args - Arguments to find a FileTag
     * @example
     * // Get one FileTag
     * const fileTag = await prisma.fileTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileTagFindFirstOrThrowArgs>(args?: SelectSubset<T, FileTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileTagClient<$Result.GetResult<Prisma.$FileTagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FileTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileTags
     * const fileTags = await prisma.fileTag.findMany()
     * 
     * // Get first 10 FileTags
     * const fileTags = await prisma.fileTag.findMany({ take: 10 })
     * 
     * // Only select the `fileId`
     * const fileTagWithFileIdOnly = await prisma.fileTag.findMany({ select: { fileId: true } })
     * 
     */
    findMany<T extends FileTagFindManyArgs>(args?: SelectSubset<T, FileTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileTagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FileTag.
     * @param {FileTagCreateArgs} args - Arguments to create a FileTag.
     * @example
     * // Create one FileTag
     * const FileTag = await prisma.fileTag.create({
     *   data: {
     *     // ... data to create a FileTag
     *   }
     * })
     * 
     */
    create<T extends FileTagCreateArgs>(args: SelectSubset<T, FileTagCreateArgs<ExtArgs>>): Prisma__FileTagClient<$Result.GetResult<Prisma.$FileTagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FileTags.
     * @param {FileTagCreateManyArgs} args - Arguments to create many FileTags.
     * @example
     * // Create many FileTags
     * const fileTag = await prisma.fileTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileTagCreateManyArgs>(args?: SelectSubset<T, FileTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileTags and returns the data saved in the database.
     * @param {FileTagCreateManyAndReturnArgs} args - Arguments to create many FileTags.
     * @example
     * // Create many FileTags
     * const fileTag = await prisma.fileTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileTags and only return the `fileId`
     * const fileTagWithFileIdOnly = await prisma.fileTag.createManyAndReturn({ 
     *   select: { fileId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileTagCreateManyAndReturnArgs>(args?: SelectSubset<T, FileTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileTagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FileTag.
     * @param {FileTagDeleteArgs} args - Arguments to delete one FileTag.
     * @example
     * // Delete one FileTag
     * const FileTag = await prisma.fileTag.delete({
     *   where: {
     *     // ... filter to delete one FileTag
     *   }
     * })
     * 
     */
    delete<T extends FileTagDeleteArgs>(args: SelectSubset<T, FileTagDeleteArgs<ExtArgs>>): Prisma__FileTagClient<$Result.GetResult<Prisma.$FileTagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FileTag.
     * @param {FileTagUpdateArgs} args - Arguments to update one FileTag.
     * @example
     * // Update one FileTag
     * const fileTag = await prisma.fileTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileTagUpdateArgs>(args: SelectSubset<T, FileTagUpdateArgs<ExtArgs>>): Prisma__FileTagClient<$Result.GetResult<Prisma.$FileTagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FileTags.
     * @param {FileTagDeleteManyArgs} args - Arguments to filter FileTags to delete.
     * @example
     * // Delete a few FileTags
     * const { count } = await prisma.fileTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileTagDeleteManyArgs>(args?: SelectSubset<T, FileTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileTags
     * const fileTag = await prisma.fileTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileTagUpdateManyArgs>(args: SelectSubset<T, FileTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FileTag.
     * @param {FileTagUpsertArgs} args - Arguments to update or create a FileTag.
     * @example
     * // Update or create a FileTag
     * const fileTag = await prisma.fileTag.upsert({
     *   create: {
     *     // ... data to create a FileTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileTag we want to update
     *   }
     * })
     */
    upsert<T extends FileTagUpsertArgs>(args: SelectSubset<T, FileTagUpsertArgs<ExtArgs>>): Prisma__FileTagClient<$Result.GetResult<Prisma.$FileTagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FileTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileTagCountArgs} args - Arguments to filter FileTags to count.
     * @example
     * // Count the number of FileTags
     * const count = await prisma.fileTag.count({
     *   where: {
     *     // ... the filter for the FileTags we want to count
     *   }
     * })
    **/
    count<T extends FileTagCountArgs>(
      args?: Subset<T, FileTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileTagAggregateArgs>(args: Subset<T, FileTagAggregateArgs>): Prisma.PrismaPromise<GetFileTagAggregateType<T>>

    /**
     * Group by FileTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileTagGroupByArgs['orderBy'] }
        : { orderBy?: FileTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileTag model
   */
  readonly fields: FileTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FileTag model
   */ 
  interface FileTagFieldRefs {
    readonly fileId: FieldRef<"FileTag", 'String'>
    readonly tagId: FieldRef<"FileTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FileTag findUnique
   */
  export type FileTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileTag
     */
    select?: FileTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTagInclude<ExtArgs> | null
    /**
     * Filter, which FileTag to fetch.
     */
    where: FileTagWhereUniqueInput
  }

  /**
   * FileTag findUniqueOrThrow
   */
  export type FileTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileTag
     */
    select?: FileTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTagInclude<ExtArgs> | null
    /**
     * Filter, which FileTag to fetch.
     */
    where: FileTagWhereUniqueInput
  }

  /**
   * FileTag findFirst
   */
  export type FileTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileTag
     */
    select?: FileTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTagInclude<ExtArgs> | null
    /**
     * Filter, which FileTag to fetch.
     */
    where?: FileTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileTags to fetch.
     */
    orderBy?: FileTagOrderByWithRelationInput | FileTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileTags.
     */
    cursor?: FileTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileTags.
     */
    distinct?: FileTagScalarFieldEnum | FileTagScalarFieldEnum[]
  }

  /**
   * FileTag findFirstOrThrow
   */
  export type FileTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileTag
     */
    select?: FileTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTagInclude<ExtArgs> | null
    /**
     * Filter, which FileTag to fetch.
     */
    where?: FileTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileTags to fetch.
     */
    orderBy?: FileTagOrderByWithRelationInput | FileTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileTags.
     */
    cursor?: FileTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileTags.
     */
    distinct?: FileTagScalarFieldEnum | FileTagScalarFieldEnum[]
  }

  /**
   * FileTag findMany
   */
  export type FileTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileTag
     */
    select?: FileTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTagInclude<ExtArgs> | null
    /**
     * Filter, which FileTags to fetch.
     */
    where?: FileTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileTags to fetch.
     */
    orderBy?: FileTagOrderByWithRelationInput | FileTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileTags.
     */
    cursor?: FileTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileTags.
     */
    skip?: number
    distinct?: FileTagScalarFieldEnum | FileTagScalarFieldEnum[]
  }

  /**
   * FileTag create
   */
  export type FileTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileTag
     */
    select?: FileTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTagInclude<ExtArgs> | null
    /**
     * The data needed to create a FileTag.
     */
    data: XOR<FileTagCreateInput, FileTagUncheckedCreateInput>
  }

  /**
   * FileTag createMany
   */
  export type FileTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileTags.
     */
    data: FileTagCreateManyInput | FileTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileTag createManyAndReturn
   */
  export type FileTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileTag
     */
    select?: FileTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FileTags.
     */
    data: FileTagCreateManyInput | FileTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileTag update
   */
  export type FileTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileTag
     */
    select?: FileTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTagInclude<ExtArgs> | null
    /**
     * The data needed to update a FileTag.
     */
    data: XOR<FileTagUpdateInput, FileTagUncheckedUpdateInput>
    /**
     * Choose, which FileTag to update.
     */
    where: FileTagWhereUniqueInput
  }

  /**
   * FileTag updateMany
   */
  export type FileTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileTags.
     */
    data: XOR<FileTagUpdateManyMutationInput, FileTagUncheckedUpdateManyInput>
    /**
     * Filter which FileTags to update
     */
    where?: FileTagWhereInput
  }

  /**
   * FileTag upsert
   */
  export type FileTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileTag
     */
    select?: FileTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTagInclude<ExtArgs> | null
    /**
     * The filter to search for the FileTag to update in case it exists.
     */
    where: FileTagWhereUniqueInput
    /**
     * In case the FileTag found by the `where` argument doesn't exist, create a new FileTag with this data.
     */
    create: XOR<FileTagCreateInput, FileTagUncheckedCreateInput>
    /**
     * In case the FileTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileTagUpdateInput, FileTagUncheckedUpdateInput>
  }

  /**
   * FileTag delete
   */
  export type FileTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileTag
     */
    select?: FileTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTagInclude<ExtArgs> | null
    /**
     * Filter which FileTag to delete.
     */
    where: FileTagWhereUniqueInput
  }

  /**
   * FileTag deleteMany
   */
  export type FileTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileTags to delete
     */
    where?: FileTagWhereInput
  }

  /**
   * FileTag without action
   */
  export type FileTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileTag
     */
    select?: FileTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTagInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    name: string | null
    os: string | null
    createdAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    os: string | null
    createdAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    name: number
    os: number
    createdAt: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    name?: true
    os?: true
    createdAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    name?: true
    os?: true
    createdAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    name?: true
    os?: true
    createdAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    name: string | null
    os: string | null
    createdAt: Date
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    os?: boolean
    createdAt?: boolean
    users?: boolean | Device$usersArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    os?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    name?: boolean
    os?: boolean
    createdAt?: boolean
  }

  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Device$usersArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      users: Prisma.$UserDevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      os: string | null
      createdAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Device$usersArgs<ExtArgs> = {}>(args?: Subset<T, Device$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */ 
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
    readonly os: FieldRef<"Device", 'String'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data?: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
  }

  /**
   * Device.users
   */
  export type Device$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    where?: UserDeviceWhereInput
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    cursor?: UserDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model UserDevice
   */

  export type AggregateUserDevice = {
    _count: UserDeviceCountAggregateOutputType | null
    _min: UserDeviceMinAggregateOutputType | null
    _max: UserDeviceMaxAggregateOutputType | null
  }

  export type UserDeviceMinAggregateOutputType = {
    userId: string | null
    deviceId: string | null
    lastSeenAt: Date | null
  }

  export type UserDeviceMaxAggregateOutputType = {
    userId: string | null
    deviceId: string | null
    lastSeenAt: Date | null
  }

  export type UserDeviceCountAggregateOutputType = {
    userId: number
    deviceId: number
    lastSeenAt: number
    _all: number
  }


  export type UserDeviceMinAggregateInputType = {
    userId?: true
    deviceId?: true
    lastSeenAt?: true
  }

  export type UserDeviceMaxAggregateInputType = {
    userId?: true
    deviceId?: true
    lastSeenAt?: true
  }

  export type UserDeviceCountAggregateInputType = {
    userId?: true
    deviceId?: true
    lastSeenAt?: true
    _all?: true
  }

  export type UserDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDevice to aggregate.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDevices
    **/
    _count?: true | UserDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDeviceMaxAggregateInputType
  }

  export type GetUserDeviceAggregateType<T extends UserDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDevice[P]>
      : GetScalarType<T[P], AggregateUserDevice[P]>
  }




  export type UserDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDeviceWhereInput
    orderBy?: UserDeviceOrderByWithAggregationInput | UserDeviceOrderByWithAggregationInput[]
    by: UserDeviceScalarFieldEnum[] | UserDeviceScalarFieldEnum
    having?: UserDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDeviceCountAggregateInputType | true
    _min?: UserDeviceMinAggregateInputType
    _max?: UserDeviceMaxAggregateInputType
  }

  export type UserDeviceGroupByOutputType = {
    userId: string
    deviceId: string
    lastSeenAt: Date | null
    _count: UserDeviceCountAggregateOutputType | null
    _min: UserDeviceMinAggregateOutputType | null
    _max: UserDeviceMaxAggregateOutputType | null
  }

  type GetUserDeviceGroupByPayload<T extends UserDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], UserDeviceGroupByOutputType[P]>
        }
      >
    >


  export type UserDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    deviceId?: boolean
    lastSeenAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDevice"]>

  export type UserDeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    deviceId?: boolean
    lastSeenAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDevice"]>

  export type UserDeviceSelectScalar = {
    userId?: boolean
    deviceId?: boolean
    lastSeenAt?: boolean
  }

  export type UserDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDevice"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      deviceId: string
      lastSeenAt: Date | null
    }, ExtArgs["result"]["userDevice"]>
    composites: {}
  }

  type UserDeviceGetPayload<S extends boolean | null | undefined | UserDeviceDefaultArgs> = $Result.GetResult<Prisma.$UserDevicePayload, S>

  type UserDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserDeviceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserDeviceCountAggregateInputType | true
    }

  export interface UserDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDevice'], meta: { name: 'UserDevice' } }
    /**
     * Find zero or one UserDevice that matches the filter.
     * @param {UserDeviceFindUniqueArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDeviceFindUniqueArgs>(args: SelectSubset<T, UserDeviceFindUniqueArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserDevice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserDeviceFindUniqueOrThrowArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceFindFirstArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDeviceFindFirstArgs>(args?: SelectSubset<T, UserDeviceFindFirstArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceFindFirstOrThrowArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDevices
     * const userDevices = await prisma.userDevice.findMany()
     * 
     * // Get first 10 UserDevices
     * const userDevices = await prisma.userDevice.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userDeviceWithUserIdOnly = await prisma.userDevice.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserDeviceFindManyArgs>(args?: SelectSubset<T, UserDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserDevice.
     * @param {UserDeviceCreateArgs} args - Arguments to create a UserDevice.
     * @example
     * // Create one UserDevice
     * const UserDevice = await prisma.userDevice.create({
     *   data: {
     *     // ... data to create a UserDevice
     *   }
     * })
     * 
     */
    create<T extends UserDeviceCreateArgs>(args: SelectSubset<T, UserDeviceCreateArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserDevices.
     * @param {UserDeviceCreateManyArgs} args - Arguments to create many UserDevices.
     * @example
     * // Create many UserDevices
     * const userDevice = await prisma.userDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDeviceCreateManyArgs>(args?: SelectSubset<T, UserDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDevices and returns the data saved in the database.
     * @param {UserDeviceCreateManyAndReturnArgs} args - Arguments to create many UserDevices.
     * @example
     * // Create many UserDevices
     * const userDevice = await prisma.userDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDevices and only return the `userId`
     * const userDeviceWithUserIdOnly = await prisma.userDevice.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserDevice.
     * @param {UserDeviceDeleteArgs} args - Arguments to delete one UserDevice.
     * @example
     * // Delete one UserDevice
     * const UserDevice = await prisma.userDevice.delete({
     *   where: {
     *     // ... filter to delete one UserDevice
     *   }
     * })
     * 
     */
    delete<T extends UserDeviceDeleteArgs>(args: SelectSubset<T, UserDeviceDeleteArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserDevice.
     * @param {UserDeviceUpdateArgs} args - Arguments to update one UserDevice.
     * @example
     * // Update one UserDevice
     * const userDevice = await prisma.userDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDeviceUpdateArgs>(args: SelectSubset<T, UserDeviceUpdateArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserDevices.
     * @param {UserDeviceDeleteManyArgs} args - Arguments to filter UserDevices to delete.
     * @example
     * // Delete a few UserDevices
     * const { count } = await prisma.userDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeviceDeleteManyArgs>(args?: SelectSubset<T, UserDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDevices
     * const userDevice = await prisma.userDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDeviceUpdateManyArgs>(args: SelectSubset<T, UserDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserDevice.
     * @param {UserDeviceUpsertArgs} args - Arguments to update or create a UserDevice.
     * @example
     * // Update or create a UserDevice
     * const userDevice = await prisma.userDevice.upsert({
     *   create: {
     *     // ... data to create a UserDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDevice we want to update
     *   }
     * })
     */
    upsert<T extends UserDeviceUpsertArgs>(args: SelectSubset<T, UserDeviceUpsertArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceCountArgs} args - Arguments to filter UserDevices to count.
     * @example
     * // Count the number of UserDevices
     * const count = await prisma.userDevice.count({
     *   where: {
     *     // ... the filter for the UserDevices we want to count
     *   }
     * })
    **/
    count<T extends UserDeviceCountArgs>(
      args?: Subset<T, UserDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserDeviceAggregateArgs>(args: Subset<T, UserDeviceAggregateArgs>): Prisma.PrismaPromise<GetUserDeviceAggregateType<T>>

    /**
     * Group by UserDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDeviceGroupByArgs['orderBy'] }
        : { orderBy?: UserDeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDevice model
   */
  readonly fields: UserDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserDevice model
   */ 
  interface UserDeviceFieldRefs {
    readonly userId: FieldRef<"UserDevice", 'String'>
    readonly deviceId: FieldRef<"UserDevice", 'String'>
    readonly lastSeenAt: FieldRef<"UserDevice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserDevice findUnique
   */
  export type UserDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice findUniqueOrThrow
   */
  export type UserDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice findFirst
   */
  export type UserDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDevices.
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDevices.
     */
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * UserDevice findFirstOrThrow
   */
  export type UserDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDevices.
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDevices.
     */
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * UserDevice findMany
   */
  export type UserDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevices to fetch.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDevices.
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * UserDevice create
   */
  export type UserDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDevice.
     */
    data: XOR<UserDeviceCreateInput, UserDeviceUncheckedCreateInput>
  }

  /**
   * UserDevice createMany
   */
  export type UserDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDevices.
     */
    data: UserDeviceCreateManyInput | UserDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDevice createManyAndReturn
   */
  export type UserDeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserDevices.
     */
    data: UserDeviceCreateManyInput | UserDeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDevice update
   */
  export type UserDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDevice.
     */
    data: XOR<UserDeviceUpdateInput, UserDeviceUncheckedUpdateInput>
    /**
     * Choose, which UserDevice to update.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice updateMany
   */
  export type UserDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDevices.
     */
    data: XOR<UserDeviceUpdateManyMutationInput, UserDeviceUncheckedUpdateManyInput>
    /**
     * Filter which UserDevices to update
     */
    where?: UserDeviceWhereInput
  }

  /**
   * UserDevice upsert
   */
  export type UserDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDevice to update in case it exists.
     */
    where: UserDeviceWhereUniqueInput
    /**
     * In case the UserDevice found by the `where` argument doesn't exist, create a new UserDevice with this data.
     */
    create: XOR<UserDeviceCreateInput, UserDeviceUncheckedCreateInput>
    /**
     * In case the UserDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDeviceUpdateInput, UserDeviceUncheckedUpdateInput>
  }

  /**
   * UserDevice delete
   */
  export type UserDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter which UserDevice to delete.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice deleteMany
   */
  export type UserDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDevices to delete
     */
    where?: UserDeviceWhereInput
  }

  /**
   * UserDevice without action
   */
  export type UserDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    ipAddress: number
    geoJson: number
    createdAt: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    ipAddress?: true
    createdAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    ipAddress?: true
    createdAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    ipAddress?: true
    geoJson?: true
    createdAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    ipAddress: string | null
    geoJson: JsonValue | null
    createdAt: Date
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipAddress?: boolean
    geoJson?: boolean
    createdAt?: boolean
    users?: boolean | Location$usersArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipAddress?: boolean
    geoJson?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    ipAddress?: boolean
    geoJson?: boolean
    createdAt?: boolean
  }

  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Location$usersArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      users: Prisma.$UserLocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ipAddress: string | null
      geoJson: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Location$usersArgs<ExtArgs> = {}>(args?: Subset<T, Location$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */ 
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly ipAddress: FieldRef<"Location", 'String'>
    readonly geoJson: FieldRef<"Location", 'Json'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data?: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
  }

  /**
   * Location.users
   */
  export type Location$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    where?: UserLocationWhereInput
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    cursor?: UserLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model UserLocation
   */

  export type AggregateUserLocation = {
    _count: UserLocationCountAggregateOutputType | null
    _min: UserLocationMinAggregateOutputType | null
    _max: UserLocationMaxAggregateOutputType | null
  }

  export type UserLocationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    locationId: string | null
    seenAt: Date | null
  }

  export type UserLocationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    locationId: string | null
    seenAt: Date | null
  }

  export type UserLocationCountAggregateOutputType = {
    id: number
    userId: number
    locationId: number
    seenAt: number
    _all: number
  }


  export type UserLocationMinAggregateInputType = {
    id?: true
    userId?: true
    locationId?: true
    seenAt?: true
  }

  export type UserLocationMaxAggregateInputType = {
    id?: true
    userId?: true
    locationId?: true
    seenAt?: true
  }

  export type UserLocationCountAggregateInputType = {
    id?: true
    userId?: true
    locationId?: true
    seenAt?: true
    _all?: true
  }

  export type UserLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLocation to aggregate.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLocations
    **/
    _count?: true | UserLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLocationMaxAggregateInputType
  }

  export type GetUserLocationAggregateType<T extends UserLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLocation[P]>
      : GetScalarType<T[P], AggregateUserLocation[P]>
  }




  export type UserLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLocationWhereInput
    orderBy?: UserLocationOrderByWithAggregationInput | UserLocationOrderByWithAggregationInput[]
    by: UserLocationScalarFieldEnum[] | UserLocationScalarFieldEnum
    having?: UserLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLocationCountAggregateInputType | true
    _min?: UserLocationMinAggregateInputType
    _max?: UserLocationMaxAggregateInputType
  }

  export type UserLocationGroupByOutputType = {
    id: string
    userId: string
    locationId: string
    seenAt: Date
    _count: UserLocationCountAggregateOutputType | null
    _min: UserLocationMinAggregateOutputType | null
    _max: UserLocationMaxAggregateOutputType | null
  }

  type GetUserLocationGroupByPayload<T extends UserLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLocationGroupByOutputType[P]>
            : GetScalarType<T[P], UserLocationGroupByOutputType[P]>
        }
      >
    >


  export type UserLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    locationId?: boolean
    seenAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLocation"]>

  export type UserLocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    locationId?: boolean
    seenAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLocation"]>

  export type UserLocationSelectScalar = {
    id?: boolean
    userId?: boolean
    locationId?: boolean
    seenAt?: boolean
  }

  export type UserLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserLocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLocation"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      locationId: string
      seenAt: Date
    }, ExtArgs["result"]["userLocation"]>
    composites: {}
  }

  type UserLocationGetPayload<S extends boolean | null | undefined | UserLocationDefaultArgs> = $Result.GetResult<Prisma.$UserLocationPayload, S>

  type UserLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserLocationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserLocationCountAggregateInputType | true
    }

  export interface UserLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLocation'], meta: { name: 'UserLocation' } }
    /**
     * Find zero or one UserLocation that matches the filter.
     * @param {UserLocationFindUniqueArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLocationFindUniqueArgs>(args: SelectSubset<T, UserLocationFindUniqueArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserLocation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserLocationFindUniqueOrThrowArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindFirstArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLocationFindFirstArgs>(args?: SelectSubset<T, UserLocationFindFirstArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindFirstOrThrowArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLocations
     * const userLocations = await prisma.userLocation.findMany()
     * 
     * // Get first 10 UserLocations
     * const userLocations = await prisma.userLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLocationWithIdOnly = await prisma.userLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLocationFindManyArgs>(args?: SelectSubset<T, UserLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserLocation.
     * @param {UserLocationCreateArgs} args - Arguments to create a UserLocation.
     * @example
     * // Create one UserLocation
     * const UserLocation = await prisma.userLocation.create({
     *   data: {
     *     // ... data to create a UserLocation
     *   }
     * })
     * 
     */
    create<T extends UserLocationCreateArgs>(args: SelectSubset<T, UserLocationCreateArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserLocations.
     * @param {UserLocationCreateManyArgs} args - Arguments to create many UserLocations.
     * @example
     * // Create many UserLocations
     * const userLocation = await prisma.userLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLocationCreateManyArgs>(args?: SelectSubset<T, UserLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLocations and returns the data saved in the database.
     * @param {UserLocationCreateManyAndReturnArgs} args - Arguments to create many UserLocations.
     * @example
     * // Create many UserLocations
     * const userLocation = await prisma.userLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLocations and only return the `id`
     * const userLocationWithIdOnly = await prisma.userLocation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLocationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserLocation.
     * @param {UserLocationDeleteArgs} args - Arguments to delete one UserLocation.
     * @example
     * // Delete one UserLocation
     * const UserLocation = await prisma.userLocation.delete({
     *   where: {
     *     // ... filter to delete one UserLocation
     *   }
     * })
     * 
     */
    delete<T extends UserLocationDeleteArgs>(args: SelectSubset<T, UserLocationDeleteArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserLocation.
     * @param {UserLocationUpdateArgs} args - Arguments to update one UserLocation.
     * @example
     * // Update one UserLocation
     * const userLocation = await prisma.userLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLocationUpdateArgs>(args: SelectSubset<T, UserLocationUpdateArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserLocations.
     * @param {UserLocationDeleteManyArgs} args - Arguments to filter UserLocations to delete.
     * @example
     * // Delete a few UserLocations
     * const { count } = await prisma.userLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLocationDeleteManyArgs>(args?: SelectSubset<T, UserLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLocations
     * const userLocation = await prisma.userLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLocationUpdateManyArgs>(args: SelectSubset<T, UserLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLocation.
     * @param {UserLocationUpsertArgs} args - Arguments to update or create a UserLocation.
     * @example
     * // Update or create a UserLocation
     * const userLocation = await prisma.userLocation.upsert({
     *   create: {
     *     // ... data to create a UserLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLocation we want to update
     *   }
     * })
     */
    upsert<T extends UserLocationUpsertArgs>(args: SelectSubset<T, UserLocationUpsertArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationCountArgs} args - Arguments to filter UserLocations to count.
     * @example
     * // Count the number of UserLocations
     * const count = await prisma.userLocation.count({
     *   where: {
     *     // ... the filter for the UserLocations we want to count
     *   }
     * })
    **/
    count<T extends UserLocationCountArgs>(
      args?: Subset<T, UserLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLocationAggregateArgs>(args: Subset<T, UserLocationAggregateArgs>): Prisma.PrismaPromise<GetUserLocationAggregateType<T>>

    /**
     * Group by UserLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLocationGroupByArgs['orderBy'] }
        : { orderBy?: UserLocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLocation model
   */
  readonly fields: UserLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserLocation model
   */ 
  interface UserLocationFieldRefs {
    readonly id: FieldRef<"UserLocation", 'String'>
    readonly userId: FieldRef<"UserLocation", 'String'>
    readonly locationId: FieldRef<"UserLocation", 'String'>
    readonly seenAt: FieldRef<"UserLocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLocation findUnique
   */
  export type UserLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation findUniqueOrThrow
   */
  export type UserLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation findFirst
   */
  export type UserLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLocations.
     */
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation findFirstOrThrow
   */
  export type UserLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLocations.
     */
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation findMany
   */
  export type UserLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocations to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation create
   */
  export type UserLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLocation.
     */
    data: XOR<UserLocationCreateInput, UserLocationUncheckedCreateInput>
  }

  /**
   * UserLocation createMany
   */
  export type UserLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLocations.
     */
    data: UserLocationCreateManyInput | UserLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLocation createManyAndReturn
   */
  export type UserLocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserLocations.
     */
    data: UserLocationCreateManyInput | UserLocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLocation update
   */
  export type UserLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLocation.
     */
    data: XOR<UserLocationUpdateInput, UserLocationUncheckedUpdateInput>
    /**
     * Choose, which UserLocation to update.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation updateMany
   */
  export type UserLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLocations.
     */
    data: XOR<UserLocationUpdateManyMutationInput, UserLocationUncheckedUpdateManyInput>
    /**
     * Filter which UserLocations to update
     */
    where?: UserLocationWhereInput
  }

  /**
   * UserLocation upsert
   */
  export type UserLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLocation to update in case it exists.
     */
    where: UserLocationWhereUniqueInput
    /**
     * In case the UserLocation found by the `where` argument doesn't exist, create a new UserLocation with this data.
     */
    create: XOR<UserLocationCreateInput, UserLocationUncheckedCreateInput>
    /**
     * In case the UserLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLocationUpdateInput, UserLocationUncheckedUpdateInput>
  }

  /**
   * UserLocation delete
   */
  export type UserLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter which UserLocation to delete.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation deleteMany
   */
  export type UserLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLocations to delete
     */
    where?: UserLocationWhereInput
  }

  /**
   * UserLocation without action
   */
  export type UserLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    actorUserId: string | null
    actorType: string | null
    action: string | null
    targetType: string | null
    targetId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    actorUserId: string | null
    actorType: string | null
    action: string | null
    targetType: string | null
    targetId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    actorUserId: number
    actorType: number
    action: number
    targetType: number
    targetId: number
    details: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    actorUserId?: true
    actorType?: true
    action?: true
    targetType?: true
    targetId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    actorUserId?: true
    actorType?: true
    action?: true
    targetType?: true
    targetId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    actorUserId?: true
    actorType?: true
    action?: true
    targetType?: true
    targetId?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    actorUserId: string | null
    actorType: string
    action: string
    targetType: string | null
    targetId: string | null
    details: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    actorType?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    details?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    actorType?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    details?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    actorUserId?: boolean
    actorType?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorUserId: string | null
      actorType: string
      action: string
      targetType: string | null
      targetId: string | null
      details: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends AuditLog$actorArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly actorUserId: FieldRef<"AuditLog", 'String'>
    readonly actorType: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly targetType: FieldRef<"AuditLog", 'String'>
    readonly targetId: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog.actor
   */
  export type AuditLog$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    attempts: number | null
    maxAttempts: number | null
  }

  export type JobSumAggregateOutputType = {
    attempts: number | null
    maxAttempts: number | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    jobUuid: string | null
    fileVersionId: string | null
    jobType: string | null
    attempts: number | null
    maxAttempts: number | null
    status: $Enums.JobStatus | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    jobUuid: string | null
    fileVersionId: string | null
    jobType: string | null
    attempts: number | null
    maxAttempts: number | null
    status: $Enums.JobStatus | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    jobUuid: number
    fileVersionId: number
    jobType: number
    payload: number
    attempts: number
    maxAttempts: number
    status: number
    lastError: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    attempts?: true
    maxAttempts?: true
  }

  export type JobSumAggregateInputType = {
    attempts?: true
    maxAttempts?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    jobUuid?: true
    fileVersionId?: true
    jobType?: true
    attempts?: true
    maxAttempts?: true
    status?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    jobUuid?: true
    fileVersionId?: true
    jobType?: true
    attempts?: true
    maxAttempts?: true
    status?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    jobUuid?: true
    fileVersionId?: true
    jobType?: true
    payload?: true
    attempts?: true
    maxAttempts?: true
    status?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    jobUuid: string
    fileVersionId: string | null
    jobType: string | null
    payload: JsonValue | null
    attempts: number
    maxAttempts: number
    status: $Enums.JobStatus
    lastError: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobUuid?: boolean
    fileVersionId?: boolean
    jobType?: boolean
    payload?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    status?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fileVersion?: boolean | Job$fileVersionArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobUuid?: boolean
    fileVersionId?: boolean
    jobType?: boolean
    payload?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    status?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fileVersion?: boolean | Job$fileVersionArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    jobUuid?: boolean
    fileVersionId?: boolean
    jobType?: boolean
    payload?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    status?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fileVersion?: boolean | Job$fileVersionArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fileVersion?: boolean | Job$fileVersionArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      fileVersion: Prisma.$FileVersionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobUuid: string
      fileVersionId: string | null
      jobType: string | null
      payload: Prisma.JsonValue | null
      attempts: number
      maxAttempts: number
      status: $Enums.JobStatus
      lastError: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fileVersion<T extends Job$fileVersionArgs<ExtArgs> = {}>(args?: Subset<T, Job$fileVersionArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */ 
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'String'>
    readonly jobUuid: FieldRef<"Job", 'String'>
    readonly fileVersionId: FieldRef<"Job", 'String'>
    readonly jobType: FieldRef<"Job", 'String'>
    readonly payload: FieldRef<"Job", 'Json'>
    readonly attempts: FieldRef<"Job", 'Int'>
    readonly maxAttempts: FieldRef<"Job", 'Int'>
    readonly status: FieldRef<"Job", 'JobStatus'>
    readonly lastError: FieldRef<"Job", 'String'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
    readonly updatedAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data?: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
  }

  /**
   * Job.fileVersion
   */
  export type Job$fileVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    where?: FileVersionWhereInput
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    payload: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    payload?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: string | null
    payload: JsonValue | null
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    payload?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    payload?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    payload?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string | null
      payload: Prisma.JsonValue | null
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly payload: FieldRef<"Notification", 'Json'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionToken: string | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date | null
    lastSeenAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionToken: string | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date | null
    lastSeenAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    sessionToken: number
    userAgent: number
    ipAddress: number
    createdAt: number
    lastSeenAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    sessionToken?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
    lastSeenAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionToken?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
    lastSeenAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    sessionToken?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
    lastSeenAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    sessionToken: string
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date
    lastSeenAt: Date | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionToken?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionToken?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionToken?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sessionToken: string
      userAgent: string | null
      ipAddress: string | null
      createdAt: Date
      lastSeenAt: Date | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly lastSeenAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    handle: 'handle',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isBanned: 'isBanned',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    displayName: 'displayName',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const FileVersionScalarFieldEnum: {
    id: 'id',
    fileId: 'fileId',
    versionNumber: 'versionNumber',
    storagePath: 'storagePath',
    tmpPath: 'tmpPath',
    filename: 'filename',
    mimeType: 'mimeType',
    sizeBytes: 'sizeBytes',
    hash: 'hash',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileVersionScalarFieldEnum = (typeof FileVersionScalarFieldEnum)[keyof typeof FileVersionScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const FileTagScalarFieldEnum: {
    fileId: 'fileId',
    tagId: 'tagId'
  };

  export type FileTagScalarFieldEnum = (typeof FileTagScalarFieldEnum)[keyof typeof FileTagScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    os: 'os',
    createdAt: 'createdAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const UserDeviceScalarFieldEnum: {
    userId: 'userId',
    deviceId: 'deviceId',
    lastSeenAt: 'lastSeenAt'
  };

  export type UserDeviceScalarFieldEnum = (typeof UserDeviceScalarFieldEnum)[keyof typeof UserDeviceScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    ipAddress: 'ipAddress',
    geoJson: 'geoJson',
    createdAt: 'createdAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const UserLocationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    locationId: 'locationId',
    seenAt: 'seenAt'
  };

  export type UserLocationScalarFieldEnum = (typeof UserLocationScalarFieldEnum)[keyof typeof UserLocationScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    actorUserId: 'actorUserId',
    actorType: 'actorType',
    action: 'action',
    targetType: 'targetType',
    targetId: 'targetId',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    jobUuid: 'jobUuid',
    fileVersionId: 'fileVersionId',
    jobType: 'jobType',
    payload: 'payload',
    attempts: 'attempts',
    maxAttempts: 'maxAttempts',
    status: 'status',
    lastError: 'lastError',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    payload: 'payload',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionToken: 'sessionToken',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt',
    lastSeenAt: 'lastSeenAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'FileStatus'
   */
  export type EnumFileStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileStatus'>
    


  /**
   * Reference to a field of type 'FileStatus[]'
   */
  export type ListEnumFileStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    handle?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isBanned?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    auditLogs?: AuditLogListRelationFilter
    files?: FileListRelationFilter
    notifications?: NotificationListRelationFilter
    sessions?: SessionListRelationFilter
    devices?: UserDeviceListRelationFilter
    locations?: UserLocationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    handle?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isBanned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auditLogs?: AuditLogOrderByRelationAggregateInput
    files?: FileOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    devices?: UserDeviceOrderByRelationAggregateInput
    locations?: UserLocationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    handle?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isBanned?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    auditLogs?: AuditLogListRelationFilter
    files?: FileListRelationFilter
    notifications?: NotificationListRelationFilter
    sessions?: SessionListRelationFilter
    devices?: UserDeviceListRelationFilter
    locations?: UserLocationListRelationFilter
  }, "id" | "handle" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    handle?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isBanned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    handle?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    isBanned?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: UuidFilter<"File"> | string
    ownerId?: UuidFilter<"File"> | string
    displayName?: StringFilter<"File"> | string
    isDeleted?: BoolFilter<"File"> | boolean
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    tags?: FileTagListRelationFilter
    versions?: FileVersionListRelationFilter
    owner?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    displayName?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tags?: FileTagOrderByRelationAggregateInput
    versions?: FileVersionOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    ownerId?: UuidFilter<"File"> | string
    displayName?: StringFilter<"File"> | string
    isDeleted?: BoolFilter<"File"> | boolean
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    tags?: FileTagListRelationFilter
    versions?: FileVersionListRelationFilter
    owner?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    displayName?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"File"> | string
    ownerId?: UuidWithAggregatesFilter<"File"> | string
    displayName?: StringWithAggregatesFilter<"File"> | string
    isDeleted?: BoolWithAggregatesFilter<"File"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
  }

  export type FileVersionWhereInput = {
    AND?: FileVersionWhereInput | FileVersionWhereInput[]
    OR?: FileVersionWhereInput[]
    NOT?: FileVersionWhereInput | FileVersionWhereInput[]
    id?: UuidFilter<"FileVersion"> | string
    fileId?: UuidFilter<"FileVersion"> | string
    versionNumber?: IntFilter<"FileVersion"> | number
    storagePath?: StringFilter<"FileVersion"> | string
    tmpPath?: StringNullableFilter<"FileVersion"> | string | null
    filename?: StringFilter<"FileVersion"> | string
    mimeType?: StringNullableFilter<"FileVersion"> | string | null
    sizeBytes?: IntNullableFilter<"FileVersion"> | number | null
    hash?: StringFilter<"FileVersion"> | string
    status?: EnumFileStatusFilter<"FileVersion"> | $Enums.FileStatus
    notes?: StringNullableFilter<"FileVersion"> | string | null
    createdAt?: DateTimeFilter<"FileVersion"> | Date | string
    updatedAt?: DateTimeFilter<"FileVersion"> | Date | string
    file?: XOR<FileRelationFilter, FileWhereInput>
    jobs?: JobListRelationFilter
  }

  export type FileVersionOrderByWithRelationInput = {
    id?: SortOrder
    fileId?: SortOrder
    versionNumber?: SortOrder
    storagePath?: SortOrder
    tmpPath?: SortOrderInput | SortOrder
    filename?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    hash?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    file?: FileOrderByWithRelationInput
    jobs?: JobOrderByRelationAggregateInput
  }

  export type FileVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fileId_versionNumber?: FileVersionFileIdVersionNumberCompoundUniqueInput
    AND?: FileVersionWhereInput | FileVersionWhereInput[]
    OR?: FileVersionWhereInput[]
    NOT?: FileVersionWhereInput | FileVersionWhereInput[]
    fileId?: UuidFilter<"FileVersion"> | string
    versionNumber?: IntFilter<"FileVersion"> | number
    storagePath?: StringFilter<"FileVersion"> | string
    tmpPath?: StringNullableFilter<"FileVersion"> | string | null
    filename?: StringFilter<"FileVersion"> | string
    mimeType?: StringNullableFilter<"FileVersion"> | string | null
    sizeBytes?: IntNullableFilter<"FileVersion"> | number | null
    hash?: StringFilter<"FileVersion"> | string
    status?: EnumFileStatusFilter<"FileVersion"> | $Enums.FileStatus
    notes?: StringNullableFilter<"FileVersion"> | string | null
    createdAt?: DateTimeFilter<"FileVersion"> | Date | string
    updatedAt?: DateTimeFilter<"FileVersion"> | Date | string
    file?: XOR<FileRelationFilter, FileWhereInput>
    jobs?: JobListRelationFilter
  }, "id" | "fileId_versionNumber">

  export type FileVersionOrderByWithAggregationInput = {
    id?: SortOrder
    fileId?: SortOrder
    versionNumber?: SortOrder
    storagePath?: SortOrder
    tmpPath?: SortOrderInput | SortOrder
    filename?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    hash?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileVersionCountOrderByAggregateInput
    _avg?: FileVersionAvgOrderByAggregateInput
    _max?: FileVersionMaxOrderByAggregateInput
    _min?: FileVersionMinOrderByAggregateInput
    _sum?: FileVersionSumOrderByAggregateInput
  }

  export type FileVersionScalarWhereWithAggregatesInput = {
    AND?: FileVersionScalarWhereWithAggregatesInput | FileVersionScalarWhereWithAggregatesInput[]
    OR?: FileVersionScalarWhereWithAggregatesInput[]
    NOT?: FileVersionScalarWhereWithAggregatesInput | FileVersionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FileVersion"> | string
    fileId?: UuidWithAggregatesFilter<"FileVersion"> | string
    versionNumber?: IntWithAggregatesFilter<"FileVersion"> | number
    storagePath?: StringWithAggregatesFilter<"FileVersion"> | string
    tmpPath?: StringNullableWithAggregatesFilter<"FileVersion"> | string | null
    filename?: StringWithAggregatesFilter<"FileVersion"> | string
    mimeType?: StringNullableWithAggregatesFilter<"FileVersion"> | string | null
    sizeBytes?: IntNullableWithAggregatesFilter<"FileVersion"> | number | null
    hash?: StringWithAggregatesFilter<"FileVersion"> | string
    status?: EnumFileStatusWithAggregatesFilter<"FileVersion"> | $Enums.FileStatus
    notes?: StringNullableWithAggregatesFilter<"FileVersion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FileVersion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FileVersion"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: UuidFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    files?: FileTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    files?: FileTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    files?: FileTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type FileTagWhereInput = {
    AND?: FileTagWhereInput | FileTagWhereInput[]
    OR?: FileTagWhereInput[]
    NOT?: FileTagWhereInput | FileTagWhereInput[]
    fileId?: UuidFilter<"FileTag"> | string
    tagId?: UuidFilter<"FileTag"> | string
    file?: XOR<FileRelationFilter, FileWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
  }

  export type FileTagOrderByWithRelationInput = {
    fileId?: SortOrder
    tagId?: SortOrder
    file?: FileOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type FileTagWhereUniqueInput = Prisma.AtLeast<{
    fileId_tagId?: FileTagFileIdTagIdCompoundUniqueInput
    AND?: FileTagWhereInput | FileTagWhereInput[]
    OR?: FileTagWhereInput[]
    NOT?: FileTagWhereInput | FileTagWhereInput[]
    fileId?: UuidFilter<"FileTag"> | string
    tagId?: UuidFilter<"FileTag"> | string
    file?: XOR<FileRelationFilter, FileWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
  }, "fileId_tagId">

  export type FileTagOrderByWithAggregationInput = {
    fileId?: SortOrder
    tagId?: SortOrder
    _count?: FileTagCountOrderByAggregateInput
    _max?: FileTagMaxOrderByAggregateInput
    _min?: FileTagMinOrderByAggregateInput
  }

  export type FileTagScalarWhereWithAggregatesInput = {
    AND?: FileTagScalarWhereWithAggregatesInput | FileTagScalarWhereWithAggregatesInput[]
    OR?: FileTagScalarWhereWithAggregatesInput[]
    NOT?: FileTagScalarWhereWithAggregatesInput | FileTagScalarWhereWithAggregatesInput[]
    fileId?: UuidWithAggregatesFilter<"FileTag"> | string
    tagId?: UuidWithAggregatesFilter<"FileTag"> | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: UuidFilter<"Device"> | string
    name?: StringNullableFilter<"Device"> | string | null
    os?: StringNullableFilter<"Device"> | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    users?: UserDeviceListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    users?: UserDeviceOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    name?: StringNullableFilter<"Device"> | string | null
    os?: StringNullableFilter<"Device"> | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    users?: UserDeviceListRelationFilter
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Device"> | string
    name?: StringNullableWithAggregatesFilter<"Device"> | string | null
    os?: StringNullableWithAggregatesFilter<"Device"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type UserDeviceWhereInput = {
    AND?: UserDeviceWhereInput | UserDeviceWhereInput[]
    OR?: UserDeviceWhereInput[]
    NOT?: UserDeviceWhereInput | UserDeviceWhereInput[]
    userId?: UuidFilter<"UserDevice"> | string
    deviceId?: UuidFilter<"UserDevice"> | string
    lastSeenAt?: DateTimeNullableFilter<"UserDevice"> | Date | string | null
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserDeviceOrderByWithRelationInput = {
    userId?: SortOrder
    deviceId?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    device?: DeviceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserDeviceWhereUniqueInput = Prisma.AtLeast<{
    userId_deviceId?: UserDeviceUserIdDeviceIdCompoundUniqueInput
    AND?: UserDeviceWhereInput | UserDeviceWhereInput[]
    OR?: UserDeviceWhereInput[]
    NOT?: UserDeviceWhereInput | UserDeviceWhereInput[]
    userId?: UuidFilter<"UserDevice"> | string
    deviceId?: UuidFilter<"UserDevice"> | string
    lastSeenAt?: DateTimeNullableFilter<"UserDevice"> | Date | string | null
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "userId_deviceId">

  export type UserDeviceOrderByWithAggregationInput = {
    userId?: SortOrder
    deviceId?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    _count?: UserDeviceCountOrderByAggregateInput
    _max?: UserDeviceMaxOrderByAggregateInput
    _min?: UserDeviceMinOrderByAggregateInput
  }

  export type UserDeviceScalarWhereWithAggregatesInput = {
    AND?: UserDeviceScalarWhereWithAggregatesInput | UserDeviceScalarWhereWithAggregatesInput[]
    OR?: UserDeviceScalarWhereWithAggregatesInput[]
    NOT?: UserDeviceScalarWhereWithAggregatesInput | UserDeviceScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"UserDevice"> | string
    deviceId?: UuidWithAggregatesFilter<"UserDevice"> | string
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"UserDevice"> | Date | string | null
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: UuidFilter<"Location"> | string
    ipAddress?: StringNullableFilter<"Location"> | string | null
    geoJson?: JsonNullableFilter<"Location">
    createdAt?: DateTimeFilter<"Location"> | Date | string
    users?: UserLocationListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    geoJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    users?: UserLocationOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    ipAddress?: StringNullableFilter<"Location"> | string | null
    geoJson?: JsonNullableFilter<"Location">
    createdAt?: DateTimeFilter<"Location"> | Date | string
    users?: UserLocationListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    geoJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Location"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"Location"> | string | null
    geoJson?: JsonNullableWithAggregatesFilter<"Location">
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type UserLocationWhereInput = {
    AND?: UserLocationWhereInput | UserLocationWhereInput[]
    OR?: UserLocationWhereInput[]
    NOT?: UserLocationWhereInput | UserLocationWhereInput[]
    id?: UuidFilter<"UserLocation"> | string
    userId?: UuidFilter<"UserLocation"> | string
    locationId?: UuidFilter<"UserLocation"> | string
    seenAt?: DateTimeFilter<"UserLocation"> | Date | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserLocationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    seenAt?: SortOrder
    location?: LocationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserLocationWhereInput | UserLocationWhereInput[]
    OR?: UserLocationWhereInput[]
    NOT?: UserLocationWhereInput | UserLocationWhereInput[]
    userId?: UuidFilter<"UserLocation"> | string
    locationId?: UuidFilter<"UserLocation"> | string
    seenAt?: DateTimeFilter<"UserLocation"> | Date | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type UserLocationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    seenAt?: SortOrder
    _count?: UserLocationCountOrderByAggregateInput
    _max?: UserLocationMaxOrderByAggregateInput
    _min?: UserLocationMinOrderByAggregateInput
  }

  export type UserLocationScalarWhereWithAggregatesInput = {
    AND?: UserLocationScalarWhereWithAggregatesInput | UserLocationScalarWhereWithAggregatesInput[]
    OR?: UserLocationScalarWhereWithAggregatesInput[]
    NOT?: UserLocationScalarWhereWithAggregatesInput | UserLocationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserLocation"> | string
    userId?: UuidWithAggregatesFilter<"UserLocation"> | string
    locationId?: UuidWithAggregatesFilter<"UserLocation"> | string
    seenAt?: DateTimeWithAggregatesFilter<"UserLocation"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: UuidFilter<"AuditLog"> | string
    actorUserId?: UuidNullableFilter<"AuditLog"> | string | null
    actorType?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    targetType?: StringNullableFilter<"AuditLog"> | string | null
    targetId?: UuidNullableFilter<"AuditLog"> | string | null
    details?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    actorUserId?: SortOrderInput | SortOrder
    actorType?: SortOrder
    action?: SortOrder
    targetType?: SortOrderInput | SortOrder
    targetId?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actor?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    actorUserId?: UuidNullableFilter<"AuditLog"> | string | null
    actorType?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    targetType?: StringNullableFilter<"AuditLog"> | string | null
    targetId?: UuidNullableFilter<"AuditLog"> | string | null
    details?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actorUserId?: SortOrderInput | SortOrder
    actorType?: SortOrder
    action?: SortOrder
    targetType?: SortOrderInput | SortOrder
    targetId?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AuditLog"> | string
    actorUserId?: UuidNullableWithAggregatesFilter<"AuditLog"> | string | null
    actorType?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    targetType?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    targetId?: UuidNullableWithAggregatesFilter<"AuditLog"> | string | null
    details?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: UuidFilter<"Job"> | string
    jobUuid?: UuidFilter<"Job"> | string
    fileVersionId?: UuidNullableFilter<"Job"> | string | null
    jobType?: StringNullableFilter<"Job"> | string | null
    payload?: JsonNullableFilter<"Job">
    attempts?: IntFilter<"Job"> | number
    maxAttempts?: IntFilter<"Job"> | number
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    lastError?: StringNullableFilter<"Job"> | string | null
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    fileVersion?: XOR<FileVersionNullableRelationFilter, FileVersionWhereInput> | null
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    jobUuid?: SortOrder
    fileVersionId?: SortOrderInput | SortOrder
    jobType?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    status?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fileVersion?: FileVersionOrderByWithRelationInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobUuid?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    fileVersionId?: UuidNullableFilter<"Job"> | string | null
    jobType?: StringNullableFilter<"Job"> | string | null
    payload?: JsonNullableFilter<"Job">
    attempts?: IntFilter<"Job"> | number
    maxAttempts?: IntFilter<"Job"> | number
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    lastError?: StringNullableFilter<"Job"> | string | null
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    fileVersion?: XOR<FileVersionNullableRelationFilter, FileVersionWhereInput> | null
  }, "id" | "jobUuid">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    jobUuid?: SortOrder
    fileVersionId?: SortOrderInput | SortOrder
    jobType?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    status?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Job"> | string
    jobUuid?: UuidWithAggregatesFilter<"Job"> | string
    fileVersionId?: UuidNullableWithAggregatesFilter<"Job"> | string | null
    jobType?: StringNullableWithAggregatesFilter<"Job"> | string | null
    payload?: JsonNullableWithAggregatesFilter<"Job">
    attempts?: IntWithAggregatesFilter<"Job"> | number
    maxAttempts?: IntWithAggregatesFilter<"Job"> | number
    status?: EnumJobStatusWithAggregatesFilter<"Job"> | $Enums.JobStatus
    lastError?: StringNullableWithAggregatesFilter<"Job"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: UuidFilter<"Notification"> | string
    userId?: UuidFilter<"Notification"> | string
    type?: StringNullableFilter<"Notification"> | string | null
    payload?: JsonNullableFilter<"Notification">
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: UuidFilter<"Notification"> | string
    type?: StringNullableFilter<"Notification"> | string | null
    payload?: JsonNullableFilter<"Notification">
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Notification"> | string
    userId?: UuidWithAggregatesFilter<"Notification"> | string
    type?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    payload?: JsonNullableWithAggregatesFilter<"Notification">
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: UuidFilter<"Session"> | string
    userId?: UuidFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    lastSeenAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: UuidFilter<"Session"> | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    lastSeenAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Session"> | string
    userId?: UuidWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role?: string
    isBanned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
    files?: FileCreateNestedManyWithoutOwnerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    devices?: UserDeviceCreateNestedManyWithoutUserInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role?: string
    isBanned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
    files?: FileUncheckedCreateNestedManyWithoutOwnerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    devices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
    files?: FileUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    devices?: UserDeviceUpdateManyWithoutUserNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
    files?: FileUncheckedUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    devices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role?: string
    isBanned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateInput = {
    id?: string
    displayName: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: FileTagCreateNestedManyWithoutFileInput
    versions?: FileVersionCreateNestedManyWithoutFileInput
    owner: UserCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateInput = {
    id?: string
    ownerId: string
    displayName: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: FileTagUncheckedCreateNestedManyWithoutFileInput
    versions?: FileVersionUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: FileTagUpdateManyWithoutFileNestedInput
    versions?: FileVersionUpdateManyWithoutFileNestedInput
    owner?: UserUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: FileTagUncheckedUpdateManyWithoutFileNestedInput
    versions?: FileVersionUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FileCreateManyInput = {
    id?: string
    ownerId: string
    displayName: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileVersionCreateInput = {
    id?: string
    versionNumber?: number
    storagePath: string
    tmpPath?: string | null
    filename: string
    mimeType?: string | null
    sizeBytes?: number | null
    hash: string
    status?: $Enums.FileStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    file: FileCreateNestedOneWithoutVersionsInput
    jobs?: JobCreateNestedManyWithoutFileVersionInput
  }

  export type FileVersionUncheckedCreateInput = {
    id?: string
    fileId: string
    versionNumber?: number
    storagePath: string
    tmpPath?: string | null
    filename: string
    mimeType?: string | null
    sizeBytes?: number | null
    hash: string
    status?: $Enums.FileStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutFileVersionInput
  }

  export type FileVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    tmpPath?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hash?: StringFieldUpdateOperationsInput | string
    status?: EnumFileStatusFieldUpdateOperationsInput | $Enums.FileStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: FileUpdateOneRequiredWithoutVersionsNestedInput
    jobs?: JobUpdateManyWithoutFileVersionNestedInput
  }

  export type FileVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    tmpPath?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hash?: StringFieldUpdateOperationsInput | string
    status?: EnumFileStatusFieldUpdateOperationsInput | $Enums.FileStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutFileVersionNestedInput
  }

  export type FileVersionCreateManyInput = {
    id?: string
    fileId: string
    versionNumber?: number
    storagePath: string
    tmpPath?: string | null
    filename: string
    mimeType?: string | null
    sizeBytes?: number | null
    hash: string
    status?: $Enums.FileStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    tmpPath?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hash?: StringFieldUpdateOperationsInput | string
    status?: EnumFileStatusFieldUpdateOperationsInput | $Enums.FileStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    tmpPath?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hash?: StringFieldUpdateOperationsInput | string
    status?: EnumFileStatusFieldUpdateOperationsInput | $Enums.FileStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    files?: FileTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    files?: FileTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    files?: FileTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    files?: FileTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FileTagCreateInput = {
    file: FileCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutFilesInput
  }

  export type FileTagUncheckedCreateInput = {
    fileId: string
    tagId: string
  }

  export type FileTagUpdateInput = {
    file?: FileUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileTagUncheckedUpdateInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type FileTagCreateManyInput = {
    fileId: string
    tagId: string
  }

  export type FileTagUpdateManyMutationInput = {

  }

  export type FileTagUncheckedUpdateManyInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceCreateInput = {
    id?: string
    name?: string | null
    os?: string | null
    createdAt?: Date | string
    users?: UserDeviceCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    name?: string | null
    os?: string | null
    createdAt?: Date | string
    users?: UserDeviceUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserDeviceUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserDeviceUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: string
    name?: string | null
    os?: string | null
    createdAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDeviceCreateInput = {
    lastSeenAt?: Date | string | null
    device: DeviceCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutDevicesInput
  }

  export type UserDeviceUncheckedCreateInput = {
    userId: string
    deviceId: string
    lastSeenAt?: Date | string | null
  }

  export type UserDeviceUpdateInput = {
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: DeviceUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type UserDeviceUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserDeviceCreateManyInput = {
    userId: string
    deviceId: string
    lastSeenAt?: Date | string | null
  }

  export type UserDeviceUpdateManyMutationInput = {
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserDeviceUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LocationCreateInput = {
    id?: string
    ipAddress?: string | null
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    users?: UserLocationCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    ipAddress?: string | null
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    users?: UserLocationUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserLocationUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserLocationUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    ipAddress?: string | null
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationCreateInput = {
    id?: string
    seenAt?: Date | string
    location: LocationCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutLocationsInput
  }

  export type UserLocationUncheckedCreateInput = {
    id?: string
    userId: string
    locationId: string
    seenAt?: Date | string
  }

  export type UserLocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type UserLocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationCreateManyInput = {
    id?: string
    userId: string
    locationId: string
    seenAt?: Date | string
  }

  export type UserLocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    actorType?: string
    action: string
    targetType?: string | null
    targetId?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    actorUserId?: string | null
    actorType?: string
    action: string
    targetType?: string | null
    targetId?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    actorUserId?: string | null
    actorType?: string
    action: string
    targetType?: string | null
    targetId?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    id?: string
    jobUuid?: string
    jobType?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    attempts?: number
    maxAttempts?: number
    status?: $Enums.JobStatus
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fileVersion?: FileVersionCreateNestedOneWithoutJobsInput
  }

  export type JobUncheckedCreateInput = {
    id?: string
    jobUuid?: string
    fileVersionId?: string | null
    jobType?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    attempts?: number
    maxAttempts?: number
    status?: $Enums.JobStatus
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobUuid?: StringFieldUpdateOperationsInput | string
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileVersion?: FileVersionUpdateOneWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobUuid?: StringFieldUpdateOperationsInput | string
    fileVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateManyInput = {
    id?: string
    jobUuid?: string
    fileVersionId?: string | null
    jobType?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    attempts?: number
    maxAttempts?: number
    status?: $Enums.JobStatus
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobUuid?: StringFieldUpdateOperationsInput | string
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobUuid?: StringFieldUpdateOperationsInput | string
    fileVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    sessionToken: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    sessionToken: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type UserDeviceListRelationFilter = {
    every?: UserDeviceWhereInput
    some?: UserDeviceWhereInput
    none?: UserDeviceWhereInput
  }

  export type UserLocationListRelationFilter = {
    every?: UserLocationWhereInput
    some?: UserLocationWhereInput
    none?: UserLocationWhereInput
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserDeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    handle?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isBanned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    handle?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isBanned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    handle?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isBanned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FileTagListRelationFilter = {
    every?: FileTagWhereInput
    some?: FileTagWhereInput
    none?: FileTagWhereInput
  }

  export type FileVersionListRelationFilter = {
    every?: FileVersionWhereInput
    some?: FileVersionWhereInput
    none?: FileVersionWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FileTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    displayName?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    displayName?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    displayName?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumFileStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FileStatus | EnumFileStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFileStatusFilter<$PrismaModel> | $Enums.FileStatus
  }

  export type FileRelationFilter = {
    is?: FileWhereInput
    isNot?: FileWhereInput
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileVersionFileIdVersionNumberCompoundUniqueInput = {
    fileId: string
    versionNumber: number
  }

  export type FileVersionCountOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    versionNumber?: SortOrder
    storagePath?: SortOrder
    tmpPath?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    hash?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileVersionAvgOrderByAggregateInput = {
    versionNumber?: SortOrder
    sizeBytes?: SortOrder
  }

  export type FileVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    versionNumber?: SortOrder
    storagePath?: SortOrder
    tmpPath?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    hash?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileVersionMinOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    versionNumber?: SortOrder
    storagePath?: SortOrder
    tmpPath?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    hash?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileVersionSumOrderByAggregateInput = {
    versionNumber?: SortOrder
    sizeBytes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumFileStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileStatus | EnumFileStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFileStatusWithAggregatesFilter<$PrismaModel> | $Enums.FileStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileStatusFilter<$PrismaModel>
    _max?: NestedEnumFileStatusFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type FileTagFileIdTagIdCompoundUniqueInput = {
    fileId: string
    tagId: string
  }

  export type FileTagCountOrderByAggregateInput = {
    fileId?: SortOrder
    tagId?: SortOrder
  }

  export type FileTagMaxOrderByAggregateInput = {
    fileId?: SortOrder
    tagId?: SortOrder
  }

  export type FileTagMinOrderByAggregateInput = {
    fileId?: SortOrder
    tagId?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    os?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    os?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    os?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DeviceRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type UserDeviceUserIdDeviceIdCompoundUniqueInput = {
    userId: string
    deviceId: string
  }

  export type UserDeviceCountOrderByAggregateInput = {
    userId?: SortOrder
    deviceId?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type UserDeviceMaxOrderByAggregateInput = {
    userId?: SortOrder
    deviceId?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type UserDeviceMinOrderByAggregateInput = {
    userId?: SortOrder
    deviceId?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    geoJson?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type LocationRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type UserLocationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    seenAt?: SortOrder
  }

  export type UserLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    seenAt?: SortOrder
  }

  export type UserLocationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    seenAt?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type FileVersionNullableRelationFilter = {
    is?: FileVersionWhereInput | null
    isNot?: FileVersionWhereInput | null
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    jobUuid?: SortOrder
    fileVersionId?: SortOrder
    jobType?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    status?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    attempts?: SortOrder
    maxAttempts?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    jobUuid?: SortOrder
    fileVersionId?: SortOrder
    jobType?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    status?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    jobUuid?: SortOrder
    fileVersionId?: SortOrder
    jobType?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    status?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    attempts?: SortOrder
    maxAttempts?: SortOrder
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type AuditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type FileCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FileCreateWithoutOwnerInput, FileUncheckedCreateWithoutOwnerInput> | FileCreateWithoutOwnerInput[] | FileUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FileCreateOrConnectWithoutOwnerInput | FileCreateOrConnectWithoutOwnerInput[]
    createMany?: FileCreateManyOwnerInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserDeviceCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
  }

  export type UserLocationCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput> | UserLocationCreateWithoutUserInput[] | UserLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput | UserLocationCreateOrConnectWithoutUserInput[]
    createMany?: UserLocationCreateManyUserInputEnvelope
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FileCreateWithoutOwnerInput, FileUncheckedCreateWithoutOwnerInput> | FileCreateWithoutOwnerInput[] | FileUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FileCreateOrConnectWithoutOwnerInput | FileCreateOrConnectWithoutOwnerInput[]
    createMany?: FileCreateManyOwnerInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserDeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
  }

  export type UserLocationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput> | UserLocationCreateWithoutUserInput[] | UserLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput | UserLocationCreateOrConnectWithoutUserInput[]
    createMany?: UserLocationCreateManyUserInputEnvelope
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type FileUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FileCreateWithoutOwnerInput, FileUncheckedCreateWithoutOwnerInput> | FileCreateWithoutOwnerInput[] | FileUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FileCreateOrConnectWithoutOwnerInput | FileCreateOrConnectWithoutOwnerInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutOwnerInput | FileUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FileCreateManyOwnerInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutOwnerInput | FileUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FileUpdateManyWithWhereWithoutOwnerInput | FileUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserDeviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    upsert?: UserDeviceUpsertWithWhereUniqueWithoutUserInput | UserDeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    set?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    disconnect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    delete?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    update?: UserDeviceUpdateWithWhereUniqueWithoutUserInput | UserDeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDeviceUpdateManyWithWhereWithoutUserInput | UserDeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
  }

  export type UserLocationUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput> | UserLocationCreateWithoutUserInput[] | UserLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput | UserLocationCreateOrConnectWithoutUserInput[]
    upsert?: UserLocationUpsertWithWhereUniqueWithoutUserInput | UserLocationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLocationCreateManyUserInputEnvelope
    set?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    disconnect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    delete?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    update?: UserLocationUpdateWithWhereUniqueWithoutUserInput | UserLocationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLocationUpdateManyWithWhereWithoutUserInput | UserLocationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FileCreateWithoutOwnerInput, FileUncheckedCreateWithoutOwnerInput> | FileCreateWithoutOwnerInput[] | FileUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FileCreateOrConnectWithoutOwnerInput | FileCreateOrConnectWithoutOwnerInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutOwnerInput | FileUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FileCreateManyOwnerInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutOwnerInput | FileUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FileUpdateManyWithWhereWithoutOwnerInput | FileUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserDeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    upsert?: UserDeviceUpsertWithWhereUniqueWithoutUserInput | UserDeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    set?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    disconnect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    delete?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    update?: UserDeviceUpdateWithWhereUniqueWithoutUserInput | UserDeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDeviceUpdateManyWithWhereWithoutUserInput | UserDeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
  }

  export type UserLocationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput> | UserLocationCreateWithoutUserInput[] | UserLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput | UserLocationCreateOrConnectWithoutUserInput[]
    upsert?: UserLocationUpsertWithWhereUniqueWithoutUserInput | UserLocationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLocationCreateManyUserInputEnvelope
    set?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    disconnect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    delete?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    update?: UserLocationUpdateWithWhereUniqueWithoutUserInput | UserLocationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLocationUpdateManyWithWhereWithoutUserInput | UserLocationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
  }

  export type FileTagCreateNestedManyWithoutFileInput = {
    create?: XOR<FileTagCreateWithoutFileInput, FileTagUncheckedCreateWithoutFileInput> | FileTagCreateWithoutFileInput[] | FileTagUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileTagCreateOrConnectWithoutFileInput | FileTagCreateOrConnectWithoutFileInput[]
    createMany?: FileTagCreateManyFileInputEnvelope
    connect?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
  }

  export type FileVersionCreateNestedManyWithoutFileInput = {
    create?: XOR<FileVersionCreateWithoutFileInput, FileVersionUncheckedCreateWithoutFileInput> | FileVersionCreateWithoutFileInput[] | FileVersionUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutFileInput | FileVersionCreateOrConnectWithoutFileInput[]
    createMany?: FileVersionCreateManyFileInputEnvelope
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutFilesInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    connect?: UserWhereUniqueInput
  }

  export type FileTagUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<FileTagCreateWithoutFileInput, FileTagUncheckedCreateWithoutFileInput> | FileTagCreateWithoutFileInput[] | FileTagUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileTagCreateOrConnectWithoutFileInput | FileTagCreateOrConnectWithoutFileInput[]
    createMany?: FileTagCreateManyFileInputEnvelope
    connect?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
  }

  export type FileVersionUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<FileVersionCreateWithoutFileInput, FileVersionUncheckedCreateWithoutFileInput> | FileVersionCreateWithoutFileInput[] | FileVersionUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutFileInput | FileVersionCreateOrConnectWithoutFileInput[]
    createMany?: FileVersionCreateManyFileInputEnvelope
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
  }

  export type FileTagUpdateManyWithoutFileNestedInput = {
    create?: XOR<FileTagCreateWithoutFileInput, FileTagUncheckedCreateWithoutFileInput> | FileTagCreateWithoutFileInput[] | FileTagUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileTagCreateOrConnectWithoutFileInput | FileTagCreateOrConnectWithoutFileInput[]
    upsert?: FileTagUpsertWithWhereUniqueWithoutFileInput | FileTagUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: FileTagCreateManyFileInputEnvelope
    set?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    disconnect?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    delete?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    connect?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    update?: FileTagUpdateWithWhereUniqueWithoutFileInput | FileTagUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: FileTagUpdateManyWithWhereWithoutFileInput | FileTagUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: FileTagScalarWhereInput | FileTagScalarWhereInput[]
  }

  export type FileVersionUpdateManyWithoutFileNestedInput = {
    create?: XOR<FileVersionCreateWithoutFileInput, FileVersionUncheckedCreateWithoutFileInput> | FileVersionCreateWithoutFileInput[] | FileVersionUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutFileInput | FileVersionCreateOrConnectWithoutFileInput[]
    upsert?: FileVersionUpsertWithWhereUniqueWithoutFileInput | FileVersionUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: FileVersionCreateManyFileInputEnvelope
    set?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    disconnect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    delete?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    update?: FileVersionUpdateWithWhereUniqueWithoutFileInput | FileVersionUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: FileVersionUpdateManyWithWhereWithoutFileInput | FileVersionUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: FileVersionScalarWhereInput | FileVersionScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    upsert?: UserUpsertWithoutFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFilesInput, UserUpdateWithoutFilesInput>, UserUncheckedUpdateWithoutFilesInput>
  }

  export type FileTagUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<FileTagCreateWithoutFileInput, FileTagUncheckedCreateWithoutFileInput> | FileTagCreateWithoutFileInput[] | FileTagUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileTagCreateOrConnectWithoutFileInput | FileTagCreateOrConnectWithoutFileInput[]
    upsert?: FileTagUpsertWithWhereUniqueWithoutFileInput | FileTagUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: FileTagCreateManyFileInputEnvelope
    set?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    disconnect?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    delete?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    connect?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    update?: FileTagUpdateWithWhereUniqueWithoutFileInput | FileTagUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: FileTagUpdateManyWithWhereWithoutFileInput | FileTagUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: FileTagScalarWhereInput | FileTagScalarWhereInput[]
  }

  export type FileVersionUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<FileVersionCreateWithoutFileInput, FileVersionUncheckedCreateWithoutFileInput> | FileVersionCreateWithoutFileInput[] | FileVersionUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutFileInput | FileVersionCreateOrConnectWithoutFileInput[]
    upsert?: FileVersionUpsertWithWhereUniqueWithoutFileInput | FileVersionUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: FileVersionCreateManyFileInputEnvelope
    set?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    disconnect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    delete?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    update?: FileVersionUpdateWithWhereUniqueWithoutFileInput | FileVersionUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: FileVersionUpdateManyWithWhereWithoutFileInput | FileVersionUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: FileVersionScalarWhereInput | FileVersionScalarWhereInput[]
  }

  export type FileCreateNestedOneWithoutVersionsInput = {
    create?: XOR<FileCreateWithoutVersionsInput, FileUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: FileCreateOrConnectWithoutVersionsInput
    connect?: FileWhereUniqueInput
  }

  export type JobCreateNestedManyWithoutFileVersionInput = {
    create?: XOR<JobCreateWithoutFileVersionInput, JobUncheckedCreateWithoutFileVersionInput> | JobCreateWithoutFileVersionInput[] | JobUncheckedCreateWithoutFileVersionInput[]
    connectOrCreate?: JobCreateOrConnectWithoutFileVersionInput | JobCreateOrConnectWithoutFileVersionInput[]
    createMany?: JobCreateManyFileVersionInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutFileVersionInput = {
    create?: XOR<JobCreateWithoutFileVersionInput, JobUncheckedCreateWithoutFileVersionInput> | JobCreateWithoutFileVersionInput[] | JobUncheckedCreateWithoutFileVersionInput[]
    connectOrCreate?: JobCreateOrConnectWithoutFileVersionInput | JobCreateOrConnectWithoutFileVersionInput[]
    createMany?: JobCreateManyFileVersionInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumFileStatusFieldUpdateOperationsInput = {
    set?: $Enums.FileStatus
  }

  export type FileUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<FileCreateWithoutVersionsInput, FileUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: FileCreateOrConnectWithoutVersionsInput
    upsert?: FileUpsertWithoutVersionsInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutVersionsInput, FileUpdateWithoutVersionsInput>, FileUncheckedUpdateWithoutVersionsInput>
  }

  export type JobUpdateManyWithoutFileVersionNestedInput = {
    create?: XOR<JobCreateWithoutFileVersionInput, JobUncheckedCreateWithoutFileVersionInput> | JobCreateWithoutFileVersionInput[] | JobUncheckedCreateWithoutFileVersionInput[]
    connectOrCreate?: JobCreateOrConnectWithoutFileVersionInput | JobCreateOrConnectWithoutFileVersionInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutFileVersionInput | JobUpsertWithWhereUniqueWithoutFileVersionInput[]
    createMany?: JobCreateManyFileVersionInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutFileVersionInput | JobUpdateWithWhereUniqueWithoutFileVersionInput[]
    updateMany?: JobUpdateManyWithWhereWithoutFileVersionInput | JobUpdateManyWithWhereWithoutFileVersionInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutFileVersionNestedInput = {
    create?: XOR<JobCreateWithoutFileVersionInput, JobUncheckedCreateWithoutFileVersionInput> | JobCreateWithoutFileVersionInput[] | JobUncheckedCreateWithoutFileVersionInput[]
    connectOrCreate?: JobCreateOrConnectWithoutFileVersionInput | JobCreateOrConnectWithoutFileVersionInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutFileVersionInput | JobUpsertWithWhereUniqueWithoutFileVersionInput[]
    createMany?: JobCreateManyFileVersionInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutFileVersionInput | JobUpdateWithWhereUniqueWithoutFileVersionInput[]
    updateMany?: JobUpdateManyWithWhereWithoutFileVersionInput | JobUpdateManyWithWhereWithoutFileVersionInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type FileTagCreateNestedManyWithoutTagInput = {
    create?: XOR<FileTagCreateWithoutTagInput, FileTagUncheckedCreateWithoutTagInput> | FileTagCreateWithoutTagInput[] | FileTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: FileTagCreateOrConnectWithoutTagInput | FileTagCreateOrConnectWithoutTagInput[]
    createMany?: FileTagCreateManyTagInputEnvelope
    connect?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
  }

  export type FileTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<FileTagCreateWithoutTagInput, FileTagUncheckedCreateWithoutTagInput> | FileTagCreateWithoutTagInput[] | FileTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: FileTagCreateOrConnectWithoutTagInput | FileTagCreateOrConnectWithoutTagInput[]
    createMany?: FileTagCreateManyTagInputEnvelope
    connect?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
  }

  export type FileTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<FileTagCreateWithoutTagInput, FileTagUncheckedCreateWithoutTagInput> | FileTagCreateWithoutTagInput[] | FileTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: FileTagCreateOrConnectWithoutTagInput | FileTagCreateOrConnectWithoutTagInput[]
    upsert?: FileTagUpsertWithWhereUniqueWithoutTagInput | FileTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: FileTagCreateManyTagInputEnvelope
    set?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    disconnect?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    delete?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    connect?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    update?: FileTagUpdateWithWhereUniqueWithoutTagInput | FileTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: FileTagUpdateManyWithWhereWithoutTagInput | FileTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: FileTagScalarWhereInput | FileTagScalarWhereInput[]
  }

  export type FileTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<FileTagCreateWithoutTagInput, FileTagUncheckedCreateWithoutTagInput> | FileTagCreateWithoutTagInput[] | FileTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: FileTagCreateOrConnectWithoutTagInput | FileTagCreateOrConnectWithoutTagInput[]
    upsert?: FileTagUpsertWithWhereUniqueWithoutTagInput | FileTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: FileTagCreateManyTagInputEnvelope
    set?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    disconnect?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    delete?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    connect?: FileTagWhereUniqueInput | FileTagWhereUniqueInput[]
    update?: FileTagUpdateWithWhereUniqueWithoutTagInput | FileTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: FileTagUpdateManyWithWhereWithoutTagInput | FileTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: FileTagScalarWhereInput | FileTagScalarWhereInput[]
  }

  export type FileCreateNestedOneWithoutTagsInput = {
    create?: XOR<FileCreateWithoutTagsInput, FileUncheckedCreateWithoutTagsInput>
    connectOrCreate?: FileCreateOrConnectWithoutTagsInput
    connect?: FileWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutFilesInput = {
    create?: XOR<TagCreateWithoutFilesInput, TagUncheckedCreateWithoutFilesInput>
    connectOrCreate?: TagCreateOrConnectWithoutFilesInput
    connect?: TagWhereUniqueInput
  }

  export type FileUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<FileCreateWithoutTagsInput, FileUncheckedCreateWithoutTagsInput>
    connectOrCreate?: FileCreateOrConnectWithoutTagsInput
    upsert?: FileUpsertWithoutTagsInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutTagsInput, FileUpdateWithoutTagsInput>, FileUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<TagCreateWithoutFilesInput, TagUncheckedCreateWithoutFilesInput>
    connectOrCreate?: TagCreateOrConnectWithoutFilesInput
    upsert?: TagUpsertWithoutFilesInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutFilesInput, TagUpdateWithoutFilesInput>, TagUncheckedUpdateWithoutFilesInput>
  }

  export type UserDeviceCreateNestedManyWithoutDeviceInput = {
    create?: XOR<UserDeviceCreateWithoutDeviceInput, UserDeviceUncheckedCreateWithoutDeviceInput> | UserDeviceCreateWithoutDeviceInput[] | UserDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutDeviceInput | UserDeviceCreateOrConnectWithoutDeviceInput[]
    createMany?: UserDeviceCreateManyDeviceInputEnvelope
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
  }

  export type UserDeviceUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<UserDeviceCreateWithoutDeviceInput, UserDeviceUncheckedCreateWithoutDeviceInput> | UserDeviceCreateWithoutDeviceInput[] | UserDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutDeviceInput | UserDeviceCreateOrConnectWithoutDeviceInput[]
    createMany?: UserDeviceCreateManyDeviceInputEnvelope
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
  }

  export type UserDeviceUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<UserDeviceCreateWithoutDeviceInput, UserDeviceUncheckedCreateWithoutDeviceInput> | UserDeviceCreateWithoutDeviceInput[] | UserDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutDeviceInput | UserDeviceCreateOrConnectWithoutDeviceInput[]
    upsert?: UserDeviceUpsertWithWhereUniqueWithoutDeviceInput | UserDeviceUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: UserDeviceCreateManyDeviceInputEnvelope
    set?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    disconnect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    delete?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    update?: UserDeviceUpdateWithWhereUniqueWithoutDeviceInput | UserDeviceUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: UserDeviceUpdateManyWithWhereWithoutDeviceInput | UserDeviceUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
  }

  export type UserDeviceUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<UserDeviceCreateWithoutDeviceInput, UserDeviceUncheckedCreateWithoutDeviceInput> | UserDeviceCreateWithoutDeviceInput[] | UserDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutDeviceInput | UserDeviceCreateOrConnectWithoutDeviceInput[]
    upsert?: UserDeviceUpsertWithWhereUniqueWithoutDeviceInput | UserDeviceUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: UserDeviceCreateManyDeviceInputEnvelope
    set?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    disconnect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    delete?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    update?: UserDeviceUpdateWithWhereUniqueWithoutDeviceInput | UserDeviceUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: UserDeviceUpdateManyWithWhereWithoutDeviceInput | UserDeviceUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutUsersInput = {
    create?: XOR<DeviceCreateWithoutUsersInput, DeviceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutUsersInput
    connect?: DeviceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DeviceUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<DeviceCreateWithoutUsersInput, DeviceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutUsersInput
    upsert?: DeviceUpsertWithoutUsersInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutUsersInput, DeviceUpdateWithoutUsersInput>, DeviceUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    upsert?: UserUpsertWithoutDevicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDevicesInput, UserUpdateWithoutDevicesInput>, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserLocationCreateNestedManyWithoutLocationInput = {
    create?: XOR<UserLocationCreateWithoutLocationInput, UserLocationUncheckedCreateWithoutLocationInput> | UserLocationCreateWithoutLocationInput[] | UserLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutLocationInput | UserLocationCreateOrConnectWithoutLocationInput[]
    createMany?: UserLocationCreateManyLocationInputEnvelope
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
  }

  export type UserLocationUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<UserLocationCreateWithoutLocationInput, UserLocationUncheckedCreateWithoutLocationInput> | UserLocationCreateWithoutLocationInput[] | UserLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutLocationInput | UserLocationCreateOrConnectWithoutLocationInput[]
    createMany?: UserLocationCreateManyLocationInputEnvelope
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
  }

  export type UserLocationUpdateManyWithoutLocationNestedInput = {
    create?: XOR<UserLocationCreateWithoutLocationInput, UserLocationUncheckedCreateWithoutLocationInput> | UserLocationCreateWithoutLocationInput[] | UserLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutLocationInput | UserLocationCreateOrConnectWithoutLocationInput[]
    upsert?: UserLocationUpsertWithWhereUniqueWithoutLocationInput | UserLocationUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: UserLocationCreateManyLocationInputEnvelope
    set?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    disconnect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    delete?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    update?: UserLocationUpdateWithWhereUniqueWithoutLocationInput | UserLocationUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: UserLocationUpdateManyWithWhereWithoutLocationInput | UserLocationUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
  }

  export type UserLocationUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<UserLocationCreateWithoutLocationInput, UserLocationUncheckedCreateWithoutLocationInput> | UserLocationCreateWithoutLocationInput[] | UserLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutLocationInput | UserLocationCreateOrConnectWithoutLocationInput[]
    upsert?: UserLocationUpsertWithWhereUniqueWithoutLocationInput | UserLocationUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: UserLocationCreateManyLocationInputEnvelope
    set?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    disconnect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    delete?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    update?: UserLocationUpdateWithWhereUniqueWithoutLocationInput | UserLocationUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: UserLocationUpdateManyWithWhereWithoutLocationInput | UserLocationUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
  }

  export type LocationCreateNestedOneWithoutUsersInput = {
    create?: XOR<LocationCreateWithoutUsersInput, LocationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: LocationCreateOrConnectWithoutUsersInput
    connect?: LocationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLocationsInput = {
    create?: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationsInput
    connect?: UserWhereUniqueInput
  }

  export type LocationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<LocationCreateWithoutUsersInput, LocationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: LocationCreateOrConnectWithoutUsersInput
    upsert?: LocationUpsertWithoutUsersInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutUsersInput, LocationUpdateWithoutUsersInput>, LocationUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationsInput
    upsert?: UserUpsertWithoutLocationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLocationsInput, UserUpdateWithoutLocationsInput>, UserUncheckedUpdateWithoutLocationsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type FileVersionCreateNestedOneWithoutJobsInput = {
    create?: XOR<FileVersionCreateWithoutJobsInput, FileVersionUncheckedCreateWithoutJobsInput>
    connectOrCreate?: FileVersionCreateOrConnectWithoutJobsInput
    connect?: FileVersionWhereUniqueInput
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type FileVersionUpdateOneWithoutJobsNestedInput = {
    create?: XOR<FileVersionCreateWithoutJobsInput, FileVersionUncheckedCreateWithoutJobsInput>
    connectOrCreate?: FileVersionCreateOrConnectWithoutJobsInput
    upsert?: FileVersionUpsertWithoutJobsInput
    disconnect?: FileVersionWhereInput | boolean
    delete?: FileVersionWhereInput | boolean
    connect?: FileVersionWhereUniqueInput
    update?: XOR<XOR<FileVersionUpdateToOneWithWhereWithoutJobsInput, FileVersionUpdateWithoutJobsInput>, FileVersionUncheckedUpdateWithoutJobsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumFileStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FileStatus | EnumFileStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFileStatusFilter<$PrismaModel> | $Enums.FileStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumFileStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileStatus | EnumFileStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFileStatusWithAggregatesFilter<$PrismaModel> | $Enums.FileStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileStatusFilter<$PrismaModel>
    _max?: NestedEnumFileStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type AuditLogCreateWithoutActorInput = {
    id?: string
    actorType?: string
    action: string
    targetType?: string | null
    targetId?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutActorInput = {
    id?: string
    actorType?: string
    action: string
    targetType?: string | null
    targetId?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogCreateManyActorInputEnvelope = {
    data: AuditLogCreateManyActorInput | AuditLogCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutOwnerInput = {
    id?: string
    displayName: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: FileTagCreateNestedManyWithoutFileInput
    versions?: FileVersionCreateNestedManyWithoutFileInput
  }

  export type FileUncheckedCreateWithoutOwnerInput = {
    id?: string
    displayName: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: FileTagUncheckedCreateNestedManyWithoutFileInput
    versions?: FileVersionUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileCreateOrConnectWithoutOwnerInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutOwnerInput, FileUncheckedCreateWithoutOwnerInput>
  }

  export type FileCreateManyOwnerInputEnvelope = {
    data: FileCreateManyOwnerInput | FileCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserDeviceCreateWithoutUserInput = {
    lastSeenAt?: Date | string | null
    device: DeviceCreateNestedOneWithoutUsersInput
  }

  export type UserDeviceUncheckedCreateWithoutUserInput = {
    deviceId: string
    lastSeenAt?: Date | string | null
  }

  export type UserDeviceCreateOrConnectWithoutUserInput = {
    where: UserDeviceWhereUniqueInput
    create: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput>
  }

  export type UserDeviceCreateManyUserInputEnvelope = {
    data: UserDeviceCreateManyUserInput | UserDeviceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserLocationCreateWithoutUserInput = {
    id?: string
    seenAt?: Date | string
    location: LocationCreateNestedOneWithoutUsersInput
  }

  export type UserLocationUncheckedCreateWithoutUserInput = {
    id?: string
    locationId: string
    seenAt?: Date | string
  }

  export type UserLocationCreateOrConnectWithoutUserInput = {
    where: UserLocationWhereUniqueInput
    create: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput>
  }

  export type UserLocationCreateManyUserInputEnvelope = {
    data: UserLocationCreateManyUserInput | UserLocationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: UuidFilter<"AuditLog"> | string
    actorUserId?: UuidNullableFilter<"AuditLog"> | string | null
    actorType?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    targetType?: StringNullableFilter<"AuditLog"> | string | null
    targetId?: UuidNullableFilter<"AuditLog"> | string | null
    details?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type FileUpsertWithWhereUniqueWithoutOwnerInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutOwnerInput, FileUncheckedUpdateWithoutOwnerInput>
    create: XOR<FileCreateWithoutOwnerInput, FileUncheckedCreateWithoutOwnerInput>
  }

  export type FileUpdateWithWhereUniqueWithoutOwnerInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutOwnerInput, FileUncheckedUpdateWithoutOwnerInput>
  }

  export type FileUpdateManyWithWhereWithoutOwnerInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutOwnerInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    id?: UuidFilter<"File"> | string
    ownerId?: UuidFilter<"File"> | string
    displayName?: StringFilter<"File"> | string
    isDeleted?: BoolFilter<"File"> | boolean
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: UuidFilter<"Notification"> | string
    userId?: UuidFilter<"Notification"> | string
    type?: StringNullableFilter<"Notification"> | string | null
    payload?: JsonNullableFilter<"Notification">
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: UuidFilter<"Session"> | string
    userId?: UuidFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    lastSeenAt?: DateTimeNullableFilter<"Session"> | Date | string | null
  }

  export type UserDeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: UserDeviceWhereUniqueInput
    update: XOR<UserDeviceUpdateWithoutUserInput, UserDeviceUncheckedUpdateWithoutUserInput>
    create: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput>
  }

  export type UserDeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: UserDeviceWhereUniqueInput
    data: XOR<UserDeviceUpdateWithoutUserInput, UserDeviceUncheckedUpdateWithoutUserInput>
  }

  export type UserDeviceUpdateManyWithWhereWithoutUserInput = {
    where: UserDeviceScalarWhereInput
    data: XOR<UserDeviceUpdateManyMutationInput, UserDeviceUncheckedUpdateManyWithoutUserInput>
  }

  export type UserDeviceScalarWhereInput = {
    AND?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
    OR?: UserDeviceScalarWhereInput[]
    NOT?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
    userId?: UuidFilter<"UserDevice"> | string
    deviceId?: UuidFilter<"UserDevice"> | string
    lastSeenAt?: DateTimeNullableFilter<"UserDevice"> | Date | string | null
  }

  export type UserLocationUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLocationWhereUniqueInput
    update: XOR<UserLocationUpdateWithoutUserInput, UserLocationUncheckedUpdateWithoutUserInput>
    create: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput>
  }

  export type UserLocationUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLocationWhereUniqueInput
    data: XOR<UserLocationUpdateWithoutUserInput, UserLocationUncheckedUpdateWithoutUserInput>
  }

  export type UserLocationUpdateManyWithWhereWithoutUserInput = {
    where: UserLocationScalarWhereInput
    data: XOR<UserLocationUpdateManyMutationInput, UserLocationUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLocationScalarWhereInput = {
    AND?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
    OR?: UserLocationScalarWhereInput[]
    NOT?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
    id?: UuidFilter<"UserLocation"> | string
    userId?: UuidFilter<"UserLocation"> | string
    locationId?: UuidFilter<"UserLocation"> | string
    seenAt?: DateTimeFilter<"UserLocation"> | Date | string
  }

  export type FileTagCreateWithoutFileInput = {
    tag: TagCreateNestedOneWithoutFilesInput
  }

  export type FileTagUncheckedCreateWithoutFileInput = {
    tagId: string
  }

  export type FileTagCreateOrConnectWithoutFileInput = {
    where: FileTagWhereUniqueInput
    create: XOR<FileTagCreateWithoutFileInput, FileTagUncheckedCreateWithoutFileInput>
  }

  export type FileTagCreateManyFileInputEnvelope = {
    data: FileTagCreateManyFileInput | FileTagCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type FileVersionCreateWithoutFileInput = {
    id?: string
    versionNumber?: number
    storagePath: string
    tmpPath?: string | null
    filename: string
    mimeType?: string | null
    sizeBytes?: number | null
    hash: string
    status?: $Enums.FileStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobCreateNestedManyWithoutFileVersionInput
  }

  export type FileVersionUncheckedCreateWithoutFileInput = {
    id?: string
    versionNumber?: number
    storagePath: string
    tmpPath?: string | null
    filename: string
    mimeType?: string | null
    sizeBytes?: number | null
    hash: string
    status?: $Enums.FileStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutFileVersionInput
  }

  export type FileVersionCreateOrConnectWithoutFileInput = {
    where: FileVersionWhereUniqueInput
    create: XOR<FileVersionCreateWithoutFileInput, FileVersionUncheckedCreateWithoutFileInput>
  }

  export type FileVersionCreateManyFileInputEnvelope = {
    data: FileVersionCreateManyFileInput | FileVersionCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutFilesInput = {
    id?: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role?: string
    isBanned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    devices?: UserDeviceCreateNestedManyWithoutUserInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFilesInput = {
    id?: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role?: string
    isBanned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    devices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type FileTagUpsertWithWhereUniqueWithoutFileInput = {
    where: FileTagWhereUniqueInput
    update: XOR<FileTagUpdateWithoutFileInput, FileTagUncheckedUpdateWithoutFileInput>
    create: XOR<FileTagCreateWithoutFileInput, FileTagUncheckedCreateWithoutFileInput>
  }

  export type FileTagUpdateWithWhereUniqueWithoutFileInput = {
    where: FileTagWhereUniqueInput
    data: XOR<FileTagUpdateWithoutFileInput, FileTagUncheckedUpdateWithoutFileInput>
  }

  export type FileTagUpdateManyWithWhereWithoutFileInput = {
    where: FileTagScalarWhereInput
    data: XOR<FileTagUpdateManyMutationInput, FileTagUncheckedUpdateManyWithoutFileInput>
  }

  export type FileTagScalarWhereInput = {
    AND?: FileTagScalarWhereInput | FileTagScalarWhereInput[]
    OR?: FileTagScalarWhereInput[]
    NOT?: FileTagScalarWhereInput | FileTagScalarWhereInput[]
    fileId?: UuidFilter<"FileTag"> | string
    tagId?: UuidFilter<"FileTag"> | string
  }

  export type FileVersionUpsertWithWhereUniqueWithoutFileInput = {
    where: FileVersionWhereUniqueInput
    update: XOR<FileVersionUpdateWithoutFileInput, FileVersionUncheckedUpdateWithoutFileInput>
    create: XOR<FileVersionCreateWithoutFileInput, FileVersionUncheckedCreateWithoutFileInput>
  }

  export type FileVersionUpdateWithWhereUniqueWithoutFileInput = {
    where: FileVersionWhereUniqueInput
    data: XOR<FileVersionUpdateWithoutFileInput, FileVersionUncheckedUpdateWithoutFileInput>
  }

  export type FileVersionUpdateManyWithWhereWithoutFileInput = {
    where: FileVersionScalarWhereInput
    data: XOR<FileVersionUpdateManyMutationInput, FileVersionUncheckedUpdateManyWithoutFileInput>
  }

  export type FileVersionScalarWhereInput = {
    AND?: FileVersionScalarWhereInput | FileVersionScalarWhereInput[]
    OR?: FileVersionScalarWhereInput[]
    NOT?: FileVersionScalarWhereInput | FileVersionScalarWhereInput[]
    id?: UuidFilter<"FileVersion"> | string
    fileId?: UuidFilter<"FileVersion"> | string
    versionNumber?: IntFilter<"FileVersion"> | number
    storagePath?: StringFilter<"FileVersion"> | string
    tmpPath?: StringNullableFilter<"FileVersion"> | string | null
    filename?: StringFilter<"FileVersion"> | string
    mimeType?: StringNullableFilter<"FileVersion"> | string | null
    sizeBytes?: IntNullableFilter<"FileVersion"> | number | null
    hash?: StringFilter<"FileVersion"> | string
    status?: EnumFileStatusFilter<"FileVersion"> | $Enums.FileStatus
    notes?: StringNullableFilter<"FileVersion"> | string | null
    createdAt?: DateTimeFilter<"FileVersion"> | Date | string
    updatedAt?: DateTimeFilter<"FileVersion"> | Date | string
  }

  export type UserUpsertWithoutFilesInput = {
    update: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
  }

  export type UserUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    devices?: UserDeviceUpdateManyWithoutUserNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    devices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FileCreateWithoutVersionsInput = {
    id?: string
    displayName: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: FileTagCreateNestedManyWithoutFileInput
    owner: UserCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateWithoutVersionsInput = {
    id?: string
    ownerId: string
    displayName: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: FileTagUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileCreateOrConnectWithoutVersionsInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutVersionsInput, FileUncheckedCreateWithoutVersionsInput>
  }

  export type JobCreateWithoutFileVersionInput = {
    id?: string
    jobUuid?: string
    jobType?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    attempts?: number
    maxAttempts?: number
    status?: $Enums.JobStatus
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUncheckedCreateWithoutFileVersionInput = {
    id?: string
    jobUuid?: string
    jobType?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    attempts?: number
    maxAttempts?: number
    status?: $Enums.JobStatus
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCreateOrConnectWithoutFileVersionInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutFileVersionInput, JobUncheckedCreateWithoutFileVersionInput>
  }

  export type JobCreateManyFileVersionInputEnvelope = {
    data: JobCreateManyFileVersionInput | JobCreateManyFileVersionInput[]
    skipDuplicates?: boolean
  }

  export type FileUpsertWithoutVersionsInput = {
    update: XOR<FileUpdateWithoutVersionsInput, FileUncheckedUpdateWithoutVersionsInput>
    create: XOR<FileCreateWithoutVersionsInput, FileUncheckedCreateWithoutVersionsInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutVersionsInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutVersionsInput, FileUncheckedUpdateWithoutVersionsInput>
  }

  export type FileUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: FileTagUpdateManyWithoutFileNestedInput
    owner?: UserUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: FileTagUncheckedUpdateManyWithoutFileNestedInput
  }

  export type JobUpsertWithWhereUniqueWithoutFileVersionInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutFileVersionInput, JobUncheckedUpdateWithoutFileVersionInput>
    create: XOR<JobCreateWithoutFileVersionInput, JobUncheckedCreateWithoutFileVersionInput>
  }

  export type JobUpdateWithWhereUniqueWithoutFileVersionInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutFileVersionInput, JobUncheckedUpdateWithoutFileVersionInput>
  }

  export type JobUpdateManyWithWhereWithoutFileVersionInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutFileVersionInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: UuidFilter<"Job"> | string
    jobUuid?: UuidFilter<"Job"> | string
    fileVersionId?: UuidNullableFilter<"Job"> | string | null
    jobType?: StringNullableFilter<"Job"> | string | null
    payload?: JsonNullableFilter<"Job">
    attempts?: IntFilter<"Job"> | number
    maxAttempts?: IntFilter<"Job"> | number
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    lastError?: StringNullableFilter<"Job"> | string | null
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
  }

  export type FileTagCreateWithoutTagInput = {
    file: FileCreateNestedOneWithoutTagsInput
  }

  export type FileTagUncheckedCreateWithoutTagInput = {
    fileId: string
  }

  export type FileTagCreateOrConnectWithoutTagInput = {
    where: FileTagWhereUniqueInput
    create: XOR<FileTagCreateWithoutTagInput, FileTagUncheckedCreateWithoutTagInput>
  }

  export type FileTagCreateManyTagInputEnvelope = {
    data: FileTagCreateManyTagInput | FileTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type FileTagUpsertWithWhereUniqueWithoutTagInput = {
    where: FileTagWhereUniqueInput
    update: XOR<FileTagUpdateWithoutTagInput, FileTagUncheckedUpdateWithoutTagInput>
    create: XOR<FileTagCreateWithoutTagInput, FileTagUncheckedCreateWithoutTagInput>
  }

  export type FileTagUpdateWithWhereUniqueWithoutTagInput = {
    where: FileTagWhereUniqueInput
    data: XOR<FileTagUpdateWithoutTagInput, FileTagUncheckedUpdateWithoutTagInput>
  }

  export type FileTagUpdateManyWithWhereWithoutTagInput = {
    where: FileTagScalarWhereInput
    data: XOR<FileTagUpdateManyMutationInput, FileTagUncheckedUpdateManyWithoutTagInput>
  }

  export type FileCreateWithoutTagsInput = {
    id?: string
    displayName: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: FileVersionCreateNestedManyWithoutFileInput
    owner: UserCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateWithoutTagsInput = {
    id?: string
    ownerId: string
    displayName: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: FileVersionUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileCreateOrConnectWithoutTagsInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutTagsInput, FileUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutFilesInput = {
    id?: string
    name: string
  }

  export type TagUncheckedCreateWithoutFilesInput = {
    id?: string
    name: string
  }

  export type TagCreateOrConnectWithoutFilesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutFilesInput, TagUncheckedCreateWithoutFilesInput>
  }

  export type FileUpsertWithoutTagsInput = {
    update: XOR<FileUpdateWithoutTagsInput, FileUncheckedUpdateWithoutTagsInput>
    create: XOR<FileCreateWithoutTagsInput, FileUncheckedCreateWithoutTagsInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutTagsInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutTagsInput, FileUncheckedUpdateWithoutTagsInput>
  }

  export type FileUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: FileVersionUpdateManyWithoutFileNestedInput
    owner?: UserUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: FileVersionUncheckedUpdateManyWithoutFileNestedInput
  }

  export type TagUpsertWithoutFilesInput = {
    update: XOR<TagUpdateWithoutFilesInput, TagUncheckedUpdateWithoutFilesInput>
    create: XOR<TagCreateWithoutFilesInput, TagUncheckedCreateWithoutFilesInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutFilesInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutFilesInput, TagUncheckedUpdateWithoutFilesInput>
  }

  export type TagUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserDeviceCreateWithoutDeviceInput = {
    lastSeenAt?: Date | string | null
    user: UserCreateNestedOneWithoutDevicesInput
  }

  export type UserDeviceUncheckedCreateWithoutDeviceInput = {
    userId: string
    lastSeenAt?: Date | string | null
  }

  export type UserDeviceCreateOrConnectWithoutDeviceInput = {
    where: UserDeviceWhereUniqueInput
    create: XOR<UserDeviceCreateWithoutDeviceInput, UserDeviceUncheckedCreateWithoutDeviceInput>
  }

  export type UserDeviceCreateManyDeviceInputEnvelope = {
    data: UserDeviceCreateManyDeviceInput | UserDeviceCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type UserDeviceUpsertWithWhereUniqueWithoutDeviceInput = {
    where: UserDeviceWhereUniqueInput
    update: XOR<UserDeviceUpdateWithoutDeviceInput, UserDeviceUncheckedUpdateWithoutDeviceInput>
    create: XOR<UserDeviceCreateWithoutDeviceInput, UserDeviceUncheckedCreateWithoutDeviceInput>
  }

  export type UserDeviceUpdateWithWhereUniqueWithoutDeviceInput = {
    where: UserDeviceWhereUniqueInput
    data: XOR<UserDeviceUpdateWithoutDeviceInput, UserDeviceUncheckedUpdateWithoutDeviceInput>
  }

  export type UserDeviceUpdateManyWithWhereWithoutDeviceInput = {
    where: UserDeviceScalarWhereInput
    data: XOR<UserDeviceUpdateManyMutationInput, UserDeviceUncheckedUpdateManyWithoutDeviceInput>
  }

  export type DeviceCreateWithoutUsersInput = {
    id?: string
    name?: string | null
    os?: string | null
    createdAt?: Date | string
  }

  export type DeviceUncheckedCreateWithoutUsersInput = {
    id?: string
    name?: string | null
    os?: string | null
    createdAt?: Date | string
  }

  export type DeviceCreateOrConnectWithoutUsersInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutUsersInput, DeviceUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutDevicesInput = {
    id?: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role?: string
    isBanned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
    files?: FileCreateNestedManyWithoutOwnerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDevicesInput = {
    id?: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role?: string
    isBanned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
    files?: FileUncheckedCreateNestedManyWithoutOwnerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
  }

  export type DeviceUpsertWithoutUsersInput = {
    update: XOR<DeviceUpdateWithoutUsersInput, DeviceUncheckedUpdateWithoutUsersInput>
    create: XOR<DeviceCreateWithoutUsersInput, DeviceUncheckedCreateWithoutUsersInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutUsersInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutUsersInput, DeviceUncheckedUpdateWithoutUsersInput>
  }

  export type DeviceUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutDevicesInput = {
    update: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
    files?: FileUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
    files?: FileUncheckedUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserLocationCreateWithoutLocationInput = {
    id?: string
    seenAt?: Date | string
    user: UserCreateNestedOneWithoutLocationsInput
  }

  export type UserLocationUncheckedCreateWithoutLocationInput = {
    id?: string
    userId: string
    seenAt?: Date | string
  }

  export type UserLocationCreateOrConnectWithoutLocationInput = {
    where: UserLocationWhereUniqueInput
    create: XOR<UserLocationCreateWithoutLocationInput, UserLocationUncheckedCreateWithoutLocationInput>
  }

  export type UserLocationCreateManyLocationInputEnvelope = {
    data: UserLocationCreateManyLocationInput | UserLocationCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type UserLocationUpsertWithWhereUniqueWithoutLocationInput = {
    where: UserLocationWhereUniqueInput
    update: XOR<UserLocationUpdateWithoutLocationInput, UserLocationUncheckedUpdateWithoutLocationInput>
    create: XOR<UserLocationCreateWithoutLocationInput, UserLocationUncheckedCreateWithoutLocationInput>
  }

  export type UserLocationUpdateWithWhereUniqueWithoutLocationInput = {
    where: UserLocationWhereUniqueInput
    data: XOR<UserLocationUpdateWithoutLocationInput, UserLocationUncheckedUpdateWithoutLocationInput>
  }

  export type UserLocationUpdateManyWithWhereWithoutLocationInput = {
    where: UserLocationScalarWhereInput
    data: XOR<UserLocationUpdateManyMutationInput, UserLocationUncheckedUpdateManyWithoutLocationInput>
  }

  export type LocationCreateWithoutUsersInput = {
    id?: string
    ipAddress?: string | null
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LocationUncheckedCreateWithoutUsersInput = {
    id?: string
    ipAddress?: string | null
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LocationCreateOrConnectWithoutUsersInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutUsersInput, LocationUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutLocationsInput = {
    id?: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role?: string
    isBanned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
    files?: FileCreateNestedManyWithoutOwnerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    devices?: UserDeviceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLocationsInput = {
    id?: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role?: string
    isBanned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
    files?: FileUncheckedCreateNestedManyWithoutOwnerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    devices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLocationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
  }

  export type LocationUpsertWithoutUsersInput = {
    update: XOR<LocationUpdateWithoutUsersInput, LocationUncheckedUpdateWithoutUsersInput>
    create: XOR<LocationCreateWithoutUsersInput, LocationUncheckedCreateWithoutUsersInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutUsersInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutUsersInput, LocationUncheckedUpdateWithoutUsersInput>
  }

  export type LocationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    geoJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutLocationsInput = {
    update: XOR<UserUpdateWithoutLocationsInput, UserUncheckedUpdateWithoutLocationsInput>
    create: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLocationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLocationsInput, UserUncheckedUpdateWithoutLocationsInput>
  }

  export type UserUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
    files?: FileUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    devices?: UserDeviceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
    files?: FileUncheckedUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    devices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role?: string
    isBanned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileCreateNestedManyWithoutOwnerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    devices?: UserDeviceCreateNestedManyWithoutUserInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role?: string
    isBanned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUncheckedCreateNestedManyWithoutOwnerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    devices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    devices?: UserDeviceUpdateManyWithoutUserNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUncheckedUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    devices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FileVersionCreateWithoutJobsInput = {
    id?: string
    versionNumber?: number
    storagePath: string
    tmpPath?: string | null
    filename: string
    mimeType?: string | null
    sizeBytes?: number | null
    hash: string
    status?: $Enums.FileStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    file: FileCreateNestedOneWithoutVersionsInput
  }

  export type FileVersionUncheckedCreateWithoutJobsInput = {
    id?: string
    fileId: string
    versionNumber?: number
    storagePath: string
    tmpPath?: string | null
    filename: string
    mimeType?: string | null
    sizeBytes?: number | null
    hash: string
    status?: $Enums.FileStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileVersionCreateOrConnectWithoutJobsInput = {
    where: FileVersionWhereUniqueInput
    create: XOR<FileVersionCreateWithoutJobsInput, FileVersionUncheckedCreateWithoutJobsInput>
  }

  export type FileVersionUpsertWithoutJobsInput = {
    update: XOR<FileVersionUpdateWithoutJobsInput, FileVersionUncheckedUpdateWithoutJobsInput>
    create: XOR<FileVersionCreateWithoutJobsInput, FileVersionUncheckedCreateWithoutJobsInput>
    where?: FileVersionWhereInput
  }

  export type FileVersionUpdateToOneWithWhereWithoutJobsInput = {
    where?: FileVersionWhereInput
    data: XOR<FileVersionUpdateWithoutJobsInput, FileVersionUncheckedUpdateWithoutJobsInput>
  }

  export type FileVersionUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    tmpPath?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hash?: StringFieldUpdateOperationsInput | string
    status?: EnumFileStatusFieldUpdateOperationsInput | $Enums.FileStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: FileUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type FileVersionUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    tmpPath?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hash?: StringFieldUpdateOperationsInput | string
    status?: EnumFileStatusFieldUpdateOperationsInput | $Enums.FileStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role?: string
    isBanned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
    files?: FileCreateNestedManyWithoutOwnerInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    devices?: UserDeviceCreateNestedManyWithoutUserInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role?: string
    isBanned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
    files?: FileUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    devices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
    files?: FileUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    devices?: UserDeviceUpdateManyWithoutUserNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
    files?: FileUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    devices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role?: string
    isBanned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
    files?: FileCreateNestedManyWithoutOwnerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    devices?: UserDeviceCreateNestedManyWithoutUserInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    handle: string
    name: string
    email: string
    passwordHash: string
    role?: string
    isBanned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
    files?: FileUncheckedCreateNestedManyWithoutOwnerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    devices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
    files?: FileUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    devices?: UserDeviceUpdateManyWithoutUserNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
    files?: FileUncheckedUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    devices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuditLogCreateManyActorInput = {
    id?: string
    actorType?: string
    action: string
    targetType?: string | null
    targetId?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FileCreateManyOwnerInput = {
    id?: string
    displayName: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string | null
  }

  export type UserDeviceCreateManyUserInput = {
    deviceId: string
    lastSeenAt?: Date | string | null
  }

  export type UserLocationCreateManyUserInput = {
    id?: string
    locationId: string
    seenAt?: Date | string
  }

  export type AuditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: FileTagUpdateManyWithoutFileNestedInput
    versions?: FileVersionUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: FileTagUncheckedUpdateManyWithoutFileNestedInput
    versions?: FileVersionUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserDeviceUpdateWithoutUserInput = {
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: DeviceUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserDeviceUncheckedUpdateWithoutUserInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserDeviceUncheckedUpdateManyWithoutUserInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserLocationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserLocationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileTagCreateManyFileInput = {
    tagId: string
  }

  export type FileVersionCreateManyFileInput = {
    id?: string
    versionNumber?: number
    storagePath: string
    tmpPath?: string | null
    filename: string
    mimeType?: string | null
    sizeBytes?: number | null
    hash: string
    status?: $Enums.FileStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileTagUpdateWithoutFileInput = {
    tag?: TagUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileTagUncheckedUpdateWithoutFileInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type FileTagUncheckedUpdateManyWithoutFileInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type FileVersionUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    tmpPath?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hash?: StringFieldUpdateOperationsInput | string
    status?: EnumFileStatusFieldUpdateOperationsInput | $Enums.FileStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUpdateManyWithoutFileVersionNestedInput
  }

  export type FileVersionUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    tmpPath?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hash?: StringFieldUpdateOperationsInput | string
    status?: EnumFileStatusFieldUpdateOperationsInput | $Enums.FileStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutFileVersionNestedInput
  }

  export type FileVersionUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    tmpPath?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hash?: StringFieldUpdateOperationsInput | string
    status?: EnumFileStatusFieldUpdateOperationsInput | $Enums.FileStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateManyFileVersionInput = {
    id?: string
    jobUuid?: string
    jobType?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    attempts?: number
    maxAttempts?: number
    status?: $Enums.JobStatus
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateWithoutFileVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobUuid?: StringFieldUpdateOperationsInput | string
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateWithoutFileVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobUuid?: StringFieldUpdateOperationsInput | string
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyWithoutFileVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobUuid?: StringFieldUpdateOperationsInput | string
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileTagCreateManyTagInput = {
    fileId: string
  }

  export type FileTagUpdateWithoutTagInput = {
    file?: FileUpdateOneRequiredWithoutTagsNestedInput
  }

  export type FileTagUncheckedUpdateWithoutTagInput = {
    fileId?: StringFieldUpdateOperationsInput | string
  }

  export type FileTagUncheckedUpdateManyWithoutTagInput = {
    fileId?: StringFieldUpdateOperationsInput | string
  }

  export type UserDeviceCreateManyDeviceInput = {
    userId: string
    lastSeenAt?: Date | string | null
  }

  export type UserDeviceUpdateWithoutDeviceInput = {
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type UserDeviceUncheckedUpdateWithoutDeviceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserDeviceUncheckedUpdateManyWithoutDeviceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserLocationCreateManyLocationInput = {
    id?: string
    userId: string
    seenAt?: Date | string
  }

  export type UserLocationUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type UserLocationUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileCountOutputTypeDefaultArgs instead
     */
    export type FileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileVersionCountOutputTypeDefaultArgs instead
     */
    export type FileVersionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileVersionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagCountOutputTypeDefaultArgs instead
     */
    export type TagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceCountOutputTypeDefaultArgs instead
     */
    export type DeviceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocationCountOutputTypeDefaultArgs instead
     */
    export type LocationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileDefaultArgs instead
     */
    export type FileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileVersionDefaultArgs instead
     */
    export type FileVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileVersionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagDefaultArgs instead
     */
    export type TagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileTagDefaultArgs instead
     */
    export type FileTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileTagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceDefaultArgs instead
     */
    export type DeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDeviceDefaultArgs instead
     */
    export type UserDeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDeviceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocationDefaultArgs instead
     */
    export type LocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserLocationDefaultArgs instead
     */
    export type UserLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserLocationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobDefaultArgs instead
     */
    export type JobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}