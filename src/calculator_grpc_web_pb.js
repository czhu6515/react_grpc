/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */


const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./calculator_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.CalculatorClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.CalculatorPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Number,
 *   !proto.Number>}
 */
const methodDescriptor_Calculator_SquareRoot = new grpc.web.MethodDescriptor(
  '/Calculator/SquareRoot',
  grpc.web.MethodType.UNARY,
  proto.Number,
  proto.Number,
  /**
   * @param {!proto.Number} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Number.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Number,
 *   !proto.Number>}
 */
const methodInfo_Calculator_SquareRoot = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Number,
  /**
   * @param {!proto.Number} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Number.deserializeBinary
);


/**
 * @param {!proto.Number} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Number)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Number>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CalculatorClient.prototype.squareRoot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Calculator/SquareRoot',
      request,
      metadata || {},
      methodDescriptor_Calculator_SquareRoot,
      callback);
};


/**
 * @param {!proto.Number} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Number>}
 *     A native promise that resolves to the response
 */
proto.CalculatorPromiseClient.prototype.squareRoot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Calculator/SquareRoot',
      request,
      metadata || {},
      methodDescriptor_Calculator_SquareRoot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Numbers,
 *   !proto.Number>}
 */
const methodDescriptor_Calculator_Add = new grpc.web.MethodDescriptor(
  '/Calculator/Add',
  grpc.web.MethodType.UNARY,
  proto.Numbers,
  proto.Number,
  /**
   * @param {!proto.Numbers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Number.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Numbers,
 *   !proto.Number>}
 */
const methodInfo_Calculator_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Number,
  /**
   * @param {!proto.Numbers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Number.deserializeBinary
);


/**
 * @param {!proto.Numbers} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Number)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Number>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CalculatorClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Calculator/Add',
      request,
      metadata || {},
      methodDescriptor_Calculator_Add,
      callback);
};


/**
 * @param {!proto.Numbers} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Number>}
 *     A native promise that resolves to the response
 */
proto.CalculatorPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Calculator/Add',
      request,
      metadata || {},
      methodDescriptor_Calculator_Add);
};


module.exports = proto;

