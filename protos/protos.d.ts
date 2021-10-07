// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import {protobuf as $protobuf} from "google-gax";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace datastream. */
        namespace datastream {

            /** Namespace v1alpha1. */
            namespace v1alpha1 {

                /** Represents a Datastream */
                class Datastream extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Datastream service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Datastream service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Datastream;

                    /**
                     * Calls ListConnectionProfiles.
                     * @param request ListConnectionProfilesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConnectionProfilesResponse
                     */
                    public listConnectionProfiles(request: google.cloud.datastream.v1alpha1.IListConnectionProfilesRequest, callback: google.cloud.datastream.v1alpha1.Datastream.ListConnectionProfilesCallback): void;

                    /**
                     * Calls ListConnectionProfiles.
                     * @param request ListConnectionProfilesRequest message or plain object
                     * @returns Promise
                     */
                    public listConnectionProfiles(request: google.cloud.datastream.v1alpha1.IListConnectionProfilesRequest): Promise<google.cloud.datastream.v1alpha1.ListConnectionProfilesResponse>;

                    /**
                     * Calls GetConnectionProfile.
                     * @param request GetConnectionProfileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ConnectionProfile
                     */
                    public getConnectionProfile(request: google.cloud.datastream.v1alpha1.IGetConnectionProfileRequest, callback: google.cloud.datastream.v1alpha1.Datastream.GetConnectionProfileCallback): void;

                    /**
                     * Calls GetConnectionProfile.
                     * @param request GetConnectionProfileRequest message or plain object
                     * @returns Promise
                     */
                    public getConnectionProfile(request: google.cloud.datastream.v1alpha1.IGetConnectionProfileRequest): Promise<google.cloud.datastream.v1alpha1.ConnectionProfile>;

                    /**
                     * Calls CreateConnectionProfile.
                     * @param request CreateConnectionProfileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createConnectionProfile(request: google.cloud.datastream.v1alpha1.ICreateConnectionProfileRequest, callback: google.cloud.datastream.v1alpha1.Datastream.CreateConnectionProfileCallback): void;

                    /**
                     * Calls CreateConnectionProfile.
                     * @param request CreateConnectionProfileRequest message or plain object
                     * @returns Promise
                     */
                    public createConnectionProfile(request: google.cloud.datastream.v1alpha1.ICreateConnectionProfileRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateConnectionProfile.
                     * @param request UpdateConnectionProfileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateConnectionProfile(request: google.cloud.datastream.v1alpha1.IUpdateConnectionProfileRequest, callback: google.cloud.datastream.v1alpha1.Datastream.UpdateConnectionProfileCallback): void;

                    /**
                     * Calls UpdateConnectionProfile.
                     * @param request UpdateConnectionProfileRequest message or plain object
                     * @returns Promise
                     */
                    public updateConnectionProfile(request: google.cloud.datastream.v1alpha1.IUpdateConnectionProfileRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteConnectionProfile.
                     * @param request DeleteConnectionProfileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteConnectionProfile(request: google.cloud.datastream.v1alpha1.IDeleteConnectionProfileRequest, callback: google.cloud.datastream.v1alpha1.Datastream.DeleteConnectionProfileCallback): void;

                    /**
                     * Calls DeleteConnectionProfile.
                     * @param request DeleteConnectionProfileRequest message or plain object
                     * @returns Promise
                     */
                    public deleteConnectionProfile(request: google.cloud.datastream.v1alpha1.IDeleteConnectionProfileRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DiscoverConnectionProfile.
                     * @param request DiscoverConnectionProfileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DiscoverConnectionProfileResponse
                     */
                    public discoverConnectionProfile(request: google.cloud.datastream.v1alpha1.IDiscoverConnectionProfileRequest, callback: google.cloud.datastream.v1alpha1.Datastream.DiscoverConnectionProfileCallback): void;

                    /**
                     * Calls DiscoverConnectionProfile.
                     * @param request DiscoverConnectionProfileRequest message or plain object
                     * @returns Promise
                     */
                    public discoverConnectionProfile(request: google.cloud.datastream.v1alpha1.IDiscoverConnectionProfileRequest): Promise<google.cloud.datastream.v1alpha1.DiscoverConnectionProfileResponse>;

                    /**
                     * Calls ListStreams.
                     * @param request ListStreamsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListStreamsResponse
                     */
                    public listStreams(request: google.cloud.datastream.v1alpha1.IListStreamsRequest, callback: google.cloud.datastream.v1alpha1.Datastream.ListStreamsCallback): void;

                    /**
                     * Calls ListStreams.
                     * @param request ListStreamsRequest message or plain object
                     * @returns Promise
                     */
                    public listStreams(request: google.cloud.datastream.v1alpha1.IListStreamsRequest): Promise<google.cloud.datastream.v1alpha1.ListStreamsResponse>;

                    /**
                     * Calls GetStream.
                     * @param request GetStreamRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Stream
                     */
                    public getStream(request: google.cloud.datastream.v1alpha1.IGetStreamRequest, callback: google.cloud.datastream.v1alpha1.Datastream.GetStreamCallback): void;

                    /**
                     * Calls GetStream.
                     * @param request GetStreamRequest message or plain object
                     * @returns Promise
                     */
                    public getStream(request: google.cloud.datastream.v1alpha1.IGetStreamRequest): Promise<google.cloud.datastream.v1alpha1.Stream>;

                    /**
                     * Calls CreateStream.
                     * @param request CreateStreamRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createStream(request: google.cloud.datastream.v1alpha1.ICreateStreamRequest, callback: google.cloud.datastream.v1alpha1.Datastream.CreateStreamCallback): void;

                    /**
                     * Calls CreateStream.
                     * @param request CreateStreamRequest message or plain object
                     * @returns Promise
                     */
                    public createStream(request: google.cloud.datastream.v1alpha1.ICreateStreamRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateStream.
                     * @param request UpdateStreamRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateStream(request: google.cloud.datastream.v1alpha1.IUpdateStreamRequest, callback: google.cloud.datastream.v1alpha1.Datastream.UpdateStreamCallback): void;

                    /**
                     * Calls UpdateStream.
                     * @param request UpdateStreamRequest message or plain object
                     * @returns Promise
                     */
                    public updateStream(request: google.cloud.datastream.v1alpha1.IUpdateStreamRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteStream.
                     * @param request DeleteStreamRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteStream(request: google.cloud.datastream.v1alpha1.IDeleteStreamRequest, callback: google.cloud.datastream.v1alpha1.Datastream.DeleteStreamCallback): void;

                    /**
                     * Calls DeleteStream.
                     * @param request DeleteStreamRequest message or plain object
                     * @returns Promise
                     */
                    public deleteStream(request: google.cloud.datastream.v1alpha1.IDeleteStreamRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls FetchErrors.
                     * @param request FetchErrorsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public fetchErrors(request: google.cloud.datastream.v1alpha1.IFetchErrorsRequest, callback: google.cloud.datastream.v1alpha1.Datastream.FetchErrorsCallback): void;

                    /**
                     * Calls FetchErrors.
                     * @param request FetchErrorsRequest message or plain object
                     * @returns Promise
                     */
                    public fetchErrors(request: google.cloud.datastream.v1alpha1.IFetchErrorsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls FetchStaticIps.
                     * @param request FetchStaticIpsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FetchStaticIpsResponse
                     */
                    public fetchStaticIps(request: google.cloud.datastream.v1alpha1.IFetchStaticIpsRequest, callback: google.cloud.datastream.v1alpha1.Datastream.FetchStaticIpsCallback): void;

                    /**
                     * Calls FetchStaticIps.
                     * @param request FetchStaticIpsRequest message or plain object
                     * @returns Promise
                     */
                    public fetchStaticIps(request: google.cloud.datastream.v1alpha1.IFetchStaticIpsRequest): Promise<google.cloud.datastream.v1alpha1.FetchStaticIpsResponse>;

                    /**
                     * Calls CreatePrivateConnection.
                     * @param request CreatePrivateConnectionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createPrivateConnection(request: google.cloud.datastream.v1alpha1.ICreatePrivateConnectionRequest, callback: google.cloud.datastream.v1alpha1.Datastream.CreatePrivateConnectionCallback): void;

                    /**
                     * Calls CreatePrivateConnection.
                     * @param request CreatePrivateConnectionRequest message or plain object
                     * @returns Promise
                     */
                    public createPrivateConnection(request: google.cloud.datastream.v1alpha1.ICreatePrivateConnectionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetPrivateConnection.
                     * @param request GetPrivateConnectionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PrivateConnection
                     */
                    public getPrivateConnection(request: google.cloud.datastream.v1alpha1.IGetPrivateConnectionRequest, callback: google.cloud.datastream.v1alpha1.Datastream.GetPrivateConnectionCallback): void;

                    /**
                     * Calls GetPrivateConnection.
                     * @param request GetPrivateConnectionRequest message or plain object
                     * @returns Promise
                     */
                    public getPrivateConnection(request: google.cloud.datastream.v1alpha1.IGetPrivateConnectionRequest): Promise<google.cloud.datastream.v1alpha1.PrivateConnection>;

                    /**
                     * Calls ListPrivateConnections.
                     * @param request ListPrivateConnectionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPrivateConnectionsResponse
                     */
                    public listPrivateConnections(request: google.cloud.datastream.v1alpha1.IListPrivateConnectionsRequest, callback: google.cloud.datastream.v1alpha1.Datastream.ListPrivateConnectionsCallback): void;

                    /**
                     * Calls ListPrivateConnections.
                     * @param request ListPrivateConnectionsRequest message or plain object
                     * @returns Promise
                     */
                    public listPrivateConnections(request: google.cloud.datastream.v1alpha1.IListPrivateConnectionsRequest): Promise<google.cloud.datastream.v1alpha1.ListPrivateConnectionsResponse>;

                    /**
                     * Calls DeletePrivateConnection.
                     * @param request DeletePrivateConnectionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deletePrivateConnection(request: google.cloud.datastream.v1alpha1.IDeletePrivateConnectionRequest, callback: google.cloud.datastream.v1alpha1.Datastream.DeletePrivateConnectionCallback): void;

                    /**
                     * Calls DeletePrivateConnection.
                     * @param request DeletePrivateConnectionRequest message or plain object
                     * @returns Promise
                     */
                    public deletePrivateConnection(request: google.cloud.datastream.v1alpha1.IDeletePrivateConnectionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateRoute.
                     * @param request CreateRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createRoute(request: google.cloud.datastream.v1alpha1.ICreateRouteRequest, callback: google.cloud.datastream.v1alpha1.Datastream.CreateRouteCallback): void;

                    /**
                     * Calls CreateRoute.
                     * @param request CreateRouteRequest message or plain object
                     * @returns Promise
                     */
                    public createRoute(request: google.cloud.datastream.v1alpha1.ICreateRouteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetRoute.
                     * @param request GetRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Route
                     */
                    public getRoute(request: google.cloud.datastream.v1alpha1.IGetRouteRequest, callback: google.cloud.datastream.v1alpha1.Datastream.GetRouteCallback): void;

                    /**
                     * Calls GetRoute.
                     * @param request GetRouteRequest message or plain object
                     * @returns Promise
                     */
                    public getRoute(request: google.cloud.datastream.v1alpha1.IGetRouteRequest): Promise<google.cloud.datastream.v1alpha1.Route>;

                    /**
                     * Calls ListRoutes.
                     * @param request ListRoutesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRoutesResponse
                     */
                    public listRoutes(request: google.cloud.datastream.v1alpha1.IListRoutesRequest, callback: google.cloud.datastream.v1alpha1.Datastream.ListRoutesCallback): void;

                    /**
                     * Calls ListRoutes.
                     * @param request ListRoutesRequest message or plain object
                     * @returns Promise
                     */
                    public listRoutes(request: google.cloud.datastream.v1alpha1.IListRoutesRequest): Promise<google.cloud.datastream.v1alpha1.ListRoutesResponse>;

                    /**
                     * Calls DeleteRoute.
                     * @param request DeleteRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteRoute(request: google.cloud.datastream.v1alpha1.IDeleteRouteRequest, callback: google.cloud.datastream.v1alpha1.Datastream.DeleteRouteCallback): void;

                    /**
                     * Calls DeleteRoute.
                     * @param request DeleteRouteRequest message or plain object
                     * @returns Promise
                     */
                    public deleteRoute(request: google.cloud.datastream.v1alpha1.IDeleteRouteRequest): Promise<google.longrunning.Operation>;
                }

                namespace Datastream {

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#listConnectionProfiles}.
                     * @param error Error, if any
                     * @param [response] ListConnectionProfilesResponse
                     */
                    type ListConnectionProfilesCallback = (error: (Error|null), response?: google.cloud.datastream.v1alpha1.ListConnectionProfilesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#getConnectionProfile}.
                     * @param error Error, if any
                     * @param [response] ConnectionProfile
                     */
                    type GetConnectionProfileCallback = (error: (Error|null), response?: google.cloud.datastream.v1alpha1.ConnectionProfile) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#createConnectionProfile}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateConnectionProfileCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#updateConnectionProfile}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateConnectionProfileCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#deleteConnectionProfile}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteConnectionProfileCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#discoverConnectionProfile}.
                     * @param error Error, if any
                     * @param [response] DiscoverConnectionProfileResponse
                     */
                    type DiscoverConnectionProfileCallback = (error: (Error|null), response?: google.cloud.datastream.v1alpha1.DiscoverConnectionProfileResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#listStreams}.
                     * @param error Error, if any
                     * @param [response] ListStreamsResponse
                     */
                    type ListStreamsCallback = (error: (Error|null), response?: google.cloud.datastream.v1alpha1.ListStreamsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#getStream}.
                     * @param error Error, if any
                     * @param [response] Stream
                     */
                    type GetStreamCallback = (error: (Error|null), response?: google.cloud.datastream.v1alpha1.Stream) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#createStream}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateStreamCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#updateStream}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateStreamCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#deleteStream}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteStreamCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#fetchErrors}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type FetchErrorsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#fetchStaticIps}.
                     * @param error Error, if any
                     * @param [response] FetchStaticIpsResponse
                     */
                    type FetchStaticIpsCallback = (error: (Error|null), response?: google.cloud.datastream.v1alpha1.FetchStaticIpsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#createPrivateConnection}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreatePrivateConnectionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#getPrivateConnection}.
                     * @param error Error, if any
                     * @param [response] PrivateConnection
                     */
                    type GetPrivateConnectionCallback = (error: (Error|null), response?: google.cloud.datastream.v1alpha1.PrivateConnection) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#listPrivateConnections}.
                     * @param error Error, if any
                     * @param [response] ListPrivateConnectionsResponse
                     */
                    type ListPrivateConnectionsCallback = (error: (Error|null), response?: google.cloud.datastream.v1alpha1.ListPrivateConnectionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#deletePrivateConnection}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeletePrivateConnectionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#createRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#getRoute}.
                     * @param error Error, if any
                     * @param [response] Route
                     */
                    type GetRouteCallback = (error: (Error|null), response?: google.cloud.datastream.v1alpha1.Route) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#listRoutes}.
                     * @param error Error, if any
                     * @param [response] ListRoutesResponse
                     */
                    type ListRoutesCallback = (error: (Error|null), response?: google.cloud.datastream.v1alpha1.ListRoutesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datastream.v1alpha1.Datastream#deleteRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a DiscoverConnectionProfileRequest. */
                interface IDiscoverConnectionProfileRequest {

                    /** DiscoverConnectionProfileRequest parent */
                    parent?: (string|null);

                    /** DiscoverConnectionProfileRequest connectionProfile */
                    connectionProfile?: (google.cloud.datastream.v1alpha1.IConnectionProfile|null);

                    /** DiscoverConnectionProfileRequest connectionProfileName */
                    connectionProfileName?: (string|null);

                    /** DiscoverConnectionProfileRequest recursive */
                    recursive?: (boolean|null);

                    /** DiscoverConnectionProfileRequest recursionDepth */
                    recursionDepth?: (number|null);

                    /** DiscoverConnectionProfileRequest oracleRdbms */
                    oracleRdbms?: (google.cloud.datastream.v1alpha1.IOracleRdbms|null);

                    /** DiscoverConnectionProfileRequest mysqlRdbms */
                    mysqlRdbms?: (google.cloud.datastream.v1alpha1.IMysqlRdbms|null);
                }

                /** Represents a DiscoverConnectionProfileRequest. */
                class DiscoverConnectionProfileRequest implements IDiscoverConnectionProfileRequest {

                    /**
                     * Constructs a new DiscoverConnectionProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IDiscoverConnectionProfileRequest);

                    /** DiscoverConnectionProfileRequest parent. */
                    public parent: string;

                    /** DiscoverConnectionProfileRequest connectionProfile. */
                    public connectionProfile?: (google.cloud.datastream.v1alpha1.IConnectionProfile|null);

                    /** DiscoverConnectionProfileRequest connectionProfileName. */
                    public connectionProfileName?: (string|null);

                    /** DiscoverConnectionProfileRequest recursive. */
                    public recursive?: (boolean|null);

                    /** DiscoverConnectionProfileRequest recursionDepth. */
                    public recursionDepth?: (number|null);

                    /** DiscoverConnectionProfileRequest oracleRdbms. */
                    public oracleRdbms?: (google.cloud.datastream.v1alpha1.IOracleRdbms|null);

                    /** DiscoverConnectionProfileRequest mysqlRdbms. */
                    public mysqlRdbms?: (google.cloud.datastream.v1alpha1.IMysqlRdbms|null);

                    /** DiscoverConnectionProfileRequest target. */
                    public target?: ("connectionProfile"|"connectionProfileName");

                    /** DiscoverConnectionProfileRequest depth. */
                    public depth?: ("recursive"|"recursionDepth");

                    /** DiscoverConnectionProfileRequest dataObject. */
                    public dataObject?: ("oracleRdbms"|"mysqlRdbms");

                    /**
                     * Creates a new DiscoverConnectionProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiscoverConnectionProfileRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IDiscoverConnectionProfileRequest): google.cloud.datastream.v1alpha1.DiscoverConnectionProfileRequest;

                    /**
                     * Encodes the specified DiscoverConnectionProfileRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.DiscoverConnectionProfileRequest.verify|verify} messages.
                     * @param message DiscoverConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IDiscoverConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiscoverConnectionProfileRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.DiscoverConnectionProfileRequest.verify|verify} messages.
                     * @param message DiscoverConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IDiscoverConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiscoverConnectionProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiscoverConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.DiscoverConnectionProfileRequest;

                    /**
                     * Decodes a DiscoverConnectionProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiscoverConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.DiscoverConnectionProfileRequest;

                    /**
                     * Verifies a DiscoverConnectionProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiscoverConnectionProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiscoverConnectionProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.DiscoverConnectionProfileRequest;

                    /**
                     * Creates a plain object from a DiscoverConnectionProfileRequest message. Also converts values to other types if specified.
                     * @param message DiscoverConnectionProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.DiscoverConnectionProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiscoverConnectionProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DiscoverConnectionProfileResponse. */
                interface IDiscoverConnectionProfileResponse {

                    /** DiscoverConnectionProfileResponse oracleRdbms */
                    oracleRdbms?: (google.cloud.datastream.v1alpha1.IOracleRdbms|null);

                    /** DiscoverConnectionProfileResponse mysqlRdbms */
                    mysqlRdbms?: (google.cloud.datastream.v1alpha1.IMysqlRdbms|null);
                }

                /** Represents a DiscoverConnectionProfileResponse. */
                class DiscoverConnectionProfileResponse implements IDiscoverConnectionProfileResponse {

                    /**
                     * Constructs a new DiscoverConnectionProfileResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IDiscoverConnectionProfileResponse);

                    /** DiscoverConnectionProfileResponse oracleRdbms. */
                    public oracleRdbms?: (google.cloud.datastream.v1alpha1.IOracleRdbms|null);

                    /** DiscoverConnectionProfileResponse mysqlRdbms. */
                    public mysqlRdbms?: (google.cloud.datastream.v1alpha1.IMysqlRdbms|null);

                    /** DiscoverConnectionProfileResponse dataObject. */
                    public dataObject?: ("oracleRdbms"|"mysqlRdbms");

                    /**
                     * Creates a new DiscoverConnectionProfileResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiscoverConnectionProfileResponse instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IDiscoverConnectionProfileResponse): google.cloud.datastream.v1alpha1.DiscoverConnectionProfileResponse;

                    /**
                     * Encodes the specified DiscoverConnectionProfileResponse message. Does not implicitly {@link google.cloud.datastream.v1alpha1.DiscoverConnectionProfileResponse.verify|verify} messages.
                     * @param message DiscoverConnectionProfileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IDiscoverConnectionProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiscoverConnectionProfileResponse message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.DiscoverConnectionProfileResponse.verify|verify} messages.
                     * @param message DiscoverConnectionProfileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IDiscoverConnectionProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiscoverConnectionProfileResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiscoverConnectionProfileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.DiscoverConnectionProfileResponse;

                    /**
                     * Decodes a DiscoverConnectionProfileResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiscoverConnectionProfileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.DiscoverConnectionProfileResponse;

                    /**
                     * Verifies a DiscoverConnectionProfileResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiscoverConnectionProfileResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiscoverConnectionProfileResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.DiscoverConnectionProfileResponse;

                    /**
                     * Creates a plain object from a DiscoverConnectionProfileResponse message. Also converts values to other types if specified.
                     * @param message DiscoverConnectionProfileResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.DiscoverConnectionProfileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiscoverConnectionProfileResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchStaticIpsRequest. */
                interface IFetchStaticIpsRequest {

                    /** FetchStaticIpsRequest name */
                    name?: (string|null);

                    /** FetchStaticIpsRequest pageSize */
                    pageSize?: (number|null);

                    /** FetchStaticIpsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a FetchStaticIpsRequest. */
                class FetchStaticIpsRequest implements IFetchStaticIpsRequest {

                    /**
                     * Constructs a new FetchStaticIpsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IFetchStaticIpsRequest);

                    /** FetchStaticIpsRequest name. */
                    public name: string;

                    /** FetchStaticIpsRequest pageSize. */
                    public pageSize: number;

                    /** FetchStaticIpsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new FetchStaticIpsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchStaticIpsRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IFetchStaticIpsRequest): google.cloud.datastream.v1alpha1.FetchStaticIpsRequest;

                    /**
                     * Encodes the specified FetchStaticIpsRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.FetchStaticIpsRequest.verify|verify} messages.
                     * @param message FetchStaticIpsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IFetchStaticIpsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchStaticIpsRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.FetchStaticIpsRequest.verify|verify} messages.
                     * @param message FetchStaticIpsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IFetchStaticIpsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchStaticIpsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchStaticIpsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.FetchStaticIpsRequest;

                    /**
                     * Decodes a FetchStaticIpsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchStaticIpsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.FetchStaticIpsRequest;

                    /**
                     * Verifies a FetchStaticIpsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchStaticIpsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchStaticIpsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.FetchStaticIpsRequest;

                    /**
                     * Creates a plain object from a FetchStaticIpsRequest message. Also converts values to other types if specified.
                     * @param message FetchStaticIpsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.FetchStaticIpsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchStaticIpsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchStaticIpsResponse. */
                interface IFetchStaticIpsResponse {

                    /** FetchStaticIpsResponse staticIps */
                    staticIps?: (string[]|null);

                    /** FetchStaticIpsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a FetchStaticIpsResponse. */
                class FetchStaticIpsResponse implements IFetchStaticIpsResponse {

                    /**
                     * Constructs a new FetchStaticIpsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IFetchStaticIpsResponse);

                    /** FetchStaticIpsResponse staticIps. */
                    public staticIps: string[];

                    /** FetchStaticIpsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new FetchStaticIpsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchStaticIpsResponse instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IFetchStaticIpsResponse): google.cloud.datastream.v1alpha1.FetchStaticIpsResponse;

                    /**
                     * Encodes the specified FetchStaticIpsResponse message. Does not implicitly {@link google.cloud.datastream.v1alpha1.FetchStaticIpsResponse.verify|verify} messages.
                     * @param message FetchStaticIpsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IFetchStaticIpsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchStaticIpsResponse message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.FetchStaticIpsResponse.verify|verify} messages.
                     * @param message FetchStaticIpsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IFetchStaticIpsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchStaticIpsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchStaticIpsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.FetchStaticIpsResponse;

                    /**
                     * Decodes a FetchStaticIpsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchStaticIpsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.FetchStaticIpsResponse;

                    /**
                     * Verifies a FetchStaticIpsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchStaticIpsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchStaticIpsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.FetchStaticIpsResponse;

                    /**
                     * Creates a plain object from a FetchStaticIpsResponse message. Also converts values to other types if specified.
                     * @param message FetchStaticIpsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.FetchStaticIpsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchStaticIpsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchErrorsRequest. */
                interface IFetchErrorsRequest {

                    /** FetchErrorsRequest stream */
                    stream?: (string|null);
                }

                /** Represents a FetchErrorsRequest. */
                class FetchErrorsRequest implements IFetchErrorsRequest {

                    /**
                     * Constructs a new FetchErrorsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IFetchErrorsRequest);

                    /** FetchErrorsRequest stream. */
                    public stream: string;

                    /**
                     * Creates a new FetchErrorsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchErrorsRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IFetchErrorsRequest): google.cloud.datastream.v1alpha1.FetchErrorsRequest;

                    /**
                     * Encodes the specified FetchErrorsRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.FetchErrorsRequest.verify|verify} messages.
                     * @param message FetchErrorsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IFetchErrorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchErrorsRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.FetchErrorsRequest.verify|verify} messages.
                     * @param message FetchErrorsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IFetchErrorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchErrorsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchErrorsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.FetchErrorsRequest;

                    /**
                     * Decodes a FetchErrorsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchErrorsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.FetchErrorsRequest;

                    /**
                     * Verifies a FetchErrorsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchErrorsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchErrorsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.FetchErrorsRequest;

                    /**
                     * Creates a plain object from a FetchErrorsRequest message. Also converts values to other types if specified.
                     * @param message FetchErrorsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.FetchErrorsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchErrorsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchErrorsResponse. */
                interface IFetchErrorsResponse {

                    /** FetchErrorsResponse errors */
                    errors?: (google.cloud.datastream.v1alpha1.IError[]|null);
                }

                /** Represents a FetchErrorsResponse. */
                class FetchErrorsResponse implements IFetchErrorsResponse {

                    /**
                     * Constructs a new FetchErrorsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IFetchErrorsResponse);

                    /** FetchErrorsResponse errors. */
                    public errors: google.cloud.datastream.v1alpha1.IError[];

                    /**
                     * Creates a new FetchErrorsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchErrorsResponse instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IFetchErrorsResponse): google.cloud.datastream.v1alpha1.FetchErrorsResponse;

                    /**
                     * Encodes the specified FetchErrorsResponse message. Does not implicitly {@link google.cloud.datastream.v1alpha1.FetchErrorsResponse.verify|verify} messages.
                     * @param message FetchErrorsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IFetchErrorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchErrorsResponse message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.FetchErrorsResponse.verify|verify} messages.
                     * @param message FetchErrorsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IFetchErrorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchErrorsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchErrorsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.FetchErrorsResponse;

                    /**
                     * Decodes a FetchErrorsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchErrorsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.FetchErrorsResponse;

                    /**
                     * Verifies a FetchErrorsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchErrorsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchErrorsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.FetchErrorsResponse;

                    /**
                     * Creates a plain object from a FetchErrorsResponse message. Also converts values to other types if specified.
                     * @param message FetchErrorsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.FetchErrorsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchErrorsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListConnectionProfilesRequest. */
                interface IListConnectionProfilesRequest {

                    /** ListConnectionProfilesRequest parent */
                    parent?: (string|null);

                    /** ListConnectionProfilesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConnectionProfilesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListConnectionProfilesRequest filter */
                    filter?: (string|null);

                    /** ListConnectionProfilesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListConnectionProfilesRequest. */
                class ListConnectionProfilesRequest implements IListConnectionProfilesRequest {

                    /**
                     * Constructs a new ListConnectionProfilesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IListConnectionProfilesRequest);

                    /** ListConnectionProfilesRequest parent. */
                    public parent: string;

                    /** ListConnectionProfilesRequest pageSize. */
                    public pageSize: number;

                    /** ListConnectionProfilesRequest pageToken. */
                    public pageToken: string;

                    /** ListConnectionProfilesRequest filter. */
                    public filter: string;

                    /** ListConnectionProfilesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListConnectionProfilesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectionProfilesRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IListConnectionProfilesRequest): google.cloud.datastream.v1alpha1.ListConnectionProfilesRequest;

                    /**
                     * Encodes the specified ListConnectionProfilesRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListConnectionProfilesRequest.verify|verify} messages.
                     * @param message ListConnectionProfilesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IListConnectionProfilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectionProfilesRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListConnectionProfilesRequest.verify|verify} messages.
                     * @param message ListConnectionProfilesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IListConnectionProfilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectionProfilesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectionProfilesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.ListConnectionProfilesRequest;

                    /**
                     * Decodes a ListConnectionProfilesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectionProfilesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.ListConnectionProfilesRequest;

                    /**
                     * Verifies a ListConnectionProfilesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectionProfilesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectionProfilesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.ListConnectionProfilesRequest;

                    /**
                     * Creates a plain object from a ListConnectionProfilesRequest message. Also converts values to other types if specified.
                     * @param message ListConnectionProfilesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.ListConnectionProfilesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectionProfilesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListConnectionProfilesResponse. */
                interface IListConnectionProfilesResponse {

                    /** ListConnectionProfilesResponse connectionProfiles */
                    connectionProfiles?: (google.cloud.datastream.v1alpha1.IConnectionProfile[]|null);

                    /** ListConnectionProfilesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListConnectionProfilesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListConnectionProfilesResponse. */
                class ListConnectionProfilesResponse implements IListConnectionProfilesResponse {

                    /**
                     * Constructs a new ListConnectionProfilesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IListConnectionProfilesResponse);

                    /** ListConnectionProfilesResponse connectionProfiles. */
                    public connectionProfiles: google.cloud.datastream.v1alpha1.IConnectionProfile[];

                    /** ListConnectionProfilesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListConnectionProfilesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListConnectionProfilesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectionProfilesResponse instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IListConnectionProfilesResponse): google.cloud.datastream.v1alpha1.ListConnectionProfilesResponse;

                    /**
                     * Encodes the specified ListConnectionProfilesResponse message. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListConnectionProfilesResponse.verify|verify} messages.
                     * @param message ListConnectionProfilesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IListConnectionProfilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectionProfilesResponse message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListConnectionProfilesResponse.verify|verify} messages.
                     * @param message ListConnectionProfilesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IListConnectionProfilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectionProfilesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectionProfilesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.ListConnectionProfilesResponse;

                    /**
                     * Decodes a ListConnectionProfilesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectionProfilesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.ListConnectionProfilesResponse;

                    /**
                     * Verifies a ListConnectionProfilesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectionProfilesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectionProfilesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.ListConnectionProfilesResponse;

                    /**
                     * Creates a plain object from a ListConnectionProfilesResponse message. Also converts values to other types if specified.
                     * @param message ListConnectionProfilesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.ListConnectionProfilesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectionProfilesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetConnectionProfileRequest. */
                interface IGetConnectionProfileRequest {

                    /** GetConnectionProfileRequest name */
                    name?: (string|null);
                }

                /** Represents a GetConnectionProfileRequest. */
                class GetConnectionProfileRequest implements IGetConnectionProfileRequest {

                    /**
                     * Constructs a new GetConnectionProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IGetConnectionProfileRequest);

                    /** GetConnectionProfileRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetConnectionProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConnectionProfileRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IGetConnectionProfileRequest): google.cloud.datastream.v1alpha1.GetConnectionProfileRequest;

                    /**
                     * Encodes the specified GetConnectionProfileRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.GetConnectionProfileRequest.verify|verify} messages.
                     * @param message GetConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IGetConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConnectionProfileRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.GetConnectionProfileRequest.verify|verify} messages.
                     * @param message GetConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IGetConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConnectionProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.GetConnectionProfileRequest;

                    /**
                     * Decodes a GetConnectionProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.GetConnectionProfileRequest;

                    /**
                     * Verifies a GetConnectionProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConnectionProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConnectionProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.GetConnectionProfileRequest;

                    /**
                     * Creates a plain object from a GetConnectionProfileRequest message. Also converts values to other types if specified.
                     * @param message GetConnectionProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.GetConnectionProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConnectionProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateConnectionProfileRequest. */
                interface ICreateConnectionProfileRequest {

                    /** CreateConnectionProfileRequest parent */
                    parent?: (string|null);

                    /** CreateConnectionProfileRequest connectionProfileId */
                    connectionProfileId?: (string|null);

                    /** CreateConnectionProfileRequest connectionProfile */
                    connectionProfile?: (google.cloud.datastream.v1alpha1.IConnectionProfile|null);

                    /** CreateConnectionProfileRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateConnectionProfileRequest. */
                class CreateConnectionProfileRequest implements ICreateConnectionProfileRequest {

                    /**
                     * Constructs a new CreateConnectionProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.ICreateConnectionProfileRequest);

                    /** CreateConnectionProfileRequest parent. */
                    public parent: string;

                    /** CreateConnectionProfileRequest connectionProfileId. */
                    public connectionProfileId: string;

                    /** CreateConnectionProfileRequest connectionProfile. */
                    public connectionProfile?: (google.cloud.datastream.v1alpha1.IConnectionProfile|null);

                    /** CreateConnectionProfileRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateConnectionProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateConnectionProfileRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.ICreateConnectionProfileRequest): google.cloud.datastream.v1alpha1.CreateConnectionProfileRequest;

                    /**
                     * Encodes the specified CreateConnectionProfileRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.CreateConnectionProfileRequest.verify|verify} messages.
                     * @param message CreateConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.ICreateConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateConnectionProfileRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.CreateConnectionProfileRequest.verify|verify} messages.
                     * @param message CreateConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.ICreateConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateConnectionProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.CreateConnectionProfileRequest;

                    /**
                     * Decodes a CreateConnectionProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.CreateConnectionProfileRequest;

                    /**
                     * Verifies a CreateConnectionProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateConnectionProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateConnectionProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.CreateConnectionProfileRequest;

                    /**
                     * Creates a plain object from a CreateConnectionProfileRequest message. Also converts values to other types if specified.
                     * @param message CreateConnectionProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.CreateConnectionProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateConnectionProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateConnectionProfileRequest. */
                interface IUpdateConnectionProfileRequest {

                    /** UpdateConnectionProfileRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConnectionProfileRequest connectionProfile */
                    connectionProfile?: (google.cloud.datastream.v1alpha1.IConnectionProfile|null);

                    /** UpdateConnectionProfileRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateConnectionProfileRequest. */
                class UpdateConnectionProfileRequest implements IUpdateConnectionProfileRequest {

                    /**
                     * Constructs a new UpdateConnectionProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IUpdateConnectionProfileRequest);

                    /** UpdateConnectionProfileRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConnectionProfileRequest connectionProfile. */
                    public connectionProfile?: (google.cloud.datastream.v1alpha1.IConnectionProfile|null);

                    /** UpdateConnectionProfileRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateConnectionProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateConnectionProfileRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IUpdateConnectionProfileRequest): google.cloud.datastream.v1alpha1.UpdateConnectionProfileRequest;

                    /**
                     * Encodes the specified UpdateConnectionProfileRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.UpdateConnectionProfileRequest.verify|verify} messages.
                     * @param message UpdateConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IUpdateConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateConnectionProfileRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.UpdateConnectionProfileRequest.verify|verify} messages.
                     * @param message UpdateConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IUpdateConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateConnectionProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.UpdateConnectionProfileRequest;

                    /**
                     * Decodes an UpdateConnectionProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.UpdateConnectionProfileRequest;

                    /**
                     * Verifies an UpdateConnectionProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateConnectionProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateConnectionProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.UpdateConnectionProfileRequest;

                    /**
                     * Creates a plain object from an UpdateConnectionProfileRequest message. Also converts values to other types if specified.
                     * @param message UpdateConnectionProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.UpdateConnectionProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateConnectionProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteConnectionProfileRequest. */
                interface IDeleteConnectionProfileRequest {

                    /** DeleteConnectionProfileRequest name */
                    name?: (string|null);

                    /** DeleteConnectionProfileRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteConnectionProfileRequest. */
                class DeleteConnectionProfileRequest implements IDeleteConnectionProfileRequest {

                    /**
                     * Constructs a new DeleteConnectionProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IDeleteConnectionProfileRequest);

                    /** DeleteConnectionProfileRequest name. */
                    public name: string;

                    /** DeleteConnectionProfileRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteConnectionProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteConnectionProfileRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IDeleteConnectionProfileRequest): google.cloud.datastream.v1alpha1.DeleteConnectionProfileRequest;

                    /**
                     * Encodes the specified DeleteConnectionProfileRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.DeleteConnectionProfileRequest.verify|verify} messages.
                     * @param message DeleteConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IDeleteConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteConnectionProfileRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.DeleteConnectionProfileRequest.verify|verify} messages.
                     * @param message DeleteConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IDeleteConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteConnectionProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.DeleteConnectionProfileRequest;

                    /**
                     * Decodes a DeleteConnectionProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.DeleteConnectionProfileRequest;

                    /**
                     * Verifies a DeleteConnectionProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteConnectionProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteConnectionProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.DeleteConnectionProfileRequest;

                    /**
                     * Creates a plain object from a DeleteConnectionProfileRequest message. Also converts values to other types if specified.
                     * @param message DeleteConnectionProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.DeleteConnectionProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteConnectionProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListStreamsRequest. */
                interface IListStreamsRequest {

                    /** ListStreamsRequest parent */
                    parent?: (string|null);

                    /** ListStreamsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListStreamsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListStreamsRequest filter */
                    filter?: (string|null);

                    /** ListStreamsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListStreamsRequest. */
                class ListStreamsRequest implements IListStreamsRequest {

                    /**
                     * Constructs a new ListStreamsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IListStreamsRequest);

                    /** ListStreamsRequest parent. */
                    public parent: string;

                    /** ListStreamsRequest pageSize. */
                    public pageSize: number;

                    /** ListStreamsRequest pageToken. */
                    public pageToken: string;

                    /** ListStreamsRequest filter. */
                    public filter: string;

                    /** ListStreamsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListStreamsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListStreamsRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IListStreamsRequest): google.cloud.datastream.v1alpha1.ListStreamsRequest;

                    /**
                     * Encodes the specified ListStreamsRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListStreamsRequest.verify|verify} messages.
                     * @param message ListStreamsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IListStreamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListStreamsRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListStreamsRequest.verify|verify} messages.
                     * @param message ListStreamsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IListStreamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListStreamsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListStreamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.ListStreamsRequest;

                    /**
                     * Decodes a ListStreamsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListStreamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.ListStreamsRequest;

                    /**
                     * Verifies a ListStreamsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListStreamsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListStreamsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.ListStreamsRequest;

                    /**
                     * Creates a plain object from a ListStreamsRequest message. Also converts values to other types if specified.
                     * @param message ListStreamsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.ListStreamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListStreamsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListStreamsResponse. */
                interface IListStreamsResponse {

                    /** ListStreamsResponse streams */
                    streams?: (google.cloud.datastream.v1alpha1.IStream[]|null);

                    /** ListStreamsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListStreamsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListStreamsResponse. */
                class ListStreamsResponse implements IListStreamsResponse {

                    /**
                     * Constructs a new ListStreamsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IListStreamsResponse);

                    /** ListStreamsResponse streams. */
                    public streams: google.cloud.datastream.v1alpha1.IStream[];

                    /** ListStreamsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListStreamsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListStreamsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListStreamsResponse instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IListStreamsResponse): google.cloud.datastream.v1alpha1.ListStreamsResponse;

                    /**
                     * Encodes the specified ListStreamsResponse message. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListStreamsResponse.verify|verify} messages.
                     * @param message ListStreamsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IListStreamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListStreamsResponse message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListStreamsResponse.verify|verify} messages.
                     * @param message ListStreamsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IListStreamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListStreamsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListStreamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.ListStreamsResponse;

                    /**
                     * Decodes a ListStreamsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListStreamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.ListStreamsResponse;

                    /**
                     * Verifies a ListStreamsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListStreamsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListStreamsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.ListStreamsResponse;

                    /**
                     * Creates a plain object from a ListStreamsResponse message. Also converts values to other types if specified.
                     * @param message ListStreamsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.ListStreamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListStreamsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetStreamRequest. */
                interface IGetStreamRequest {

                    /** GetStreamRequest name */
                    name?: (string|null);
                }

                /** Represents a GetStreamRequest. */
                class GetStreamRequest implements IGetStreamRequest {

                    /**
                     * Constructs a new GetStreamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IGetStreamRequest);

                    /** GetStreamRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetStreamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetStreamRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IGetStreamRequest): google.cloud.datastream.v1alpha1.GetStreamRequest;

                    /**
                     * Encodes the specified GetStreamRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.GetStreamRequest.verify|verify} messages.
                     * @param message GetStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IGetStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetStreamRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.GetStreamRequest.verify|verify} messages.
                     * @param message GetStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IGetStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetStreamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.GetStreamRequest;

                    /**
                     * Decodes a GetStreamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.GetStreamRequest;

                    /**
                     * Verifies a GetStreamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetStreamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetStreamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.GetStreamRequest;

                    /**
                     * Creates a plain object from a GetStreamRequest message. Also converts values to other types if specified.
                     * @param message GetStreamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.GetStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetStreamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateStreamRequest. */
                interface ICreateStreamRequest {

                    /** CreateStreamRequest parent */
                    parent?: (string|null);

                    /** CreateStreamRequest streamId */
                    streamId?: (string|null);

                    /** CreateStreamRequest stream */
                    stream?: (google.cloud.datastream.v1alpha1.IStream|null);

                    /** CreateStreamRequest requestId */
                    requestId?: (string|null);

                    /** CreateStreamRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** CreateStreamRequest force */
                    force?: (boolean|null);
                }

                /** Represents a CreateStreamRequest. */
                class CreateStreamRequest implements ICreateStreamRequest {

                    /**
                     * Constructs a new CreateStreamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.ICreateStreamRequest);

                    /** CreateStreamRequest parent. */
                    public parent: string;

                    /** CreateStreamRequest streamId. */
                    public streamId: string;

                    /** CreateStreamRequest stream. */
                    public stream?: (google.cloud.datastream.v1alpha1.IStream|null);

                    /** CreateStreamRequest requestId. */
                    public requestId: string;

                    /** CreateStreamRequest validateOnly. */
                    public validateOnly: boolean;

                    /** CreateStreamRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new CreateStreamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateStreamRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.ICreateStreamRequest): google.cloud.datastream.v1alpha1.CreateStreamRequest;

                    /**
                     * Encodes the specified CreateStreamRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.CreateStreamRequest.verify|verify} messages.
                     * @param message CreateStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.ICreateStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateStreamRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.CreateStreamRequest.verify|verify} messages.
                     * @param message CreateStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.ICreateStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateStreamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.CreateStreamRequest;

                    /**
                     * Decodes a CreateStreamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.CreateStreamRequest;

                    /**
                     * Verifies a CreateStreamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateStreamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateStreamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.CreateStreamRequest;

                    /**
                     * Creates a plain object from a CreateStreamRequest message. Also converts values to other types if specified.
                     * @param message CreateStreamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.CreateStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateStreamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateStreamRequest. */
                interface IUpdateStreamRequest {

                    /** UpdateStreamRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateStreamRequest stream */
                    stream?: (google.cloud.datastream.v1alpha1.IStream|null);

                    /** UpdateStreamRequest requestId */
                    requestId?: (string|null);

                    /** UpdateStreamRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UpdateStreamRequest force */
                    force?: (boolean|null);
                }

                /** Represents an UpdateStreamRequest. */
                class UpdateStreamRequest implements IUpdateStreamRequest {

                    /**
                     * Constructs a new UpdateStreamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IUpdateStreamRequest);

                    /** UpdateStreamRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateStreamRequest stream. */
                    public stream?: (google.cloud.datastream.v1alpha1.IStream|null);

                    /** UpdateStreamRequest requestId. */
                    public requestId: string;

                    /** UpdateStreamRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UpdateStreamRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new UpdateStreamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateStreamRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IUpdateStreamRequest): google.cloud.datastream.v1alpha1.UpdateStreamRequest;

                    /**
                     * Encodes the specified UpdateStreamRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.UpdateStreamRequest.verify|verify} messages.
                     * @param message UpdateStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IUpdateStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateStreamRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.UpdateStreamRequest.verify|verify} messages.
                     * @param message UpdateStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IUpdateStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateStreamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.UpdateStreamRequest;

                    /**
                     * Decodes an UpdateStreamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.UpdateStreamRequest;

                    /**
                     * Verifies an UpdateStreamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateStreamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateStreamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.UpdateStreamRequest;

                    /**
                     * Creates a plain object from an UpdateStreamRequest message. Also converts values to other types if specified.
                     * @param message UpdateStreamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.UpdateStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateStreamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteStreamRequest. */
                interface IDeleteStreamRequest {

                    /** DeleteStreamRequest name */
                    name?: (string|null);

                    /** DeleteStreamRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteStreamRequest. */
                class DeleteStreamRequest implements IDeleteStreamRequest {

                    /**
                     * Constructs a new DeleteStreamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IDeleteStreamRequest);

                    /** DeleteStreamRequest name. */
                    public name: string;

                    /** DeleteStreamRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteStreamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteStreamRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IDeleteStreamRequest): google.cloud.datastream.v1alpha1.DeleteStreamRequest;

                    /**
                     * Encodes the specified DeleteStreamRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.DeleteStreamRequest.verify|verify} messages.
                     * @param message DeleteStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IDeleteStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteStreamRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.DeleteStreamRequest.verify|verify} messages.
                     * @param message DeleteStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IDeleteStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteStreamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.DeleteStreamRequest;

                    /**
                     * Decodes a DeleteStreamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.DeleteStreamRequest;

                    /**
                     * Verifies a DeleteStreamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteStreamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteStreamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.DeleteStreamRequest;

                    /**
                     * Creates a plain object from a DeleteStreamRequest message. Also converts values to other types if specified.
                     * @param message DeleteStreamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.DeleteStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteStreamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target */
                    target?: (string|null);

                    /** OperationMetadata verb */
                    verb?: (string|null);

                    /** OperationMetadata statusMessage */
                    statusMessage?: (string|null);

                    /** OperationMetadata requestedCancellation */
                    requestedCancellation?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);

                    /** OperationMetadata validationResult */
                    validationResult?: (google.cloud.datastream.v1alpha1.IValidationResult|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusMessage. */
                    public statusMessage: string;

                    /** OperationMetadata requestedCancellation. */
                    public requestedCancellation: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /** OperationMetadata validationResult. */
                    public validationResult?: (google.cloud.datastream.v1alpha1.IValidationResult|null);

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IOperationMetadata): google.cloud.datastream.v1alpha1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.datastream.v1alpha1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.OperationMetadata;

                    /**
                     * Verifies an OperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreatePrivateConnectionRequest. */
                interface ICreatePrivateConnectionRequest {

                    /** CreatePrivateConnectionRequest parent */
                    parent?: (string|null);

                    /** CreatePrivateConnectionRequest privateConnectionId */
                    privateConnectionId?: (string|null);

                    /** CreatePrivateConnectionRequest privateConnection */
                    privateConnection?: (google.cloud.datastream.v1alpha1.IPrivateConnection|null);

                    /** CreatePrivateConnectionRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreatePrivateConnectionRequest. */
                class CreatePrivateConnectionRequest implements ICreatePrivateConnectionRequest {

                    /**
                     * Constructs a new CreatePrivateConnectionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.ICreatePrivateConnectionRequest);

                    /** CreatePrivateConnectionRequest parent. */
                    public parent: string;

                    /** CreatePrivateConnectionRequest privateConnectionId. */
                    public privateConnectionId: string;

                    /** CreatePrivateConnectionRequest privateConnection. */
                    public privateConnection?: (google.cloud.datastream.v1alpha1.IPrivateConnection|null);

                    /** CreatePrivateConnectionRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreatePrivateConnectionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePrivateConnectionRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.ICreatePrivateConnectionRequest): google.cloud.datastream.v1alpha1.CreatePrivateConnectionRequest;

                    /**
                     * Encodes the specified CreatePrivateConnectionRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.CreatePrivateConnectionRequest.verify|verify} messages.
                     * @param message CreatePrivateConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.ICreatePrivateConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePrivateConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.CreatePrivateConnectionRequest.verify|verify} messages.
                     * @param message CreatePrivateConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.ICreatePrivateConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePrivateConnectionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePrivateConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.CreatePrivateConnectionRequest;

                    /**
                     * Decodes a CreatePrivateConnectionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePrivateConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.CreatePrivateConnectionRequest;

                    /**
                     * Verifies a CreatePrivateConnectionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePrivateConnectionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePrivateConnectionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.CreatePrivateConnectionRequest;

                    /**
                     * Creates a plain object from a CreatePrivateConnectionRequest message. Also converts values to other types if specified.
                     * @param message CreatePrivateConnectionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.CreatePrivateConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePrivateConnectionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPrivateConnectionsRequest. */
                interface IListPrivateConnectionsRequest {

                    /** ListPrivateConnectionsRequest parent */
                    parent?: (string|null);

                    /** ListPrivateConnectionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPrivateConnectionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPrivateConnectionsRequest filter */
                    filter?: (string|null);

                    /** ListPrivateConnectionsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListPrivateConnectionsRequest. */
                class ListPrivateConnectionsRequest implements IListPrivateConnectionsRequest {

                    /**
                     * Constructs a new ListPrivateConnectionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IListPrivateConnectionsRequest);

                    /** ListPrivateConnectionsRequest parent. */
                    public parent: string;

                    /** ListPrivateConnectionsRequest pageSize. */
                    public pageSize: number;

                    /** ListPrivateConnectionsRequest pageToken. */
                    public pageToken: string;

                    /** ListPrivateConnectionsRequest filter. */
                    public filter: string;

                    /** ListPrivateConnectionsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListPrivateConnectionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPrivateConnectionsRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IListPrivateConnectionsRequest): google.cloud.datastream.v1alpha1.ListPrivateConnectionsRequest;

                    /**
                     * Encodes the specified ListPrivateConnectionsRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListPrivateConnectionsRequest.verify|verify} messages.
                     * @param message ListPrivateConnectionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IListPrivateConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPrivateConnectionsRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListPrivateConnectionsRequest.verify|verify} messages.
                     * @param message ListPrivateConnectionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IListPrivateConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPrivateConnectionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPrivateConnectionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.ListPrivateConnectionsRequest;

                    /**
                     * Decodes a ListPrivateConnectionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPrivateConnectionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.ListPrivateConnectionsRequest;

                    /**
                     * Verifies a ListPrivateConnectionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPrivateConnectionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPrivateConnectionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.ListPrivateConnectionsRequest;

                    /**
                     * Creates a plain object from a ListPrivateConnectionsRequest message. Also converts values to other types if specified.
                     * @param message ListPrivateConnectionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.ListPrivateConnectionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPrivateConnectionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPrivateConnectionsResponse. */
                interface IListPrivateConnectionsResponse {

                    /** ListPrivateConnectionsResponse privateConnections */
                    privateConnections?: (google.cloud.datastream.v1alpha1.IPrivateConnection[]|null);

                    /** ListPrivateConnectionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListPrivateConnectionsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListPrivateConnectionsResponse. */
                class ListPrivateConnectionsResponse implements IListPrivateConnectionsResponse {

                    /**
                     * Constructs a new ListPrivateConnectionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IListPrivateConnectionsResponse);

                    /** ListPrivateConnectionsResponse privateConnections. */
                    public privateConnections: google.cloud.datastream.v1alpha1.IPrivateConnection[];

                    /** ListPrivateConnectionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListPrivateConnectionsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListPrivateConnectionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPrivateConnectionsResponse instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IListPrivateConnectionsResponse): google.cloud.datastream.v1alpha1.ListPrivateConnectionsResponse;

                    /**
                     * Encodes the specified ListPrivateConnectionsResponse message. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListPrivateConnectionsResponse.verify|verify} messages.
                     * @param message ListPrivateConnectionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IListPrivateConnectionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPrivateConnectionsResponse message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListPrivateConnectionsResponse.verify|verify} messages.
                     * @param message ListPrivateConnectionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IListPrivateConnectionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPrivateConnectionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPrivateConnectionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.ListPrivateConnectionsResponse;

                    /**
                     * Decodes a ListPrivateConnectionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPrivateConnectionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.ListPrivateConnectionsResponse;

                    /**
                     * Verifies a ListPrivateConnectionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPrivateConnectionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPrivateConnectionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.ListPrivateConnectionsResponse;

                    /**
                     * Creates a plain object from a ListPrivateConnectionsResponse message. Also converts values to other types if specified.
                     * @param message ListPrivateConnectionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.ListPrivateConnectionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPrivateConnectionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeletePrivateConnectionRequest. */
                interface IDeletePrivateConnectionRequest {

                    /** DeletePrivateConnectionRequest name */
                    name?: (string|null);

                    /** DeletePrivateConnectionRequest requestId */
                    requestId?: (string|null);

                    /** DeletePrivateConnectionRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeletePrivateConnectionRequest. */
                class DeletePrivateConnectionRequest implements IDeletePrivateConnectionRequest {

                    /**
                     * Constructs a new DeletePrivateConnectionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IDeletePrivateConnectionRequest);

                    /** DeletePrivateConnectionRequest name. */
                    public name: string;

                    /** DeletePrivateConnectionRequest requestId. */
                    public requestId: string;

                    /** DeletePrivateConnectionRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeletePrivateConnectionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePrivateConnectionRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IDeletePrivateConnectionRequest): google.cloud.datastream.v1alpha1.DeletePrivateConnectionRequest;

                    /**
                     * Encodes the specified DeletePrivateConnectionRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.DeletePrivateConnectionRequest.verify|verify} messages.
                     * @param message DeletePrivateConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IDeletePrivateConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePrivateConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.DeletePrivateConnectionRequest.verify|verify} messages.
                     * @param message DeletePrivateConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IDeletePrivateConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePrivateConnectionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePrivateConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.DeletePrivateConnectionRequest;

                    /**
                     * Decodes a DeletePrivateConnectionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePrivateConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.DeletePrivateConnectionRequest;

                    /**
                     * Verifies a DeletePrivateConnectionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePrivateConnectionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePrivateConnectionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.DeletePrivateConnectionRequest;

                    /**
                     * Creates a plain object from a DeletePrivateConnectionRequest message. Also converts values to other types if specified.
                     * @param message DeletePrivateConnectionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.DeletePrivateConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePrivateConnectionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetPrivateConnectionRequest. */
                interface IGetPrivateConnectionRequest {

                    /** GetPrivateConnectionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPrivateConnectionRequest. */
                class GetPrivateConnectionRequest implements IGetPrivateConnectionRequest {

                    /**
                     * Constructs a new GetPrivateConnectionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IGetPrivateConnectionRequest);

                    /** GetPrivateConnectionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPrivateConnectionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPrivateConnectionRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IGetPrivateConnectionRequest): google.cloud.datastream.v1alpha1.GetPrivateConnectionRequest;

                    /**
                     * Encodes the specified GetPrivateConnectionRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.GetPrivateConnectionRequest.verify|verify} messages.
                     * @param message GetPrivateConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IGetPrivateConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPrivateConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.GetPrivateConnectionRequest.verify|verify} messages.
                     * @param message GetPrivateConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IGetPrivateConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPrivateConnectionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPrivateConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.GetPrivateConnectionRequest;

                    /**
                     * Decodes a GetPrivateConnectionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPrivateConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.GetPrivateConnectionRequest;

                    /**
                     * Verifies a GetPrivateConnectionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPrivateConnectionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPrivateConnectionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.GetPrivateConnectionRequest;

                    /**
                     * Creates a plain object from a GetPrivateConnectionRequest message. Also converts values to other types if specified.
                     * @param message GetPrivateConnectionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.GetPrivateConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPrivateConnectionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateRouteRequest. */
                interface ICreateRouteRequest {

                    /** CreateRouteRequest parent */
                    parent?: (string|null);

                    /** CreateRouteRequest routeId */
                    routeId?: (string|null);

                    /** CreateRouteRequest route */
                    route?: (google.cloud.datastream.v1alpha1.IRoute|null);

                    /** CreateRouteRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateRouteRequest. */
                class CreateRouteRequest implements ICreateRouteRequest {

                    /**
                     * Constructs a new CreateRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.ICreateRouteRequest);

                    /** CreateRouteRequest parent. */
                    public parent: string;

                    /** CreateRouteRequest routeId. */
                    public routeId: string;

                    /** CreateRouteRequest route. */
                    public route?: (google.cloud.datastream.v1alpha1.IRoute|null);

                    /** CreateRouteRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateRouteRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.ICreateRouteRequest): google.cloud.datastream.v1alpha1.CreateRouteRequest;

                    /**
                     * Encodes the specified CreateRouteRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.CreateRouteRequest.verify|verify} messages.
                     * @param message CreateRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.ICreateRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateRouteRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.CreateRouteRequest.verify|verify} messages.
                     * @param message CreateRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.ICreateRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.CreateRouteRequest;

                    /**
                     * Decodes a CreateRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.CreateRouteRequest;

                    /**
                     * Verifies a CreateRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.CreateRouteRequest;

                    /**
                     * Creates a plain object from a CreateRouteRequest message. Also converts values to other types if specified.
                     * @param message CreateRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.CreateRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRoutesRequest. */
                interface IListRoutesRequest {

                    /** ListRoutesRequest parent */
                    parent?: (string|null);

                    /** ListRoutesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRoutesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRoutesRequest filter */
                    filter?: (string|null);

                    /** ListRoutesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListRoutesRequest. */
                class ListRoutesRequest implements IListRoutesRequest {

                    /**
                     * Constructs a new ListRoutesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IListRoutesRequest);

                    /** ListRoutesRequest parent. */
                    public parent: string;

                    /** ListRoutesRequest pageSize. */
                    public pageSize: number;

                    /** ListRoutesRequest pageToken. */
                    public pageToken: string;

                    /** ListRoutesRequest filter. */
                    public filter: string;

                    /** ListRoutesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListRoutesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRoutesRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IListRoutesRequest): google.cloud.datastream.v1alpha1.ListRoutesRequest;

                    /**
                     * Encodes the specified ListRoutesRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListRoutesRequest.verify|verify} messages.
                     * @param message ListRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IListRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRoutesRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListRoutesRequest.verify|verify} messages.
                     * @param message ListRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IListRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRoutesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.ListRoutesRequest;

                    /**
                     * Decodes a ListRoutesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.ListRoutesRequest;

                    /**
                     * Verifies a ListRoutesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRoutesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRoutesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.ListRoutesRequest;

                    /**
                     * Creates a plain object from a ListRoutesRequest message. Also converts values to other types if specified.
                     * @param message ListRoutesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.ListRoutesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRoutesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRoutesResponse. */
                interface IListRoutesResponse {

                    /** ListRoutesResponse routes */
                    routes?: (google.cloud.datastream.v1alpha1.IRoute[]|null);

                    /** ListRoutesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListRoutesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListRoutesResponse. */
                class ListRoutesResponse implements IListRoutesResponse {

                    /**
                     * Constructs a new ListRoutesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IListRoutesResponse);

                    /** ListRoutesResponse routes. */
                    public routes: google.cloud.datastream.v1alpha1.IRoute[];

                    /** ListRoutesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListRoutesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListRoutesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRoutesResponse instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IListRoutesResponse): google.cloud.datastream.v1alpha1.ListRoutesResponse;

                    /**
                     * Encodes the specified ListRoutesResponse message. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListRoutesResponse.verify|verify} messages.
                     * @param message ListRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IListRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRoutesResponse message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.ListRoutesResponse.verify|verify} messages.
                     * @param message ListRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IListRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRoutesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.ListRoutesResponse;

                    /**
                     * Decodes a ListRoutesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.ListRoutesResponse;

                    /**
                     * Verifies a ListRoutesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRoutesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRoutesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.ListRoutesResponse;

                    /**
                     * Creates a plain object from a ListRoutesResponse message. Also converts values to other types if specified.
                     * @param message ListRoutesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.ListRoutesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRoutesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteRouteRequest. */
                interface IDeleteRouteRequest {

                    /** DeleteRouteRequest name */
                    name?: (string|null);

                    /** DeleteRouteRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteRouteRequest. */
                class DeleteRouteRequest implements IDeleteRouteRequest {

                    /**
                     * Constructs a new DeleteRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IDeleteRouteRequest);

                    /** DeleteRouteRequest name. */
                    public name: string;

                    /** DeleteRouteRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteRouteRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IDeleteRouteRequest): google.cloud.datastream.v1alpha1.DeleteRouteRequest;

                    /**
                     * Encodes the specified DeleteRouteRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.DeleteRouteRequest.verify|verify} messages.
                     * @param message DeleteRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IDeleteRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteRouteRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.DeleteRouteRequest.verify|verify} messages.
                     * @param message DeleteRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IDeleteRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.DeleteRouteRequest;

                    /**
                     * Decodes a DeleteRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.DeleteRouteRequest;

                    /**
                     * Verifies a DeleteRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.DeleteRouteRequest;

                    /**
                     * Creates a plain object from a DeleteRouteRequest message. Also converts values to other types if specified.
                     * @param message DeleteRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.DeleteRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetRouteRequest. */
                interface IGetRouteRequest {

                    /** GetRouteRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRouteRequest. */
                class GetRouteRequest implements IGetRouteRequest {

                    /**
                     * Constructs a new GetRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IGetRouteRequest);

                    /** GetRouteRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRouteRequest instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IGetRouteRequest): google.cloud.datastream.v1alpha1.GetRouteRequest;

                    /**
                     * Encodes the specified GetRouteRequest message. Does not implicitly {@link google.cloud.datastream.v1alpha1.GetRouteRequest.verify|verify} messages.
                     * @param message GetRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IGetRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRouteRequest message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.GetRouteRequest.verify|verify} messages.
                     * @param message GetRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IGetRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.GetRouteRequest;

                    /**
                     * Decodes a GetRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.GetRouteRequest;

                    /**
                     * Verifies a GetRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.GetRouteRequest;

                    /**
                     * Creates a plain object from a GetRouteRequest message. Also converts values to other types if specified.
                     * @param message GetRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.GetRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OracleProfile. */
                interface IOracleProfile {

                    /** OracleProfile hostname */
                    hostname?: (string|null);

                    /** OracleProfile port */
                    port?: (number|null);

                    /** OracleProfile username */
                    username?: (string|null);

                    /** OracleProfile password */
                    password?: (string|null);

                    /** OracleProfile databaseService */
                    databaseService?: (string|null);

                    /** OracleProfile connectionAttributes */
                    connectionAttributes?: ({ [k: string]: string }|null);
                }

                /** Represents an OracleProfile. */
                class OracleProfile implements IOracleProfile {

                    /**
                     * Constructs a new OracleProfile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IOracleProfile);

                    /** OracleProfile hostname. */
                    public hostname: string;

                    /** OracleProfile port. */
                    public port: number;

                    /** OracleProfile username. */
                    public username: string;

                    /** OracleProfile password. */
                    public password: string;

                    /** OracleProfile databaseService. */
                    public databaseService: string;

                    /** OracleProfile connectionAttributes. */
                    public connectionAttributes: { [k: string]: string };

                    /**
                     * Creates a new OracleProfile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OracleProfile instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IOracleProfile): google.cloud.datastream.v1alpha1.OracleProfile;

                    /**
                     * Encodes the specified OracleProfile message. Does not implicitly {@link google.cloud.datastream.v1alpha1.OracleProfile.verify|verify} messages.
                     * @param message OracleProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IOracleProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OracleProfile message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.OracleProfile.verify|verify} messages.
                     * @param message OracleProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IOracleProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OracleProfile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OracleProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.OracleProfile;

                    /**
                     * Decodes an OracleProfile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OracleProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.OracleProfile;

                    /**
                     * Verifies an OracleProfile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OracleProfile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OracleProfile
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.OracleProfile;

                    /**
                     * Creates a plain object from an OracleProfile message. Also converts values to other types if specified.
                     * @param message OracleProfile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.OracleProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OracleProfile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MysqlProfile. */
                interface IMysqlProfile {

                    /** MysqlProfile hostname */
                    hostname?: (string|null);

                    /** MysqlProfile port */
                    port?: (number|null);

                    /** MysqlProfile username */
                    username?: (string|null);

                    /** MysqlProfile password */
                    password?: (string|null);

                    /** MysqlProfile sslConfig */
                    sslConfig?: (google.cloud.datastream.v1alpha1.IMysqlSslConfig|null);
                }

                /** Represents a MysqlProfile. */
                class MysqlProfile implements IMysqlProfile {

                    /**
                     * Constructs a new MysqlProfile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IMysqlProfile);

                    /** MysqlProfile hostname. */
                    public hostname: string;

                    /** MysqlProfile port. */
                    public port: number;

                    /** MysqlProfile username. */
                    public username: string;

                    /** MysqlProfile password. */
                    public password: string;

                    /** MysqlProfile sslConfig. */
                    public sslConfig?: (google.cloud.datastream.v1alpha1.IMysqlSslConfig|null);

                    /**
                     * Creates a new MysqlProfile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MysqlProfile instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IMysqlProfile): google.cloud.datastream.v1alpha1.MysqlProfile;

                    /**
                     * Encodes the specified MysqlProfile message. Does not implicitly {@link google.cloud.datastream.v1alpha1.MysqlProfile.verify|verify} messages.
                     * @param message MysqlProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IMysqlProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MysqlProfile message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.MysqlProfile.verify|verify} messages.
                     * @param message MysqlProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IMysqlProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MysqlProfile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MysqlProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.MysqlProfile;

                    /**
                     * Decodes a MysqlProfile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MysqlProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.MysqlProfile;

                    /**
                     * Verifies a MysqlProfile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MysqlProfile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MysqlProfile
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.MysqlProfile;

                    /**
                     * Creates a plain object from a MysqlProfile message. Also converts values to other types if specified.
                     * @param message MysqlProfile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.MysqlProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MysqlProfile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsProfile. */
                interface IGcsProfile {

                    /** GcsProfile bucketName */
                    bucketName?: (string|null);

                    /** GcsProfile rootPath */
                    rootPath?: (string|null);
                }

                /** Represents a GcsProfile. */
                class GcsProfile implements IGcsProfile {

                    /**
                     * Constructs a new GcsProfile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IGcsProfile);

                    /** GcsProfile bucketName. */
                    public bucketName: string;

                    /** GcsProfile rootPath. */
                    public rootPath: string;

                    /**
                     * Creates a new GcsProfile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsProfile instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IGcsProfile): google.cloud.datastream.v1alpha1.GcsProfile;

                    /**
                     * Encodes the specified GcsProfile message. Does not implicitly {@link google.cloud.datastream.v1alpha1.GcsProfile.verify|verify} messages.
                     * @param message GcsProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IGcsProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsProfile message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.GcsProfile.verify|verify} messages.
                     * @param message GcsProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IGcsProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsProfile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.GcsProfile;

                    /**
                     * Decodes a GcsProfile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.GcsProfile;

                    /**
                     * Verifies a GcsProfile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsProfile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsProfile
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.GcsProfile;

                    /**
                     * Creates a plain object from a GcsProfile message. Also converts values to other types if specified.
                     * @param message GcsProfile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.GcsProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsProfile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a NoConnectivitySettings. */
                interface INoConnectivitySettings {
                }

                /** Represents a NoConnectivitySettings. */
                class NoConnectivitySettings implements INoConnectivitySettings {

                    /**
                     * Constructs a new NoConnectivitySettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.INoConnectivitySettings);

                    /**
                     * Creates a new NoConnectivitySettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NoConnectivitySettings instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.INoConnectivitySettings): google.cloud.datastream.v1alpha1.NoConnectivitySettings;

                    /**
                     * Encodes the specified NoConnectivitySettings message. Does not implicitly {@link google.cloud.datastream.v1alpha1.NoConnectivitySettings.verify|verify} messages.
                     * @param message NoConnectivitySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.INoConnectivitySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NoConnectivitySettings message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.NoConnectivitySettings.verify|verify} messages.
                     * @param message NoConnectivitySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.INoConnectivitySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NoConnectivitySettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NoConnectivitySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.NoConnectivitySettings;

                    /**
                     * Decodes a NoConnectivitySettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NoConnectivitySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.NoConnectivitySettings;

                    /**
                     * Verifies a NoConnectivitySettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NoConnectivitySettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NoConnectivitySettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.NoConnectivitySettings;

                    /**
                     * Creates a plain object from a NoConnectivitySettings message. Also converts values to other types if specified.
                     * @param message NoConnectivitySettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.NoConnectivitySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NoConnectivitySettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StaticServiceIpConnectivity. */
                interface IStaticServiceIpConnectivity {
                }

                /** Represents a StaticServiceIpConnectivity. */
                class StaticServiceIpConnectivity implements IStaticServiceIpConnectivity {

                    /**
                     * Constructs a new StaticServiceIpConnectivity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IStaticServiceIpConnectivity);

                    /**
                     * Creates a new StaticServiceIpConnectivity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StaticServiceIpConnectivity instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IStaticServiceIpConnectivity): google.cloud.datastream.v1alpha1.StaticServiceIpConnectivity;

                    /**
                     * Encodes the specified StaticServiceIpConnectivity message. Does not implicitly {@link google.cloud.datastream.v1alpha1.StaticServiceIpConnectivity.verify|verify} messages.
                     * @param message StaticServiceIpConnectivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IStaticServiceIpConnectivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StaticServiceIpConnectivity message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.StaticServiceIpConnectivity.verify|verify} messages.
                     * @param message StaticServiceIpConnectivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IStaticServiceIpConnectivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StaticServiceIpConnectivity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StaticServiceIpConnectivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.StaticServiceIpConnectivity;

                    /**
                     * Decodes a StaticServiceIpConnectivity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StaticServiceIpConnectivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.StaticServiceIpConnectivity;

                    /**
                     * Verifies a StaticServiceIpConnectivity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StaticServiceIpConnectivity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StaticServiceIpConnectivity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.StaticServiceIpConnectivity;

                    /**
                     * Creates a plain object from a StaticServiceIpConnectivity message. Also converts values to other types if specified.
                     * @param message StaticServiceIpConnectivity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.StaticServiceIpConnectivity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StaticServiceIpConnectivity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ForwardSshTunnelConnectivity. */
                interface IForwardSshTunnelConnectivity {

                    /** ForwardSshTunnelConnectivity hostname */
                    hostname?: (string|null);

                    /** ForwardSshTunnelConnectivity username */
                    username?: (string|null);

                    /** ForwardSshTunnelConnectivity port */
                    port?: (number|null);

                    /** ForwardSshTunnelConnectivity password */
                    password?: (string|null);

                    /** ForwardSshTunnelConnectivity privateKey */
                    privateKey?: (string|null);
                }

                /** Represents a ForwardSshTunnelConnectivity. */
                class ForwardSshTunnelConnectivity implements IForwardSshTunnelConnectivity {

                    /**
                     * Constructs a new ForwardSshTunnelConnectivity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IForwardSshTunnelConnectivity);

                    /** ForwardSshTunnelConnectivity hostname. */
                    public hostname: string;

                    /** ForwardSshTunnelConnectivity username. */
                    public username: string;

                    /** ForwardSshTunnelConnectivity port. */
                    public port: number;

                    /** ForwardSshTunnelConnectivity password. */
                    public password?: (string|null);

                    /** ForwardSshTunnelConnectivity privateKey. */
                    public privateKey?: (string|null);

                    /** ForwardSshTunnelConnectivity authenticationMethod. */
                    public authenticationMethod?: ("password"|"privateKey");

                    /**
                     * Creates a new ForwardSshTunnelConnectivity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ForwardSshTunnelConnectivity instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IForwardSshTunnelConnectivity): google.cloud.datastream.v1alpha1.ForwardSshTunnelConnectivity;

                    /**
                     * Encodes the specified ForwardSshTunnelConnectivity message. Does not implicitly {@link google.cloud.datastream.v1alpha1.ForwardSshTunnelConnectivity.verify|verify} messages.
                     * @param message ForwardSshTunnelConnectivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IForwardSshTunnelConnectivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ForwardSshTunnelConnectivity message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.ForwardSshTunnelConnectivity.verify|verify} messages.
                     * @param message ForwardSshTunnelConnectivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IForwardSshTunnelConnectivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ForwardSshTunnelConnectivity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ForwardSshTunnelConnectivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.ForwardSshTunnelConnectivity;

                    /**
                     * Decodes a ForwardSshTunnelConnectivity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ForwardSshTunnelConnectivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.ForwardSshTunnelConnectivity;

                    /**
                     * Verifies a ForwardSshTunnelConnectivity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ForwardSshTunnelConnectivity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ForwardSshTunnelConnectivity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.ForwardSshTunnelConnectivity;

                    /**
                     * Creates a plain object from a ForwardSshTunnelConnectivity message. Also converts values to other types if specified.
                     * @param message ForwardSshTunnelConnectivity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.ForwardSshTunnelConnectivity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ForwardSshTunnelConnectivity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VpcPeeringConfig. */
                interface IVpcPeeringConfig {

                    /** VpcPeeringConfig vpcName */
                    vpcName?: (string|null);

                    /** VpcPeeringConfig subnet */
                    subnet?: (string|null);
                }

                /** Represents a VpcPeeringConfig. */
                class VpcPeeringConfig implements IVpcPeeringConfig {

                    /**
                     * Constructs a new VpcPeeringConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IVpcPeeringConfig);

                    /** VpcPeeringConfig vpcName. */
                    public vpcName: string;

                    /** VpcPeeringConfig subnet. */
                    public subnet: string;

                    /**
                     * Creates a new VpcPeeringConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VpcPeeringConfig instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IVpcPeeringConfig): google.cloud.datastream.v1alpha1.VpcPeeringConfig;

                    /**
                     * Encodes the specified VpcPeeringConfig message. Does not implicitly {@link google.cloud.datastream.v1alpha1.VpcPeeringConfig.verify|verify} messages.
                     * @param message VpcPeeringConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IVpcPeeringConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VpcPeeringConfig message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.VpcPeeringConfig.verify|verify} messages.
                     * @param message VpcPeeringConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IVpcPeeringConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VpcPeeringConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VpcPeeringConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.VpcPeeringConfig;

                    /**
                     * Decodes a VpcPeeringConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VpcPeeringConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.VpcPeeringConfig;

                    /**
                     * Verifies a VpcPeeringConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VpcPeeringConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VpcPeeringConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.VpcPeeringConfig;

                    /**
                     * Creates a plain object from a VpcPeeringConfig message. Also converts values to other types if specified.
                     * @param message VpcPeeringConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.VpcPeeringConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VpcPeeringConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PrivateConnection. */
                interface IPrivateConnection {

                    /** PrivateConnection name */
                    name?: (string|null);

                    /** PrivateConnection createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateConnection updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateConnection labels */
                    labels?: ({ [k: string]: string }|null);

                    /** PrivateConnection displayName */
                    displayName?: (string|null);

                    /** PrivateConnection state */
                    state?: (google.cloud.datastream.v1alpha1.PrivateConnection.State|keyof typeof google.cloud.datastream.v1alpha1.PrivateConnection.State|null);

                    /** PrivateConnection error */
                    error?: (google.cloud.datastream.v1alpha1.IError|null);

                    /** PrivateConnection vpcPeeringConfig */
                    vpcPeeringConfig?: (google.cloud.datastream.v1alpha1.IVpcPeeringConfig|null);
                }

                /** Represents a PrivateConnection. */
                class PrivateConnection implements IPrivateConnection {

                    /**
                     * Constructs a new PrivateConnection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IPrivateConnection);

                    /** PrivateConnection name. */
                    public name: string;

                    /** PrivateConnection createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateConnection updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateConnection labels. */
                    public labels: { [k: string]: string };

                    /** PrivateConnection displayName. */
                    public displayName: string;

                    /** PrivateConnection state. */
                    public state: (google.cloud.datastream.v1alpha1.PrivateConnection.State|keyof typeof google.cloud.datastream.v1alpha1.PrivateConnection.State);

                    /** PrivateConnection error. */
                    public error?: (google.cloud.datastream.v1alpha1.IError|null);

                    /** PrivateConnection vpcPeeringConfig. */
                    public vpcPeeringConfig?: (google.cloud.datastream.v1alpha1.IVpcPeeringConfig|null);

                    /**
                     * Creates a new PrivateConnection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PrivateConnection instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IPrivateConnection): google.cloud.datastream.v1alpha1.PrivateConnection;

                    /**
                     * Encodes the specified PrivateConnection message. Does not implicitly {@link google.cloud.datastream.v1alpha1.PrivateConnection.verify|verify} messages.
                     * @param message PrivateConnection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IPrivateConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PrivateConnection message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.PrivateConnection.verify|verify} messages.
                     * @param message PrivateConnection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IPrivateConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PrivateConnection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PrivateConnection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.PrivateConnection;

                    /**
                     * Decodes a PrivateConnection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PrivateConnection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.PrivateConnection;

                    /**
                     * Verifies a PrivateConnection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PrivateConnection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PrivateConnection
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.PrivateConnection;

                    /**
                     * Creates a plain object from a PrivateConnection message. Also converts values to other types if specified.
                     * @param message PrivateConnection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.PrivateConnection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PrivateConnection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PrivateConnection {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        CREATED = 2,
                        FAILED = 3
                    }
                }

                /** Properties of a PrivateConnectivity. */
                interface IPrivateConnectivity {

                    /** PrivateConnectivity privateConnectionName */
                    privateConnectionName?: (string|null);
                }

                /** Represents a PrivateConnectivity. */
                class PrivateConnectivity implements IPrivateConnectivity {

                    /**
                     * Constructs a new PrivateConnectivity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IPrivateConnectivity);

                    /** PrivateConnectivity privateConnectionName. */
                    public privateConnectionName: string;

                    /**
                     * Creates a new PrivateConnectivity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PrivateConnectivity instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IPrivateConnectivity): google.cloud.datastream.v1alpha1.PrivateConnectivity;

                    /**
                     * Encodes the specified PrivateConnectivity message. Does not implicitly {@link google.cloud.datastream.v1alpha1.PrivateConnectivity.verify|verify} messages.
                     * @param message PrivateConnectivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IPrivateConnectivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PrivateConnectivity message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.PrivateConnectivity.verify|verify} messages.
                     * @param message PrivateConnectivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IPrivateConnectivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PrivateConnectivity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PrivateConnectivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.PrivateConnectivity;

                    /**
                     * Decodes a PrivateConnectivity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PrivateConnectivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.PrivateConnectivity;

                    /**
                     * Verifies a PrivateConnectivity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PrivateConnectivity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PrivateConnectivity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.PrivateConnectivity;

                    /**
                     * Creates a plain object from a PrivateConnectivity message. Also converts values to other types if specified.
                     * @param message PrivateConnectivity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.PrivateConnectivity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PrivateConnectivity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Route. */
                interface IRoute {

                    /** Route name */
                    name?: (string|null);

                    /** Route createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Route updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Route labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Route displayName */
                    displayName?: (string|null);

                    /** Route destinationAddress */
                    destinationAddress?: (string|null);

                    /** Route destinationPort */
                    destinationPort?: (number|null);
                }

                /** Represents a Route. */
                class Route implements IRoute {

                    /**
                     * Constructs a new Route.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IRoute);

                    /** Route name. */
                    public name: string;

                    /** Route createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Route updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Route labels. */
                    public labels: { [k: string]: string };

                    /** Route displayName. */
                    public displayName: string;

                    /** Route destinationAddress. */
                    public destinationAddress: string;

                    /** Route destinationPort. */
                    public destinationPort: number;

                    /**
                     * Creates a new Route instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Route instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IRoute): google.cloud.datastream.v1alpha1.Route;

                    /**
                     * Encodes the specified Route message. Does not implicitly {@link google.cloud.datastream.v1alpha1.Route.verify|verify} messages.
                     * @param message Route message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Route message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.Route.verify|verify} messages.
                     * @param message Route message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Route message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Route
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.Route;

                    /**
                     * Decodes a Route message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Route
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.Route;

                    /**
                     * Verifies a Route message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Route message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Route
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.Route;

                    /**
                     * Creates a plain object from a Route message. Also converts values to other types if specified.
                     * @param message Route
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.Route, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Route to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MysqlSslConfig. */
                interface IMysqlSslConfig {

                    /** MysqlSslConfig clientKey */
                    clientKey?: (string|null);

                    /** MysqlSslConfig clientKeySet */
                    clientKeySet?: (boolean|null);

                    /** MysqlSslConfig clientCertificate */
                    clientCertificate?: (string|null);

                    /** MysqlSslConfig clientCertificateSet */
                    clientCertificateSet?: (boolean|null);

                    /** MysqlSslConfig caCertificate */
                    caCertificate?: (string|null);

                    /** MysqlSslConfig caCertificateSet */
                    caCertificateSet?: (boolean|null);
                }

                /** Represents a MysqlSslConfig. */
                class MysqlSslConfig implements IMysqlSslConfig {

                    /**
                     * Constructs a new MysqlSslConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IMysqlSslConfig);

                    /** MysqlSslConfig clientKey. */
                    public clientKey: string;

                    /** MysqlSslConfig clientKeySet. */
                    public clientKeySet: boolean;

                    /** MysqlSslConfig clientCertificate. */
                    public clientCertificate: string;

                    /** MysqlSslConfig clientCertificateSet. */
                    public clientCertificateSet: boolean;

                    /** MysqlSslConfig caCertificate. */
                    public caCertificate: string;

                    /** MysqlSslConfig caCertificateSet. */
                    public caCertificateSet: boolean;

                    /**
                     * Creates a new MysqlSslConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MysqlSslConfig instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IMysqlSslConfig): google.cloud.datastream.v1alpha1.MysqlSslConfig;

                    /**
                     * Encodes the specified MysqlSslConfig message. Does not implicitly {@link google.cloud.datastream.v1alpha1.MysqlSslConfig.verify|verify} messages.
                     * @param message MysqlSslConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IMysqlSslConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MysqlSslConfig message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.MysqlSslConfig.verify|verify} messages.
                     * @param message MysqlSslConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IMysqlSslConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MysqlSslConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MysqlSslConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.MysqlSslConfig;

                    /**
                     * Decodes a MysqlSslConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MysqlSslConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.MysqlSslConfig;

                    /**
                     * Verifies a MysqlSslConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MysqlSslConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MysqlSslConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.MysqlSslConfig;

                    /**
                     * Creates a plain object from a MysqlSslConfig message. Also converts values to other types if specified.
                     * @param message MysqlSslConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.MysqlSslConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MysqlSslConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConnectionProfile. */
                interface IConnectionProfile {

                    /** ConnectionProfile name */
                    name?: (string|null);

                    /** ConnectionProfile createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectionProfile updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectionProfile labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ConnectionProfile displayName */
                    displayName?: (string|null);

                    /** ConnectionProfile oracleProfile */
                    oracleProfile?: (google.cloud.datastream.v1alpha1.IOracleProfile|null);

                    /** ConnectionProfile gcsProfile */
                    gcsProfile?: (google.cloud.datastream.v1alpha1.IGcsProfile|null);

                    /** ConnectionProfile mysqlProfile */
                    mysqlProfile?: (google.cloud.datastream.v1alpha1.IMysqlProfile|null);

                    /** ConnectionProfile noConnectivity */
                    noConnectivity?: (google.cloud.datastream.v1alpha1.INoConnectivitySettings|null);

                    /** ConnectionProfile staticServiceIpConnectivity */
                    staticServiceIpConnectivity?: (google.cloud.datastream.v1alpha1.IStaticServiceIpConnectivity|null);

                    /** ConnectionProfile forwardSshConnectivity */
                    forwardSshConnectivity?: (google.cloud.datastream.v1alpha1.IForwardSshTunnelConnectivity|null);

                    /** ConnectionProfile privateConnectivity */
                    privateConnectivity?: (google.cloud.datastream.v1alpha1.IPrivateConnectivity|null);
                }

                /** Represents a ConnectionProfile. */
                class ConnectionProfile implements IConnectionProfile {

                    /**
                     * Constructs a new ConnectionProfile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IConnectionProfile);

                    /** ConnectionProfile name. */
                    public name: string;

                    /** ConnectionProfile createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectionProfile updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectionProfile labels. */
                    public labels: { [k: string]: string };

                    /** ConnectionProfile displayName. */
                    public displayName: string;

                    /** ConnectionProfile oracleProfile. */
                    public oracleProfile?: (google.cloud.datastream.v1alpha1.IOracleProfile|null);

                    /** ConnectionProfile gcsProfile. */
                    public gcsProfile?: (google.cloud.datastream.v1alpha1.IGcsProfile|null);

                    /** ConnectionProfile mysqlProfile. */
                    public mysqlProfile?: (google.cloud.datastream.v1alpha1.IMysqlProfile|null);

                    /** ConnectionProfile noConnectivity. */
                    public noConnectivity?: (google.cloud.datastream.v1alpha1.INoConnectivitySettings|null);

                    /** ConnectionProfile staticServiceIpConnectivity. */
                    public staticServiceIpConnectivity?: (google.cloud.datastream.v1alpha1.IStaticServiceIpConnectivity|null);

                    /** ConnectionProfile forwardSshConnectivity. */
                    public forwardSshConnectivity?: (google.cloud.datastream.v1alpha1.IForwardSshTunnelConnectivity|null);

                    /** ConnectionProfile privateConnectivity. */
                    public privateConnectivity?: (google.cloud.datastream.v1alpha1.IPrivateConnectivity|null);

                    /** ConnectionProfile profile. */
                    public profile?: ("oracleProfile"|"gcsProfile"|"mysqlProfile");

                    /** ConnectionProfile connectivity. */
                    public connectivity?: ("noConnectivity"|"staticServiceIpConnectivity"|"forwardSshConnectivity"|"privateConnectivity");

                    /**
                     * Creates a new ConnectionProfile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectionProfile instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IConnectionProfile): google.cloud.datastream.v1alpha1.ConnectionProfile;

                    /**
                     * Encodes the specified ConnectionProfile message. Does not implicitly {@link google.cloud.datastream.v1alpha1.ConnectionProfile.verify|verify} messages.
                     * @param message ConnectionProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IConnectionProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConnectionProfile message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.ConnectionProfile.verify|verify} messages.
                     * @param message ConnectionProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IConnectionProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConnectionProfile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConnectionProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.ConnectionProfile;

                    /**
                     * Decodes a ConnectionProfile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConnectionProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.ConnectionProfile;

                    /**
                     * Verifies a ConnectionProfile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConnectionProfile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConnectionProfile
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.ConnectionProfile;

                    /**
                     * Creates a plain object from a ConnectionProfile message. Also converts values to other types if specified.
                     * @param message ConnectionProfile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.ConnectionProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConnectionProfile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OracleColumn. */
                interface IOracleColumn {

                    /** OracleColumn columnName */
                    columnName?: (string|null);

                    /** OracleColumn dataType */
                    dataType?: (string|null);

                    /** OracleColumn length */
                    length?: (number|null);

                    /** OracleColumn precision */
                    precision?: (number|null);

                    /** OracleColumn scale */
                    scale?: (number|null);

                    /** OracleColumn encoding */
                    encoding?: (string|null);

                    /** OracleColumn primaryKey */
                    primaryKey?: (boolean|null);

                    /** OracleColumn nullable */
                    nullable?: (boolean|null);

                    /** OracleColumn ordinalPosition */
                    ordinalPosition?: (number|null);
                }

                /** Represents an OracleColumn. */
                class OracleColumn implements IOracleColumn {

                    /**
                     * Constructs a new OracleColumn.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IOracleColumn);

                    /** OracleColumn columnName. */
                    public columnName: string;

                    /** OracleColumn dataType. */
                    public dataType: string;

                    /** OracleColumn length. */
                    public length: number;

                    /** OracleColumn precision. */
                    public precision: number;

                    /** OracleColumn scale. */
                    public scale: number;

                    /** OracleColumn encoding. */
                    public encoding: string;

                    /** OracleColumn primaryKey. */
                    public primaryKey: boolean;

                    /** OracleColumn nullable. */
                    public nullable: boolean;

                    /** OracleColumn ordinalPosition. */
                    public ordinalPosition: number;

                    /**
                     * Creates a new OracleColumn instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OracleColumn instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IOracleColumn): google.cloud.datastream.v1alpha1.OracleColumn;

                    /**
                     * Encodes the specified OracleColumn message. Does not implicitly {@link google.cloud.datastream.v1alpha1.OracleColumn.verify|verify} messages.
                     * @param message OracleColumn message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IOracleColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OracleColumn message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.OracleColumn.verify|verify} messages.
                     * @param message OracleColumn message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IOracleColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OracleColumn message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OracleColumn
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.OracleColumn;

                    /**
                     * Decodes an OracleColumn message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OracleColumn
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.OracleColumn;

                    /**
                     * Verifies an OracleColumn message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OracleColumn message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OracleColumn
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.OracleColumn;

                    /**
                     * Creates a plain object from an OracleColumn message. Also converts values to other types if specified.
                     * @param message OracleColumn
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.OracleColumn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OracleColumn to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OracleTable. */
                interface IOracleTable {

                    /** OracleTable tableName */
                    tableName?: (string|null);

                    /** OracleTable oracleColumns */
                    oracleColumns?: (google.cloud.datastream.v1alpha1.IOracleColumn[]|null);
                }

                /** Represents an OracleTable. */
                class OracleTable implements IOracleTable {

                    /**
                     * Constructs a new OracleTable.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IOracleTable);

                    /** OracleTable tableName. */
                    public tableName: string;

                    /** OracleTable oracleColumns. */
                    public oracleColumns: google.cloud.datastream.v1alpha1.IOracleColumn[];

                    /**
                     * Creates a new OracleTable instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OracleTable instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IOracleTable): google.cloud.datastream.v1alpha1.OracleTable;

                    /**
                     * Encodes the specified OracleTable message. Does not implicitly {@link google.cloud.datastream.v1alpha1.OracleTable.verify|verify} messages.
                     * @param message OracleTable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IOracleTable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OracleTable message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.OracleTable.verify|verify} messages.
                     * @param message OracleTable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IOracleTable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OracleTable message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OracleTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.OracleTable;

                    /**
                     * Decodes an OracleTable message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OracleTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.OracleTable;

                    /**
                     * Verifies an OracleTable message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OracleTable message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OracleTable
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.OracleTable;

                    /**
                     * Creates a plain object from an OracleTable message. Also converts values to other types if specified.
                     * @param message OracleTable
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.OracleTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OracleTable to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OracleSchema. */
                interface IOracleSchema {

                    /** OracleSchema schemaName */
                    schemaName?: (string|null);

                    /** OracleSchema oracleTables */
                    oracleTables?: (google.cloud.datastream.v1alpha1.IOracleTable[]|null);
                }

                /** Represents an OracleSchema. */
                class OracleSchema implements IOracleSchema {

                    /**
                     * Constructs a new OracleSchema.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IOracleSchema);

                    /** OracleSchema schemaName. */
                    public schemaName: string;

                    /** OracleSchema oracleTables. */
                    public oracleTables: google.cloud.datastream.v1alpha1.IOracleTable[];

                    /**
                     * Creates a new OracleSchema instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OracleSchema instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IOracleSchema): google.cloud.datastream.v1alpha1.OracleSchema;

                    /**
                     * Encodes the specified OracleSchema message. Does not implicitly {@link google.cloud.datastream.v1alpha1.OracleSchema.verify|verify} messages.
                     * @param message OracleSchema message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IOracleSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OracleSchema message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.OracleSchema.verify|verify} messages.
                     * @param message OracleSchema message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IOracleSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OracleSchema message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OracleSchema
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.OracleSchema;

                    /**
                     * Decodes an OracleSchema message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OracleSchema
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.OracleSchema;

                    /**
                     * Verifies an OracleSchema message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OracleSchema message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OracleSchema
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.OracleSchema;

                    /**
                     * Creates a plain object from an OracleSchema message. Also converts values to other types if specified.
                     * @param message OracleSchema
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.OracleSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OracleSchema to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OracleRdbms. */
                interface IOracleRdbms {

                    /** OracleRdbms oracleSchemas */
                    oracleSchemas?: (google.cloud.datastream.v1alpha1.IOracleSchema[]|null);
                }

                /** Represents an OracleRdbms. */
                class OracleRdbms implements IOracleRdbms {

                    /**
                     * Constructs a new OracleRdbms.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IOracleRdbms);

                    /** OracleRdbms oracleSchemas. */
                    public oracleSchemas: google.cloud.datastream.v1alpha1.IOracleSchema[];

                    /**
                     * Creates a new OracleRdbms instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OracleRdbms instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IOracleRdbms): google.cloud.datastream.v1alpha1.OracleRdbms;

                    /**
                     * Encodes the specified OracleRdbms message. Does not implicitly {@link google.cloud.datastream.v1alpha1.OracleRdbms.verify|verify} messages.
                     * @param message OracleRdbms message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IOracleRdbms, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OracleRdbms message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.OracleRdbms.verify|verify} messages.
                     * @param message OracleRdbms message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IOracleRdbms, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OracleRdbms message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OracleRdbms
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.OracleRdbms;

                    /**
                     * Decodes an OracleRdbms message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OracleRdbms
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.OracleRdbms;

                    /**
                     * Verifies an OracleRdbms message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OracleRdbms message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OracleRdbms
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.OracleRdbms;

                    /**
                     * Creates a plain object from an OracleRdbms message. Also converts values to other types if specified.
                     * @param message OracleRdbms
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.OracleRdbms, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OracleRdbms to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OracleSourceConfig. */
                interface IOracleSourceConfig {

                    /** OracleSourceConfig allowlist */
                    allowlist?: (google.cloud.datastream.v1alpha1.IOracleRdbms|null);

                    /** OracleSourceConfig rejectlist */
                    rejectlist?: (google.cloud.datastream.v1alpha1.IOracleRdbms|null);
                }

                /** Represents an OracleSourceConfig. */
                class OracleSourceConfig implements IOracleSourceConfig {

                    /**
                     * Constructs a new OracleSourceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IOracleSourceConfig);

                    /** OracleSourceConfig allowlist. */
                    public allowlist?: (google.cloud.datastream.v1alpha1.IOracleRdbms|null);

                    /** OracleSourceConfig rejectlist. */
                    public rejectlist?: (google.cloud.datastream.v1alpha1.IOracleRdbms|null);

                    /**
                     * Creates a new OracleSourceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OracleSourceConfig instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IOracleSourceConfig): google.cloud.datastream.v1alpha1.OracleSourceConfig;

                    /**
                     * Encodes the specified OracleSourceConfig message. Does not implicitly {@link google.cloud.datastream.v1alpha1.OracleSourceConfig.verify|verify} messages.
                     * @param message OracleSourceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IOracleSourceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OracleSourceConfig message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.OracleSourceConfig.verify|verify} messages.
                     * @param message OracleSourceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IOracleSourceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OracleSourceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OracleSourceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.OracleSourceConfig;

                    /**
                     * Decodes an OracleSourceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OracleSourceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.OracleSourceConfig;

                    /**
                     * Verifies an OracleSourceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OracleSourceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OracleSourceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.OracleSourceConfig;

                    /**
                     * Creates a plain object from an OracleSourceConfig message. Also converts values to other types if specified.
                     * @param message OracleSourceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.OracleSourceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OracleSourceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MysqlColumn. */
                interface IMysqlColumn {

                    /** MysqlColumn columnName */
                    columnName?: (string|null);

                    /** MysqlColumn dataType */
                    dataType?: (string|null);

                    /** MysqlColumn length */
                    length?: (number|null);

                    /** MysqlColumn collation */
                    collation?: (string|null);

                    /** MysqlColumn primaryKey */
                    primaryKey?: (boolean|null);

                    /** MysqlColumn nullable */
                    nullable?: (boolean|null);

                    /** MysqlColumn ordinalPosition */
                    ordinalPosition?: (number|null);
                }

                /** Represents a MysqlColumn. */
                class MysqlColumn implements IMysqlColumn {

                    /**
                     * Constructs a new MysqlColumn.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IMysqlColumn);

                    /** MysqlColumn columnName. */
                    public columnName: string;

                    /** MysqlColumn dataType. */
                    public dataType: string;

                    /** MysqlColumn length. */
                    public length: number;

                    /** MysqlColumn collation. */
                    public collation: string;

                    /** MysqlColumn primaryKey. */
                    public primaryKey: boolean;

                    /** MysqlColumn nullable. */
                    public nullable: boolean;

                    /** MysqlColumn ordinalPosition. */
                    public ordinalPosition: number;

                    /**
                     * Creates a new MysqlColumn instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MysqlColumn instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IMysqlColumn): google.cloud.datastream.v1alpha1.MysqlColumn;

                    /**
                     * Encodes the specified MysqlColumn message. Does not implicitly {@link google.cloud.datastream.v1alpha1.MysqlColumn.verify|verify} messages.
                     * @param message MysqlColumn message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IMysqlColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MysqlColumn message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.MysqlColumn.verify|verify} messages.
                     * @param message MysqlColumn message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IMysqlColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MysqlColumn message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MysqlColumn
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.MysqlColumn;

                    /**
                     * Decodes a MysqlColumn message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MysqlColumn
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.MysqlColumn;

                    /**
                     * Verifies a MysqlColumn message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MysqlColumn message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MysqlColumn
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.MysqlColumn;

                    /**
                     * Creates a plain object from a MysqlColumn message. Also converts values to other types if specified.
                     * @param message MysqlColumn
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.MysqlColumn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MysqlColumn to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MysqlTable. */
                interface IMysqlTable {

                    /** MysqlTable tableName */
                    tableName?: (string|null);

                    /** MysqlTable mysqlColumns */
                    mysqlColumns?: (google.cloud.datastream.v1alpha1.IMysqlColumn[]|null);
                }

                /** Represents a MysqlTable. */
                class MysqlTable implements IMysqlTable {

                    /**
                     * Constructs a new MysqlTable.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IMysqlTable);

                    /** MysqlTable tableName. */
                    public tableName: string;

                    /** MysqlTable mysqlColumns. */
                    public mysqlColumns: google.cloud.datastream.v1alpha1.IMysqlColumn[];

                    /**
                     * Creates a new MysqlTable instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MysqlTable instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IMysqlTable): google.cloud.datastream.v1alpha1.MysqlTable;

                    /**
                     * Encodes the specified MysqlTable message. Does not implicitly {@link google.cloud.datastream.v1alpha1.MysqlTable.verify|verify} messages.
                     * @param message MysqlTable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IMysqlTable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MysqlTable message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.MysqlTable.verify|verify} messages.
                     * @param message MysqlTable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IMysqlTable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MysqlTable message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MysqlTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.MysqlTable;

                    /**
                     * Decodes a MysqlTable message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MysqlTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.MysqlTable;

                    /**
                     * Verifies a MysqlTable message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MysqlTable message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MysqlTable
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.MysqlTable;

                    /**
                     * Creates a plain object from a MysqlTable message. Also converts values to other types if specified.
                     * @param message MysqlTable
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.MysqlTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MysqlTable to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MysqlDatabase. */
                interface IMysqlDatabase {

                    /** MysqlDatabase databaseName */
                    databaseName?: (string|null);

                    /** MysqlDatabase mysqlTables */
                    mysqlTables?: (google.cloud.datastream.v1alpha1.IMysqlTable[]|null);
                }

                /** Represents a MysqlDatabase. */
                class MysqlDatabase implements IMysqlDatabase {

                    /**
                     * Constructs a new MysqlDatabase.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IMysqlDatabase);

                    /** MysqlDatabase databaseName. */
                    public databaseName: string;

                    /** MysqlDatabase mysqlTables. */
                    public mysqlTables: google.cloud.datastream.v1alpha1.IMysqlTable[];

                    /**
                     * Creates a new MysqlDatabase instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MysqlDatabase instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IMysqlDatabase): google.cloud.datastream.v1alpha1.MysqlDatabase;

                    /**
                     * Encodes the specified MysqlDatabase message. Does not implicitly {@link google.cloud.datastream.v1alpha1.MysqlDatabase.verify|verify} messages.
                     * @param message MysqlDatabase message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IMysqlDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MysqlDatabase message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.MysqlDatabase.verify|verify} messages.
                     * @param message MysqlDatabase message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IMysqlDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MysqlDatabase message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MysqlDatabase
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.MysqlDatabase;

                    /**
                     * Decodes a MysqlDatabase message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MysqlDatabase
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.MysqlDatabase;

                    /**
                     * Verifies a MysqlDatabase message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MysqlDatabase message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MysqlDatabase
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.MysqlDatabase;

                    /**
                     * Creates a plain object from a MysqlDatabase message. Also converts values to other types if specified.
                     * @param message MysqlDatabase
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.MysqlDatabase, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MysqlDatabase to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MysqlRdbms. */
                interface IMysqlRdbms {

                    /** MysqlRdbms mysqlDatabases */
                    mysqlDatabases?: (google.cloud.datastream.v1alpha1.IMysqlDatabase[]|null);
                }

                /** Represents a MysqlRdbms. */
                class MysqlRdbms implements IMysqlRdbms {

                    /**
                     * Constructs a new MysqlRdbms.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IMysqlRdbms);

                    /** MysqlRdbms mysqlDatabases. */
                    public mysqlDatabases: google.cloud.datastream.v1alpha1.IMysqlDatabase[];

                    /**
                     * Creates a new MysqlRdbms instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MysqlRdbms instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IMysqlRdbms): google.cloud.datastream.v1alpha1.MysqlRdbms;

                    /**
                     * Encodes the specified MysqlRdbms message. Does not implicitly {@link google.cloud.datastream.v1alpha1.MysqlRdbms.verify|verify} messages.
                     * @param message MysqlRdbms message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IMysqlRdbms, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MysqlRdbms message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.MysqlRdbms.verify|verify} messages.
                     * @param message MysqlRdbms message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IMysqlRdbms, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MysqlRdbms message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MysqlRdbms
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.MysqlRdbms;

                    /**
                     * Decodes a MysqlRdbms message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MysqlRdbms
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.MysqlRdbms;

                    /**
                     * Verifies a MysqlRdbms message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MysqlRdbms message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MysqlRdbms
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.MysqlRdbms;

                    /**
                     * Creates a plain object from a MysqlRdbms message. Also converts values to other types if specified.
                     * @param message MysqlRdbms
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.MysqlRdbms, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MysqlRdbms to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MysqlSourceConfig. */
                interface IMysqlSourceConfig {

                    /** MysqlSourceConfig allowlist */
                    allowlist?: (google.cloud.datastream.v1alpha1.IMysqlRdbms|null);

                    /** MysqlSourceConfig rejectlist */
                    rejectlist?: (google.cloud.datastream.v1alpha1.IMysqlRdbms|null);
                }

                /** Represents a MysqlSourceConfig. */
                class MysqlSourceConfig implements IMysqlSourceConfig {

                    /**
                     * Constructs a new MysqlSourceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IMysqlSourceConfig);

                    /** MysqlSourceConfig allowlist. */
                    public allowlist?: (google.cloud.datastream.v1alpha1.IMysqlRdbms|null);

                    /** MysqlSourceConfig rejectlist. */
                    public rejectlist?: (google.cloud.datastream.v1alpha1.IMysqlRdbms|null);

                    /**
                     * Creates a new MysqlSourceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MysqlSourceConfig instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IMysqlSourceConfig): google.cloud.datastream.v1alpha1.MysqlSourceConfig;

                    /**
                     * Encodes the specified MysqlSourceConfig message. Does not implicitly {@link google.cloud.datastream.v1alpha1.MysqlSourceConfig.verify|verify} messages.
                     * @param message MysqlSourceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IMysqlSourceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MysqlSourceConfig message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.MysqlSourceConfig.verify|verify} messages.
                     * @param message MysqlSourceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IMysqlSourceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MysqlSourceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MysqlSourceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.MysqlSourceConfig;

                    /**
                     * Decodes a MysqlSourceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MysqlSourceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.MysqlSourceConfig;

                    /**
                     * Verifies a MysqlSourceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MysqlSourceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MysqlSourceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.MysqlSourceConfig;

                    /**
                     * Creates a plain object from a MysqlSourceConfig message. Also converts values to other types if specified.
                     * @param message MysqlSourceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.MysqlSourceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MysqlSourceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SourceConfig. */
                interface ISourceConfig {

                    /** SourceConfig sourceConnectionProfileName */
                    sourceConnectionProfileName?: (string|null);

                    /** SourceConfig oracleSourceConfig */
                    oracleSourceConfig?: (google.cloud.datastream.v1alpha1.IOracleSourceConfig|null);

                    /** SourceConfig mysqlSourceConfig */
                    mysqlSourceConfig?: (google.cloud.datastream.v1alpha1.IMysqlSourceConfig|null);
                }

                /** Represents a SourceConfig. */
                class SourceConfig implements ISourceConfig {

                    /**
                     * Constructs a new SourceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.ISourceConfig);

                    /** SourceConfig sourceConnectionProfileName. */
                    public sourceConnectionProfileName: string;

                    /** SourceConfig oracleSourceConfig. */
                    public oracleSourceConfig?: (google.cloud.datastream.v1alpha1.IOracleSourceConfig|null);

                    /** SourceConfig mysqlSourceConfig. */
                    public mysqlSourceConfig?: (google.cloud.datastream.v1alpha1.IMysqlSourceConfig|null);

                    /** SourceConfig sourceStreamConfig. */
                    public sourceStreamConfig?: ("oracleSourceConfig"|"mysqlSourceConfig");

                    /**
                     * Creates a new SourceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SourceConfig instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.ISourceConfig): google.cloud.datastream.v1alpha1.SourceConfig;

                    /**
                     * Encodes the specified SourceConfig message. Does not implicitly {@link google.cloud.datastream.v1alpha1.SourceConfig.verify|verify} messages.
                     * @param message SourceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.ISourceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SourceConfig message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.SourceConfig.verify|verify} messages.
                     * @param message SourceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.ISourceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SourceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SourceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.SourceConfig;

                    /**
                     * Decodes a SourceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SourceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.SourceConfig;

                    /**
                     * Verifies a SourceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SourceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SourceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.SourceConfig;

                    /**
                     * Creates a plain object from a SourceConfig message. Also converts values to other types if specified.
                     * @param message SourceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.SourceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SourceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AvroFileFormat. */
                interface IAvroFileFormat {
                }

                /** Represents an AvroFileFormat. */
                class AvroFileFormat implements IAvroFileFormat {

                    /**
                     * Constructs a new AvroFileFormat.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IAvroFileFormat);

                    /**
                     * Creates a new AvroFileFormat instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AvroFileFormat instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IAvroFileFormat): google.cloud.datastream.v1alpha1.AvroFileFormat;

                    /**
                     * Encodes the specified AvroFileFormat message. Does not implicitly {@link google.cloud.datastream.v1alpha1.AvroFileFormat.verify|verify} messages.
                     * @param message AvroFileFormat message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IAvroFileFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AvroFileFormat message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.AvroFileFormat.verify|verify} messages.
                     * @param message AvroFileFormat message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IAvroFileFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AvroFileFormat message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AvroFileFormat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.AvroFileFormat;

                    /**
                     * Decodes an AvroFileFormat message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AvroFileFormat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.AvroFileFormat;

                    /**
                     * Verifies an AvroFileFormat message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AvroFileFormat message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AvroFileFormat
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.AvroFileFormat;

                    /**
                     * Creates a plain object from an AvroFileFormat message. Also converts values to other types if specified.
                     * @param message AvroFileFormat
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.AvroFileFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AvroFileFormat to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** GcsFileFormat enum. */
                enum GcsFileFormat {
                    GCS_FILE_FORMAT_UNSPECIFIED = 0,
                    AVRO = 1
                }

                /** SchemaFileFormat enum. */
                enum SchemaFileFormat {
                    SCHEMA_FILE_FORMAT_UNSPECIFIED = 0,
                    NO_SCHEMA_FILE = 1,
                    AVRO_SCHEMA_FILE = 2
                }

                /** Properties of a JsonFileFormat. */
                interface IJsonFileFormat {

                    /** JsonFileFormat schemaFileFormat */
                    schemaFileFormat?: (google.cloud.datastream.v1alpha1.SchemaFileFormat|keyof typeof google.cloud.datastream.v1alpha1.SchemaFileFormat|null);

                    /** JsonFileFormat compression */
                    compression?: (google.cloud.datastream.v1alpha1.JsonFileFormat.JsonCompression|keyof typeof google.cloud.datastream.v1alpha1.JsonFileFormat.JsonCompression|null);
                }

                /** Represents a JsonFileFormat. */
                class JsonFileFormat implements IJsonFileFormat {

                    /**
                     * Constructs a new JsonFileFormat.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IJsonFileFormat);

                    /** JsonFileFormat schemaFileFormat. */
                    public schemaFileFormat: (google.cloud.datastream.v1alpha1.SchemaFileFormat|keyof typeof google.cloud.datastream.v1alpha1.SchemaFileFormat);

                    /** JsonFileFormat compression. */
                    public compression: (google.cloud.datastream.v1alpha1.JsonFileFormat.JsonCompression|keyof typeof google.cloud.datastream.v1alpha1.JsonFileFormat.JsonCompression);

                    /**
                     * Creates a new JsonFileFormat instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JsonFileFormat instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IJsonFileFormat): google.cloud.datastream.v1alpha1.JsonFileFormat;

                    /**
                     * Encodes the specified JsonFileFormat message. Does not implicitly {@link google.cloud.datastream.v1alpha1.JsonFileFormat.verify|verify} messages.
                     * @param message JsonFileFormat message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IJsonFileFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JsonFileFormat message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.JsonFileFormat.verify|verify} messages.
                     * @param message JsonFileFormat message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IJsonFileFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JsonFileFormat message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JsonFileFormat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.JsonFileFormat;

                    /**
                     * Decodes a JsonFileFormat message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JsonFileFormat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.JsonFileFormat;

                    /**
                     * Verifies a JsonFileFormat message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JsonFileFormat message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JsonFileFormat
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.JsonFileFormat;

                    /**
                     * Creates a plain object from a JsonFileFormat message. Also converts values to other types if specified.
                     * @param message JsonFileFormat
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.JsonFileFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JsonFileFormat to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace JsonFileFormat {

                    /** JsonCompression enum. */
                    enum JsonCompression {
                        JSON_COMPRESSION_UNSPECIFIED = 0,
                        NO_COMPRESSION = 1,
                        GZIP = 2
                    }
                }

                /** Properties of a GcsDestinationConfig. */
                interface IGcsDestinationConfig {

                    /** GcsDestinationConfig path */
                    path?: (string|null);

                    /** GcsDestinationConfig gcsFileFormat */
                    gcsFileFormat?: (google.cloud.datastream.v1alpha1.GcsFileFormat|keyof typeof google.cloud.datastream.v1alpha1.GcsFileFormat|null);

                    /** GcsDestinationConfig fileRotationMb */
                    fileRotationMb?: (number|null);

                    /** GcsDestinationConfig fileRotationInterval */
                    fileRotationInterval?: (google.protobuf.IDuration|null);

                    /** GcsDestinationConfig avroFileFormat */
                    avroFileFormat?: (google.cloud.datastream.v1alpha1.IAvroFileFormat|null);

                    /** GcsDestinationConfig jsonFileFormat */
                    jsonFileFormat?: (google.cloud.datastream.v1alpha1.IJsonFileFormat|null);
                }

                /** Represents a GcsDestinationConfig. */
                class GcsDestinationConfig implements IGcsDestinationConfig {

                    /**
                     * Constructs a new GcsDestinationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IGcsDestinationConfig);

                    /** GcsDestinationConfig path. */
                    public path: string;

                    /** GcsDestinationConfig gcsFileFormat. */
                    public gcsFileFormat: (google.cloud.datastream.v1alpha1.GcsFileFormat|keyof typeof google.cloud.datastream.v1alpha1.GcsFileFormat);

                    /** GcsDestinationConfig fileRotationMb. */
                    public fileRotationMb: number;

                    /** GcsDestinationConfig fileRotationInterval. */
                    public fileRotationInterval?: (google.protobuf.IDuration|null);

                    /** GcsDestinationConfig avroFileFormat. */
                    public avroFileFormat?: (google.cloud.datastream.v1alpha1.IAvroFileFormat|null);

                    /** GcsDestinationConfig jsonFileFormat. */
                    public jsonFileFormat?: (google.cloud.datastream.v1alpha1.IJsonFileFormat|null);

                    /** GcsDestinationConfig fileFormat. */
                    public fileFormat?: ("avroFileFormat"|"jsonFileFormat");

                    /**
                     * Creates a new GcsDestinationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsDestinationConfig instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IGcsDestinationConfig): google.cloud.datastream.v1alpha1.GcsDestinationConfig;

                    /**
                     * Encodes the specified GcsDestinationConfig message. Does not implicitly {@link google.cloud.datastream.v1alpha1.GcsDestinationConfig.verify|verify} messages.
                     * @param message GcsDestinationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IGcsDestinationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsDestinationConfig message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.GcsDestinationConfig.verify|verify} messages.
                     * @param message GcsDestinationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IGcsDestinationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsDestinationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsDestinationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.GcsDestinationConfig;

                    /**
                     * Decodes a GcsDestinationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsDestinationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.GcsDestinationConfig;

                    /**
                     * Verifies a GcsDestinationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsDestinationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsDestinationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.GcsDestinationConfig;

                    /**
                     * Creates a plain object from a GcsDestinationConfig message. Also converts values to other types if specified.
                     * @param message GcsDestinationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.GcsDestinationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsDestinationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DestinationConfig. */
                interface IDestinationConfig {

                    /** DestinationConfig destinationConnectionProfileName */
                    destinationConnectionProfileName?: (string|null);

                    /** DestinationConfig gcsDestinationConfig */
                    gcsDestinationConfig?: (google.cloud.datastream.v1alpha1.IGcsDestinationConfig|null);
                }

                /** Represents a DestinationConfig. */
                class DestinationConfig implements IDestinationConfig {

                    /**
                     * Constructs a new DestinationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IDestinationConfig);

                    /** DestinationConfig destinationConnectionProfileName. */
                    public destinationConnectionProfileName: string;

                    /** DestinationConfig gcsDestinationConfig. */
                    public gcsDestinationConfig?: (google.cloud.datastream.v1alpha1.IGcsDestinationConfig|null);

                    /** DestinationConfig destinationStreamConfig. */
                    public destinationStreamConfig?: "gcsDestinationConfig";

                    /**
                     * Creates a new DestinationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DestinationConfig instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IDestinationConfig): google.cloud.datastream.v1alpha1.DestinationConfig;

                    /**
                     * Encodes the specified DestinationConfig message. Does not implicitly {@link google.cloud.datastream.v1alpha1.DestinationConfig.verify|verify} messages.
                     * @param message DestinationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IDestinationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DestinationConfig message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.DestinationConfig.verify|verify} messages.
                     * @param message DestinationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IDestinationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DestinationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DestinationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.DestinationConfig;

                    /**
                     * Decodes a DestinationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DestinationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.DestinationConfig;

                    /**
                     * Verifies a DestinationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DestinationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DestinationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.DestinationConfig;

                    /**
                     * Creates a plain object from a DestinationConfig message. Also converts values to other types if specified.
                     * @param message DestinationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.DestinationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DestinationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Stream. */
                interface IStream {

                    /** Stream name */
                    name?: (string|null);

                    /** Stream createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Stream updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Stream labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Stream displayName */
                    displayName?: (string|null);

                    /** Stream sourceConfig */
                    sourceConfig?: (google.cloud.datastream.v1alpha1.ISourceConfig|null);

                    /** Stream destinationConfig */
                    destinationConfig?: (google.cloud.datastream.v1alpha1.IDestinationConfig|null);

                    /** Stream state */
                    state?: (google.cloud.datastream.v1alpha1.Stream.State|keyof typeof google.cloud.datastream.v1alpha1.Stream.State|null);

                    /** Stream backfillAll */
                    backfillAll?: (google.cloud.datastream.v1alpha1.Stream.IBackfillAllStrategy|null);

                    /** Stream backfillNone */
                    backfillNone?: (google.cloud.datastream.v1alpha1.Stream.IBackfillNoneStrategy|null);

                    /** Stream errors */
                    errors?: (google.cloud.datastream.v1alpha1.IError[]|null);
                }

                /** Represents a Stream. */
                class Stream implements IStream {

                    /**
                     * Constructs a new Stream.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IStream);

                    /** Stream name. */
                    public name: string;

                    /** Stream createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Stream updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Stream labels. */
                    public labels: { [k: string]: string };

                    /** Stream displayName. */
                    public displayName: string;

                    /** Stream sourceConfig. */
                    public sourceConfig?: (google.cloud.datastream.v1alpha1.ISourceConfig|null);

                    /** Stream destinationConfig. */
                    public destinationConfig?: (google.cloud.datastream.v1alpha1.IDestinationConfig|null);

                    /** Stream state. */
                    public state: (google.cloud.datastream.v1alpha1.Stream.State|keyof typeof google.cloud.datastream.v1alpha1.Stream.State);

                    /** Stream backfillAll. */
                    public backfillAll?: (google.cloud.datastream.v1alpha1.Stream.IBackfillAllStrategy|null);

                    /** Stream backfillNone. */
                    public backfillNone?: (google.cloud.datastream.v1alpha1.Stream.IBackfillNoneStrategy|null);

                    /** Stream errors. */
                    public errors: google.cloud.datastream.v1alpha1.IError[];

                    /** Stream backfillStrategy. */
                    public backfillStrategy?: ("backfillAll"|"backfillNone");

                    /**
                     * Creates a new Stream instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Stream instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IStream): google.cloud.datastream.v1alpha1.Stream;

                    /**
                     * Encodes the specified Stream message. Does not implicitly {@link google.cloud.datastream.v1alpha1.Stream.verify|verify} messages.
                     * @param message Stream message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IStream, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Stream message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.Stream.verify|verify} messages.
                     * @param message Stream message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IStream, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Stream message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Stream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.Stream;

                    /**
                     * Decodes a Stream message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Stream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.Stream;

                    /**
                     * Verifies a Stream message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Stream message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Stream
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.Stream;

                    /**
                     * Creates a plain object from a Stream message. Also converts values to other types if specified.
                     * @param message Stream
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.Stream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Stream to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Stream {

                    /** Properties of a BackfillAllStrategy. */
                    interface IBackfillAllStrategy {

                        /** BackfillAllStrategy oracleExcludedObjects */
                        oracleExcludedObjects?: (google.cloud.datastream.v1alpha1.IOracleRdbms|null);

                        /** BackfillAllStrategy mysqlExcludedObjects */
                        mysqlExcludedObjects?: (google.cloud.datastream.v1alpha1.IMysqlRdbms|null);
                    }

                    /** Represents a BackfillAllStrategy. */
                    class BackfillAllStrategy implements IBackfillAllStrategy {

                        /**
                         * Constructs a new BackfillAllStrategy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.datastream.v1alpha1.Stream.IBackfillAllStrategy);

                        /** BackfillAllStrategy oracleExcludedObjects. */
                        public oracleExcludedObjects?: (google.cloud.datastream.v1alpha1.IOracleRdbms|null);

                        /** BackfillAllStrategy mysqlExcludedObjects. */
                        public mysqlExcludedObjects?: (google.cloud.datastream.v1alpha1.IMysqlRdbms|null);

                        /** BackfillAllStrategy excludedObjects. */
                        public excludedObjects?: ("oracleExcludedObjects"|"mysqlExcludedObjects");

                        /**
                         * Creates a new BackfillAllStrategy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BackfillAllStrategy instance
                         */
                        public static create(properties?: google.cloud.datastream.v1alpha1.Stream.IBackfillAllStrategy): google.cloud.datastream.v1alpha1.Stream.BackfillAllStrategy;

                        /**
                         * Encodes the specified BackfillAllStrategy message. Does not implicitly {@link google.cloud.datastream.v1alpha1.Stream.BackfillAllStrategy.verify|verify} messages.
                         * @param message BackfillAllStrategy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.datastream.v1alpha1.Stream.IBackfillAllStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BackfillAllStrategy message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.Stream.BackfillAllStrategy.verify|verify} messages.
                         * @param message BackfillAllStrategy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.datastream.v1alpha1.Stream.IBackfillAllStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BackfillAllStrategy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BackfillAllStrategy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.Stream.BackfillAllStrategy;

                        /**
                         * Decodes a BackfillAllStrategy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BackfillAllStrategy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.Stream.BackfillAllStrategy;

                        /**
                         * Verifies a BackfillAllStrategy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BackfillAllStrategy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BackfillAllStrategy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.Stream.BackfillAllStrategy;

                        /**
                         * Creates a plain object from a BackfillAllStrategy message. Also converts values to other types if specified.
                         * @param message BackfillAllStrategy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.datastream.v1alpha1.Stream.BackfillAllStrategy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BackfillAllStrategy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a BackfillNoneStrategy. */
                    interface IBackfillNoneStrategy {
                    }

                    /** Represents a BackfillNoneStrategy. */
                    class BackfillNoneStrategy implements IBackfillNoneStrategy {

                        /**
                         * Constructs a new BackfillNoneStrategy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.datastream.v1alpha1.Stream.IBackfillNoneStrategy);

                        /**
                         * Creates a new BackfillNoneStrategy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BackfillNoneStrategy instance
                         */
                        public static create(properties?: google.cloud.datastream.v1alpha1.Stream.IBackfillNoneStrategy): google.cloud.datastream.v1alpha1.Stream.BackfillNoneStrategy;

                        /**
                         * Encodes the specified BackfillNoneStrategy message. Does not implicitly {@link google.cloud.datastream.v1alpha1.Stream.BackfillNoneStrategy.verify|verify} messages.
                         * @param message BackfillNoneStrategy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.datastream.v1alpha1.Stream.IBackfillNoneStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BackfillNoneStrategy message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.Stream.BackfillNoneStrategy.verify|verify} messages.
                         * @param message BackfillNoneStrategy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.datastream.v1alpha1.Stream.IBackfillNoneStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BackfillNoneStrategy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BackfillNoneStrategy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.Stream.BackfillNoneStrategy;

                        /**
                         * Decodes a BackfillNoneStrategy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BackfillNoneStrategy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.Stream.BackfillNoneStrategy;

                        /**
                         * Verifies a BackfillNoneStrategy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BackfillNoneStrategy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BackfillNoneStrategy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.Stream.BackfillNoneStrategy;

                        /**
                         * Creates a plain object from a BackfillNoneStrategy message. Also converts values to other types if specified.
                         * @param message BackfillNoneStrategy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.datastream.v1alpha1.Stream.BackfillNoneStrategy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BackfillNoneStrategy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATED = 1,
                        RUNNING = 2,
                        PAUSED = 3,
                        MAINTENANCE = 4,
                        FAILED = 5,
                        FAILED_PERMANENTLY = 6,
                        STARTING = 7,
                        DRAINING = 8
                    }
                }

                /** Properties of an Error. */
                interface IError {

                    /** Error reason */
                    reason?: (string|null);

                    /** Error errorUuid */
                    errorUuid?: (string|null);

                    /** Error message */
                    message?: (string|null);

                    /** Error errorTime */
                    errorTime?: (google.protobuf.ITimestamp|null);

                    /** Error details */
                    details?: ({ [k: string]: string }|null);
                }

                /** Represents an Error. */
                class Error implements IError {

                    /**
                     * Constructs a new Error.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IError);

                    /** Error reason. */
                    public reason: string;

                    /** Error errorUuid. */
                    public errorUuid: string;

                    /** Error message. */
                    public message: string;

                    /** Error errorTime. */
                    public errorTime?: (google.protobuf.ITimestamp|null);

                    /** Error details. */
                    public details: { [k: string]: string };

                    /**
                     * Creates a new Error instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Error instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IError): google.cloud.datastream.v1alpha1.Error;

                    /**
                     * Encodes the specified Error message. Does not implicitly {@link google.cloud.datastream.v1alpha1.Error.verify|verify} messages.
                     * @param message Error message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Error message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.Error.verify|verify} messages.
                     * @param message Error message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Error message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Error
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.Error;

                    /**
                     * Decodes an Error message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Error
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.Error;

                    /**
                     * Verifies an Error message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Error message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Error
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.Error;

                    /**
                     * Creates a plain object from an Error message. Also converts values to other types if specified.
                     * @param message Error
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Error to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ValidationResult. */
                interface IValidationResult {

                    /** ValidationResult validations */
                    validations?: (google.cloud.datastream.v1alpha1.IValidation[]|null);
                }

                /** Represents a ValidationResult. */
                class ValidationResult implements IValidationResult {

                    /**
                     * Constructs a new ValidationResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IValidationResult);

                    /** ValidationResult validations. */
                    public validations: google.cloud.datastream.v1alpha1.IValidation[];

                    /**
                     * Creates a new ValidationResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ValidationResult instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IValidationResult): google.cloud.datastream.v1alpha1.ValidationResult;

                    /**
                     * Encodes the specified ValidationResult message. Does not implicitly {@link google.cloud.datastream.v1alpha1.ValidationResult.verify|verify} messages.
                     * @param message ValidationResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IValidationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ValidationResult message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.ValidationResult.verify|verify} messages.
                     * @param message ValidationResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IValidationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ValidationResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ValidationResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.ValidationResult;

                    /**
                     * Decodes a ValidationResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ValidationResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.ValidationResult;

                    /**
                     * Verifies a ValidationResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ValidationResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ValidationResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.ValidationResult;

                    /**
                     * Creates a plain object from a ValidationResult message. Also converts values to other types if specified.
                     * @param message ValidationResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.ValidationResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ValidationResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Validation. */
                interface IValidation {

                    /** Validation description */
                    description?: (string|null);

                    /** Validation status */
                    status?: (google.cloud.datastream.v1alpha1.Validation.Status|keyof typeof google.cloud.datastream.v1alpha1.Validation.Status|null);

                    /** Validation message */
                    message?: (google.cloud.datastream.v1alpha1.IValidationMessage[]|null);

                    /** Validation code */
                    code?: (string|null);
                }

                /** Represents a Validation. */
                class Validation implements IValidation {

                    /**
                     * Constructs a new Validation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IValidation);

                    /** Validation description. */
                    public description: string;

                    /** Validation status. */
                    public status: (google.cloud.datastream.v1alpha1.Validation.Status|keyof typeof google.cloud.datastream.v1alpha1.Validation.Status);

                    /** Validation message. */
                    public message: google.cloud.datastream.v1alpha1.IValidationMessage[];

                    /** Validation code. */
                    public code: string;

                    /**
                     * Creates a new Validation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Validation instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IValidation): google.cloud.datastream.v1alpha1.Validation;

                    /**
                     * Encodes the specified Validation message. Does not implicitly {@link google.cloud.datastream.v1alpha1.Validation.verify|verify} messages.
                     * @param message Validation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IValidation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Validation message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.Validation.verify|verify} messages.
                     * @param message Validation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IValidation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Validation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Validation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.Validation;

                    /**
                     * Decodes a Validation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Validation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.Validation;

                    /**
                     * Verifies a Validation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Validation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Validation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.Validation;

                    /**
                     * Creates a plain object from a Validation message. Also converts values to other types if specified.
                     * @param message Validation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.Validation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Validation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Validation {

                    /** Status enum. */
                    enum Status {
                        STATUS_UNSPECIFIED = 0,
                        NOT_EXECUTED = 1,
                        FAILED = 2,
                        PASSED = 3
                    }
                }

                /** Properties of a ValidationMessage. */
                interface IValidationMessage {

                    /** ValidationMessage message */
                    message?: (string|null);

                    /** ValidationMessage level */
                    level?: (google.cloud.datastream.v1alpha1.ValidationMessage.Level|keyof typeof google.cloud.datastream.v1alpha1.ValidationMessage.Level|null);

                    /** ValidationMessage metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** ValidationMessage code */
                    code?: (string|null);
                }

                /** Represents a ValidationMessage. */
                class ValidationMessage implements IValidationMessage {

                    /**
                     * Constructs a new ValidationMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datastream.v1alpha1.IValidationMessage);

                    /** ValidationMessage message. */
                    public message: string;

                    /** ValidationMessage level. */
                    public level: (google.cloud.datastream.v1alpha1.ValidationMessage.Level|keyof typeof google.cloud.datastream.v1alpha1.ValidationMessage.Level);

                    /** ValidationMessage metadata. */
                    public metadata: { [k: string]: string };

                    /** ValidationMessage code. */
                    public code: string;

                    /**
                     * Creates a new ValidationMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ValidationMessage instance
                     */
                    public static create(properties?: google.cloud.datastream.v1alpha1.IValidationMessage): google.cloud.datastream.v1alpha1.ValidationMessage;

                    /**
                     * Encodes the specified ValidationMessage message. Does not implicitly {@link google.cloud.datastream.v1alpha1.ValidationMessage.verify|verify} messages.
                     * @param message ValidationMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datastream.v1alpha1.IValidationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ValidationMessage message, length delimited. Does not implicitly {@link google.cloud.datastream.v1alpha1.ValidationMessage.verify|verify} messages.
                     * @param message ValidationMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datastream.v1alpha1.IValidationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ValidationMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ValidationMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datastream.v1alpha1.ValidationMessage;

                    /**
                     * Decodes a ValidationMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ValidationMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datastream.v1alpha1.ValidationMessage;

                    /**
                     * Verifies a ValidationMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ValidationMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ValidationMessage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datastream.v1alpha1.ValidationMessage;

                    /**
                     * Creates a plain object from a ValidationMessage message. Also converts values to other types if specified.
                     * @param message ValidationMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datastream.v1alpha1.ValidationMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ValidationMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ValidationMessage {

                    /** Level enum. */
                    enum Level {
                        LEVEL_UNSPECIFIED = 0,
                        WARNING = 1,
                        ERROR = 2
                    }
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
