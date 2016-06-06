! function() {
    function e(e, t) {
        var n = 1024,
            i = 1024 * n,
            r = 1024 * i,
            o = 1024 * r;
        return e >= 0 && n > e ? e + " B" : e >= n && i > e ? (e / n).toFixed(t) + " KB" : e >= i && r > e ? (e / i).toFixed(t) + " MB" : e >= r && o > e ? (e / r).toFixed(t) + " GB" : e >= o ? (e / o).toFixed(t) + " TB" : e + " B"
    }

    function t(e) {
        function t(e) {
            return e > 9 ? "" + e : "0" + e
        }
        if (1 > e || isNaN(e)) return "00:00:00";
        if (e > 86400) return "Calculating...";
        var n = Math.floor(e % 31536e3 % 86400 / 3600),
            i = Math.floor(e % 31536e3 % 86400 % 3600 / 60),
            r = Math.floor(e % 31536e3 % 86400 % 3600 % 60);
        return t(n) + ":" + t(i) + ":" + t(r)
    }

    function n() {
        var e = [],
            t = 0;
        this.getLength = function() {
            return e.length - t
        }, this.isEmpty = function() {
            return 0 == e.length
        }, this.enqueue = function(t) {
            e.push(t)
        }, this.dequeue = function() {
            if (0 != e.length) {
                var n = e[t];
                return 2 * ++t >= e.length && (e = e.slice(t), t = 0), n
            }
        }, this.peek = function() {
            return e.length > 0 ? e[t] : void 0
        }
    }
    var i = i || {};
    i.core = {
            apis: {},
            apiValidators: {},
            dataStructures: {},
            data: {},
            controllers: {},
            media: {},
            protocol: {},
            transport: {},
            util: {},
            stats: {},
            workers: {},
            playlist: {}
        }, i.tracker = {
            lib: {
                analytics: {},
                matching: {},
                util: {}
            }
        }, i.client || (i.client = {}), i.client.downloader = {}, i.client.apiValidators = {}, i.client.videoAnalytics = {},
        function(e) {
            e.randomKFromN = function(e, t) {
                var n = [];
                if (e > t) {
                    for (var i = 0; t >= i; i++) n.push(i);
                    return n
                }
                for (; n.length < e;) {
                    for (var r = Math.ceil(Math.random() * (t + 1)) - 1, o = !1, i = 0; i < n.length; i++)
                        if (n[i] == r) {
                            o = !0;
                            break
                        }
                    o || n.push(r)
                }
                return n
            }, e.randSample = function(t, n) {
                if (0 == t.length) return t;
                var i = e.randomKFromN(n, t.length - 1);
                return e.sampleIndexes(t, i)
            }, e.sampleIndexes = function(e, t) {
                for (var n = [], i = 0; i < t.length; i++) n.push(e[t[i]]);
                return n
            }, e.shuffle = function(e) {
                var t, n, i = e.length;
                if (i)
                    for (; --i;) n = Math.floor(Math.random() * (i + 1)), t = e[n], e[n] = e[i], e[i] = t;
                return e
            }, e.randomOffset = function(e, t, n) {
                for (var i = (t - e) / n, r = [], o = 0; i >= o; o++)
                    for (var s = 0; o >= s; s++) r.push(o);
                var a = r.length,
                    c = Math.floor(Math.random() * a);
                return r[c] * n + e
            }
        }(i.core.util), i.config = {
            VERSION: "2.1",
            CHUNKY_HEAD_LENGTH: 1e5,
            SMALL_FILE_SIZE: 10485760,
            USE_HEAD: !0,
            REMOVE_QUERYSTRING_FOR_HASH: !0,
            REMOVE_WOWZA_SESSION_ID_FOR_HASH: !0,
            REMOVE_SUBDOMAIN_FOR_HASH: !1,
            REPLACE_IP_TOKEN_FOR_HASH: !1,
            REPLACE_HOSTNAME_WITH_TOKEN_FOR_HASH: !1,
            DISABLE_CHROME: !1,
            DISABLE_FIREFOX: !1,
            HTTP_ONLY: !1,
            STUN_SERVERS: ["stun.l.google.com:19302"],
            TURN_SERVERS: [],
            TURN_CREDENTIALS: [],
            MAX_CONNECTIONS: 15,
            MIN_CONNECTIONS: 10,
            SECONDS_BEFORE_IDLE: 120,
            SECONDS_SINCE_LAST_HAVE: 60,
            PC_FAIL_TIMEOUT: 15e3,
            PC_RECON_METHOD: "exponential",
            PC_RECON_EXP_COEF: 2,
            PC_RECON_DELAY: 1e4,
            PC_RESEND_INTERVAL: 1e3,
            REQUEST_DROPPED_FAIL: 20,
            EMULATE_LOSS: !1,
            EMULATE_LOSS_PERCENTAGE: .2,
            CHUNK_SIZE: 16e3,
            BLOCK_SIZE: 12e5,
            MAX_PENDING_CHUNKS: 100,
            MOZ_MAX_PENDING_CHUNKS: 100,
            CHUNK_EXPIRATION_TIMEOUT: 3e3,
            P2P_SEND_RETRIES: 3,
            PC_POOL_SIZE: 100,
            PC_POOL_INIT_INTERVAL: 100,
            PC_POOL_LOW: 10,
            PC_POOL_REGEN_INTERVAL: 5e3,
            MAX_PC_CREATE: 1e5,
            PC_CLOSE_TIMEOUT: 5e3,
            PC_SDP_FLUSH_TIMEOUT: 300,
            PC_SDP_FLUSH_LENGTH: 4,
            PC_ALLOCATE_CHUNKS_EVENLY: !1,
            DC_UNORDERED: !0,
            DC_MAX_RETRANSMITS: void 0,
            DC_MAX_PACKET_LIFE_TIME: void 0,
            PEER_UPLINK_REPORT_INTERVAL: 1e4,
            PEER_UPLINK_LOAD_CHECK_INTERVAL: 1e3,
            DELAY_REPORT_INTERVAL: 1e4,
            PC_IDLE_FACTOR: .66,
            PC_LATENCY_INTERVAL: 1e3,
            PC_LATENCY_ENABLED: !1,
            PC_WINDOW_VALIDATE_PEER: !0,
            ALLOWED_FILE_SIZE: 268697600,
            ALLOWED_FILE_SIZE_FF: 10737418240,
            USE_FS: !0,
            USE_PERSISTENT: !0,
            DISABLE_FS_FF: !0,
            PROMPT_TIMEOUT: 2e4,
            PERSISTENT_FS_SIZE: 10737418240,
            TEMPORARY_FS_SIZE: 32212254720,
            CACHE_SIZE: 52428800,
            FS_ROOT_DIR: "peer5/",
            PREALLOCATE_FILE: !0,
            PERIODIC_CACHE_CLEANUP_PERIOD: 6048e5,
            TIME_PERIOD_FILE_STILL_LIVE: 72e5,
            SOCKET_RECONNECTION_INTERVAL: 3e4,
            XHR_INITIAL_TIMEOUT: 1e4,
            XHR_MAXIMUM_TIMEOUT: 3e4,
            XHR_MINIMUM_TIMEOUT: 2e3,
            XHR_TIMEOUT_FACTOR: 2,
            XHR_MAX_GET: 1,
            XHR_CONCURRENT: 4,
            HTTP_IDLE_RESET_DURATION: 3e4,
            XHR_SLOT_PROBE_INTERVAL: 3e4,
            MONITOR_INTERVAL: 200,
            REPORT_INTERVAL: 2e4,
            STAT_CALC_INTERVAL: 500,
            DISABLE_GOOGLE_ANALYTICS: !0,
            SEQUENTIAL_DOWNLOAD: !1,
            HTTP_ALWAYS_DOWNLOAD: !1,
            P2P_ALWAYS_DOWNLOAD: !1,
            P2P_REQUEST_BEGIN_THRESHOLD: 0,
            P2P_REQUEST_END_THRESHOLD: 2e4,
            HYBRID_REQUEST_THRESHOLD: 1e4,
            HTTP_REQUEST_THRESHOLD: 5e3,
            INITIAL_DL_SECS_ESTIMATION: 0,
            PARALLEL_HTTP_AND_P2P: !1,
            SYNCED_BUFFERS: !1,
            EXTERNAL_CRITICAL_CONSTRAINT: 1e4,
            BLOCK_ALLOCATION_INTERVAL: 100,
            HTTP_FETCH_AHEAD: !1,
            FETCH_AHEAD_MIN_SEEDERS: 1,
            P2P_DOWNLOADING_MSG: !0,
            HTTP_INIT_AHEAD: !1,
            HTTP_INIT_AHEAD_MIN_SEEDERS: 1,
            PEER_LIVE_DETECTION: !1,
            EARLY_LIVE_DETECTION: !1,
            EARLY_LIVE_DETECTION_INTERVAL: 1e3,
            MERGE_REQUESTS: !1,
            P2P_VOD_WINDOW: 10,
            HTTP_VOD_WINDOW: 5,
            MAX_P2P_REQUESTS: 2,
            MAX_HTTP_REQUESTS: 0,
            DYNAMIC_PREFETCH: !1,
            MAX_REQUEST_CACHE_SIZE_VOD: 314572800,
            MAX_REQUEST_CACHE_SIZE_LIVE: 104857600,
            FORCE_VOD: !0,
            EXTERNAL_MEDIA_LOWBUFFER: .1,
            EXTERNAL_MEDIA_MINBUFFER: -1,
            EXTERNAL_MEDIA_MINBUFFER_LENGTH_CAPPING: -1,
            EXTERNAL_MEDIA_MAXBUFFER: 10,
            EXTERNAL_MEDIA_LIVE_START_POS: -1,
            EXTERNAL_MEDIA_MAXBUFFER_SIZE: 6e7,
            EXTERNAL_MEDIA_MANIFEST_TIMEOUT: 1e4,
            EXTERNAL_MEDIA_MANIFEST_RETRIES: 6,
            EXTERNAL_MEDIA_MANIFEST_RETRY_DELAY: 500,
            EXTERNAL_MEDIA_FRAGMENT_TIMEOUT: 2e4,
            EXTERNAL_MEDIA_FRAGMENT_RETRIES: 6,
            EXTERNAL_MEDIA_FRAGMENT_RETRY_DELAY: 500,
            EXTERNAL_MEDIA_FPS_MONITOR_PERIOD: 5e3,
            EXTERNAL_MEDIA_FPS_MONITOR_THRESHOLD: .2,
            EXTERNAL_MEDIA_HLSJS_ENABLE: !0,
            EXTERNAL_MEDIA_HLSJS_DEBUG: !1,
            VIDEOTAG_FIND_INTERVAL: 500,
            VIDEOTAG_BUFFERED_MAX_HOLE: .5,
            AGGRESSIVE_P2P: !1,
            REQUEST_TIMEOUT: !0,
            P2P_TIMEOUT_DURATION: 1e4,
            HTTP_TIMEOUT_DURATION: 1e5,
            PLAYLIST_SPEED_ESTIMATION: !0,
            PLAYLIST_TIMEOUT: !0,
            PLAYLIST_TIMEOUT_DURATION: 1e4,
            INITIAL_P2P_SLOTS: 2,
            MINIMUM_P2P_SLOTS: 1,
            ADD_SLOT_LOADED_REQUESTS_THRESHOLD: 3,
            REDUCE_SLOT_ABORTS_THRESHOLD: 2,
            TIME_ESTIMATION_LIST_LENGTH: 5,
            ZIXI_DIGEST: !1,
            MINIMUM_METADATA_SIZE: 1e6,
            VIDEO_DOWNLOAD_SIZE: 3e5,
            BUFFERING_THRESHOLD: .1,
            URGENT_THRESHOLD: 2,
            BYTE_NEEDED_THRESHOLD: 10,
            ENOUGH_BYTES_THRESHOLD: 20,
            STOP_BUFFERING_THRESHOLD: 2,
            BLOCK_GAP: 17,
            BANDWIDTH_INTERVAL: 1e4,
            PIXEL_SWARM: !1,
            EXTERNAL_XHR_FALLBACK: !1,
            LIVE_SECONDS_DELAY: i.core.util.randomOffset(10, 35, 5),
            MIN_NUMBER_OF_REMAINING_SEGMENTS: 3,
            SEGMENTS_AFTER_PRUNE: 3,
            FEATURE_PRUNE_SEGMENTS_FROM_START: !0,
            FEATURE_PROXY_HEAD_KEY: "PROXY_HEAD",
            FEATURE_PROXY_HEAD_INIT: !0,
            FEATURE_PROXY_HEAD_ENABLED: !1,
            FEATURE_PROXY_HEAD_INITIALIZED: !0,
            FEATURE_PROXY_HEAD_TIMEOUT: 1e3,
            FEATURE_PROXY_HEAD_URL_PREFIX: "//proxy-peer5.netdna-ssl.com/",
            FEATURE_PROXY_HEAD_HEALTH_ENDPOINT: "//proxy-peer5.netdna-ssl.com/health?_=" + Date.now(),
            FEATURE_PEER5_REQUEST_KEY: "PEER5_REQUEST",
            FEATURE_PEER5_REQUEST_ENABLED: !0,
            FEATURE_PEER5_REQUEST_FORCE: !1,
            FEATURE_DATACHANNEL_KEY: "DATACHANNEL",
            FEATURE_DATACHANNEL_ENABLED: !0,
            FEATURE_PAGE_WHITELIST_KEY: "PAGE_WHITELIST",
            FEATURE_PAGE_WHITELIST_ENABLED: !1,
            FEATURE_PAGE_WHITELIST_REGEX: /peer5/,
            FEATURE_PAGE_BLACKLIST_KEY: "PAGE_BLACKLIST",
            FEATURE_PAGE_BLACKLIST_ENABLED: !1,
            FEATURE_PAGE_BLACKLIST_REGEX: /peer5/,
            FEATURE_XHR_KEY: "XHR",
            FEATURE_XHR_ENABLED: !0,
            FEATURE_PEER5_KEY: "PEER5",
            FEATURE_PEER5_ENABLED: !0,
            FEATURES_DEFAULT_THRESHOLD: 2,
            FEATURES_DEFAULT_RETRY_INTERVAL: 5e3,
            FEATURE_P2P_IMPROVEMENT_ENABLED: !1,
            FEATURE_LIMIT_SLOTS_BY_PEERS: !1,
            FEATURE_CLOSE_DEAD_CONNECTIONS: !0,
            FEATURE_CLOSE_DEAD_CONNECTIONS_PERMANENTLY: !1,
            FEATURE_CLOSE_OVERLAPPING_CONNECTIONS: !0,
            FEATURE_CLOSE_OVERLAPPING_CONNECTIONS_PERMANENTLY: !1,
            FEATURE_PRE_PLAY_PREFETCH: !0,
            SEGMENTS_TO_PREFETCH_BEFORE_PLAY: 10,
            STOP_PREFETCH_AFTER_SECONDS: 60,
            PLAYER_SEGMENTS_BUFFER: 3,
            PREFETCH_LIVE_INTERVAL_MS: 2e3,
            FEATURE_REPORT_PEER_UPLINK_LOAD_KEY: "REPORT_PEER_UPLINK_LOAD",
            FEATURE_REPORT_PEER_UPLINK_LOAD_ENABLED: !1,
            FEATURE_REPORT_LIVE_DELAY_KEY: "REPORT_LIVE_DELAY",
            FEATURE_REPORT_LIVE_DELAY_ENABLED: !1,
            FEATURE_REPORT_PLAY_VS_REBUFFER: !0,
            FEATURE_DOWNLOAD_SPEED_ESTIMATION: !1,
            RELEVANT_LAST_ENTRIES: 5,
            SPEED_SMOOTH_FACTOR: .1,
            URL_ALLOWED_QUERY_PARAMETERS: [],
            FEATURE_WS_HEARTBEAT: !1,
            FEATURE_WS_HEARTBEAT_INTERVAL: 5e3,
            FEATURE_WS_HEARTBEAT_ELAPSED: 6e4,
            EXTERNAL_GRINDPLAYER_CALLBACK: "onJSBridge",
            LOG_LEVEL: 0,
            GA_ONERROR: !0,
            A_B_TEST: {},
            A_B_CONFIG_JSON: ""
        }, i.getConfig = function(e) {
            return e = "EXTERNAL_" + e, e = e.toUpperCase(), i.config[e]
        }, i.config = {
            VERSION: "2.1",
            CHUNKY_HEAD_LENGTH: 1e5,
            SMALL_FILE_SIZE: 10485760,
            USE_HEAD: !0,
            REMOVE_QUERYSTRING_FOR_HASH: !0,
            REMOVE_WOWZA_SESSION_ID_FOR_HASH: !0,
            REMOVE_SUBDOMAIN_FOR_HASH: !1,
            REPLACE_IP_TOKEN_FOR_HASH: !1,
            REPLACE_HOSTNAME_WITH_TOKEN_FOR_HASH: !1,
            DISABLE_CHROME: !1,
            DISABLE_FIREFOX: !1,
            HTTP_ONLY: !1,
            STUN_SERVERS: ["stun.l.google.com:19302"],
            TURN_SERVERS: [],
            TURN_CREDENTIALS: [],
            MAX_CONNECTIONS: 15,
            MIN_CONNECTIONS: 10,
            SECONDS_BEFORE_IDLE: 120,
            SECONDS_SINCE_LAST_HAVE: 60,
            PC_FAIL_TIMEOUT: 15e3,
            PC_RECON_METHOD: "exponential",
            PC_RECON_EXP_COEF: 2,
            PC_RECON_DELAY: 1e4,
            PC_RESEND_INTERVAL: 1e3,
            REQUEST_DROPPED_FAIL: 20,
            EMULATE_LOSS: !1,
            EMULATE_LOSS_PERCENTAGE: .2,
            CHUNK_SIZE: 16e3,
            BLOCK_SIZE: 12e5,
            MAX_PENDING_CHUNKS: 100,
            MOZ_MAX_PENDING_CHUNKS: 100,
            CHUNK_EXPIRATION_TIMEOUT: 3e3,
            P2P_SEND_RETRIES: 3,
            PC_POOL_SIZE: 100,
            PC_POOL_INIT_INTERVAL: 100,
            PC_POOL_LOW: 10,
            PC_POOL_REGEN_INTERVAL: 5e3,
            MAX_PC_CREATE: 1e5,
            PC_CLOSE_TIMEOUT: 5e3,
            PC_SDP_FLUSH_TIMEOUT: 300,
            PC_SDP_FLUSH_LENGTH: 4,
            PC_ALLOCATE_CHUNKS_EVENLY: !1,
            DC_UNORDERED: !0,
            DC_MAX_RETRANSMITS: void 0,
            DC_MAX_PACKET_LIFE_TIME: void 0,
            PEER_UPLINK_REPORT_INTERVAL: 1e4,
            PEER_UPLINK_LOAD_CHECK_INTERVAL: 1e3,
            DELAY_REPORT_INTERVAL: 1e4,
            PC_IDLE_FACTOR: .66,
            PC_LATENCY_INTERVAL: 1e3,
            PC_LATENCY_ENABLED: !1,
            PC_WINDOW_VALIDATE_PEER: !0,
            ALLOWED_FILE_SIZE: 268697600,
            ALLOWED_FILE_SIZE_FF: 10737418240,
            USE_FS: !0,
            USE_PERSISTENT: !0,
            DISABLE_FS_FF: !0,
            PROMPT_TIMEOUT: 2e4,
            PERSISTENT_FS_SIZE: 10737418240,
            TEMPORARY_FS_SIZE: 32212254720,
            CACHE_SIZE: 52428800,
            FS_ROOT_DIR: "peer5/",
            PREALLOCATE_FILE: !0,
            PERIODIC_CACHE_CLEANUP_PERIOD: 6048e5,
            TIME_PERIOD_FILE_STILL_LIVE: 72e5,
            SOCKET_RECONNECTION_INTERVAL: 3e4,
            XHR_INITIAL_TIMEOUT: 1e4,
            XHR_MAXIMUM_TIMEOUT: 3e4,
            XHR_MINIMUM_TIMEOUT: 2e3,
            XHR_TIMEOUT_FACTOR: 2,
            XHR_MAX_GET: 1,
            XHR_CONCURRENT: 4,
            HTTP_IDLE_RESET_DURATION: 3e4,
            XHR_SLOT_PROBE_INTERVAL: 3e4,
            MONITOR_INTERVAL: 200,
            REPORT_INTERVAL: 2e4,
            STAT_CALC_INTERVAL: 500,
            DISABLE_GOOGLE_ANALYTICS: !0,
            SEQUENTIAL_DOWNLOAD: !1,
            HTTP_ALWAYS_DOWNLOAD: !1,
            P2P_ALWAYS_DOWNLOAD: !1,
            P2P_REQUEST_BEGIN_THRESHOLD: 0,
            P2P_REQUEST_END_THRESHOLD: 2e4,
            HYBRID_REQUEST_THRESHOLD: 1e4,
            HTTP_REQUEST_THRESHOLD: 5e3,
            INITIAL_DL_SECS_ESTIMATION: 0,
            PARALLEL_HTTP_AND_P2P: !1,
            SYNCED_BUFFERS: !1,
            EXTERNAL_CRITICAL_CONSTRAINT: 1e4,
            BLOCK_ALLOCATION_INTERVAL: 100,
            HTTP_FETCH_AHEAD: !1,
            FETCH_AHEAD_MIN_SEEDERS: 1,
            P2P_DOWNLOADING_MSG: !0,
            HTTP_INIT_AHEAD: !1,
            HTTP_INIT_AHEAD_MIN_SEEDERS: 1,
            PEER_LIVE_DETECTION: !1,
            EARLY_LIVE_DETECTION: !1,
            EARLY_LIVE_DETECTION_INTERVAL: 1e3,
            MERGE_REQUESTS: !1,
            P2P_VOD_WINDOW: 10,
            HTTP_VOD_WINDOW: 5,
            MAX_P2P_REQUESTS: 2,
            MAX_HTTP_REQUESTS: 0,
            DYNAMIC_PREFETCH: !1,
            MAX_REQUEST_CACHE_SIZE_VOD: 314572800,
            MAX_REQUEST_CACHE_SIZE_LIVE: 104857600,
            FORCE_VOD: !0,
            EXTERNAL_MEDIA_LOWBUFFER: .1,
            EXTERNAL_MEDIA_MINBUFFER: -1,
            EXTERNAL_MEDIA_MINBUFFER_LENGTH_CAPPING: -1,
            EXTERNAL_MEDIA_MAXBUFFER: 10,
            EXTERNAL_MEDIA_LIVE_START_POS: -1,
            EXTERNAL_MEDIA_MAXBUFFER_SIZE: 6e7,
            EXTERNAL_MEDIA_MANIFEST_TIMEOUT: 1e4,
            EXTERNAL_MEDIA_MANIFEST_RETRIES: 6,
            EXTERNAL_MEDIA_MANIFEST_RETRY_DELAY: 500,
            EXTERNAL_MEDIA_FRAGMENT_TIMEOUT: 2e4,
            EXTERNAL_MEDIA_FRAGMENT_RETRIES: 6,
            EXTERNAL_MEDIA_FRAGMENT_RETRY_DELAY: 500,
            EXTERNAL_MEDIA_FPS_MONITOR_PERIOD: 5e3,
            EXTERNAL_MEDIA_FPS_MONITOR_THRESHOLD: .2,
            EXTERNAL_MEDIA_HLSJS_ENABLE: !0,
            EXTERNAL_MEDIA_HLSJS_DEBUG: !1,
            VIDEOTAG_FIND_INTERVAL: 500,
            VIDEOTAG_BUFFERED_MAX_HOLE: .5,
            AGGRESSIVE_P2P: !1,
            REQUEST_TIMEOUT: !0,
            P2P_TIMEOUT_DURATION: 1e4,
            HTTP_TIMEOUT_DURATION: 1e5,
            PLAYLIST_SPEED_ESTIMATION: !0,
            PLAYLIST_TIMEOUT: !0,
            PLAYLIST_TIMEOUT_DURATION: 1e4,
            INITIAL_P2P_SLOTS: 2,
            MINIMUM_P2P_SLOTS: 1,
            ADD_SLOT_LOADED_REQUESTS_THRESHOLD: 3,
            REDUCE_SLOT_ABORTS_THRESHOLD: 2,
            TIME_ESTIMATION_LIST_LENGTH: 5,
            ZIXI_DIGEST: !1,
            MINIMUM_METADATA_SIZE: 1e6,
            VIDEO_DOWNLOAD_SIZE: 3e5,
            BUFFERING_THRESHOLD: .1,
            URGENT_THRESHOLD: 2,
            BYTE_NEEDED_THRESHOLD: 10,
            ENOUGH_BYTES_THRESHOLD: 20,
            STOP_BUFFERING_THRESHOLD: 2,
            BLOCK_GAP: 17,
            BANDWIDTH_INTERVAL: 1e4,
            PIXEL_SWARM: !1,
            EXTERNAL_XHR_FALLBACK: !1,
            LIVE_SECONDS_DELAY: i.core.util.randomOffset(10, 35, 5),
            MIN_NUMBER_OF_REMAINING_SEGMENTS: 3,
            SEGMENTS_AFTER_PRUNE: 3,
            FEATURE_PRUNE_SEGMENTS_FROM_START: !0,
            FEATURE_PROXY_HEAD_KEY: "PROXY_HEAD",
            FEATURE_PROXY_HEAD_INIT: !0,
            FEATURE_PROXY_HEAD_ENABLED: !1,
            FEATURE_PROXY_HEAD_INITIALIZED: !0,
            FEATURE_PROXY_HEAD_TIMEOUT: 1e3,
            FEATURE_PROXY_HEAD_URL_PREFIX: "//proxy-peer5.netdna-ssl.com/",
            FEATURE_PROXY_HEAD_HEALTH_ENDPOINT: "//proxy-peer5.netdna-ssl.com/health?_=" + Date.now(),
            FEATURE_PEER5_REQUEST_KEY: "PEER5_REQUEST",
            FEATURE_PEER5_REQUEST_ENABLED: !0,
            FEATURE_PEER5_REQUEST_FORCE: !1,
            FEATURE_DATACHANNEL_KEY: "DATACHANNEL",
            FEATURE_DATACHANNEL_ENABLED: !0,
            FEATURE_PAGE_WHITELIST_KEY: "PAGE_WHITELIST",
            FEATURE_PAGE_WHITELIST_ENABLED: !1,
            FEATURE_PAGE_WHITELIST_REGEX: /peer5/,
            FEATURE_PAGE_BLACKLIST_KEY: "PAGE_BLACKLIST",
            FEATURE_PAGE_BLACKLIST_ENABLED: !1,
            FEATURE_PAGE_BLACKLIST_REGEX: /peer5/,
            FEATURE_XHR_KEY: "XHR",
            FEATURE_XHR_ENABLED: !0,
            FEATURE_PEER5_KEY: "PEER5",
            FEATURE_PEER5_ENABLED: !0,
            FEATURES_DEFAULT_THRESHOLD: 2,
            FEATURES_DEFAULT_RETRY_INTERVAL: 5e3,
            FEATURE_P2P_IMPROVEMENT_ENABLED: !1,
            FEATURE_LIMIT_SLOTS_BY_PEERS: !1,
            FEATURE_CLOSE_DEAD_CONNECTIONS: !0,
            FEATURE_CLOSE_DEAD_CONNECTIONS_PERMANENTLY: !1,
            FEATURE_CLOSE_OVERLAPPING_CONNECTIONS: !0,
            FEATURE_CLOSE_OVERLAPPING_CONNECTIONS_PERMANENTLY: !1,
            FEATURE_PRE_PLAY_PREFETCH: !0,
            SEGMENTS_TO_PREFETCH_BEFORE_PLAY: 10,
            STOP_PREFETCH_AFTER_SECONDS: 60,
            PLAYER_SEGMENTS_BUFFER: 3,
            PREFETCH_LIVE_INTERVAL_MS: 2e3,
            FEATURE_REPORT_PEER_UPLINK_LOAD_KEY: "REPORT_PEER_UPLINK_LOAD",
            FEATURE_REPORT_PEER_UPLINK_LOAD_ENABLED: !1,
            FEATURE_REPORT_LIVE_DELAY_KEY: "REPORT_LIVE_DELAY",
            FEATURE_REPORT_LIVE_DELAY_ENABLED: !1,
            FEATURE_REPORT_PLAY_VS_REBUFFER: !0,
            FEATURE_DOWNLOAD_SPEED_ESTIMATION: !1,
            RELEVANT_LAST_ENTRIES: 5,
            SPEED_SMOOTH_FACTOR: .1,
            URL_ALLOWED_QUERY_PARAMETERS: [],
            FEATURE_WS_HEARTBEAT: !1,
            FEATURE_WS_HEARTBEAT_INTERVAL: 5e3,
            FEATURE_WS_HEARTBEAT_ELAPSED: 6e4,
            EXTERNAL_GRINDPLAYER_CALLBACK: "onJSBridge",
            LOG_LEVEL: 0,
            GA_ONERROR: !0,
            A_B_TEST: {},
            A_B_CONFIG_JSON: ""
        }, i.getConfig = function(e) {
            return e = "EXTERNAL_" + e, e = e.toUpperCase(), i.config[e]
        },
        function(e) {
            console.log("test e");
            e.create = function() {
                function e(e, n) {
                    n = n || {};
                    var i = {
                        init: "boolean" == typeof n.init ? n.init : !0,
                        enabled: "boolean" == typeof n.enabled ? n.enabled : !0,
                        initFunction: "function" == typeof n.initFunction ? n.initFunction : null,
                        enableFunction: "function" == typeof n.enableFunction ? n.enableFunction : null,
                        disableFunction: "function" == typeof n.disableFunction ? n.disableFunction : null,
                        retryTimer: null,
                        initialized: "boolean" == typeof n.initialized ? n.initialized : !0
                    };
                    g[e] = i, i.init && i.initFunction && t(e)
                }

                function t(e) {
                    var t = g[e];
                    t.initFunction && t.initFunction(function() {
                        o(e)
                    }, function() {
                        s(e)
                    })
                }

                function n(e, t) {
                    var n = g[e];
                    n.enableFunction ? n.enableFunction(function() {
                        n.enabled = !0
                    }, t) : n.enabled = !0
                }

                function i(e, t) {
                    var n = g[e];
                    n.disableFunction ? n.disableFunction(function() {
                        n.enabled = !1
                    }, t) : n.enabled = !1
                }

                function r(t, n) {
                    if ("object" == typeof t && (n = t, t = n.key), l(t)) throw new Error("Trying to init a new feature that already exist");
                    e(t, n)
                }

                function o(e) {
                    g[e].initialized = !0
                }

                function s(e) {
                    g[e].initialized = !1
                }

                function a(e, t) {
                    l(e) && p(e) && n(e, t)
                }

                function c(e, t) {
                    l(e) && f(e) && i(e, t)
                }

                function l(e) {
                    return void 0 !== g[e]
                }

                function d(e) {
                    return l(e) ? g[e].initialized === !0 : !1
                }

                function u(e) {
                    return l(e) ? f(e) && d(e) : !1
                }

                function h(e) {
                    return l(e) ? p(e) && d(e) : !1
                }

                function f(e) {
                    return l(e) ? g[e].enabled === !0 : !1
                }

                function p(e) {
                    return f(e) === !1
                }
                var g = Object.create(null);
                return {
                    add: r,
                    enable: a,
                    disable: c,
                    isEnabled: f,
                    isDisabled: p,
                    isEnabledAndInitialized: u,
                    isDisabledAndInitialized: h
                }
            }
        }(i.featureToggle = i.featureToggle || {}),
        function(e) {
            function t() {
                var e = [{
                    init: i.config.FEATURE_PROXY_HEAD_INIT,
                    key: i.config.FEATURE_PROXY_HEAD_KEY,
                    enabled: i.config.FEATURE_PROXY_HEAD_ENABLED,
                    initialized: i.config.FEATURE_PROXY_HEAD_INITIALIZED,
                    initFunction: function(e, t) {
                        if (i.config.FEATURE_PEER5_REQUEST_FORCE) return t();
                        var n = new XMLHttpRequest;
                        n.open("HEAD", i.config.FEATURE_PROXY_HEAD_HEALTH_ENDPOINT), n.onloadend = function() {
                            200 === this.status && e()
                        }, n.onerror = n.ontimeout = t, n.timeout = i.config.FEATURE_PROXY_HEAD_TIMEOUT, n.send()
                    },
                    disableFunction: function() {
                        var e = 2;
                        return function(t, n) {
                            n || (e--, 0 >= e && (i.feature.disable(i.config.FEATURE_PEER5_REQUEST_KEY), t()))
                        }
                    }()
                }, {
                    key: i.config.FEATURE_PEER5_REQUEST_KEY,
                    enabled: i.config.FEATURE_PEER5_REQUEST_ENABLED,
                    disableFunction: function() {
                        var e = !1,
                            t = !1;
                        return function(n) {
                            i.config.FEATURE_PEER5_REQUEST_FORCE || (!t && i.feature.isEnabledAndInitialized(i.config.FEATURE_PROXY_HEAD_KEY) ? e = !0 : !e && i.feature.isDisabledAndInitialized(i.config.FEATURE_PROXY_HEAD_KEY) ? (t = !0, i.feature.enable(i.config.FEATURE_PROXY_HEAD_KEY)) : (window.peer5.Request = window.XMLHttpRequest, n()))
                        }
                    }()
                }, {
                    key: i.config.FEATURE_DATACHANNEL_KEY,
                    enabled: i.config.FEATURE_DATACHANNEL_ENABLED,
                    initialized: !1,
                    initFunction: function(e, t) {
                        var n = "stun:stun.l.google.com:19302",
                            i = {
                                iceServers: [{
                                    urls: n
                                }]
                            };
                        try {
                            var r = new RTCPeerConnection(i),
                                o = r.createDataChannel("test_data_channels", {});
                            o.close(), r.close()
                        } catch (s) {
                            return t()
                        }
                        e()
                    }
                }, {
                    key: i.config.FEATURE_PAGE_WHITELIST_KEY,
                    enabled: i.config.FEATURE_PAGE_WHITELIST_ENABLED,
                    initialized: !1,
                    initFunction: function(e, t) {
                        return null !== document.location.href.match(i.config.FEATURE_PAGE_WHITELIST_REGEX) ? e() : t()
                    }
                }, {
                    key: i.config.FEATURE_PAGE_BLACKLIST_KEY,
                    enabled: i.config.FEATURE_PAGE_BLACKLIST_ENABLED,
                    initialized: !1,
                    initFunction: function(e, t) {
                        return null !== document.location.href.match(i.config.FEATURE_PAGE_BLACKLIST_REGEX) ? e() : t()
                    }
                }, {
                    key: i.config.FEATURE_XHR_KEY,
                    enabled: i.config.FEATURE_XHR_ENABLED,
                    initialized: !1,
                    initFunction: function(e, t) {
                        return window.XMLHttpRequest ? e() : t()
                    }
                }, {
                    key: i.config.FEATURE_PEER5_KEY,
                    enabled: i.config.FEATURE_PEER5_ENABLED,
                    initialized: !1,
                    initFunction: function(e, t) {
                        return (i.feature.isDisabled(i.config.FEATURE_PAGE_WHITELIST_KEY) || i.feature.isEnabledAndInitialized(i.config.FEATURE_PAGE_WHITELIST_KEY)) && !i.feature.isEnabledAndInitialized(i.config.FEATURE_PAGE_BLACKLIST_KEY) && i.feature.isEnabledAndInitialized(i.config.FEATURE_XHR_KEY) ? e() : t()
                    }
                }, {
                    key: i.config.FEATURE_REPORT_LIVE_DELAY_KEY,
                    enabled: i.config.FEATURE_REPORT_LIVE_DELAY_ENABLED && !i.config.EXTERNAL_XHR_FALLBACK,
                    initialized: !0
                }, {
                    key: i.config.FEATURE_REPORT_PEER_UPLINK_LOAD_KEY,
                    enabled: i.config.FEATURE_REPORT_PEER_UPLINK_LOAD_ENABLED && !i.config.EXTERNAL_XHR_FALLBACK,
                    initialized: !0
                }];
                e.forEach(i.feature.add)
            }

            function n() {
                i.feature = i.featureToggle.create()
            }
            e.init = function() {
                n(), t()
            }, e.init()
        }(i),
        function(e) {
            function t() {
                var t = Object.keys(e.config.A_B_TEST),
                    n = null;
                return t.forEach(function(t) {
                    var i = e.config.A_B_TEST[t].length;
                    return n && i !== n ? (e.error("A/B test config values do not match in length"), null) : void(n = i)
                }), n
            }

            function n(t) {
                if (!t) return "";
                var n = Object.keys(e.config.A_B_TEST),
                    i = Math.floor(Math.random() * t),
                    r = Object.create(null);
                return n.forEach(function(t) {
                    var n = e.config.A_B_TEST[t],
                        o = n[i];
                    e.config[t] = o, r[t] = o
                }), JSON.stringify(r)
            }
            var i = t();
            e.config.A_B_CONFIG_JSON = n(i)
        }(i),
        function(e) {
            e.shortId = function() {
                return "xxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0,
                        n = "x" == e ? t : 3 & t | 8;
                    return n.toString(16)
                })
            }, e.generate_uuid = function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0,
                        n = "x" == e ? t : 3 & t | 8;
                    return n.toString(16)
                })
            }
        }(i.core.util),
        function(e, t, n) {
            t[e] = n(e, t)
        }("radio", this, function(e, t) {
            "use strict";

            function n(e) {
                return arguments.length ? n.$.channel(e) : n.$.reset(), n.$
            }
            return n.$ = {
                version: "0.2",
                channelName: "",
                channels: [],
                reset: function() {
                    n.$.channelName = "", n.$.channels = []
                },
                broadcast: function() {
                    var e, n, i, r, o = this.channels[this.channelName],
                        s = o.length;
                    for (e = 0; s > e; e++) n = o[e], "object" == typeof n && n.length && (i = n[0], r = n[1] || t), i.apply(r, arguments);
                    return this
                },
                channel: function(e) {
                    var t = this.channels;
                    return t[e] || (t[e] = []), this.channelName = e, this
                },
                subscribe: function() {
                    var e, t, n = arguments,
                        i = this.channels[this.channelName],
                        r = n.length,
                        o = [];
                    for (e = 0; r > e; e++) o = n[e], t = "function" == typeof o ? [o] : o, "object" == typeof t && t.length && i.push(t);
                    return this
                },
                unsubscribe: function() {
                    var e, t, n, i = arguments,
                        r = this.channels[this.channelName],
                        o = i.length,
                        s = r.length,
                        a = 0;
                    for (e = 0; o > e; e++)
                        for (a = 0, s = r.length, t = 0; s > t; t++) n = t - a, (!(i[e] instanceof Array) && r[n][0] === i[e] || i[e] instanceof Array && r[n][0] === i[e][0]) && (i[e] instanceof Array && r[n][1] !== i[e][1] || (r.splice(n, 1), a++));
                    return this
                }
            }, n
        }),
        function() {
            function e(e, t) {
                var n = o[e],
                    i = (new Date).toISOString(),
                    r = "";
                if (1 >= e) {
                    var s = new Error;
                    r = s.stack ? s.stack.replace("Error\n", "") : ""
                }
                var a;
                return a = t.stack ? n + "	" + i + "	" + t + "	" + t.stack : n + "	" + i + "	" + JSON.stringify(t) + "	" + r
            }

            function t(e, t) {
                this.severity = o[e];
                var n = new Date;
                if (this.time = n.toISOString(), this.content = t, 1 >= e) {
                    var i = (new Error).stack;
                    this.stack = i ? (new Error).stack.replace("Error\n", "") : ""
                }
            }
            "undefined" == typeof i && (i = {}), i.logString = "S\n";
            var n = !1,
                r = i.config ? i.config.LOG_LEVEL : 2,
                o = ["0", "ERROR", "WARNING", "info", "log", "debug"],
                s = function(o, s) {
                    if (!(o > r)) {
                        2 >= o && !n && i.logString && (i.logString += e(o, s) + "\n");
                        var a = n ? e(o, s) : new t(o, s);
                        switch (o) {
                            case 1:
                                console.error(a);
                                break;
                            case 2:
                                console.warn(a);
                                break;
                            case 3:
                                console.info(a);
                                break;
                            case 4:
                            case 5:
                                console.log(a)
                        }
                    }
                };
            i.setLogFlat = function(e) {
                n = e
            }, i.setLogLevel = function(e) {
                r = e
            }, i.isVerbose = function() {
                return r > 2
            }, i.isDebug = function() {
                return 5 == r
            }, i.debug = function(e) {
                s(5, e)
            }, i.log = function(e) {
                s(4, e)
            }, i.info = function(e) {
                s(3, e)
            }, i.warn = function(e) {
                s(2, e)
            }, i.error = function(e) {
                if (s(1, e), i.config && i.config.GA_ONERROR && !n) {
                    var t, r = typeof e;
                    if ("object" === r) t = JSON.stringify(e);
                    else {
                        if ("string" !== r) return void i.warn("couldnt send error event of type " + r);
                        t = e
                    }
                    radio("peer5error").broadcast(t)
                }
            }, t.prototype.toString = function() {
                var e;
                return e = this.content.stack ? [this.severity, this.time, this.content, this.content.stack] : [this.severity, this.time, JSON.stringify(this.content), this.stack], e.join("	")
            }
        }(),
        function(e) {
            var t = {
                registerEvents: function() {
                    var e = null;
                    e = window.onerror, window.onerror = function(t, n, r) {
                        i.warn("peer5 caught an unhandled error: msg/" + t + " url/" + n + " lineNumber/" + r), radio("unhandledError").broadcast(t, n, r), e && "function" == typeof e && e(t, n, r)
                    }
                }
            };
            t.registerEvents(), e.errorHandler = t
        }(i.core.util);
    ! function(e) {
        function t(t, n, i) {
            this.tag = e.P2P_DATA, this.swarmId = t, this.chunkId = n, this.payload = i
        }

        function n(t, n) {
            this.tag = e.P2P_REQUEST, this.swarmId = t, n || (n = []), this.chunkIds = n
        }

        function i(t, n) {
            this.tag = e.P2P_LATENCY_REQUEST, this.timestamp = t, this.originBufferedAmount = n
        }

        function r(t, n, i) {
            this.tag = e.P2P_LATENCY_RESPONSE, this.timestamp = t, this.originBufferedAmount = n, this.remoteBufferedAmount = i
        }

        function o(t, n) {
            this.tag = e.P2P_CANCEL, this.swarmId = t, n || (n = []), this.all = 0 == n.length, this.chunkIds = n
        }

        function s(t, n, i, r, o, s) {
            this.tag = e.P2P_HAVE, this.swarmId = t, this.hashUrl = o || "0123456789abcdefghijklmnopqrstuv", this.seeder = n, this.filesize = s, this.blockIds = [], n || (i ? (this.complete = !0, this.availabilityMap = i) : (this.complete = !1, this.blockIds = r))
        }

        function a(t, n) {
            this.tag = e.P2P_DONT_HAVE, this.swarmId = t, this.hashUrl = n || "0123456789abcdefghijklmnopqrstuv"
        }

        function c(t) {
            this.tag = e.P2P_HAVE_REQUEST, this.swarmId = t
        }

        function l(t, n) {
            this.tag = e.P2P_DOWNLOADING, this.swarmId = t, this.hashUrl = n
        }

        function d(t) {
            this.tag = e.P2P_INITIALIZING, this.hashUrl = t
        }

        function u(t) {
            this.tag = e.P2P_NEW_SEGMENT, this.segSeq = t
        }

        function h() {
            this.tag = e.HEARTBEAT
        }

        function f(t) {
            this.tag = e.GROUP_REPORT, this.body = t
        }

        function p() {
            this.httpDown = 0, this.httpWaste = 0, this.p2pDown = 0, this.p2pUp = 0, this.p2pWaste = 0, this.fsLoad = 0, this.peers = 0, this.fileSize = null, this.p2pAbort = 0
        }

        function g(t, n) {
            this.tag = e.JOIN, this.swarmId = t, this.matchMe = n
        }

        function m(t) {
            this.tag = e.LEECH, this.swarmId = t
        }

        function _(t) {
            this.tag = e.GROUP_JOIN, this.swarmIds = t
        }

        function E(t) {
            this.tag = e.LEAVE, this.swarmId = t
        }

        function v(t, n, i, r, o, s) {
            this.tag = e.FILE_INFO, this.swarmId = t, this.size = n, this.hash = i, this.hashes = r, this.blockSize = o, this.url = s
        }

        function b(t, n, i, r, o, s) {
            this.tag = e.SHARE, this.swarmId = t, this.size = n, this.hash = i, this.hashes = r, this.blockSize = o, this.url = s
        }

        function S(t, n) {
            this.tag = e.SWARM_ERROR, this.swarmId = t, this.error = n
        }

        function T(t) {
            this.tag = e.GROUP_MATCH, this.peerIds = t
        }

        function R(e, t, n, i, r, o, s, a, c, l) {
            this.totalBytesDown = e, this.totalBytesUp = t, this.speedDown = n, this.speedUp = i, this.chunksRequested = o, this.chunksExpired = r, this.latency = s, this.connected = a, this.connectingDuration = c, this.failure = l
        }

        function w(t, n, i, r, o) {
            this.tag = e.SDP, this.originId = t, this.destId = n, this.sdpMessage = i, this.port = r, this.type = o
        }

        function A(t, n, i) {
            this.tag = e.GROUP_SDP, this.originId = t, this.destId = n, this.sdp = i
        }

        function P(t, n, i, r) {
            this.tag = e.SWARM_HEALTH, this.swarmId = t, this.numOfSeedersInSwarm = n, this.NumOfPeersInSwarm = i, this.totalCompletedDownloads = r
        }

        function I(t) {
            this.tag = e.HEAD, this.url = t
        }

        function y(t, n) {
            this.tag = e.HEAD_RESPONSE, this.url = t, this.responseHeaders = n
        }

        function C(t, n) {
            this.tag = e.HEAD_ERROR, this.url = t, this.statusCode = n
        }

        function O(t, n) {
            this.tag = e.P2P_VERSION, this.client = t, this.conf = n
        }
        e.P2P_DATA = 17, e.P2P_REQUEST = 18, e.P2P_CANCEL = 19, e.P2P_HAVE = 20, e.P2P_HAVE_REQUEST = 21, e.P2P_DONT_HAVE = 22, e.P2P_VERSION = 23, e.P2P_LATENCY_REQUEST = 24, e.P2P_LATENCY_RESPONSE = 25, e.P2P_DOWNLOADING = 26, e.P2P_NEW_SEGMENT = 27, e.P2P_INITIALIZING = 28, e.FILE_INFO = 34, e.JOIN = 36, e.LEAVE = 37, e.CLOSE = 38, e.SWARM_HEALTH = 41, e.SWARM_ERROR = 48, e.SDP = 49, e.COMPLETED_DOWNLOAD = 50, e.GROUP_REPORT = 51, e.GROUP_MATCH = 52, e.HEAD = 53, e.HEAD_RESPONSE = 54, e.HEAD_ERROR = 55, e.GROUP_JOIN = 56, e.HEARTBEAT = 57, e.SHARE = 59, e.LEECH = 60, e.GROUP_SDP = 61, e.SWARM_NOT_FOUND = 0, e.SWARM_ONLY_DEVCHANNEL = 1, e.SWARM_ONLY_FIREFOX = 11, e.SWARM_ONLY_CHROME = 12, e.SWARM_NOT_COMPAT = 13, e.Have = s, e.HaveRequest = c, e.DontHave = a, e.Cancel = o, e.Request = n, e.Data = t, e.Version = O, e.LatencyRequest = i, e.LatencyResponse = r, e.Downloading = l, e.Initializing = d, e.NewSegment = u, e.GroupReport = f, e.SwarmReport = p, e.Connection = R, e.FileInfo = v, e.Share = b, e.GroupMatch = T, e.Join = g, e.Leech = m, e.GroupJoin = _, e.Leave = E, e.Sdp = w, e.GroupSdp = A, e.SwarmHealth = P, e.SwarmError = S, e.Head = I, e.HeadResponse = y, e.HeadError = C, e.Heartbeat = h
    }(i.core.protocol),
    function(e) {
        function t(e) {
            return String.fromCharCode.apply(null, new Uint16Array(e.buffer.slice(e.byteOffset))).trim()
        }

        function n(e) {
            for (var t = new ArrayBuffer(2 * e.length), n = new Uint16Array(t), i = 0, r = e.length; r > i; i++) n[i] = e.charCodeAt(i);
            return new Uint8Array(t)
        }
        var r = {},
            o = i.core.protocol;
        "function" == typeof Uint8Array && Uint8Array.prototype.subarray && (Uint8Array.prototype.slice = Uint8Array.prototype.subarray);
        var s = 1,
            a = 4,
            c = function(e) {
                return d(e)
            },
            l = function(e, t) {
                return u(e, t)
            },
            d = function(e) {
                return String.fromCharCode.apply(null, e).trim()
            },
            u = function(e, t) {
                for (var n = new Uint8Array(e.length), i = 0; i < e.length; i++) n[i] = e.charCodeAt(i);
                if (t)
                    for (var r = e.length; t > r; r++) n[r] = " ";
                return n
            },
            h = function(e, t) {
                t || (t = 0);
                var n = 0;
                return n += e[t++] << 24, n += e[t++] << 16, n += e[t++] << 8, n += e[t]
            },
            f = function(e) {
                var t = 0;
                "number" != typeof e.length && (e = Array.prototype.slice.call(arguments));
                for (var n = new Uint8Array(4 * e.length), i = 0; i < e.length; i++) {
                    var r = e[i];
                    n[t++] = (4278190080 & r) >> 24, n[t++] = (16711680 & r) >> 16, n[t++] = (65280 & r) >> 8, n[t++] = 255 & r
                }
                return n
            },
            p = function(e) {
                return e ? new Uint8Array([1]) : new Uint8Array([0])
            },
            g = function(e, t) {
                return 0 != e[t]
            },
            m = function(e) {
                var t = l(r.packSwarmId(e.swarmId)),
                    n = f(e.chunkId);
                return r.concat([t, n, e.payload])
            },
            _ = function(e) {
                var t = [],
                    n = l(r.packSwarmId(e.swarmId));
                t.push(n);
                var i = f(e.chunkIds);
                return t.push(i), r.concat(t)
            },
            E = function(e) {
                var t = [],
                    n = l(r.packSwarmId(e.swarmId));
                t.push(n);
                var i = f(e.chunkIds);
                return t.push(i), r.concat(t)
            },
            v = function(e) {
                var t = [],
                    n = l(r.packSwarmId(e.swarmId));
                t.push(n);
                var i = l(e.hashUrl);
                t.push(i);
                var o = p(e.seeder);
                t.push(o);
                var s = f(e.filesize);
                t.push(s);
                var a = p(e.complete);
                if (t.push(a), e.complete) t.push(e.availabilityMap);
                else {
                    var c = f(e.blockIds);
                    t.push(c)
                }
                return r.concat(t)
            },
            b = function(e) {
                var t = [],
                    n = l(r.packSwarmId(e.swarmId));
                t.push(n);
                var i = l(e.hashUrl);
                return t.push(i), r.concat(t)
            },
            S = function(e) {
                var t = [];
                return t.push(f(e.timestamp)), t.push(f(e.originBufferedAmount)), r.concat(t)
            },
            T = function(e) {
                var t = [];
                return t.push(f(e.timestamp)), t.push(f(e.originBufferedAmount)), t.push(f(e.remoteBufferedAmount)), r.concat(t)
            },
            R = function(e) {
                var t = [],
                    n = l(r.packSwarmId(e.swarmId));
                t.push(n);
                var i = l(e.hashUrl);
                return t.push(i), r.concat(t)
            },
            w = function(e) {
                var t = [],
                    n = l(e.hashUrl);
                return t.push(n), r.concat(t)
            },
            A = function(e) {
                var t = [];
                return t.push(f(e.segSeq)), r.concat(t)
            },
            P = function(e, t, n) {
                var i = h(e, t);
                t += 4;
                var r = h(e, t);
                return new o.LatencyRequest(i, r)
            },
            I = function(e, t, n) {
                var i = h(e, t);
                t += 4;
                var r = h(e, t);
                t += 4;
                var s = h(e, t);
                return new o.LatencyResponse(i, r, s)
            },
            y = function(e, t, n) {
                var i = c(e.slice(t, t + r.transferedSwarmIdSize));
                t += r.transferedSwarmIdSize;
                var s = h(e, t);
                t += 4;
                var a = e.slice(t, t + n);
                return new o.Data(i, s, a)
            },
            C = function(e, t, n) {
                var i = c(e.slice(t, t + r.transferedSwarmIdSize));
                t += r.transferedSwarmIdSize, n -= r.transferedSwarmIdSize;
                for (var s = []; n > 0;) s.push(h(e, t)), n -= 4, t += 4;
                return new o.Request(i, s)
            },
            O = function(e, t, n) {
                var i = c(e.slice(t, t + r.transferedSwarmIdSize));
                t += r.transferedSwarmIdSize, n -= r.transferedSwarmIdSize;
                for (var s = []; n > 0;) s.push(h(e, t)), n -= 4, t += 4;
                return new o.Cancel(i, s)
            },
            k = function(e, t, n) {
                var i, s, a = c(e.slice(t, t + r.transferedSwarmIdSize));
                t += r.transferedSwarmIdSize, n -= r.transferedSwarmIdSize;
                var l = c(e.slice(t, t + r.hashUrlSize));
                t += r.hashUrlSize, n -= r.hashUrlSize;
                var d = g(e, t);
                t++, n--;
                var u = h(e, t);
                if (t += 4, n -= 4, !d) {
                    var f = g(e, t);
                    if (t++, n--, f) s = e.slice(t, t + n);
                    else
                        for (i = []; n > 0;) i.push(h(e, t)), t += 4, n -= 4
                }
                return new o.Have(a, d, s, i, l, u)
            },
            D = function(e, t, n) {
                var i = c(e.slice(t, t + r.transferedSwarmIdSize));
                t += r.transferedSwarmIdSize, n -= r.transferedSwarmIdSize;
                var s = c(e.slice(t, t + r.hashUrlSize));
                return t += r.hashUrlSize, n -= r.hashUrlSize, new o.DontHave(i, s)
            },
            L = function(e, t, n) {
                var i = c(e.slice(t, t + r.transferedSwarmIdSize));
                t += r.transferedSwarmIdSize, n -= r.transferedSwarmIdSize;
                var s = c(e.slice(t, t + r.hashUrlSize));
                return t += r.hashUrlSize, n -= r.hashUrlSize, new o.Downloading(i, s)
            },
            N = function(e, t, n) {
                var i = c(e.slice(t, t + r.hashUrlSize));
                return t += r.hashUrlSize, n -= r.hashUrlSize, new o.Initializing(i)
            },
            M = function(e, t, n) {
                var i = h(e, t);
                return new o.NewSegment(i)
            },
            F = function(e) {
                var t = JSON.stringify(e);
                return l(t)
            },
            U = function(e, t, n) {
                try {
                    var r = c(e.slice(t, t + n));
                    return JSON.parse(r)
                } catch (o) {
                    i.error("BinaryProtocol::json_decode: " + o)
                }
            },
            H = function(e) {
                var t = JSON.stringify(e);
                return n(t)
            },
            x = function(e, n, i) {
                var r = t(e.slice(n, n + i));
                return JSON.parse(r)
            },
            B = {
                encode: F,
                decode: U
            },
            q = {
                encode: H,
                decode: x
            },
            z = {};
        z[o.P2P_DATA] = {
            encode: m,
            decode: y
        }, z[o.P2P_REQUEST] = {
            encode: _,
            decode: C
        }, z[o.P2P_CANCEL] = {
            encode: E,
            decode: O
        }, z[o.P2P_HAVE] = {
            encode: v,
            decode: k
        }, z[o.P2P_DONT_HAVE] = {
            encode: b,
            decode: D
        }, z[o.P2P_LATENCY_REQUEST] = {
            encode: S,
            decode: P
        }, z[o.P2P_LATENCY_RESPONSE] = {
            encode: T,
            decode: I
        }, z[o.P2P_DOWNLOADING] = {
            encode: R,
            decode: L
        }, z[o.P2P_NEW_SEGMENT] = {
            encode: A,
            decode: M
        }, z[o.P2P_INITIALIZING] = {
            encode: w,
            decode: N
        }, z[o.P2P_VERSION] = B, z[o.P2P_HAVE_REQUEST] = B, z[o.REPORT] = B, z[o.MATCH] = B, z[o.SDP] = B, z[o.FILE_INFO] = q, z[o.SWARM_HEALTH] = B, z[o.SWARM_ERROR] = B, z[o.JOIN] = B;
        var V = function(e, t, n, i) {
                var r = n;
                i && t in z && z[t].encode && (r = z[t].encode(n));
                var o = new Uint8Array(5 + r.length),
                    s = r.length;
                return o[e++] = t, o.set(f(s), e), e += a, o.set(r, e), o
            },
            W = function(e, t) {
                var n = e[t++],
                    i = h(e, t);
                t += a;
                var r = e.slice(t, t + i);
                return [n, r]
            };
        r.concat = function(e) {
            var t = 0;
            e.map(function(e) {
                t += e.length
            });
            var n = new Uint8Array(t),
                i = 0;
            return e.map(function(e) {
                n.set(e, i), i += e.length
            }), n
        }, r.encode = function(e) {
            var t = [];
            return e.forEach(function(e) {
                if (e && e.tag && z[e.tag] && z[e.tag].encode) {
                    var n = z[e.tag].encode(e);
                    t.push(V(0, e.tag, n))
                }
            }), r.concat(t)
        }, r.decode = function(e) {
            for (var t = 0, n = []; t < e.length;) {
                var i = W(e, t),
                    r = i[0],
                    o = i[1];
                t += s + a;
                var c = z[r];
                if (!c || !c.decode) return null;
                n.push(c.decode(e, t, o.length)), t += o.length
            }
            return n
        }, r.transferedSwarmIdSize = 36, r.hashUrlSize = 32, r.packSwarmId = function(e) {
            return e.length > r.transferedSwarmIdSize && (i.warn("trimming swarmId to be at size of " + r.transferedSwarmIdSize), e = e.substr(0, r.transferedSwarmIdSize)), new Array(r.transferedSwarmIdSize - e.length + 1).join(" ").concat(e)
        }, e.packSwarmId = r.packSwarmId, e.concat = r.concat, e.decode = r.decode, e.encode = r.encode
    }(i.core.protocol.BinaryProtocol = i.core.protocol.BinaryProtocol || {}),
    function() {
        var e = !1,
            t = /xyz/.test(function() {
                xyz
            }) ? /\b_super\b/ : /.*/;
        Object.subClass = function(n) {
            function i() {
                !e && this.ctor && this.ctor.apply(this, arguments)
            }
            var r = this.prototype;
            e = !0;
            var o = new this;
            e = !1;
            var s;
            for (s in n) {
                var a = "function" == typeof n[s] && "function" == typeof r[s] && t.test(n[s]);
                o[s] = a ? function(e, t) {
                    return function() {
                        var n = this._super;
                        this._super = r[e];
                        var i = t.apply(this, arguments);
                        return this._super = n, i
                    }
                }(s, n[s]) : n[s]
            }
            for (s in this) this.hasOwnProperty(s) && "function" != typeof this[s] && (i[s] = this[s]);
            return i.prototype = o, i.constructor = i, i.subClass = arguments.callee, i.addBehavior = function(e, t) {
                if (t = t || {}, !e) throw "behaviorAbstractClass must be a vaild behavior class";
                override(o, t, new e)
            }, i
        }
    }(),
    function(e) {
        var t = t || function(e, t) {
            var n = {},
                i = n.lib = {},
                r = function() {},
                o = i.Base = {
                    extend: function(e) {
                        r.prototype = this;
                        var t = new r;
                        return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function() {
                                t.$super.init.apply(this, arguments)
                            }), t.init.prototype = t, t.$super = this,
                            t
                    },
                    create: function() {
                        var e = this.extend();
                        return e.init.apply(e, arguments), e
                    },
                    init: function() {},
                    mixIn: function(e) {
                        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                    },
                    clone: function() {
                        return this.init.prototype.extend(this)
                    }
                },
                s = i.WordArray = o.extend({
                    init: function(e, n) {
                        e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length
                    },
                    toString: function(e) {
                        return (e || c).stringify(this)
                    },
                    concat: function(e) {
                        var t = this.words,
                            n = e.words,
                            i = this.sigBytes;
                        if (e = e.sigBytes, this.clamp(), i % 4)
                            for (var r = 0; e > r; r++) t[i + r >>> 2] |= (n[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 24 - 8 * ((i + r) % 4);
                        else if (65535 < n.length)
                            for (r = 0; e > r; r += 4) t[i + r >>> 2] = n[r >>> 2];
                        else t.push.apply(t, n);
                        return this.sigBytes += e, this
                    },
                    clamp: function() {
                        var t = this.words,
                            n = this.sigBytes;
                        t[n >>> 2] &= 4294967295 << 32 - 8 * (n % 4), t.length = e.ceil(n / 4)
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e.words = this.words.slice(0), e
                    },
                    random: function(t) {
                        for (var n = [], i = 0; t > i; i += 4) n.push(4294967296 * e.random() | 0);
                        return new s.init(n, t)
                    }
                }),
                a = n.enc = {},
                c = a.Hex = {
                    stringify: function(e) {
                        var t = e.words;
                        e = e.sigBytes;
                        for (var n = [], i = 0; e > i; i++) {
                            var r = t[i >>> 2] >>> 24 - 8 * (i % 4) & 255;
                            n.push((r >>> 4).toString(16)), n.push((15 & r).toString(16))
                        }
                        return n.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], i = 0; t > i; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - 4 * (i % 8);
                        return new s.init(n, t / 2)
                    }
                },
                l = a.Latin1 = {
                    stringify: function(e) {
                        var t = e.words;
                        e = e.sigBytes;
                        for (var n = [], i = 0; e > i; i++) n.push(String.fromCharCode(t[i >>> 2] >>> 24 - 8 * (i % 4) & 255));
                        return n.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], i = 0; t > i; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - 8 * (i % 4);
                        return new s.init(n, t)
                    }
                },
                d = a.Utf8 = {
                    stringify: function(e) {
                        try {
                            return decodeURIComponent(escape(l.stringify(e)))
                        } catch (t) {
                            throw Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(e) {
                        return l.parse(unescape(encodeURIComponent(e)))
                    }
                },
                u = i.BufferedBlockAlgorithm = o.extend({
                    reset: function() {
                        this._data = new s.init, this._nDataBytes = 0
                    },
                    _append: function(e) {
                        "string" == typeof e && (e = d.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                    },
                    _process: function(t) {
                        var n = this._data,
                            i = n.words,
                            r = n.sigBytes,
                            o = this.blockSize,
                            a = r / (4 * o),
                            a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0);
                        if (t = a * o, r = e.min(4 * t, r), t) {
                            for (var c = 0; t > c; c += o) this._doProcessBlock(i, c);
                            c = i.splice(0, t), n.sigBytes -= r
                        }
                        return new s.init(c, r)
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e._data = this._data.clone(), e
                    },
                    _minBufferSize: 0
                });
            i.Hasher = u.extend({
                cfg: o.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e), this.reset()
                },
                reset: function() {
                    u.reset.call(this), this._doReset()
                },
                update: function(e) {
                    return this._append(e), this._process(), this
                },
                finalize: function(e) {
                    return e && this._append(e), this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(e) {
                    return function(t, n) {
                        return new e.init(n).finalize(t)
                    }
                },
                _createHmacHelper: function(e) {
                    return function(t, n) {
                        return new h.HMAC.init(e, n).finalize(t)
                    }
                }
            });
            var h = n.algo = {};
            return n
        }(Math);
        ! function() {
            var e = t,
                n = e.lib,
                i = n.WordArray,
                r = n.Hasher,
                o = [],
                n = e.algo.SHA1 = r.extend({
                    _doReset: function() {
                        this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(e, t) {
                        for (var n = this._hash.words, i = n[0], r = n[1], s = n[2], a = n[3], c = n[4], l = 0; 80 > l; l++) {
                            if (16 > l) o[l] = 0 | e[t + l];
                            else {
                                var d = o[l - 3] ^ o[l - 8] ^ o[l - 14] ^ o[l - 16];
                                o[l] = d << 1 | d >>> 31
                            }
                            d = (i << 5 | i >>> 27) + c + o[l], d = 20 > l ? d + ((r & s | ~r & a) + 1518500249) : 40 > l ? d + ((r ^ s ^ a) + 1859775393) : 60 > l ? d + ((r & s | r & a | s & a) - 1894007588) : d + ((r ^ s ^ a) - 899497514), c = a, a = s, s = r << 30 | r >>> 2, r = i, i = d
                        }
                        n[0] = n[0] + i | 0, n[1] = n[1] + r | 0, n[2] = n[2] + s | 0, n[3] = n[3] + a | 0, n[4] = n[4] + c | 0
                    },
                    _doFinalize: function() {
                        var e = this._data,
                            t = e.words,
                            n = 8 * this._nDataBytes,
                            i = 8 * e.sigBytes;
                        return t[i >>> 5] |= 128 << 24 - i % 32, t[(i + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296), t[(i + 64 >>> 9 << 4) + 15] = n, e.sigBytes = 4 * t.length, this._process(), this._hash
                    },
                    clone: function() {
                        var e = r.clone.call(this);
                        return e._hash = this._hash.clone(), e
                    }
                });
            e.SHA1 = r._createHelper(n), e.HmacSHA1 = r._createHmacHelper(n)
        }(), e.CryptoJS = t
    }(i),
    function(e) {
        var t = function(e, t) {
                return e + t & 4294967295
            },
            n = function(e, n, i, r, o, s) {
                return n = t(t(n, e), t(r, s)), t(n << o | n >>> 32 - o, i)
            },
            i = function(e, t, i, r, o, s, a) {
                return n(t & i | ~t & r, e, t, o, s, a)
            },
            r = function(e, t, i, r, o, s, a) {
                return n(t & r | i & ~r, e, t, o, s, a)
            },
            o = function(e, t, i, r, o, s, a) {
                return n(t ^ i ^ r, e, t, o, s, a)
            },
            s = function(e, t, i, r, o, s, a) {
                return n(i ^ (t | ~r), e, t, o, s, a)
            },
            a = function(e, n) {
                var a = e[0],
                    c = e[1],
                    l = e[2],
                    d = e[3];
                a = i(a, c, l, d, n[0], 7, -680876936), d = i(d, a, c, l, n[1], 12, -389564586), l = i(l, d, a, c, n[2], 17, 606105819), c = i(c, l, d, a, n[3], 22, -1044525330), a = i(a, c, l, d, n[4], 7, -176418897), d = i(d, a, c, l, n[5], 12, 1200080426), l = i(l, d, a, c, n[6], 17, -1473231341), c = i(c, l, d, a, n[7], 22, -45705983), a = i(a, c, l, d, n[8], 7, 1770035416), d = i(d, a, c, l, n[9], 12, -1958414417), l = i(l, d, a, c, n[10], 17, -42063), c = i(c, l, d, a, n[11], 22, -1990404162), a = i(a, c, l, d, n[12], 7, 1804603682), d = i(d, a, c, l, n[13], 12, -40341101), l = i(l, d, a, c, n[14], 17, -1502002290), c = i(c, l, d, a, n[15], 22, 1236535329), a = r(a, c, l, d, n[1], 5, -165796510), d = r(d, a, c, l, n[6], 9, -1069501632), l = r(l, d, a, c, n[11], 14, 643717713), c = r(c, l, d, a, n[0], 20, -373897302), a = r(a, c, l, d, n[5], 5, -701558691), d = r(d, a, c, l, n[10], 9, 38016083), l = r(l, d, a, c, n[15], 14, -660478335), c = r(c, l, d, a, n[4], 20, -405537848), a = r(a, c, l, d, n[9], 5, 568446438), d = r(d, a, c, l, n[14], 9, -1019803690), l = r(l, d, a, c, n[3], 14, -187363961), c = r(c, l, d, a, n[8], 20, 1163531501), a = r(a, c, l, d, n[13], 5, -1444681467), d = r(d, a, c, l, n[2], 9, -51403784), l = r(l, d, a, c, n[7], 14, 1735328473), c = r(c, l, d, a, n[12], 20, -1926607734), a = o(a, c, l, d, n[5], 4, -378558), d = o(d, a, c, l, n[8], 11, -2022574463), l = o(l, d, a, c, n[11], 16, 1839030562), c = o(c, l, d, a, n[14], 23, -35309556), a = o(a, c, l, d, n[1], 4, -1530992060), d = o(d, a, c, l, n[4], 11, 1272893353), l = o(l, d, a, c, n[7], 16, -155497632), c = o(c, l, d, a, n[10], 23, -1094730640), a = o(a, c, l, d, n[13], 4, 681279174), d = o(d, a, c, l, n[0], 11, -358537222), l = o(l, d, a, c, n[3], 16, -722521979), c = o(c, l, d, a, n[6], 23, 76029189), a = o(a, c, l, d, n[9], 4, -640364487), d = o(d, a, c, l, n[12], 11, -421815835), l = o(l, d, a, c, n[15], 16, 530742520), c = o(c, l, d, a, n[2], 23, -995338651), a = s(a, c, l, d, n[0], 6, -198630844), d = s(d, a, c, l, n[7], 10, 1126891415), l = s(l, d, a, c, n[14], 15, -1416354905), c = s(c, l, d, a, n[5], 21, -57434055), a = s(a, c, l, d, n[12], 6, 1700485571), d = s(d, a, c, l, n[3], 10, -1894986606), l = s(l, d, a, c, n[10], 15, -1051523), c = s(c, l, d, a, n[1], 21, -2054922799), a = s(a, c, l, d, n[8], 6, 1873313359), d = s(d, a, c, l, n[15], 10, -30611744), l = s(l, d, a, c, n[6], 15, -1560198380), c = s(c, l, d, a, n[13], 21, 1309151649), a = s(a, c, l, d, n[4], 6, -145523070), d = s(d, a, c, l, n[11], 10, -1120210379), l = s(l, d, a, c, n[2], 15, 718787259), c = s(c, l, d, a, n[9], 21, -343485551), e[0] = t(a, e[0]), e[1] = t(c, e[1]), e[2] = t(l, e[2]), e[3] = t(d, e[3])
            },
            c = function(e) {
                var t, n = [];
                for (t = 0; 64 > t; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
                return n
            },
            l = function(e) {
                var t, n = [];
                for (t = 0; 64 > t; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
                return n
            },
            d = function(e) {
                var t, n, i, r, o, s, l = e.length,
                    d = [1732584193, -271733879, -1732584194, 271733878];
                for (t = 64; l >= t; t += 64) a(d, c(e.substring(t - 64, t)));
                for (e = e.substring(t - 64), n = e.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; n > t; t += 1) i[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
                if (i[t >> 2] |= 128 << (t % 4 << 3), t > 55)
                    for (a(d, i), t = 0; 16 > t; t += 1) i[t] = 0;
                return r = 8 * l, r = r.toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(r[2], 16), s = parseInt(r[1], 16) || 0, i[14] = o, i[15] = s, a(d, i), d
            },
            u = function(e) {
                var t, n, i, r, o, s, c = e.length,
                    d = [1732584193, -271733879, -1732584194, 271733878];
                for (t = 64; c >= t; t += 64) a(d, l(e.subarray(t - 64, t)));
                for (e = c > t - 64 ? e.subarray(t - 64) : new Uint8Array(0), n = e.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; n > t; t += 1) i[t >> 2] |= e[t] << (t % 4 << 3);
                if (i[t >> 2] |= 128 << (t % 4 << 3), t > 55)
                    for (a(d, i), t = 0; 16 > t; t += 1) i[t] = 0;
                return r = 8 * c, r = r.toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(r[2], 16), s = parseInt(r[1], 16) || 0, i[14] = o, i[15] = s, a(d, i), d
            },
            h = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
            f = function(e) {
                var t, n = "";
                for (t = 0; 4 > t; t += 1) n += h[e >> 8 * t + 4 & 15] + h[e >> 8 * t & 15];
                return n
            },
            p = function(e) {
                var t;
                for (t = 0; t < e.length; t += 1) e[t] = f(e[t]);
                return e.join("")
            },
            g = function(e) {
                return p(d(e))
            },
            m = function() {
                this.reset()
            };
        "5d41402abc4b2a76b9719d911017c592" !== g("hello") && (t = function(e, t) {
            var n = (65535 & e) + (65535 & t),
                i = (e >> 16) + (t >> 16) + (n >> 16);
            return i << 16 | 65535 & n
        }), m.prototype.append = function(e) {
            return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), this.appendBinary(e), this
        }, m.prototype.appendBinary = function(e) {
            this._buff += e, this._length += e.length;
            var t, n = this._buff.length;
            for (t = 64; n >= t; t += 64) a(this._state, c(this._buff.substring(t - 64, t)));
            return this._buff = this._buff.substr(t - 64), this
        }, m.prototype.end = function(e) {
            var t, n, i = this._buff,
                r = i.length,
                o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; r > t; t += 1) o[t >> 2] |= i.charCodeAt(t) << (t % 4 << 3);
            return this._finish(o, r), n = e ? this._state : p(this._state), this.reset(), n
        }, m.prototype._finish = function(e, t) {
            var n, i, r, o = t;
            if (e[o >> 2] |= 128 << (o % 4 << 3), o > 55)
                for (a(this._state, e), o = 0; 16 > o; o += 1) e[o] = 0;
            n = 8 * this._length, n = n.toString(16).match(/(.*?)(.{0,8})$/), i = parseInt(n[2], 16), r = parseInt(n[1], 16) || 0, e[14] = i, e[15] = r, a(this._state, e)
        }, m.prototype.reset = function() {
            return this._buff = "", this._length = 0, this._state = [1732584193, -271733879, -1732584194, 271733878], this
        }, m.prototype.destroy = function() {
            delete this._state, delete this._buff, delete this._length
        }, m.hash = function(e, t) {
            /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e)));
            var n = d(e);
            return t ? n : p(n)
        }, m.hashBinary = function(e, t) {
            var n = d(e);
            return t ? n : p(n)
        }, m.ArrayBuffer = function() {
            this.reset()
        }, m.ArrayBuffer.prototype.append = function(e) {
            var t, n = this._concatArrayBuffer(this._buff, e),
                i = n.length;
            for (this._length += e.byteLength, t = 64; i >= t; t += 64) a(this._state, l(n.subarray(t - 64, t)));
            return this._buff = i > t - 64 ? n.subarray(t - 64) : new Uint8Array(0), this
        }, m.ArrayBuffer.prototype.end = function(e) {
            var t, n, i = this._buff,
                r = i.length,
                o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; r > t; t += 1) o[t >> 2] |= i[t] << (t % 4 << 3);
            return this._finish(o, r), n = e ? this._state : p(this._state), this.reset(), n
        }, m.ArrayBuffer.prototype._finish = m.prototype._finish, m.ArrayBuffer.prototype.reset = function() {
            return this._buff = new Uint8Array(0), this._length = 0, this._state = [1732584193, -271733879, -1732584194, 271733878], this
        }, m.ArrayBuffer.prototype.destroy = m.prototype.destroy, m.ArrayBuffer.prototype._concatArrayBuffer = function(e, t) {
            var n = e.length,
                i = new Uint8Array(n + t.byteLength);
            return i.set(e), i.set(new Uint8Array(t), n), i
        }, m.ArrayBuffer.hash = function(e, t) {
            var n = u(new Uint8Array(e));
            return t ? n : p(n)
        }, e.MD5 = m
    }(i.core.util),
    function(e) {
        var t = {
            readFileInSlices: function(e, t, n, r) {
                var o, s = new FileReader,
                    a = 0;
                s.onloadend = function(c) {
                    c.target.readyState == FileReader.DONE && (i.log("onload returned: " + s.readyState), r(e, c.target.result, function() {
                        a++, (a + 1) * n < t.size ? (o = t.slice(a * n, (a + 1) * n), 1 == s.readyState && i.error("onloadend in file: " + t + " readyState==1"), i.log("before reading: " + s.readyState), s.readAsArrayBuffer(o)) : a * n < t.size ? (o = t.slice(a * n, t.size), s.readAsArrayBuffer(o)) : (i.debug("Finished reading file " + e), r(e))
                    }))
                }, o = t.slice(a * n, (a + 1) * n), s.readAsArrayBuffer(o)
            }
        };
        e.fileHandler = t
    }(i.core.util),
    function(e) {
        var t = function() {
                function e(e, t) {
                    if (!e) return t;
                    if (!t) return e;
                    var n = "/",
                        i = "";
                    if (-1 !== e.indexOf("://")) {
                        var r = e.split("://");
                        n = r[0] + "://", i = r[1]
                    } else i = e;
                    for (var o = i.split("/").filter(function(e) {
                            return e.length > 0
                        }), s = (t.match(/\.\.\//g) || []).length, a = 0; s > a; a++) o.pop();
                    var c = n + o.join("/");
                    t = t.replace(/\.\.\//g, ""), "/" === t[0] && (t = t.replace("/", ""));
                    var l = c.lastIndexOf("/") === c.length - 1 ? c + t : c + "/" + t;
                    return l
                }

                function t(e, t) {
                    t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var n = new RegExp("[\\?&]" + t + "=([^&#]*)"),
                        i = n.exec(e);
                    return null === i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
                }
                return {
                    combine: e,
                    getQueryParameter: t
                }
            },
            n = t();
        e.UrlUtils = n
    }(i.core.util), window = window || self,
        function(e) {
            e.loadScript = function(e, t) {
                var n = document.getElementsByTagName("head")[0],
                    i = document.createElement("script");
                i.type = "text/javascript", i.src = e, i.onreadystatechange = t, i.onload = t, n.appendChild(i)
            }, e.isObjectEmpty = function(e) {
                for (var t in e)
                    if (e[t]) return !1;
                return !0
            }, e.envokeCallback = function(t, n, r) {
                r = r || window, t && "function" == typeof t ? e.asyncDefer(function() {
                    t.apply(r, n)
                }) : i.log("couldn't envoke the callback: " + t)
            }, e.envokeCallbackSync = function(e, t, n) {
                n = n || window, e && "function" == typeof e ? e.apply(n, t) : i.log("couldn't envoke the callback: " + e)
            }, e.executeFunctionByName = function(e, t, n) {
                for (var i = e.split("."), r = i.pop(), o = 0; o < i.length; o++) t = t[i[o]];
                return t[r].apply(t, n)
            }, e.uint8ToString = function(e) {
                for (var t = 32768, n = [], i = 0; i < e.length; i += t) n.push(String.fromCharCode.apply(null, e.subarray(i, i + t)));
                return n.join("")
            }, e.overrideNative = function() {
                var e = Math.floor;
                Math.floor = function(t) {
                    var n = t;
                    return isNaN(n) ? void 0 : e(t)
                };
                var t = Math.ceil;
                Math.ceil = function(e) {
                    var n = e;
                    return isNaN(n) ? void 0 : t(e)
                };
                var n = Math.round;
                Math.round = function(e) {
                    var t = e;
                    return isNaN(t) ? void 0 : n(e)
                }
            }, e.parseResponseHeaders = function(e) {
                var t = {};
                if (!e) return t;
                for (var n = e.split("\r\n"), i = 0; i < n.length; i++) {
                    var r = n[i],
                        o = r.indexOf(": ");
                    if (o > 0) {
                        var s = r.substring(0, o).toLocaleLowerCase(),
                            a = r.substring(o + 2);
                        t[s] = a
                    }
                }
                return t
            }, e.parseResponseLengthHeader = function(e, t) {
                return e && 2 == e.split("/").length ? parseInt(e.split("/")[1]) : t ? parseInt(t) : void 0
            };
            var t = {},
                n = 0;
            window.addEventListener("message", function(e) {
                if (e.data && "string" == typeof e.data && -1 !== e.data.indexOf("peer5")) {
                    var n = e.data.substr(6);
                    void 0 !== t[n] && (t[n][0].apply(t[n][1]), delete t[n])
                }
            }), e.asyncDefer = function(e, i) {
                n++, t[n] = [e, i], window.postMessage("peer5/" + n, location.href)
            }, e.removeSubDomain = function(e) {
                var t = e.split(".");
                return t.shift(), t.join(".")
            }, e.durationToSeconds = function(e) {
                function t(e) {
                    if (!e) return 0;
                    var t = e.substring(0, e.length - 1);
                    return Number(t)
                }
                var n = /P([0-9.]+Y)?([0-9.]+M)?([0-9.]+D)?T([0-9.]+H)?([0-9.]+M)?([0-9.]+S)?$/i;
                if (n.test(e)) {
                    var i = n.exec(e),
                        r = 0;
                    return r += 31536e3 * t(i[1]), r += 2592e3 * t(i[2]), r += 86400 * t(i[3]), r += 3600 * t(i[4]), r += 60 * t(i[5]), r += t(i[6])
                }
                return -1
            }, e.getIdFromScriptTag = function() {
                var e = [].slice.call(document.getElementsByTagName("script")),
                    t = e.filter(function(e) {
                        return null !== e.src.match(/.*peer5\.js.*/)
                    });
                if (0 === t.length) return null;
                var n = t[0].src;
                return i.core.util.UrlUtils.getQueryParameter(n, "id")
            }, e.longestSequence = function(e) {
                for (var t = 0, n = 0, i = 0, r = 0, o = e.slice().sort(), s = 1, a = o.length; a > s; s++) o[s] === o[s - 1] + 1 ? (r++, r > i && (i = r, t = s - r, n = s)) : r = 0;
                return o.slice(t, n + 1)
            }, e.average = function(e) {
                for (var t = 0, n = 0, i = e.length; i > n; n++) t += e[n];
                return t / i
            }, i.core.util.overrideNative()
        }(i.core.util),
        function(e) {
            e.slidingWindow = function(e) {
                function t(e) {
                    s.push(e), s.length > r && s.shift();
                    var t = 0;
                    s.forEach(function(e) {
                        t += e
                    }), o = t / s.length
                }

                function n() {
                    return o
                }

                function i() {
                    var e = s.length ? s[0] : -(1 / 0);
                    return s.forEach(function(t) {
                        e > t && (e = t)
                    }), e
                }
                e = e || {};
                var r = e.maxSize || 5,
                    o = 0,
                    s = [];
                return {
                    addValue: t,
                    getAverage: n,
                    getMinimum: i
                }
            }
        }(i.core.util),
        function(e) {
            function t() {
                function e(e, t) {
                    n[e] = t
                }

                function t(e) {
                    return n[e]
                }
                var n = Object.create(null);
                return {
                    addMapping: e,
                    getLength: t
                }
            }
            e.HashUrlLengthMap = t()
        }(i.core.util),
        function(e) {
            function t() {
                function e(e, t) {
                    i[e] = t, r[t] = e
                }

                function t(e) {
                    return r[e]
                }

                function n(e) {
                    return i[e]
                }
                var i = Object.create(null),
                    r = Object.create(null);
                return {
                    addMapping: e,
                    getUrl: t,
                    getSwarmId: n
                }
            }
            e.UrlSwarmIdMap = t()
        }(i.core.util),
        function(e) {
            function t(e, t) {
                if (!t || 0 === t.length) return e;
                for (var n = e.split("&"), i = 0; i < t.length; i++) {
                    var r = t[i];
                    n = n.filter(function(e) {
                        return !(0 === e.indexOf(r))
                    })
                }
                return n.join("&")
            }

            function n(e, t) {
                t = t || [];
                var n = e.split("&"),
                    i = n.filter(function(e) {
                        var n = e.split("=")[0];
                        return t.indexOf(n) > -1
                    });
                return i.join("&")
            }

            function r(e) {
                return e.replace(a, i.config.TOKEN)
            }

            function o(e) {
                return e.replace(s, i.config.TOKEN)
            }
            var s = /^https?:\/\/(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])*/,
                a = /^https?:\/\/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])/;
            e.urlDigest = {}, e = e.urlDigest, e.zixi = function(e) {
                var t, n = e.indexOf("hlsid=HLS_"),
                    i = e.indexOf("interstream");
                if (-1 !== n && -1 !== i) {
                    e = e.replace(":80/", "/");
                    var r = e.split("?"),
                        o = r[0] + "?",
                        s = r[1].split("&"),
                        a = s[0].indexOf("interstream"),
                        c = s[0].substring(0, a + 13) + "1&",
                        l = s[1] + "&",
                        d = s[2].indexOf("hlsid=HLS"),
                        u = s[2].substring(0, d) + "hlsid=HLS_1";
                    t = [o, c, l, u].join("")
                } else t = e;
                return t
            }, e.cleanQueryStringFromKeys = function(e, n) {
                var i = e.indexOf("?");
                if (-1 !== i) {
                    var r = e.substring(0, i),
                        o = e.substring(i + 1),
                        s = t(o, n),
                        a = s ? r + "?" + s : r;
                    return a
                }
                return e
            }, e.urlWithAllowedKeys = function(e, t) {
                var i = e.indexOf("?");
                if (-1 !== i) {
                    var r = e.substring(0, i),
                        o = e.substring(i + 1),
                        s = n(o, t);
                    return s ? r + "?" + s : r
                }
                return e
            }, e.stripWowzaSession = function(e) {
                return e.replace(/_w\d+/, "_")
            }, e.swarmId = function(t) {
                var n = t;
                return i.config.REMOVE_QUERYSTRING_FOR_HASH === !0 && (n = n.split("?")[0]), i.config.REMOVE_WOWZA_SESSION_ID_FOR_HASH === !0 && (n = e.stripWowzaSession(n)), i.config.REPLACE_HOSTNAME_WITH_TOKEN_FOR_HASH === !0 ? n = o(n) : i.config.REPLACE_IP_TOKEN_FOR_HASH === !0 ? n = r(n) : i.config.REMOVE_SUBDOMAIN_FOR_HASH === !0 && (n = i.core.util.removeSubDomain(n)), n
            };
            var c = Object.create(null);
            e.getNormalizedUrlHash = function(t) {
                var n = c[t];
                if (n) return n;
                var r = e.swarmId(t);
                return n = i.core.util.MD5.hash(r), c[t] = n, n
            }
        }(i.core.util),
        function(e) {
            e.AvailabilityMapBase = Object.subClass({
                name: "peer5.core.dataStructures.AvailabilityMapBase",
                ctor: function(e) {},
                has: function(e) {
                    throw "unimplemented method"
                },
                set: function(e) {
                    throw "unimplemented method"
                },
                isFull: function() {
                    throw "unimplemented method"
                },
                serialize: function() {
                    throw "unimplemented method"
                },
                deserializeAndCopy: function(e) {
                    throw "unimplemented method"
                },
                deserializeAndUpdate: function(e) {
                    throw "unimplemented method"
                }
            })
        }(i.core.dataStructures),
        function(e) {
            var t = i.core.dataStructures.AvailabilityMapBase;
            e.AvailabilityMap = t.subClass({
                name: "peer5.core.dataStructures.AvailabilityMap",
                ctor: function(e, t) {
                    if (this._super(e), this.seeder = t, this.size = e, this.length = Math.ceil(this.size / 8), this.bitArray = new Uint8Array(this.length), t)
                        for (var n = 0; n < this.length; n++) this.bitArray[n] = 255;
                    this.numOfOnBits = 0, this.bitMask = [1, 2, 4, 8, 16, 32, 64, 128]
                },
                has: function(e) {
                    if (this.isFull()) return !0;
                    var t = this.getOffsets(e);
                    return this.bitArray[t.index] & this.bitMask[t.bit]
                },
                set: function(e) {
                    if (!this.has(e)) {
                        var t = this.getOffsets(e);
                        return this.bitArray[t.index] = this.bitArray[t.index] | this.bitMask[t.bit], this.numOfOnBits++, !0
                    }
                    return !1
                },
                setSeeder: function(e) {
                    this.numOfOnBits = this.size
                },
                isFull: function() {
                    return this.numOfOnBits == this.size
                },
                serialize: function() {
                    return this.bitArray
                },
                deserializeAndCopy: function(e) {
                    this.bitArray = e;
                    for (var t = 0, n = 0; n < e.length; ++n)
                        if (0 != e[n])
                            for (var i = 0; i < this.bitMask.length; ++i) this.bitArray[n] & this.bitMask[i] && t++;
                    this.numOfOnBits = t
                },
                deserializeAndUpdate: function(e) {
                    for (var t = 0; e > t; ++t) this.set(e[t]);
                    this.numOfOnBits += e.length
                },
                getOffsets: function(e) {
                    var t = {};
                    return t.index = Math.floor(e / 8), t.bit = e % 8, t
                }
            })
        }(i.core.dataStructures),
        function(e) {
            var t = i.core.dataStructures.AvailabilityMap;
            e.AvailabilityMapFS = t.subClass({
                name: "peer5.core.dataStructures.AvailabilityMap",
                ctor: function(e, t, n, i) {
                    this._super(e, !1), this.numOfOnFSBits = 0, this.resourceId = t, this.metadataFile = t + ".fi", this._initiateFromFilesystem(n, i), this.fsBitArray = new Uint8Array(this.length)
                },
                setFS: function(e, t) {
                    if (!this.has(e) || this.hasFS(e)) return void t(!1);
                    var n = this.getOffsets(e),
                        r = new Uint8Array([this.fsBitArray[n.index] | this.bitMask[n.bit]]);
                    this.fsBitArray[n.index] = this.fsBitArray[n.index] | this.bitMask[n.bit], this.numOfOnFSBits++;
                    var o = this;
                    i.core.data.FSio.write(this.metadataFile, r, n.index, function(e, n) {
                        return e ? void t(!0) : (i.warn("couldn't write index to metadata file " + o.metadataFile), "space" === n ? o._handleOutOfSpaceError() : o._handleWriteError(), void t(error))
                    })
                },
                setFSFull: function(e) {
                    var t = this;
                    i.core.data.FSio.write(this.metadataFile, this.bitArray, 0, function(n) {
                        return n ? void e(!0) : (t._handleWriteError(), void e(!1))
                    })
                },
                hasFS: function(e) {
                    if (this.isFullFS()) return !0;
                    var t = this.getOffsets(e);
                    return this.fsBitArray[t.index] & this.bitMask[t.bit]
                },
                isFullFS: function() {
                    return this.numOfOnFSBits === this.size
                },
                deserializeAndCopy: function(e) {
                    this.fsBitArray = e;
                    for (var t = 0, n = 0; n < e.length; ++n)
                        if (0 != e[n])
                            for (var i = 0; i < this.bitMask.length; ++i) this.fsBitArray[n] & this.bitMask[i] && t++;
                    this.numOfOnFSBits = t
                },
                removeBlock: function(e, t) {
                    if (this.has(e)) {
                        var n = this.getOffsets(e),
                            r = this.bitArray[n.index] & ~this.bitMask[n.bit],
                            o = this;
                        i.core.data.FSio.write(this.metadataFile, r, n.index, function(e, s) {
                            e ? (o.bitArray[n.index] = r, t(!0)) : (i.warn("couldn't write index to metadata file " + o.metadataFile), "space" === s ? o._handleOutOfSpaceError() : o._handleWriteError(), t(!1))
                        })
                    } else t(!0)
                },
                removeBlocksFrom: function(e, t) {
                    if (e > this.size - 1) return void t(!0);
                    var n = this;
                    this.removeBlock(e, function(i) {
                        return i ? void n.removeBlocksFrom(e + 1, t) : void t(!1)
                    })
                },
                reset: function(e) {
                    this.removeBlocksFrom(0, e)
                },
                renameResource: function(e, t) {
                    var n = e + ".fi",
                        r = this;
                    i.core.data.FSio.renameResource(this.metadataFile, n, function(e) {
                        e && (r.metadataFile = n), t(e)
                    })
                },
                _initiateFromFilesystem: function(e, t) {
                    var n = this;
                    i.core.data.FSio.isExist(this.metadataFile, function(r) {
                        r ? (i.info("metadata file " + n.metadataFile + " exists"), i.core.data.FSio.read(n.metadataFile, 0, n.length, function(e, r) {
                            e ? (n.deserializeAndCopy(r), i.info("finished initiating AvailabilityMap from FS"), t(!0)) : (i.warn("error reading metadataFile " + n.metadataFile), t(!1))
                        })) : (i.info("metadata file " + n.metadataFile + " doesn't exist, creating a new one"), n.length < e ? i.core.data.FSio.createResource(n.metadataFile, function(e) {
                            e ? (i.log("created metadata file, initiating its length"), i.core.data.FSio.write(n.metadataFile, new Uint8Array([]), n.length - 1, function(e, i) {
                                e ? t(!0) : ("space" === i ? n._handleOutOfSpaceError() : n._handleWriteError(), t(!1))
                            })) : t(!1)
                        }) : (i.warn("not enough space to create metadata file: " + n.metadatFile + ", removing root dir"), i.core.data.FSio.removeRootDir(function() {
                            i.core.data.FSio.createResource(n.metadataFile, function(e) {
                                e ? (i.log("created metadata file, initiating its length"), i.core.data.FSio.write(n.metadataFile, new Uint8Array([]), n.length - 1, function(e, n) {
                                    e ? t(!0) : ("space" === n ? radio("handleOutOfSpaceError").broadcast() : radio("handleWriteError").broadcast(), t(!1))
                                })) : t(!1)
                            })
                        })))
                    })
                }
            })
        }(i.core.dataStructures),
        function(e) {
            e.core.dataStructures.DoublyLinkedList = Object.subClass({
                name: "peer5.core.dataStructures.DoublyLinkedList",
                ctor: function() {
                    this.length = 0, this.tail = null, this.head = null
                },
                insert: function(e) {
                    var t = {
                        prev: this.tail,
                        next: null,
                        value: e
                    };
                    this.tail && (this.tail.next = t), this.tail = t, 0 == this.length && (this.head = t), this.length++
                },
                remove: function(t) {
                    t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), this.tail == t && (this.tail = t.prev), this.head == t && (this.head = t.next), !this.head && this.length > 1 && e.error("removing elem: " + t + " but no head in the DoublyLinkedList"), this.length--
                },
                toString: function() {
                    for (var t = this.head; t;) e.log(t.value), t = t.next
                }
            })
        }(i),
        function() {
            i.core.dataStructures.LRU = Object.subClass({
                name: "peer5.core.dataStructures.LRU",
                ctor: function(e, t, n) {
                    this.max = e, this.dict = {}, this.list = new i.core.dataStructures.DoublyLinkedList, this.deleteCB = t, this.maxSizeThresholder = n
                },
                set: function(e, t) {
                    for (i.debug("LRU.set with key: " + e), this.dict[e] && (i.error("LRU: setting an element that already exists: " + e), this._delete(e)), this.list.insert(e), this.dict[e] = {
                            value: t,
                            p: this.list.tail
                        }; this.maxSizeThresholder && this.maxSizeThresholder() || !this.maxSizeThresholder && this.list.length > this.max;) {
                        var n = this.list.head;
                        this._delete(n.value, this.deleteCB)
                    }
                },
                update: function(e, t) {
                    this.dict[e] ? this.dict[e].value = t : i.error("LRU: updating an element that didnt exist: " + e)
                },
                get: function(e) {
                    if (i.debug("LRU.get with key: " + e), this.dict[e]) {
                        var t = this.dict[e].p;
                        return t == this.list.tail ? this.dict[e].value : (this.list.remove(t), this.list.insert(e), this.dict[e].p = this.list.tail, this.dict[e].value)
                    }
                    return !1
                },
                _delete: function(e, t) {
                    i.debug("removing key " + e + " from lru");
                    var n = this.dict[e];
                    this.list.remove(n.p), delete this.dict[e], t && t(e, n.value)
                }
            })
        }(),
        function(e, t) {
            e.taskQueue = function() {
                function e() {
                    return u[0]
                }

                function n() {
                    d = t.core.util.asyncDefer(i)
                }

                function i() {
                    if (0 !== h) {
                        var t = a();
                        t === !0 ? r(e()) : ("number" != typeof t && (t = 0), window.setTimeout(n, t))
                    }
                }

                function r(e) {
                    try {
                        e()
                    } catch (i) {
                        t.error("taskQueue::task() failed" + i)
                    }
                    s(), h > 0 && n()
                }

                function o(e) {
                    u[h] = e, h++, 1 === h && n()
                }

                function s() {
                    u.shift(), h--
                }

                function a() {
                    if (!f.canrun) return !0;
                    try {
                        return f.canrun()
                    } catch (e) {
                        return t.error("taskQueue::canrun failed" + e), s(), !1
                    }
                }

                function c() {
                    u = [], h = 0
                }

                function l() {
                    return u
                }
                var d, u = [],
                    h = 0,
                    f = {
                        push: o,
                        getTasks: l,
                        reset: c,
                        canrun: null
                    };
                return f
            }
        }(i.core.util, i),
        function() {
            i.core.transport.AbstractPeerConnection = Object.subClass({
                name: "peer5.core.transport.AbstractPeerConnection",
                ctor: function(e, t, n) {
                    this.peerConnection, this.dataChannel, this.label = n ? e + t : t + e, this.originId = e, this.targetId = t, this.createAnswerConstraints = {}, this.createOfferConstraints = {}, this.startTime, this.ready = !1, this.requestDropped = 0, this.numOfRequestedChunks = 0, this.numOfExpiredChunks = 0, this.numOfPendingChunks = 0, this.maxNumOfPendingChunks = i.config.MAX_PENDING_CHUNKS / 2, this.minLatencyForChunk = null, this.maxLatencyForChunk = null, this.avgLatencyForChunk = null, this.connectingDuration = null, this.numOfChunksArrived = 0, this.failure = !1
                },
                setupCall: function() {
                    throw "unimplemented method"
                },
                handleMessage: function() {
                    throw "unimplemented method"
                },
                send: function() {
                    throw "unimplemented method"
                },
                isFull: function() {
                    return this.numOfPendingChunks >= this.maxNumOfPendingChunks
                },
                increaseNumOfPendingChunks: function() {
                    this.numOfPendingChunks++
                },
                decreaseNumOfPendingChunks: function() {
                    this.numOfPendingChunks--, this.numOfPendingChunks < 0 && i.error("peerConnection numOfPendingChunks < 0")
                }
            })
        }(),
        function(e) {
            function t() {
                function e(e) {
                    c[e] || (c[e] = []);
                    var t = c[e];
                    t.length > 0 && t[t.length - 1].type === n || t.push({
                        type: n,
                        timeStamp: Date.now()
                    })
                }

                function t(e) {
                    c[e] || (c[e] = []);
                    var t = c[e];
                    0 !== t.length && t[t.length - 1].type !== r && t.push({
                        type: r,
                        timeStamp: Date.now()
                    })
                }

                function o(e, t) {
                    var i = c[e],
                        r = i.length > 0 ? i[i.length - 1] : null;
                    r && r.type === n ? (r.timeStamp = t, c[e] = [r]) : c[e] = []
                }

                function s(e) {
                    if (0 === e.length) return 0;
                    e.sort(function(e, t) {
                        return e.timeStamp - t.timeStamp
                    });
                    for (var t = [], i = 0, r = null, o = 0; o < e.length; o++) {
                        var s = e[o];
                        if (s.type === n) r || (r = s.timeStamp), t.push(1);
                        else if (t.pop(), 0 === t.length) {
                            var a = s.timeStamp - r;
                            i += a, r = null
                        }
                    }
                    if (t.length > 0) {
                        var c = Date.now() - r;
                        i += c
                    }
                    return i
                }

                function a() {
                    var e = Object.keys(c),
                        t = i.clientInstance.controller.getNumberOfConnectedPeers();
                    if (0 !== t) {
                        var n = [],
                            r = Date.now();
                        e.forEach(function(e) {
                            var t = c[e];
                            o(e, r), n = n.concat(t)
                        });
                        var a = r - l,
                            d = s(n);
                        l = r;
                        var u = Math.round(d / a * 100);
                        radio("peerUplinkLoad").broadcast(u)
                    }
                }
                var c = Object.create(null),
                    l = null;
                l = Date.now(), radio("channelBusy").subscribe(e), radio("channelFree").subscribe(t), setInterval(function() {
                    a()
                }, i.config.PEER_UPLINK_REPORT_INTERVAL)
            }
            if (i.feature.isEnabledAndInitialized(i.config.FEATURE_REPORT_PEER_UPLINK_LOAD_KEY)) {
                var n = "(",
                    r = ")";
                e.DataChannelStatsCollector = t()
            }
        }(i.core.transport),
        function() {
            window.RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection, window.RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription, window.RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate, i.core.transport.PeerConnectionImpl = i.core.transport.AbstractPeerConnection.subClass({
                name: "peer5.core.transport.PeerConnectionImpl",
                ctor: function(e, t, n, r) {
                    this._super(e, t, n), this.initiator = n, this.peerConnection = r || void 0, this.useBase64 = !1, this.dataChannelOptions = {}, i.config.DC_UNORDERED && (this.dataChannelOptions.ordered = !1), i.config.DC_MAX_RETRANSMITS ? this.dataChannelOptions.maxRetransmits = i.config.DC_MAX_RETRANSMITS : i.config.DC_MAX_PACKET_LIFE_TIME && (this.dataChannelOptions.maxPacketLifeTime = i.config.DC_MAX_PACKET_LIFE_TIME), this.initiatePeerConnection(n), this.sdpQueue = [], this.sdpQueueTimer = null, this.bufferCheckInterval = null, this.lastLatencyTimestamp = 0, this.latencySlidingWindow = i.core.util.slidingWindow()
                },
                initBufferCheck: function() {
                    var e = this;
                    this.bufferCheckInterval = setInterval(function() {
                        e.dataChannel && 0 === e.dataChannel.bufferedAmount && e.reportChannelFree()
                    }, i.config.PEER_UPLINK_LOAD_CHECK_INTERVAL)
                },
                reportChannelFree: function() {
                    radio("channelFree").broadcast(this.targetId)
                },
                setupCall: function() {
                    if (this.startTime = Date.now(), i.debug("createOffer with constraints: " + JSON.stringify(this.createOfferConstraints, null, " ")), "closed" === this.peerConnection.signalingState) return i.warn("cant create offer when signaling state is closed"), void this.handlePeerDisconnection();
                    this.peerConnection.createOffer(this.setLocalAndSendMessage_, function(e) {
                        i.debug("createOffer(): failed, " + e)
                    }, this.createOfferConstraints);
                    var e = this;
                    setTimeout(function() {
                        e.ready || (i.info("ready state of PCImpl to " + e.targetId + " = " + e.ready), e.failure = !0, i.warn("couldn't connect to " + e.targetId), i.info("signaling state:", e.peerConnection.signalingState, " icegathering state:", e.peerConnection.iceGatheringState, " iceconnection state:", e.peerConnection.iceConnectionState, " datachannel readyState:", e.dataChannel.readyState), e.handlePeerDisconnection(e.targetId))
                    }, i.config.PC_FAIL_TIMEOUT)
                },
                handleMessage: function(e) {
                    var t = e.sdpMessage;
                    if (i.info("handling message " + e), t.type) {
                        var n = new RTCSessionDescription(t),
                            r = this;
                        if (!this.peerConnectionStateValid()) return;
                        if (this.peerConnection.remoteDescriptionSet = !0, i.debug("adding remote description: " + this.targetId), this.peerConnection.setRemoteDescription(n, function() {
                                if (i.debug("setRemoteDescription(): success."), r.peerConnection.remoteDescriptionSuccessfullySet = !0, "offer" == n.type) {
                                    if (i.debug("createAnswer with constraints: " + JSON.stringify(this.createAnswerConstraints, null, " ")), !r.peerConnectionStateValid()) return;
                                    r.peerConnection.createAnswer(r.setLocalAndSendMessage_, function(e) {
                                        i.debug("createAnswer(): failed, " + e)
                                    }, r.createAnswerConstraints)
                                }
                            }, function(e) {
                                i.debug("setRemoteDescription(): failed, " + e)
                            }), this.peerConnection.candidatesMsgQueue) {
                            for (var o = 0; o < this.peerConnection.candidatesMsgQueue.length; ++o) this.peerConnection.addIceCandidate(new RTCIceCandidate(this.peerConnection.candidatesMsgQueue[o]), this.addIceCandidateFailureCallback_, this.addIceCandidateFailureCallback_);
                            this.peerConnection.candidatesMsgQueue = null
                        }
                    } else {
                        if (t.candidate) {
                            if (!this.peerConnectionStateValid()) return;
                            if (!this.peerConnection.remoteDescriptionSet) return i.debug("added ice candidate before setting remote description - not adding: " + this.targetId), this.peerConnection.candidatesQueue || (this.peerConnection.candidatesMsgQueue = []), void this.peerConnection.candidatesMsgQueue.push(t);
                            i.debug("signaling state: " + this.peerConnection.signalingState + " icegathering state: " + this.peerConnection.iceGatheringState + " iceconnection state: " + this.peerConnection.iceConnectionState);
                            var s = JSON.stringify(t);
                            if (s in this.peerConnection.candidates) return void i.warn("candidate was already added");
                            if (!this.peerConnectionStateValid()) return;
                            var a = new RTCIceCandidate(t);
                            return this.peerConnection.addIceCandidate(a, this.addIceCandidateSuccessCallback_, this.addIceCandidateFailureCallback_), void(this.peerConnection.candidates[s] = Date.now())
                        }
                        i.log("unknown message received")
                    }
                },
                send: function(e) {
                    var t = this.useBase64 ? i.core.util.base64.encode(e) : e.buffer;
                    this._send(t, i.config.P2P_SEND_RETRIES)
                },
                _send: function(e, t) {
                    if (this.dataChannel && "open" === this.dataChannel.readyState.toLowerCase()) {
                        i.debug("sending data on dataChannel");
                        try {
                            this.dataChannel.send(e);
                            var n = this.dataChannel.bufferedAmount;
                            n > 0 && radio("channelBusy").broadcast(this.targetId)
                        } catch (r) {
                            i.warn("dataChannel failed to send data", r)
                        }
                    } else if (i.info("dataChannel was not ready, setting timeout"), t > 0) {
                        t--;
                        var o = this;
                        setTimeout(function() {
                            o._send(e, t)
                        }, i.config.PC_RESEND_INTERVAL)
                    }
                },
                close: function() {
                    this.ready = !1, this.dataChannel && this.dataChannel.close && this.dataChannel.close(), this.peerConnection && this.peerConnection.close && this.peerConnection.close()
                },
                getBufferedAmount: function() {
                    return this.dataChannel.bufferedAmount
                },
                sendSdpMessage: function(e) {
                    if (this.sdpQueue.push(e), this.sdpQueue.length === i.config.PC_SDP_FLUSH_LENGTH) this.flushSdpMessageQueue();
                    else if (!this.sdpQueueTimer) {
                        var t = this;
                        this.sdpQueueTimer = setTimeout(function() {
                            t.sdpQueueTimer = null, t.flushSdpMessageQueue()
                        }, i.config.PC_SDP_FLUSH_TIMEOUT)
                    }
                },
                flushSdpMessageQueue: function() {
                    if (clearTimeout(this.sdpQueueTimer), this.sdpQueueTimer = null, this.sdpQueue.length) {
                        var e = this.sdpQueue;
                        this.sdpQueue = [];
                        var t = new i.core.protocol.GroupSdp(this.originId, this.targetId, e);
                        radio("router.send").broadcast(t, !0)
                    }
                },
                initiatePeerConnection: function(e) {
                    this.initiatePeerConnectionCallbacks(),
                        this.createPeerConnection(), e && this.ensureHasDataChannel()
                },
                initiatePeerConnectionCallbacks: function() {
                    this.registerEvents()
                },
                registerEvents: function() {
                    var e = this;
                    this.setLocalAndSendMessage_ = function(t) {
                        t.sdp = e.transformOutgoingSdp(t.sdp), e.peerConnection.setLocalDescription(t, function() {
                            i.debug("setLocalDescription(): success.")
                        }, function(e) {
                            i.debug("setLocalDescription(): failed" + e)
                        }), i.debug("Sending SDP message:\n" + t.sdp), e.sendSdpMessage(t)
                    }, this.iceCallback_ = function(t) {
                        t.candidate && "disconnected" != t.target.iceConnectionState && e.sendSdpMessage(t.candidate)
                    }, this.iceStateChangedCallback_ = function(t) {
                        i.debug("iceGatheringState: " + t.target.iceGatheringState), t.target && "disconnected" === t.target.iceConnectionState && (i.info("iceStateChanged to disconnected"), e.handlePeerDisconnection())
                    }, this.signalingStateChangeCallback_ = function(t) {
                        t.target && "closed" == t.target.signalingState && (i.info("signalingStateChanged to closed"), e.handlePeerDisconnection())
                    }, this.onCreateDataChannelCallback_ = function(t) {
                        null != e.dataChannel && "closed" != e.dataChannel.readyState && i.warn("Received DataChannel, but we already have one."), e.dataChannel = t.channel, i.debug("DataChannel with label " + e.dataChannel.label + " initiated by remote peer."), e.hookupDataChannelEvents()
                    }, this.onDataChannelReadyStateChange_ = function(t) {
                        var n = t.target.readyState;
                        i.info("DataChannel to " + e.targetId + " state:" + n), "open" == n.toLowerCase() && (e.initBufferCheck(), e.ready = !0, e.connectingDuration = Date.now() - e.startTime, radio("connectionReady").broadcast(e.targetId))
                    }, this.onDataChannelClose_ = function(t) {
                        i.info("data channel was closed"), e.handlePeerDisconnection()
                    }, this.onMessageCallback_ = function(t) {
                        i.debug("receiving data on dataChannel");
                        var n = e.useBase64 ? i.core.util.base64.decode(t.data) : new Uint8Array(t.data);
                        radio("dataReceivedEvent").broadcast(n, e.targetId)
                    }, this.addIceCandidateSuccessCallback_ = function(e) {}, this.addIceCandidateFailureCallback_ = function(e) {
                        i.warn("addIceCandidate failed " + e)
                    }
                },
                ensureHasDataChannel: function() {
                    null == this.peerConnection && i.warn("Tried to create data channel, but have no peer connection."), null != this.dataChannel && "closed" != this.dataChannel && i.warn("Creating DataChannel, but we already have one."), this.createDataChannel()
                },
                createPeerConnection: function() {
                    this.peerConnection ? i.info("using peerConnection from pool") : (this.peerConnection = i.core.transport.PeerConnectionImpl.createPeerConnection(), i.info("creating peerConnection on demand")), this.peerConnection.candidates = {}, this.peerConnection.onicecandidate = this.iceCallback_, this.peerConnection.oniceconnectionstatechange = this.iceStateChangedCallback_, this.peerConnection.onicechange = this.iceStateChangedCallback_, this.peerConnection.onsignalingstatechange = this.signalingStateChangeCallback_, this.peerConnection.ondatachannel = this.onCreateDataChannelCallback_
                },
                createDataChannel: function() {
                    i.info("createDataChannel");
                    try {
                        this.dataChannel = this.peerConnection.createDataChannel(this.label, this.dataChannelOptions)
                    } catch (e) {
                        return i.warn("failed creating datachannel: " + e.message), void this.handlePeerDisconnection()
                    }
                    i.debug("DataChannel with label " + this.dataChannel.label + " initiated locally."), this.hookupDataChannelEvents()
                },
                closeDataChannel: function() {
                    null == this.dataChannel && i.warn("Closing DataChannel, but none exists."), i.debug("DataChannel with label " + this.dataChannel.label + " is being closed."), this.dataChannel.close()
                },
                hookupDataChannelEvents: function() {
                    this.dataChannel.binaryType = "arraybuffer", this.dataChannel.onmessage = this.onMessageCallback_, this.dataChannel.onopen = this.onDataChannelReadyStateChange_, this.dataChannel.onclose = this.onDataChannelClose_, i.info("data-channel-status: " + this.dataChannel.readyState)
                },
                transformOutgoingSdp: function(e) {
                    var t = e.split("b=AS:30");
                    if (t.length > 1) var n = t[0] + "b=AS:1638400" + t[1];
                    else n = e;
                    return n
                },
                handlePeerDisconnection: function() {
                    this.reportChannelFree(), clearInterval(this.bufferCheckInterval), i.info("signaling state:", this.peerConnection.signalingState, " icegathering state:", this.peerConnection.iceGatheringState, " iceconnection state:", this.peerConnection.iceConnectionState, " datachannel.readyState:", this.dataChannel ? this.dataChannel.readyState : "undefined.undefined"), this.dataChannel && "closed" != this.dataChannel.readyState && (i.info("handling peer disconnection: closing the datachannel"), this.dataChannel.close()), "closed" != this.peerConnection.signalingState && i.info("handling peer disconnection: closing the peerconnection"), this.closed || (this.closed = !0, radio("connectionFailed").broadcast(this.targetId))
                },
                peerConnectionStateValid: function() {
                    return "closed" != this.peerConnection.iceConnectionState && "closed" != this.peerConnection.signalingState ? !0 : (i.warn("peerConnection state to " + this.targetId + " is invalid - 'not usable'"), !1)
                }
            }), i.core.transport.PeerConnectionImpl.createPeerConnection = function() {
                for (var e, t = i.config.STUN_SERVERS, n = i.config.TURN_SERVERS ? i.config.TURN_SERVERS : [], r = i.config.TURN_CREDENTIALS, o = {
                        iceServers: []
                    }, s = 0; s < t.length; ++s) o.iceServers.push({
                    urls: "stun:" + t[s]
                });
                for (var a = 0; a < n.length; ++a) o.iceServers.push({
                    urls: "turn:" + n[a],
                    credential: r[a]
                });
                try {
                    i.info("creating peerConnection"), e = new RTCPeerConnection(o)
                } catch (c) {
                    i.warn("Failed to create peer connection: " + c)
                }
                return e
            }
        }(),
        function() {
            i.core.stats.StatsCalculator = Object.subClass({
                name: "peer5.core.stats.StatsCalculator",
                ctor: function() {
                    this.Total_Recv_No_Waste = 0, this.Total_Recv_P2P = 0, this.Total_Recv_HTTP = 0, this.Total_Avg_Download = 0, this.Avg_Recv_P2P = 0, this.Avg_Recv_HTTP = 0, this.Total_Avg_Download = 0, this.statsTimestamp = 0, this.startTime = Date.now()
                },
                calcAvg: function(e) {
                    var t = Date.now() - this.statsTimestamp;
                    this.statsTimestamp += t, t /= 1e3, this.Total_Recv_No_Waste = e.totalP2PDownloaded + e.totalHttpDownloaded, this.Total_Avg_Download = (e.totalHttpDownloaded + e.totalP2PDownloaded) / ((Date.now() - this.startTime) / 1e3), this.Avg_Recv_P2P = (e.totalP2PDownloaded - this.Total_Recv_P2P) / t, this.Avg_Recv_HTTP = (e.totalHttpDownloaded - this.Total_Recv_HTTP) / t, this.Total_Recv_P2P = e.totalP2PDownloaded, this.Total_Recv_HTTP = e.totalHttpDownloaded
                }
            })
        }(),
        function(e) {
            function t() {
                function e(e) {
                    var t = {
                        action: e.action
                    };
                    return e.occurrence && (t.occurrence = e.occurrence), e.vendor ? t.vendor = e.vendor : t.vendor = p, e.duration && (t.duration = e.duration), e.timeSinceLoaded && (t.timeSinceLoaded = e.timeSinceLoaded), e.timeSinceReady && (t.timeSinceReady = e.timeSinceReady), t
                }

                function t(t) {
                    if (i.config.FEATURE_REPORT_PLAY_VS_REBUFFER) {
                        p = t.vendor || p;
                        var o = Date.now();
                        if ("load.end" === t.action && u.push({
                                action: n,
                                timeStamp: o
                            }), "pause.start" === t.action || "stop" === t.action) return u.push({
                            action: r,
                            timeStamp: o
                        }), null;
                        if ("pause.end" === t.action) return u.push({
                            action: n,
                            timeStamp: o
                        }), null;
                        "rebuffer.start" === t.action ? (h.push({
                            action: n,
                            timeStamp: o
                        }), u.push({
                            action: r,
                            timeStamp: o
                        })) : "rebuffer.end" === t.action && (h.push({
                            action: r,
                            timeStamp: o
                        }), u.push({
                            action: n,
                            timeStamp: o
                        }))
                    }
                    return e(t)
                }

                function o(e, t) {
                    for (var i = 0, o = 1; o < e.length; o++) {
                        var s = e[o],
                            a = e[o - 1];
                        s.action === r && a.action === n && (i += s.timeStamp - a.timeStamp)
                    }
                    var c = e[e.length - 1];
                    return c.action === n && (i += t - c.timeStamp), i
                }

                function s(e) {
                    return o(u, e)
                }

                function a(e) {
                    return o(h, e)
                }

                function c(e) {
                    u = [u[u.length - 1]], h = [h[h.length - 1]], u[0].timeStamp = e, h[0].timeStamp = e, f = e
                }

                function l() {
                    var e = Date.now(),
                        t = s(e),
                        n = a(e);
                    if (c(e), 0 === t && 0 === n) return null;
                    var i = {
                        vendor: p,
                        action: "durations"
                    };
                    return t > 0 && (i.playDuration = t), n > 0 && (i.rebufferDuration = n), i
                }
                var d = Date.now(),
                    u = [{
                        action: r,
                        timeStamp: d
                    }],
                    h = [{
                        action: r,
                        timeStamp: d
                    }],
                    f = d,
                    p = null;
                return {
                    handle: t,
                    prepareIntervalReport: l
                }
            }
            var n = !0,
                r = !1;
            e.PlayerEventsHandler = t()
        }(i.core.stats),
        function() {
            i.core.stats.ReportBuilder = Object.subClass({
                name: "peer5.core.stats.reportBuilder",
                ctor: function() {
                    this.queue = [], this.currentReport = {}, this.urlsMap = {}, this.registerEvents()
                },
                registerEvents: function() {
                    radio("speedEstimationCalculated").subscribe([function(e) {
                        var t = this.urlsMap[e.url];
                        if (t) {
                            var n = this.getSwarmReport(t);
                            n.mode = e.mode, n.predictedSpeed = e.predictedSpeed, n.actualSpeed = e.actualSpeed, n.bytesDownloaded = e.bytesDownloaded
                        }
                    }, this]), radio("fileInfoProcessed").subscribe([function(e) {
                        e.swarmId && e.url && (this.urlsMap[e.url] = e.swarmId)
                    }, this]), radio("peer5_received_fs_chunk").subscribe([function(e, t) {
                        var n = this.getSwarmReport(e);
                        n.fsLoad = n.fsLoad ? n.fsLoad + t : t
                    }, this]), radio("xhrBytesReceived").subscribe([function(e, t) {
                        var n = this.urlsMap[e];
                        if (n) {
                            var i = this.getSwarmReport(n);
                            i.httpDown = i.httpDown ? i.httpDown + t : t
                        }
                    }, this]), radio("peer5_waste_http_chunk").subscribe([function(e, t) {
                        var n = this.urlsMap[e];
                        if (n) {
                            var i = this.getSwarmReport(n);
                            i.httpWaste = i.httpWaste ? i.httpWaste + t : t
                        }
                    }, this]), radio("peer5_new_p2p_chunk").subscribe([function(e, t) {
                        var n = this.getSwarmReport(e);
                        n.p2pDown = n.p2pDown ? n.p2pDown + t : t
                    }, this]), radio("chunkSentEvent").subscribe([function(e, t) {
                        var n = this.getSwarmReport(e);
                        n.p2pUp = n.p2pUp ? n.p2pUp + t : t
                    }, this]), radio("peer5_waste_p2p_chunk").subscribe([function(e, t) {
                        var n = this.getSwarmReport(e);
                        n.p2pWaste = n.p2pWaste ? n.p2pWaste + t : t
                    }, this]), radio("p2pAbort").subscribe([function(e) {
                        var t = this.getSwarmReport(e);
                        t.p2pAbort = t.p2pAbort ? t.p2pAbort + 1 : 1
                    }, this]), radio("external.player").subscribe([function(e) {
                        var t = i.core.stats.PlayerEventsHandler.handle(e);
                        if (t) {
                            var n = this.getPlayerReport();
                            n.push(t)
                        }
                    }, this]), radio("playbackDelay").subscribe([function(e) {
                        var t = this.getNetworkReport();
                        t.secondsDelay = e
                    }, this]), radio("peerUplinkLoad").subscribe([function(e) {
                        var t = this.getNetworkReport();
                        t.peerUplinkLoadPercent = e
                    }, this]), radio("activePeerConnectionsNumberChanged").subscribe([function(e) {
                        var t = this.getPeersReport();
                        t.connected = e
                    }, this]), radio("availablePeerConnectionsNumberChanged").subscribe([function(e) {
                        var t = this.getPeersReport();
                        t.available = e
                    }, this])
                },
                getSwarmReport: function(e) {
                    return e ? (this.currentReport.swarms || (this.currentReport.swarms = {}), this.currentReport.swarms[e] || (this.currentReport.swarms[e] = {}), this.currentReport.swarms[e]) : null
                },
                getPlayerReport: function() {
                    return this.currentReport.player || (this.currentReport.player = []), this.currentReport.player
                },
                getPeersReport: function() {
                    return this.currentReport.peers || (this.currentReport.peers = {}), this.currentReport.peers
                },
                getNetworkReport: function() {
                    return this.currentReport.network || (this.currentReport.network = {}), this.currentReport.network
                },
                getSwarmFileSize: function(e) {
                    var t = i.core.data.BlockCache.get(e);
                    return t && t.init ? t.fileSize : 0
                },
                addPeriodicalReports: function() {
                    if (i.config.FEATURE_REPORT_PLAY_VS_REBUFFER) {
                        var e = i.core.stats.PlayerEventsHandler.prepareIntervalReport();
                        if (!e) return;
                        var t = this.getPlayerReport();
                        t.push(e)
                    }
                },
                rotateReport: function() {
                    this.addPeriodicalReports();
                    var e = this.currentReport;
                    if (this.currentReport = {}, e.swarms)
                        for (var t = e.swarms, n = Object.keys(t), r = 0, o = n.length; o > r; r++) {
                            var s = n[r],
                                a = this.getSwarmFileSize(s);
                            a && (t[s].fileSize = a), t[s].peers = i.clientInstance.controller.P2PController.getSwarmPeersCount(s)
                        }
                    e.network && "undefined" == typeof e.network.peerUplinkLoadPercent && delete e.network, i.core.util.isObjectEmpty(e) || this.queue.push(e)
                },
                processQueue: function() {
                    this.rotateReport();
                    for (var e = null; e = this.queue.shift();) e = new i.core.protocol.GroupReport(e), radio("router.send").broadcast(e)
                }
            }), i.core.stats.ReportBuilder = new i.core.stats.ReportBuilder
        }(),
        function(e) {
            function t() {
                function e(e) {
                    if (!o[e]) {
                        var t = Object.create(null);
                        t.slots = 0, t.loaded = 0, t.endedIntervalsDuration = 0, t.currIntervalStart = null, t.speed = void 0, t.nbProgress = 0, o[e] = t
                    }
                    var n = o[e];
                    n.slots++, 1 === n.slots && (n.currIntervalStart = performance.now())
                }

                function t(e) {
                    var t = o[e];
                    t.slots--, 0 === t.slots && (t.endedIntervalsDuration += performance.now() - t.currIntervalStart)
                }

                function n(e, t) {
                    var n = performance.now(),
                        r = o[e];
                    r.loaded += t, r.nbProgress++;
                    var c = n - r.currIntervalStart + r.endedIntervalsDuration;
                    r.speed = r.loaded / (c / 1e3);
                    var l, d;
                    if (r.nbProgress > 1) {
                        s = s ? a * r.speed + (1 - a) * s : r.speed;
                        var u = i.core.data.BlockCache.get(e);
                        u && (l = u.fileSize, d = (l - r.loaded) / s, r.predictedSpeed = l / (d + c / 1e3))
                    }
                    i.log(r.nbProgress + " avg speed " + r.speed + " predicted speed " + r.predictedSpeed + " loaded so far " + r.loaded + " size " + t + " total " + l + " smoothSpeed " + s + " url " + e)
                }

                function r(e) {
                    var t = o[e];
                    if (t && !(t.nbProgress <= 1)) return t.predictedSpeed
                }
                var o = Object.create(null),
                    s = null,
                    a = i.config.SPEED_SMOOTH_FACTOR;
                return radio("xhrSent").subscribe([e, this]), radio("xhrLoadend").subscribe([t, this]), radio("xhrBytesReceived").subscribe([n, this]), {
                    getSpeed: r
                }
            }
            e.HttpStats = t()
        }(i.core.stats),
        function() {
            i.core.stats.StatsCollector = Object.subClass({
                name: "peer5.core.stats.StatsCollector",
                ctor: function() {
                    this.statsEvents = {
                        totalP2PDownloaded: "peer5_new_p2p_chunk",
                        totalP2PUploaded: "chunkSentEvent",
                        totalP2PWaste: "peer5_waste_p2p_chunk",
                        totalHttpDownloaded: "xhrBytesReceived",
                        totalHttpWaste: "peer5_waste_http_chunk",
                        totalFSLoaded: "peer5_received_fs_chunk",
                        totalVerifiedBytes: "blockReceivedEvent"
                    }, this.playerStats = {
                        "load.end": [],
                        "seek.end": [],
                        "rebuffer.end": []
                    }, this.fpsDrop = [], this.lastHttpSpeed = 0, this.stats = {}, this.numOfPeers = 0, this.statsCalculators = {}, this._initResource("*"), this._registerEvents()
                },
                getStats: function(e) {
                    var t = e || "*",
                        n = {};
                    for (var r in i.core.stats.StatsCollector.stats[t]) n[r] = i.core.stats.StatsCollector.stats[t][r];
                    for (var r in i.core.stats.StatsCollector.playerStats) n[r] = i.core.stats.StatsCollector.playerStats[r];
                    return n.numOfPeers = this.getNumOfPeers(), n
                },
                getNumOfPeers: function() {
                    return this.numOfPeers
                },
                getLastHttpSpeed: function() {
                    return this.lastHttpSpeed
                },
                calcAvg: function() {
                    for (var e in this.statsCalculators) this.statsCalculators[e].calcAvg(this.stats[e]), radio("peer5_state_updated").broadcast(this.statsCalculators[e], this.statsCalculators[e].url)
                },
                _registerEvents: function() {
                    function e(e) {
                        radio(t.statsEvents[e]).subscribe([function(t, n) {
                            this.stats[t] || this._initResource(t), this.stats[t][e] += n, this.stats["*"][e] += n
                        }, t])
                    }
                    var t = this;
                    for (var n in this.statsEvents) e(n);
                    radio("resourceAdded").subscribe([function(e) {
                        this.stats[e] || this._initResource(e), this.stats[e].start = performance.now(), this.stats[e].startLoaded = this.stats[e].totalVerifiedBytes
                    }, this]), radio("resourceLoadEnd").subscribe([function(e, t) {
                        this.stats[e].end = performance.now()
                    }, this]), radio("httpProgressEvent").subscribe([function(e) {
                        this.setSpeed(e)
                    }, this]), radio("external.player").subscribe([function(e) {
                        void 0 !== this.playerStats[e.action] ? this.playerStats[e.action].push(e.duration) : "fps.drop" === e.action && this.fpsDrop.push(e.label)
                    }, this]), radio("fileInfoProcessed").subscribe([function(e) {
                        e.swarmId && e.url && (this.stats[e.swarmId] && !this.stats[e.url] ? (this.stats[e.url] = this.stats[e.swarmId], this.statsCalculators[e.url] = this.statsCalculators[e.swarmId]) : this.stats[e.url] && !this.stats[e.swarmId] ? (this.stats[e.swarmId] = this.stats[e.url], this.statsCalculators[e.swarmId] = this.statsCalculators[e.url]) : this.stats[e.swarmId] || this.stats[e.url] || (this._initResource(e.swarmId), this.stats[e.url] = this.stats[e.swarmId], this.statsCalculators[e.url] = this.statsCalculators[e.swarmId]), this.statsCalculators[e.swarmId].url = e.url, this.statsCalculators[e.swarmId].size = e.size)
                    }, this]), radio("activePeerConnectionsNumberChanged").subscribe([function(e) {
                        this.numOfPeers = e
                    }, this]), radio("fwBeforeUnload").subscribe([function(e, t) {
                        var n = this.statsCalculators[e];
                        n.calcAvg(this.stats[e]);
                        var i = this.stats[e].totalHttpDownloaded + this.stats[e].totalP2PDownloaded + this.stats[e].totalFSLoaded;
                        radio("exitPageStats").broadcast(i / t, n.Avg_Recv_HTTP + n.Avg_Recv_P2P, n.Total_Avg_Download)
                    }, this])
                },
                setSpeed: function(e) {
                    this.lastHttpSpeed = i.core.stats.HttpStats.getSpeed(e) || this.lastHttpSpeed
                },
                removeResource: function(e, t) {
                    delete this.statsCalculators[e], delete this.stats[e], delete this.statsCalculators[t], delete this.stats[t]
                },
                _initResource: function(e) {
                    this.stats[e] = {};
                    for (var t in this.statsEvents) this.stats[e][t] = 0;
                    this.statsCalculators[e] = new i.core.stats.StatsCalculator(e)
                }
            }), i.core.stats.StatsCollector = new i.core.stats.StatsCollector, i.getStats = function() {
                return i.core.stats.StatsCollector.getStats()
            }, i.getFps = function() {
                return i.core.stats.StatsCollector.fpsDrop.slice()
            }
        }(),
        function() {
            i.core.controllers.IController = Object.subClass({
                download: function(e, t, n) {
                    throw "unimplemented method"
                },
                stopResource: function(e) {
                    throw "unimplemented method"
                },
                removeResource: function(e) {
                    throw "unimplemented method"
                },
                init: function(e) {
                    throw "unimplemented method"
                },
                isPendingBlock: function(e, t) {
                    throw "unimplemented method"
                },
                getConnectionStats: function() {
                    throw "unimplemented method"
                }
            })
        }(),
        function(e) {
            function t() {
                function e(e) {
                    var t = Math.floor(e / n);
                    return t
                }

                function t(e) {
                    var t = d[e];
                    if (!t) return !1;
                    var n = Object.keys(t);
                    for (var i in n) {
                        var o = r(e, i);
                        if (o) return !0
                    }
                    return !1
                }

                function r(e, t) {
                    var n = d[e];
                    if (!n) return !1;
                    var r = n[t];
                    if (!r) return !1;
                    var o = !i.core.util.isObjectEmpty(r);
                    return o
                }

                function o(t, n) {
                    var i = e(n);
                    d[t] || (d[t] = Object.create(null)), d[t][i] || (d[t][i] = Object.create(null)), d[t][i][n] = Date.now()
                }

                function s(e, t) {
                    for (var n = Math.floor(t / i.config.CHUNK_SIZE) + 1, r = 0; n > r; r++) o(e, r)
                }

                function a(t, n) {
                    if (d[t]) {
                        var i = e(n);
                        d[t][i] && delete d[t][i][n]
                    }
                }

                function c(e, t) {
                    d[e] && delete d[e][t]
                }

                function l(e) {
                    delete d[e]
                }
                var d = Object.create(null);
                return {
                    isResourcePending: t,
                    isBlockPending: r,
                    addChunk: o,
                    addResource: s,
                    removeChunk: a,
                    removeBlock: c,
                    removeResource: l
                }
            }
            var n = i.config.BLOCK_SIZE / i.config.CHUNK_SIZE;
            e.PendingBlockMap = t()
        }(i.core.dataStructures),
        function() {
            var e = i.core.util.UrlSwarmIdMap,
                t = 1,
                n = 2;
            i.core.controllers.AbstractController = i.core.controllers.IController.subClass({
                ctor: function(e) {
                    this.resourceState = Object.create(null)
                },
                init: function(e) {
                    this.resourceState[e] = t
                },
                removeResource: function(e) {
                    delete this.resourceState[e], i.core.dataStructures.PendingBlockMap.removeResource(e)
                },
                stopResource: function(e) {
                    this.resourceState[e] = n, i.core.dataStructures.PendingBlockMap.removeResource(e)
                },
                addChunk: function(e, t, n) {
                    var r = i.core.data.BlockCache.get(e);
                    r.setChunk(n, t)
                },
                addBlock: function(e, t, n) {
                    var r = i.core.data.BlockCache.get(e);
                    r.setBlock(n, t)
                },
                getRarestBlocks: function(t, n, r) {
                    for (var o, s, a = i.core.data.BlockCache.get(t), c = [], l = [], d = this.P2PController || this, u = e.getSwarmId(t) || t, h = 0, f = a.getNumOfBlocks(); f > h; h++)
                        if (s = 0, r(h)) {
                            for (var p in d.remoteAvailabilityMaps[u]) d.remoteAvailabilityMaps[u][p].has(h) && s++;
                            0 == l.length ? (c.push(h), o = s) : s === o ? c.push(h) : o > s && (c = [h], o = s)
                        }
                    var g = i.core.util.randSample(c, n);
                    return g
                },
                getSeqBlocks: function(e, t, n) {
                    for (var r = i.core.data.BlockCache.get(e), o = [], s = r.getFirstMissingBlock(), a = r.getNumOfBlocks() - 1, c = s; a >= c && o.length < t; c++)
                        if (n(c)) o.push(c);
                        else if (o.length) break;
                    return o
                }
            })
        }(),
        function(e) {
            var t = function() {
                function e(e) {
                    var t = u[e];
                    t.idleTimeout && clearTimeout(t.idleTimeout), t.idleTimeout = setTimeout(function() {
                        radio("connectionIdle").broadcast({
                            peerId: e,
                            peerData: t
                        })
                    }, 1e3 * i.config.SECONDS_BEFORE_IDLE)
                }

                function t(t) {
                    u[t] = {
                        idleTimeout: null,
                        totalBytesReceived: 0,
                        totalDownloadTime: 0,
                        lastDownloadTimestamp: Date.now(),
                        totalBytesSent: 0,
                        lastUploadTimestamp: Date.now(),
                        clientVersion: null,
                        lastSwarmReportedAsHave: null,
                        lastHaveReportTimestamp: Date.now()
                    }, e(t)
                }

                function n(n, i) {
                    u[n] || t(n);
                    var r = u[n];
                    r.totalBytesSent += i, r.lastUploadTimestamp = Date.now(), e(n)
                }

                function r(e, t) {
                    d[e] || (d[e] = Object.create(null));
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        d[e][i] = Date.now()
                    }
                }

                function o(n, i, r) {
                    u[n] || t(n);
                    var o = u[n],
                        s = r.bytes,
                        a = Date.now() - d[i][r.id];
                    o.totalBytesReceived += s, o.totalDownloadTime += a, o.lastDownloadTimestamp = Date.now(), e(n)
                }

                function s(e) {
                    u[e] || t(e)
                }

                function a(e) {
                    delete u[e]
                }

                function c(e, n) {
                    u[e] || t(e);
                    var i = u[e];
                    i.clientVersion = n
                }

                function l(e, n) {
                    u[e] || t(e);
                    var i = u[e];
                    i.lastSwarmReportedAsHave = n, i.lastHaveReportTimestamp = Date.now()
                }
                var d = Object.create(null),
                    u = Object.create(null);
                return {
                    reportChunksRequestFromPeer: r,
                    reportChunksReceivedFromPeer: o,
                    reportUploadToPeer: n,
                    reportPeerConnected: s,
                    reportPeerDisconnected: a,
                    reportPeerClientVersion: c,
                    reportPeerHaveSwarm: l
                }
            };
            e.PeersPerformanceTracker = t()
        }(i.core.util),
        function() {
            var e = i.core.dataStructures.PendingBlockMap,
                t = 1,
                n = 2,
                r = [],
                o = !1;
            document.addEventListener("DOMContentLoaded", function() {
                var e = 0,
                    t = setInterval(function() {
                        i.info("creating peerConnection for pool"), r.push(i.core.transport.PeerConnectionImpl.createPeerConnection()), e++, (e > i.config.PC_POOL_SIZE || o) && clearInterval(t)
                    }, i.config.PC_POOL_INIT_INTERVAL)
            }), i.core.controllers.P2PController = i.core.controllers.AbstractController.subClass({
                ctor: function(e) {
                    this._super(), this.peersPerformanceTracker = i.core.util.PeersPerformanceTracker, this.lastSwarmDownloaded = {
                        swarmId: null,
                        timeStamp: null
                    }, this.peersBlacklist = Object.create(null), this.clientId = e, this.peerConnections = Object.create(null), this.sendQueues = Object.create(null), this.initPeerConnections = Object.create(null), this.droppedConnections = Object.create(null), this.attemptedConnections = Object.create(null), this.deletedPeerConnections = Object.create(null), this.numberOfPCCreated = 0, this.inited = !1, this.remoteAvailabilityMaps = Object.create(null), this.remoteHave = Object.create(null), this.remoteDownloading = Object.create(null), this.p2pPendingChunks = Object.create(null), this.p2pPendingChunksInBlock = Object.create(null), this.peerSwarms = Object.create(null), this.peerConnectionImpl = null, this.prefetchFlag = Object.create(null), this.resourceState = Object.create(null), this.pendingResources = Object.create(null), this.configureBrowserSpecific(), this.availableTimeStamp = 0, this.requestNum = 0, this.pendingRequests = Object.create(null), this.allocatingPC = !1, this.initClosePCQueue(), this.registerEvents(), this.startMeasuringLatency(), this.lookingForPeers = !0
                },
                init: function(e) {
                    o = !0, this._super(e), this.p2pPendingChunks[e] || (this.p2pPendingChunks[e] = Object.create(null), this.p2pPendingChunksInBlock[e] = Object.create(null)), this.remoteAvailabilityMaps[e] || (this.remoteAvailabilityMaps[e] = Object.create(null)), this.prefetchFlag[e] = 2 === i.state.resources.get(e).mod, this.addResourceAsPending(e), this.loadCachedHaveRequests(e)
                },
                download: function(e, t, n) {
                    var r = i.core.data.BlockCache.get(e);
                    if (r) {
                        var o;
                        if (o = t ? [t] : this.getAvailablePeersWithSwarm(e), o && 0 !== o.length) {
                            t || (this.lastSwarmDownloaded.swarmId = e, this.lastSwarmDownloaded.timeStamp = Date.now());
                            var s = this.getNumOfChunksToAllocate(o);
                            if (!(0 >= s)) {
                                var a, c, l = [];
                                if ((this.lastBlockRequestedInP2P || 0 === this.lastBlockRequestedInP2P) && !r.has(this.lastBlockRequestedInP2P)) {
                                    c = this.lastBlockRequestedInP2P, a = r.getChunkIdsOfBlock(c);
                                    for (var d = 0; d < a.length && l.length < s; ++d) r.hasChunk(a[d]) || this.isPendingChunk(e, a[d]) || l.push(a[d])
                                }
                                if (s -= l.length, 0 >= s) return this.distributeChunksAmongSources(e, l);
                                for (var u = Math.ceil(s / (i.config.BLOCK_SIZE / i.config.CHUNK_SIZE)), h = this, f = function(t) {
                                        for (var i = 0, s = o.length; s > i; i++) {
                                            var a = o[i],
                                                c = h.remoteAvailabilityMaps[e][a];
                                            if (c && c.has(t)) return n ? n(t) : !r.has(t) && !h.isPendingEntireBlock(e, t)
                                        }
                                        return !1
                                    }, p = this.getRarestBlocks(e, u, f), d = 0; d < p.length; d++)
                                    if (p[d] !== c) {
                                        a = r.getChunkIdsOfBlock(p[d]);
                                        for (var g = 0; g < a.length && l.length <= s; ++g) r.hasChunk(a[g]) || this.p2pPendingChunks[e] && this.p2pPendingChunks[e][a[g]] || l.push(a[g]);
                                        this.lastBlockRequestedInP2P = p[d]
                                    }
                                return this.distributeChunksAmongSources(e, l)
                            }
                        }
                    }
                },
                getAvailablePeersWithSwarm: function(e) {
                    var t = [];
                    for (var n in this.peerConnections) this.isPeerAvailable(n) && this.remoteAvailabilityMaps[e] && this.remoteAvailabilityMaps[e][n] && t.push(n);
                    return t
                },
                getNumOfChunksToAllocate: function(e) {
                    e.length || (e = [e]);
                    var t = 0,
                        n = this;
                    return e.forEach(function(e) {
                        t += n.peerConnections[e].maxNumOfPendingChunks - n.peerConnections[e].numOfPendingChunks
                    }), t
                },
                isPendingEntireBlock: function(e, t) {
                    var n = i.core.data.BlockCache.get(e),
                        r = this.p2pPendingChunksInBlock[e] ? this.p2pPendingChunksInBlock[e][t] || 0 : 0,
                        o = n.getNumOfChunksSetInBlock(t),
                        s = n.getNumOfChunksInBlock(t);
                    return i.log("pendingEntireBlock:: pending chunks in block = " + r + " set chunks in block = " + o), i.log("pendingEntireBlock:: sum = " + (r + o) + " / " + s), s > r + o ? !1 : !0
                },
                isPendingChunk: function(e, t) {
                    return void 0 !== this.p2pPendingChunks[e] && void 0 !== this.p2pPendingChunks[e][t]
                },
                isAvailable: function(e) {
                    if (!this.resourceState[e] || this.resourceState[e] === n) return !1;
                    var t = Date.now(),
                        r = i.core.data.BlockCache.get(e);
                    if (!r) return !1;
                    for (var o in this.peerConnections)
                        if (this.remoteAvailabilityMaps[e][o] && this.isPeerAvailable(o)) return this.availableTimeStamp = t, !0;
                    return this.availableTimeStamp = t, !1
                },
                isPeerAvailable: function(e) {
                    return this.peerConnections[e] && this.peerConnections[e].numOfPendingChunks < .9 * this.peerConnections[e].maxNumOfPendingChunks ? !i.core.util.isObjectEmpty(this.peerSwarms[e]) : !1
                },
                getPeerSwarms: function(e) {
                    return Object.keys(this.peerSwarms[e])
                },
                getConnectionStats: function() {
                    var e, t = Object.create(null);
                    for (e in this.peerConnections) {
                        var n = this.peerConnections[e];
                        n && (t[e] = new i.core.protocol.Connection(null, null, null, null, n.numOfExpiredChunks, n.numOfRequestedChunks, n.minLatencyForChunk, n.ready, n.connectingDuration, n.failure))
                    }
                    for (e in this.droppedConnections) {
                        var r = this.droppedConnections[e];
                        t[e] = new i.core.protocol.Connection(null, null, null, null, r.numOfExpiredChunks, r.numOfRequestedChunks, r.minLatencyForChunk, r.ready, r.connectingDuration, r.failure)
                    }
                    return t
                },
                getAvailableNumOfChunksToSend: function() {
                    var e = 0;
                    for (var t in this.peerConnections) e += this.peerConnections[t].maxNumOfPendingChunks - this.peerConnections[t].numOfPendingChunks;
                    return e
                },
                removeResource: function(e) {
                    i.info("removed p2p resource " + e);
                    for (var t in this.pendingRequests) this.pendingRequests[t][1] === e && (clearTimeout(this.pendingRequests[t][0]), this.expireChunks(this.pendingRequests[t][1], this.pendingRequests[t][2], this.pendingRequests[t][3], t, !0), delete this.pendingRequests[t]);
                    this.sendDontHaveToAll(e), delete this.p2pPendingChunks[e], delete this.p2pPendingChunksInBlock[e], delete this.pendingResources[e], this._super(e)
                },
                stopResource: function(e) {
                    i.info("stopped p2p resource " + e);
                    for (var t in this.pendingRequests) this.pendingRequests[t][1] === e && (clearTimeout(this.pendingRequests[t][0]), this.expireChunks(this.pendingRequests[t][1], this.pendingRequests[t][2], this.pendingRequests[t][3], t, !0), delete this.pendingRequests[t]);
                    delete this.p2pPendingChunks[e], delete this.p2pPendingChunksInBlock[e], delete this.pendingResources[e], this._super(e)
                },
                numOfSeeders: function(e, t) {
                    var n = {};
                    if (e && this.remoteAvailabilityMaps[e])
                        for (var i in this.remoteAvailabilityMaps[e]) this.remoteAvailabilityMaps[e][i].isFull() && this.peerConnections[i] && !n[i] && (n[i] = !0);
                    if (e && this.remoteDownloading[e])
                        for (var i in this.remoteDownloading[e]) this.remoteDownloading[e][i] && this.peerConnections[i] && !n[i] && (n[i] = !0);
                    if (t && this.remoteDownloading[t])
                        for (var i in this.remoteDownloading[t]) this.remoteDownloading[t][i] && this.peerConnections[i] && !n[i] && (n[i] = !0);
                    return Object.keys(n).length
                },
                getLookingForPeers: function() {
                    return this.lookingForPeers
                },
                expireChunks: function(t, n, r, o, s) {
                    this.pendingRequests[o] && delete this.pendingRequests[o];
                    var a = [],
                        c = 0,
                        l = i.core.data.BlockCache.get(t),
                        d = this.peerConnections[r];
                    if (this.p2pPendingChunks[t])
                        for (var u = 0; u < n.length; u++) {
                            var h = n[u],
                                f = this.p2pPendingChunks[t][h];
                            if (f && !i.config.PC_WINDOW_VALIDATE_PEER || f && i.config.PC_WINDOW_VALIDATE_PEER && f.peerId === r) {
                                i.debug("expiring chunk " + h);
                                var p = l.getBlockIdOfChunk(h);
                                delete this.p2pPendingChunks[t][h], this.p2pPendingChunksInBlock[t][p]--, e.removeChunk(t, h), c++, d && (d.numOfExpiredChunks++, d.decreaseNumOfPendingChunks()), l.hasChunk(h) || a.push(h)
                            }
                        }
                    s || (c == n.length ? d && (d.requestDropped ? d.requestDropped++ : d.requestDropped = 1, d.requestDropped >= i.config.REQUEST_DROPPED_FAIL && this.closeConnection(r, !1)) : d && (d.requestDropped = 0), d && i.log("num of requests dropped from " + r + " is " + d.requestDropped), a.length ? (d && (d.maxNumOfPendingChunks = Math.ceil(Math.max(d.maxNumOfPendingChunks / 2, d.maxNumOfPendingChunks - 2 * c)), i.log("expiring chunks, windows decreased to " + d.maxNumOfPendingChunks)), d && this.isPeerAvailable(r) && radio("P2PAvailableEvent").broadcast(t, r)) : d && (d.maxNumOfPendingChunks = Math.min(i.config.MAX_PENDING_CHUNKS, d.maxNumOfPendingChunks + 1), i.log("no chunks expired, windows increased to " + d.maxNumOfPendingChunks)))
                },
                registerEvents: function() {
                    var e = this;
                    radio("P2PAvailableEvent").subscribe([function(e, t) {
                        this.prefetch(e, t)
                    }, this]), radio("blockReceivedEvent").subscribe([function(e, t) {
                        e && this.sendHaveToAll(e)
                    }, this]), radio("dataReceivedEvent").subscribe([function(e, t) {
                        var n = i.core.protocol.BinaryProtocol.decode(e);
                        if (!this.peerConnections[t]) return void i.info("got dataReceivedEvent from peerId " + t + "which was not found in peerConnections");
                        if (this.peerConnections[t].ignore && n[0].tag !== i.core.protocol.P2P_VERSION) return void i.info("got dataReceivedEvent from peerId " + t + " which is set to be ignored");
                        for (var r = 0; r < n.length; ++r) {
                            var o = n[r];
                            switch (o.tag) {
                                case i.core.protocol.P2P_HAVE:
                                    this.peersPerformanceTracker.reportPeerHaveSwarm(t, o.swarmId), this.receiveHaveMessage(o, t), this.isPeerAvailable(t) && radio("P2PAvailableEvent").broadcast(o.swarmId, t), radio("receivedHaveMessage").broadcast(o, t);
                                    break;
                                case i.core.protocol.P2P_HAVE_REQUEST:
                                    if (!this.resourceState[o.swarmId]) continue;
                                    var s = this.createHaveMessage(o.swarmId),
                                        a = i.core.protocol.BinaryProtocol.encode([s]);
                                    this.sendToPeer(t, a);
                                    break;
                                case i.core.protocol.P2P_DONT_HAVE:
                                    this.receiveDontHaveMessage(o, t), radio("receivedDontHaveMessage").broadcast(o, t);
                                    break;
                                case i.core.protocol.P2P_REQUEST:
                                    if (!this.resourceState[o.swarmId]) continue;
                                    this.receiveRequestMessage(o, t);
                                    break;
                                case i.core.protocol.P2P_DATA:
                                    var c = {
                                        id: o.chunkId,
                                        bytes: o.payload.length
                                    };
                                    if (this.peersPerformanceTracker.reportChunksReceivedFromPeer(t, o.swarmId, c), !this.resourceState[o.swarmId]) continue;
                                    this.receiveDataMessage(o, t), this.isPeerAvailable(t) && radio("P2PAvailableEvent").broadcast(o.swarmId, t);
                                    break;
                                case i.core.protocol.P2P_CANCEL:
                                    break;
                                case i.core.protocol.P2P_VERSION:
                                    var l = o.client + "_" + o.conf;
                                    this.peersPerformanceTracker.reportPeerClientVersion(t, l), this.ignoreByVersion(o, t);
                                    break;
                                case i.core.protocol.P2P_LATENCY_REQUEST:
                                    var d = o.timestamp,
                                        u = o.originBufferedAmount,
                                        h = this.peerConnections[t] ? this.peerConnections[t].getBufferedAmount() : 0,
                                        f = new i.core.protocol.LatencyResponse(d, u, h),
                                        p = i.core.protocol.BinaryProtocol.encode([f]);
                                    this.sendToPeer(t, p);
                                    break;
                                case i.core.protocol.P2P_LATENCY_RESPONSE:
                                    this.receiveLatencyMessage(o, t);
                                    break;
                                case i.core.protocol.P2P_DOWNLOADING:
                                    this.receiveDownloadingMessage(o, t);
                                    break;
                                case i.core.protocol.P2P_NEW_SEGMENT:
                                    radio("peerDiscoveredSegment").broadcast(o.segSeq);
                                    break;
                                case i.core.protocol.P2P_INITIALIZING:
                                    this.receiveInitializingMessage(o, t);
                                    break;
                                default:
                                    i.warn("received a p2p message not in protocol from " + t)
                            }
                        }
                    }, this]), radio("connectionIdle").subscribe([function(e) {
                        if (!(Object.keys(this.peerConnections).length < i.config.MAX_CONNECTIONS * i.config.PC_IDLE_FACTOR)) {
                            var t = !1;
                            i.config.FEATURE_CLOSE_DEAD_CONNECTIONS && (t = this.closeDeadConnections(e)), t || i.config.FEATURE_CLOSE_OVERLAPPING_CONNECTIONS && this.closeOverlappingConnections(e)
                        }
                    }, this]), radio("connectionReady").subscribe([function(t) {
                        if (this.peerConnections[t]) i.warn("peerConnection to " + t + " was initialized, but we already have a connection to him");
                        else {
                            this.peerConnections[t] = this.initPeerConnections[t], delete this.initPeerConnections[t], this.sendQueues[t] = i.core.util.taskQueue();
                            var n = 15728640 - i.config.CHUNK_SIZE;
                            this.sendQueues[t].canrun = function() {
                                var e = this.peerConnections[t];
                                if (void 0 === e) throw new Error("peerConnection is undefined");
                                if (e.ready === !1) throw new Error("peerConnection isnt ready");
                                var i = e.getBufferedAmount();
                                return i > n ? !1 : !0
                            }.bind(this), e.peersPerformanceTracker.reportPeerConnected(t);
                            var r = Object.keys(this.peerConnections).length;
                            r >= i.config.MAX_CONNECTIONS && (this.lookingForPeers = !1), radio("activePeerConnectionsNumberChanged").broadcast(r)
                        }
                        this.peerSwarms[t] = Object.create(null), this.sendVersionToNewConnection(t), this.sendHaveToNewConnection(t)
                    }, this]), radio("connectionFailed").subscribe([function(e) {
                        i.warn("onConnectionFailed: closing connection with " + e);
                        var t = this.peerConnections[e] || this.initPeerConnections[e] || this.deletedPeerConnections[e];
                        if (this.closeConnection(e, !1), this.peerSwarms[e] && delete this.peerSwarms[e], delete this.deletedPeerConnections[e], t && t.forceClosed) return void delete this.attemptedConnections[e];
                        if (t && t.initiator) {
                            if ("exponential" === i.config.PC_RECON_METHOD) var n = 1e3 * Math.pow(i.config.PC_RECON_EXP_COEF, this.attemptedConnections[e] - 1);
                            else {
                                if ("single" !== i.config.PC_RECON_METHOD) return;
                                if (this.attemptedConnections[e] > 1) return;
                                var n = i.config.PC_RECON_DELAY || 1e4
                            }
                            i.debug("delay for reconnecting with " + e + " = " + n);
                            var r = this;
                            setTimeout(function() {
                                r.ensurePeerConnectionInitialized(e, !0);
                            }, n)
                        }
                    }, this]), radio("receivedGroupMatchEvent").subscribe([function(e) {
                        i.info("peer " + this.clientId + " receivedMatch with peer " + e.peerIds), e.peerIds.forEach(function(e) {
                            void 0 === this.attemptedConnections[e] && this.ensurePeerConnectionInitialized(e, !0)
                        }, this)
                    }, this]), radio("receivedSDP").subscribe([function(e) {
                        this.ensurePeerConnectionInitialized(e.originId, !1), this.initPeerConnections[e.originId] ? this.initPeerConnections[e.originId].handleMessage(e) : i.log("receivedSDP: this.initPeerConnections [" + e.originId + " ] undefined")
                    }, this]), radio("receivedGroupSDP").subscribe([function(e) {
                        e.sdp.forEach(function(t) {
                            radio("receivedSDP").broadcast({
                                originId: e.originId,
                                destId: e.destId,
                                sdpMessage: t
                            })
                        }, this)
                    }, this]), radio("transferLoadedEvent").subscribe([function(e) {
                        delete this.pendingResources[e.swarmId]
                    }, this]), radio("p2p.send.all").subscribe([function(e) {
                        this.sendToAll(e)
                    }, this])
                },
                startMeasuringLatency: function() {
                    var e = this;
                    !this.latencyInterval && i.config.PC_LATENCY_ENABLED && (this.latencyInterval = setInterval(function() {
                        for (var t in e.peerConnections) {
                            var n = e.peerConnections[t];
                            if (n && n.ready && !n.ignore) {
                                var r = Math.floor(performance.now()),
                                    o = n.getBufferedAmount(),
                                    s = new i.core.protocol.LatencyRequest(r, o),
                                    a = i.core.protocol.BinaryProtocol.encode([s]);
                                e.sendToPeer(t, a)
                            }
                        }
                    }, i.config.PC_LATENCY_INTERVAL))
                },
                prefetch: function(e, n) {
                    if (this.prefetchFlag[e] && this.resourceState[e] === t) {
                        var i = this.download(e, n);
                        i && 0 !== i || this.prefetchPendingResources(e, n)
                    }
                },
                prefetchPendingResources: function(e, t) {
                    for (var n in this.pendingResources)
                        if (n !== e && this.prefetchFlag[n] && void 0 !== this.remoteAvailabilityMaps[n][t]) {
                            var i = this.download(n, t);
                            if (i > 0) break
                        }
                },
                addResourceAsPending: function(e) {
                    if (this.prefetchFlag[e]) {
                        var t = i.core.data.BlockCache.get(e);
                        t && t.isFull() || (this.pendingResources[e] = !0)
                    }
                },
                getSwarmPeersCount: function(e) {
                    var t = this.remoteAvailabilityMaps[e];
                    return t ? Object.keys(t).length : 0
                },
                receiveRequestMessage: function(e, t) {
                    i.log("received a request for " + e.chunkIds.length + " chunks"), this.sendData(e.swarmId, t, e.chunkIds, 0, 0), radio("requestChunks").broadcast(e.swarmId, t, e.chunkIds)
                },
                receiveDataMessage: function(e, t) {
                    this.receiveP2PChunk(e.swarmId, t, e.chunkId, e.payload)
                },
                receiveLatencyMessage: function(e, t) {
                    var n = Math.floor(performance.now()),
                        i = e.timestamp,
                        r = e.originBufferedAmount,
                        o = e.remoteBufferedAmount,
                        s = Math.round(n - i),
                        a = this.peerConnections[t];
                    a && 0 === r && 0 === o && (!a.lastLatencyTimestamp || a.lastLatencyTimestamp < i) && (a.lastLatencyTimestamp = i, a.latencySlidingWindow.addValue(s))
                },
                receiveDownloadingMessage: function(e, t) {
                    var n = e.swarmId,
                        i = e.hashUrl;
                    this.remoteDownloading[n] || (this.remoteDownloading[n] = {}), this.remoteDownloading[i] || (this.remoteDownloading[i] = {}), this.remoteDownloading[n][t] = !0, this.remoteDownloading[i][t] = !0
                },
                receiveInitializingMessage: function(e, t) {
                    var n = e.hashUrl;
                    this.remoteDownloading[n] || (this.remoteDownloading[n] = {}), this.remoteDownloading[n][t] = !0
                },
                configureBrowserSpecific: function() {
                    window.mozRTCPeerConnection ? (this.peerConnectionImpl = i.core.transport.PeerConnectionImpl, i.config.MAX_PENDING_CHUNKS = i.config.MOZ_MAX_PENDING_CHUNKS) : window.webkitRTCPeerConnection && (this.peerConnectionImpl = i.core.transport.PeerConnectionImpl)
                },
                distributeChunksAmongSources: function(e, t, n) {
                    if (!this.remoteAvailabilityMaps[e] || 0 === t.length) return 0;
                    var r, o = this;
                    if (i.debug("chunks to distribute " + t.length), n) r = [n];
                    else {
                        var s = Object.keys(this.remoteAvailabilityMaps[e]).filter(function(e) {
                            return "undefined" != typeof o.peerConnections[e] && !o.peerConnections[e].isFull()
                        });
                        r = s.sort(function(e, t) {
                            var n = o.peerConnections[e].numOfPendingChunks,
                                i = o.peerConnections[t].numOfPendingChunks;
                            return n > i
                        })
                    }
                    for (var a, c = Object.create(null), l = 0, d = 0; d < t.length; ++d)
                        for (var u = t[d], h = Math.floor(u / (i.config.BLOCK_SIZE / i.config.CHUNK_SIZE)), f = 0; f < r.length; ++f)
                            if (a = i.config.PC_ALLOCATE_CHUNKS_EVENLY ? r[(f + d) % r.length] : r[f], this.remoteAvailabilityMaps[e][a] && this.remoteAvailabilityMaps[e][a].has(h) && !this.peerConnections[a].isFull()) {
                                c[a] || (c[a] = []), c[a].push(u), l++, this.peerConnections[a].increaseNumOfPendingChunks();
                                break
                            }
                    for (var p = 0; p < r.length; ++p)
                        if (c[r[p]]) {
                            a = r[p], t = c[a], this.addToPendingChunks(e, t, a), this.peerConnections[a].numOfRequestedChunks += t.length;
                            var g = new i.core.protocol.Request(e, t),
                                m = i.core.protocol.BinaryProtocol.encode([g]);
                            i.log("sending request for " + t.length + " chunks"), this.peersPerformanceTracker.reportChunksRequestFromPeer(e, t), this.sendToPeer(a, m)
                        }
                    if (i.config.P2P_DOWNLOADING_MSG && l > 0) {
                        var _ = i.state.resources.get(e);
                        _.hashUrl && this.sendToAll(new i.core.protocol.Downloading(e, _.hashUrl))
                    }
                    return l
                },
                sendToAll: function(e) {
                    var t = i.core.protocol.BinaryProtocol.encode([e]);
                    for (var n in this.peerConnections) {
                        var r = this.peerConnections[n];
                        r && r.ready && !r.ignore && this.sendToPeer(n, t)
                    }
                },
                ensurePeerConnectionInitialized: function(e, t) {
                    if (!(this.peersBlacklist[e] || this.peerConnections[e] || this.initPeerConnections[e] || i.config.MAX_CONNECTIONS && Object.keys(this.peerConnections).length >= i.config.MAX_CONNECTIONS || "chrome" === i.browserName && i.config.MAX_PC_CREATE && this.numberOfPCCreated >= i.config.MAX_PC_CREATE)) {
                        if ("firefox" === i.browserName && r.length <= 0) return void this.allocateMorePC();
                        this.attemptedConnections[e] = this.attemptedConnections[e] + 1 || 1, this.initPeerConnections[e] = new this.peerConnectionImpl(this.clientId, e, t, r.shift()), this.initPeerConnections[e].ignore = !0, this.increaseCreatedPCCount(), r.length < i.config.PC_POOL_LOW && this.allocateMorePC(), t && this.initPeerConnections[e].setupCall()
                    }
                },
                increaseCreatedPCCount: function() {
                    this.numberOfPCCreated++, "chrome" === i.browserName && i.config.MAX_PC_CREATE && radio("availablePeerConnectionsNumberChanged").broadcast(i.config.MAX_PC_CREATE - this.numberOfPCCreated)
                },
                sendData: function(e, t, n, r, o) {
                    if (this.canUpload(e) && !(i.config.EMULATE_LOSS && Math.random() < i.config.EMULATE_LOSS_PERCENTAGE)) {
                        var s = n[r];
                        r++;
                        var a = this,
                            c = i.core.data.BlockCache.get(e);
                        c && c.getChunk(s, function(c, l) {
                            if (!c || !l) return void i.warn("cannot send data, getChunk failed for swarm: " + e + ", chunkId: " + s);
                            o += l.length;
                            var d = new i.core.protocol.Data(e, s, l),
                                u = i.core.protocol.BinaryProtocol.encode([d]);
                            a.sendToPeer(t, u), r < n.length ? a.sendData(e, t, n, r, o) : (a.peersPerformanceTracker.reportUploadToPeer(t, o), radio("chunkSentEvent").broadcast(e, o))
                        })
                    }
                },
                sendHaveToNewConnection: function(e) {
                    var t, n, r = [],
                        o = this;
                    i.core.data.BlockCache.forEach(function(e, i) {
                        var s = i.metadata;
                        s && o.resourceState[s.swarmId] && (t = s.swarmId, n = o.createHaveMessage(t), r.push(n))
                    });
                    var s = i.config.CHUNK_SIZE / 76;
                    s = Math.floor(.9 * s);
                    for (var a = [], c = 0, l = r.length; l > c; c += s) {
                        a = r.slice(c, c + s);
                        var d = i.core.protocol.BinaryProtocol.encode(a);
                        this.sendToPeer(e, d)
                    }
                },
                sendVersionToNewConnection: function(e) {
                    var t = new i.core.protocol.Version("0.56.23", i.config.VERSION),
                        n = i.core.protocol.BinaryProtocol.encode([t]);
                    this.sendToPeer(e, n)
                },
                receiveHaveMessage: function(e, t) {
                    var n = e.swarmId,
                        r = e.hashUrl,
                        o = this.remoteAvailabilityMaps[n];
                    if (e.filesize) {
                        var s = i.state.resources.get(r);
                        s && !s.length ? radio("responseLengthReceived" + s.url).broadcast(e.filesize) : i.core.util.HashUrlLengthMap.addMapping(r, e.filesize)
                    }
                    if (!o) return this.remoteHave[n] = this.remoteHave[n] || {}, void(this.remoteHave[n][t] = e);
                    if (!o[t]) {
                        i.info("got a have message from a peer with a non initialized availabilityMap");
                        var a = i.core.data.BlockCache.get(e.swarmId);
                        if (!a) return;
                        o[t] = new i.core.dataStructures.AvailabilityMap(a.getNumOfBlocks())
                    }
                    e.availabilityMap ? o[t].deserializeAndCopy(e.availabilityMap) : e.seeder ? o[t].setSeeder() : o[t].deserializeAndUpdate(e.blockIds), this.peerSwarms[t] || (this.peerSwarms[t] = Object.create(null)), this.peerSwarms[t][n] = !0
                },
                receiveDontHaveMessage: function(e, t) {
                    var n = e.swarmId,
                        i = e.hashUrl;
                    !this.remoteAvailabilityMaps[n] && this.remoteHave[n] && this.remoteHave[n][t] && delete this.remoteHave[n][t], this.remoteAvailabilityMaps[n] && this.remoteAvailabilityMaps[n][t] && delete this.remoteAvailabilityMaps[n][t], this.remoteDownloading[n] && delete this.remoteDownloading[n][t], this.remoteDownloading[i] && delete this.remoteDownloading[i][t]
                },
                sendHaveRequestToAll: function(e) {
                    var t = new i.core.protocol.HaveRequest(e);
                    this.sendToAll(t)
                },
                sendHaveToAll: function(e) {
                    var t = this.createHaveMessage(e);
                    this.sendToAll(t)
                },
                sendDontHaveToAll: function(e) {
                    var t = this.createDontHaveMessage(e);
                    this.sendToAll(t)
                },
                loadCachedHaveRequests: function(e) {
                    if (void 0 !== this.remoteHave[e]) {
                        var t = Object.keys(this.remoteHave[e]);
                        t.forEach(function(t) {
                            this.receiveHaveMessage(this.remoteHave[e][t], t)
                        }.bind(this))
                    }
                },
                receiveP2PChunk: function(t, n, r, o) {
                    i.debug("receiving chunk " + r);
                    var s = i.core.data.BlockCache.get(t);
                    if (this.p2pPendingChunks[t]) {
                        var a = this.p2pPendingChunks[t][r];
                        if (a && !i.config.PC_WINDOW_VALIDATE_PEER || a && i.config.PC_WINDOW_VALIDATE_PEER && a.peerId === n) {
                            var c = Date.now() - a.timestamp,
                                l = this.peerConnections[n];
                            l.minLatencyForChunk ? (l.minLatencyForChunk = Math.min(l.minLatencyForChunk, c), l.maxLatencyForChunk = Math.max(l.maxLatencyForChunk, c), l.avgLatencyForChunk = (l.avgLatencyForChunk * l.numOfChunksArrived + c) / (1 + l.numOfChunksArrived)) : (l.minLatencyForChunk = c, l.maxLatencyForChunk = c, l.avgLatencyForChunk = c), l.numOfChunksArrived++, l.decreaseNumOfPendingChunks(), delete this.p2pPendingChunks[t][r];
                            var d = s.getBlockIdOfChunk(r);
                            this.p2pPendingChunksInBlock[t][d]--, e.removeChunk(t, r)
                        } else i.info("received chunks from different peer than requested")
                    } else i.log("we already expired chunk: " + r);
                    s.hasChunk(r) ? (i.log("DOH! I already got chunk: " + r + "!"), radio("peer5_waste_p2p_chunk").broadcast(t, o.length, r)) : (radio("peer5_new_p2p_chunk").broadcast(t, o.length, r), this.addChunk(t, o, r))
                },
                addToPendingChunks: function(t, n, r) {
                    if (!this.p2pPendingChunks[t]) return void i.warn("adding pending chunks to a non existing swarm with id: " + t);
                    var o = this.peerConnections[r];
                    if (o.avgLatencyForChunk && o.numOfChunksArrived > 5 * o.maxNumOfPendingChunks) var s = (i.config.CHUNK_EXPIRATION_TIMEOUT + 2 * o.avgLatencyForChunk) / 2;
                    else var s = i.config.CHUNK_EXPIRATION_TIMEOUT;
                    for (var a = i.core.data.BlockCache.get(t), c = 0; c < n.length; ++c) {
                        var l = n[c],
                            d = a.getBlockIdOfChunk(l);
                        this.p2pPendingChunks[t][l] = {
                            timestamp: Date.now(),
                            peerId: r
                        }, this.p2pPendingChunksInBlock[t][d] ? this.p2pPendingChunksInBlock[t][d]++ : this.p2pPendingChunksInBlock[t][d] = 1, e.addChunk(t, l), radio("peer5_p2p_pending_chunk").broadcast(l, t, r)
                    }
                    if (0 != n.length) {
                        this.requestNum++;
                        var u = this,
                            h = this.requestNum,
                            f = setTimeout(function() {
                                u.expireChunks(t, n, r, h)
                            }, s);
                        this.pendingRequests[this.requestNum] = [f, t, n, r]
                    }
                },
                restoreConnection: function(e) {
                    !this.peerConnections[e] && this.droppedConnections[e] && (i.warn("connection with " + e + " was restored"), this.peerConnections[e] = this.droppedConnections[e], this.peerConnections[e].ready = !0, delete this.droppedConnections[e], this.sendHaveToNewConnection(e))
                },
                createHaveMessage: function(e) {
                    var t = i.core.data.BlockCache.get(e);
                    if (t) {
                        var n, r = i.state.resources.get(e),
                            o = r ? r.hashUrl : null;
                        return n = t.isFull() ? new i.core.protocol.Have(e, !0, null, null, o, t.fileSize) : new i.core.protocol.Have(e, !1, t.getSerializedMap(), null, o, t.fileSize)
                    }
                },
                createDontHaveMessage: function(e) {
                    var t = i.state.resources.get(e),
                        n = t ? t.hashUrl : null,
                        r = new i.core.protocol.DontHave(e, n);
                    return r
                },
                closeDeadConnections: function(e) {
                    var t = (Date.now() - e.peerData.lastHaveReportTimestamp) / 1e3,
                        n = this.peerConnections[e.peerId];
                    return t > i.config.SECONDS_SINCE_LAST_HAVE && n && n.initiator ? (this.closeConnection(e.peerId, i.config.FEATURE_CLOSE_DEAD_CONNECTIONS_PERMANENTLY), n.forceClosed = !0, !0) : !1
                },
                closeOverlappingConnections: function(e) {
                    var t = this.peerConnections[e.peerId];
                    e.peerData.lastSwarmReportedAsHave === this.lastSwarmDownloaded.swarmId && t && t.initiator && (this.closeConnection(e.peerId, i.config.FEATURE_CLOSE_OVERLAPPING_CONNECTIONS_PERMANENTLY), t.forceClosed = !0)
                },
                closeConnection: function(e, t, n) {
                    i.warn("closing connection with " + e);
                    var r = this.peerConnections[e] || this.initPeerConnections[e];
                    r && (this.closePC(r), this.deletePeerConnection(e)), t && (this.peersBlacklist[e] = !0)
                },
                deletePeerConnection: function(e) {
                    this.deletedPeerConnections[e] = this.deletedPeerConnections[e] || this.peerConnections[e] || this.initPeerConnections[e], delete this.peerConnections[e], delete this.initPeerConnections[e], void 0 !== this.sendQueues[e] && (this.sendQueues[e].reset(), delete this.sendQueues[e]);
                    var t = Object.keys(this.peerConnections).length;
                    t <= i.config.MIN_CONNECTIONS && (this.lookingForPeers = !0), radio("activePeerConnectionsNumberChanged").broadcast(t), this.peersPerformanceTracker.reportPeerDisconnected(e)
                },
                canUpload: function(e) {
                    return !0
                },
                sendToPeer: function(e, t) {
                    var n = this;
                    this.sendQueues[e].push(function() {
                        n.peerConnections[e].send(t)
                    })
                },
                allocateMorePC: function() {
                    if (!this.allocatingPC) {
                        this.allocatingPC = !0;
                        var e = 0,
                            t = setInterval(function() {
                                i.info("creating peerConnection for pool"), r.push(i.core.transport.PeerConnectionImpl.createPeerConnection()), e++, e > i.config.PC_POOL_SIZE && (clearInterval(t), this.allocatingPC = !1)
                            }.bind(this), i.config.PC_POOL_REGEN_INTERVAL)
                    }
                },
                ignoreByVersion: function(e, t) {
                    return i.core.util.validateVersion(e.client) && i.core.util.validateVersion(e.conf) ? e.conf !== i.config.VERSION ? (i.warn("Connected to a client with a non matching configuration version"), void this.closeConnection(t, !0)) : 0 !== i.core.util.compareMajorVersionNumbers("0.56.23", e.client) ? (i.warn("Connected to a client with a non matching client major version"), void this.closeConnection(t, !0)) : void(this.peerConnections[t].ignore = !1) : (i.warn("Connected to a client with an invalid version"), void this.closeConnection(t, !0))
                },
                initClosePCQueue: function() {
                    this.pcCloseQueue = i.core.util.taskQueue();
                    var e = 0;
                    this.pcCloseQueue.canrun = function() {
                        var t = Date.now() - e,
                            n = i.config.PC_CLOSE_TIMEOUT - t;
                        return 0 > n ? !0 : n
                    }, this.closePC = function(t) {
                        this.pcCloseQueue.push(function() {
                            e = Date.now(), t && t.close && t.close()
                        })
                    }
                }
            })
        }(),
        function() {
            var e = i.config.XHR_INITIAL_TIMEOUT;
            i.client.HTTPDownloader = Object.subClass({
                name: "peer5.client.HTTPDownloader",
                ctor: function(e, t) {
                    if (this.url = e, this.method = null, this.httpRequestTime = 0, this.firstRequest = !0, this.lastTimerTimestamp = null, this.lengthKnown = "undefined" != typeof t ? t : !0, this.xhr = window._XMLHttpRequest ? new _XMLHttpRequest : new XMLHttpRequest, !this.xhr) throw "Cannot instantiate XHR";
                    this.registerEvents()
                },
                isHTTPBusy: function() {
                    return this.xhr.busy
                },
                cleanHTTP: function() {
                    this.xhr.busy = !1, this.httpRequestTime = 0
                },
                isHTTPOld: function() {
                    return this.httpRequestTime > 0 && this.httpRequestTime + e < Date.now()
                },
                stop: function() {
                    i.info("aborting XHR:" + this.url + " loaded so far " + this.xhr.lastTotalLoaded), this.xhr.abort(), this.cleanHTTP(), clearTimeout(this.timerId)
                },
                head: function() {
                    this.method = "HEAD", this.xhr.url = this.url, i.feature.isEnabledAndInitialized(i.config.FEATURE_PROXY_HEAD_KEY) ? this.xhr.open("HEAD", i.config.FEATURE_PROXY_HEAD_URL_PREFIX + encodeURIComponent(this.url).replace(/'/g, "%27").replace(/"/g, "%22")) : this.xhr.open("HEAD", this.url), this.xhr.busy = !0;
                    var e = this;
                    this.xhr.onload = function(t) {
                        this.busy = !1;
                        var n = this.getAllResponseHeaders();
                        200 === this.status || 206 === this.status ? (radio("responseHeadersReceived" + this.url).broadcast(n), t.lengthComputable && t.total > 0 && radio("responseLengthReceived" + this.url).broadcast(t.total)) : (n.indexOf("X-Peer5-Proxy") > -1 && 404 !== this.status && i.feature.disable(i.config.FEATURE_PROXY_HEAD_KEY), i.warn("Expecting status code 200/206 from HEAD request. Got " + this.status), radio("xhrFailed" + this.url).broadcast(this)), e.stop()
                    }, this.xhr.onerror = function(e) {
                        this.busy = !1, radio("xhrFailed" + this.url).broadcast(this)
                    }, this.xhr.lastModified = Date.now(), this.resetTimer(this.xhr.lastModified), this.xhr.send(null)
                },
                resetTimer: function(t) {
                    if (this.timerId && (clearTimeout(this.timerId), i.debug("resetTimer clearTimeout of " + this.timerId)), this.lastTimerTimestamp) {
                        var n = Date.now() - this.lastTimerTimestamp,
                            r = (e + i.config.XHR_TIMEOUT_FACTOR * n) / 2;
                        e = Math.round(Math.max(i.config.XHR_MINIMUM_TIMEOUT, r))
                    }
                    var o = this;
                    this.timerId = setTimeout(function() {
                        o.expireRequest(t)
                    }, e), this.lastTimerTimestamp = Date.now(), i.debug("resetTimer setTimeout returned " + this.timerId)
                },
                download: function(t, n, r) {
                    this.method = "GET", i.info("Downloading in http " + this.url + " start=" + t + " end=" + n), i.debug(t + " - " + n);
                    var o = this;
                    this.httpRequestTime = Date.now(), this.xhr.lastModified = this.httpRequestTime, this.xhr.url = this.url;
                    try {
                        this.xhr.open("GET", this.url, !0)
                    } catch (s) {
                        return this.xhr.busy = !1, i.warn("xhr onerror!"), void radio("xhrFailed" + this.xhr.url).broadcast(this.xhr)
                    }
                    this.xhr.busy = !0, this.xhr.isRange = t && t > 0 || n, n ? this.xhr.setRequestHeader("Range", "bytes=" + t + "-" + n) : t && t > 0 ? this.xhr.setRequestHeader("Range", "bytes=" + t + "-") : t = 0, this.xhr.startRange = t, this.xhr.endRange = n, (!this.xhr.lastTotalLoaded || t > this.xhr.lastTotalLoaded || n && n < this.xhr.lastTotalLoaded) && (this.xhr.lastTotalLoaded = t), this.xhr.onloadend = function(e) {
                        if (i.debug("xhr onloadend start: " + this.startRange + " end: " + this.endRange), clearTimeout(o.timerId), this.busy = !1, o.httpRequestTime = 0, this.status < 300 && this.status >= 200 && this.response) {
                            var t = this.response;
                            o.lengthKnown || this.isRange || (e.lengthComputable && e.total > 0 ? radio("responseLengthReceived" + this.url).broadcast(e.total) : this.response.byteLength > 0 ? radio("responseLengthReceived" + this.url).broadcast(t.byteLength) : this.response.length > 0 && radio("responseLengthReceived" + this.url).broadcast(t.length), radio("xhrBytesReceived" + this.url).broadcast(this.url, t.byteLength || t.length)), i.info("xhr onload: " + this.url + "start= " + this.startRange + "end= " + this.endRange), radio("bytesReceivedEvent" + this.url).broadcast({
                                url: this.url,
                                offset: this.startRange,
                                dataArray: new Uint8Array(t)
                            })
                        } else radio("xhrFailed" + this.url).broadcast(this);
                        radio("xhrLoadend" + this.url).broadcast(e)
                    }, this.xhr.onabort = function(e) {
                        i.warn("xhr onabort" + this.url + e)
                    }, this.xhr.onerror = function(e) {
                        this.busy = !1, i.warn("xhr onerror!" + this.url + e), radio("xhrFailed" + this.url).broadcast(this)
                    }, this.xhr.onreadystatechange = function(e) {
                        if (this.readyState === this.HEADERS_RECEIVED && (o.resetTimer(this.lastModified), this.onreadystatechange = null, this.status >= 200 && this.status < 300)) {
                            i.log("received headers: " + this.url);
                            var t = this.getAllResponseHeaders();
                            radio("responseHeadersReceived" + this.url).broadcast(t)
                        }
                    }, this.xhr.responseType = "arraybuffer", this.xhr.onprogress = function(t) {
                        var n = Date.now(),
                            r = n - this.lastModified;
                        r > e / 2 && i.info("onprogress last part arrived in " + r + "ms"), this.lastModified = n, o.resetTimer(this.lastModified), !o.lengthKnown && t.lengthComputable && t.total > 0 && !this.isRange && (o.lengthKnown = !0, radio("responseLengthReceived" + this.url).broadcast(t.total));
                        var s = t.loaded + t.target.startRange - t.target.lastTotalLoaded;
                        i.debug("onprogress size" + s), s > 0 && (o.lengthKnown && radio("xhrBytesReceived" + this.url).broadcast(this.url, s), t.target.lastTotalLoaded = t.loaded + t.target.startRange, radio("onprogressEvent " + this.url).broadcast(this.url)), i.debug("HTTPDownloader::xhr.onprogress" + t.loaded)
                    }, i.debug("before sending xhr start: " + t + " end: " + n), this.resetTimer(this.xhr.lastModified);
                    try {
                        radio("xhrSent" + this.url).broadcast(), this.xhr.send(null)
                    } catch (s) {
                        i.error("xhr native error" + this.url + s)
                    }
                    i.debug("after sending xhr start: " + t + " end: " + n)
                },
                requestRetry: function() {
                    var e = this;
                    this.xhr.onloadend = function(t) {
                        var n = t.currentTarget.startRange,
                            r = t.currentTarget.endRange;
                        i.info("retrying request: " + e.url + " Range=" + n + "-" + r), setTimeout(function() {
                            e.download(n, r)
                        }, 0)
                    }, this.stop(), this.xhr.busy = !0
                },
                registerEvents: function() {
                    var t = this;
                    this.expireRequest = function(n) {
                        t.xhr.lastModified == n && (i.warn("expiring xhr requested on: " + n), e = Math.round(Math.min(i.config.XHR_MAXIMUM_TIMEOUT, 2 * e)), "GET" === t.method ? t.requestRetry() : (t.stop(), t.xhr.busy = !1, radio("xhrTimeout" + t.url).broadcast(t.xhr)))
                    }
                }
            })
        }(),
        function() {
            i.client.MultiSlotManager = Object.subClass({
                name: "peer5.client.MultiSlotManager",
                ctor: function(e) {
                    this.url = e, this.xhrs = [], this.rampup = !0, this.progress = Object.create(null), this.createNewSlot(this.url), this.firstRequest = !0;
                    var t = this;
                    this.cronIntervalId = window.setInterval(function() {
                        t.cron()
                    }, i.config.XHR_SLOT_PROBE_INTERVAL)
                },
                createNewSlot: function(e) {
                    if (i.config.XHR_CONCURRENT >= 2) var t = e.indexOf("?") > -1 ? "&" : "?";
                    else var t = "#";
                    var n = i.core.util.generate_uuid(),
                        r = e + t + n,
                        o = new i.client.HTTPDownloader(r, !0);
                    this.xhrs.push(o), i.info("created new slot " + r), this.registerNewSlotEvents(r)
                },
                isHTTPBusy: function() {
                    for (var e = 0; e < this.xhrs.length; ++e)
                        if (!this.xhrs[e].isHTTPBusy()) return !1;
                    return !0
                },
                isHTTPOld: function() {
                    for (var e = 0; e < this.xhrs.length; ++e)
                        if (!this.xhrs[e].isHTTPOld()) return !1;
                    return !0
                },
                download: function(e, t, n) {
                    for (var r, o = 0; o < this.xhrs.length; ++o)
                        if (!this.xhrs[o].isHTTPBusy()) {
                            r = this.xhrs[o];
                            break
                        }
                    i.debug("downloading " + this.url + " " + e + ":" + t);
                    var s = i.state.resources.get(this.url);
                    radio("p2p.send.all").broadcast(new i.core.protocol.Downloading(s.swarmId, s.hashUrl)), r.download(e, t, n), this.isHTTPBusy() || radio("HTTPAvailableEvent").broadcast(this.url)
                },
                stop: function() {
                    for (var e = 0; e < this.xhrs.length; ++e) this.unregisterSlotEvents(this.xhrs[e].url), this.xhrs[e].stop();
                    window.clearInterval(this.cronIntervalId)
                },
                registerNewSlotEvents: function(e) {
                    radio("bytesReceivedEvent" + e).subscribe([this.onBytesReceivedEvent, this]), radio("xhrFailed" + e).subscribe([this.onXhrFailed, this]), radio("xhrTimeout" + e).subscribe([this.onXhrTimeout, this]), radio("xhrBytesReceived" + e).subscribe([this.onXhrBytesReceived, this]), radio("onprogressEvent " + e).subscribe([this.onprogressEvent, this]), radio("xhrSent" + e).subscribe([this.onXhrSent, this]), radio("xhrLoadend" + e).subscribe([this.onXhrLoadend, this])
                },
                unregisterSlotEvents: function(e) {
                    radio("bytesReceivedEvent" + e).unsubscribe([this.onBytesReceivedEvent, this]), radio("xhrFailed" + e).unsubscribe(this.onXhrFailed), radio("xhrTimeout" + e).unsubscribe([this.onXhrTimeout, this]), radio("xhrBytesReceived" + e).unsubscribe([this.onXhrBytesReceived, this]), radio("onprogressEvent " + e).unsubscribe([this.onprogressEvent, this]), radio("xhrSent" + e).unsubscribe([this.onXhrSent, this]), radio("xhrLoadend" + e).unsubscribe([this.onXhrLoadend, this])
                },
                onBytesReceivedEvent: function(e) {
                    i.debug("finished xhr: " + this.url + " " + e.offset), this.firstRequest = !1, e.url = this.url, radio("bytesReceivedEvent").broadcast(e)
                },
                onXhrFailed: function(e) {
                    var t = e.url;
                    i.debug("expiring xhr: " + this.url + " " + e.startRange + ":" + e.endRange), this.xhrs[0] && this.xhrs[0].url === t && this.firstRequest && radio("removeResource").broadcast(this.url, e.status, "First xhr failed"), this.rampup = !1;
                    for (var n = 0; n < this.xhrs.length; ++n)
                        if (this.xhrs[n] && this.xhrs[n].url === t) {
                            var r = this.xhrs.splice(n, 1)[0];
                            this.unregisterSlotEvents(t), r.stop(), i.info("removed slot " + t);
                            break
                        }
                    radio("xhrFailed" + this.url).broadcast(e)
                },
                onXhrTimeout: function(e) {
                    radio("xhrFailed" + this.url).broadcast(e)
                },
                onXhrBytesReceived: function(e, t) {
                    radio("xhrBytesReceived").broadcast(this.url, t)
                },
                onprogressEvent: function(e) {
                    !this.progress[e] && this.rampup && this.xhrs.length < i.config.XHR_CONCURRENT && (this.createNewSlot(this.url), this.progress[e] = !0, radio("HTTPAvailableEvent").broadcast(this.url)), radio("httpProgressEvent").broadcast(this.url)
                },
                onXhrSent: function() {
                    radio("xhrSent").broadcast(this.url)
                },
                onXhrLoadend: function(e) {
                    radio("xhrLoadend").broadcast(this.url, e)
                },
                cron: function() {
                    this.xhrs.length < i.config.XHR_CONCURRENT && (this.createNewSlot(this.url), radio("HTTPAvailableEvent").broadcast(this.url))
                }
            })
        }(),
        function(e) {
            function t() {
                function e(e) {
                    n[e] = !0
                }

                function t(e) {
                    return n[e] ? !0 : !1
                }
                var n = Object.create(null);
                return {
                    addUrl: e,
                    contains: t
                }
            }
            e.FailedUrls = t()
        }(i.client),
        function() {
            var e = i.core.dataStructures.PendingBlockMap,
                t = 2;
            i.client.HTTPController = i.core.controllers.AbstractController.subClass({
                ctor: function() {
                    this._super(), this.downloadedBytes = 0, this.lastFailedStartBlock = Object.create(null), this.xhrs = Object.create(null), this.resourceState = Object.create(null), this.registerEvents()
                },
                isAvailable: function(e) {
                    return this.resourceState[e] && this.resourceState[e] !== t ? this.xhrs[e] ? !this.xhrs[e].isHTTPBusy() : (i.error("No downloaders available for url " + e), !1) : !1
                },
                removeResource: function(e) {
                    i.info("removed http resource " + e), this.stop(e), this._super(e)
                },
                stopResource: function(e) {
                    i.info("stopped http resource " + e), this.stop(e), this._super(e)
                },
                init: function(n) {
                    if (i.log("initiating HTTPController: " + n), this._super(n), !this.xhrs[n]) {
                        var r = new i.client.MultiSlotManager(n);
                        radio("xhrFailed" + n).subscribe([function(r) {
                            var o = r.startRange,
                                s = r.endRange;
                            if (!s) {
                                var a = i.core.data.BlockCache.get(n);
                                if (!a) return;
                                s = a.fileSize
                            }
                            for (var c = o / i.config.CHUNK_SIZE, l = Math.ceil((s + 1) / i.config.CHUNK_SIZE) - 1, d = c; l >= d; d++) e.removeChunk(n, d);
                            this.lastFailedStartBlock[n] = o / i.config.BLOCK_SIZE, this.resourceState[n] !== t && radio("HTTPAvailableEvent").broadcast(n)
                        }, this]), this.xhrs[n] = r
                    }
                },
                download: function(t, n, r) {
                    if (this.isAvailable(t)) {
                        var o = i.core.data.BlockCache.get(t);
                        this.xhrs[t] || (this.xhrs[t] = new i.client.HTTPDownloader(t));
                        var s = this.xhrs[t];
                        if (s.isHTTPBusy()) return s.isHTTPOld() ? (i.warn("http timeout"), this.stop(), 0) : (i.debug("http busy"), 0);
                        !this.lastFailedStartBlock[t] || o.has(this.lastFailedStartBlock[t]) || e.isBlockPending(t, this.lastFailedStartBlock[t]) || (n = this.lastFailedStartBlock[t], r = this.lastFailedStartBlock[t]);
                        for (var a = r - n + 1, c = n; r >= c; c++) {
                            var l = o.getChunkIdsOfBlock(c);
                            for (var d in l) e.addChunk(t, l[d]), radio("peer5_pending_http_chunk").broadcast(l[d], t, "#000000", 2)
                        }
                        var u = !1;
                        i.log("requesting " + a + " blocks in HTTP");
                        var h = i.config.BLOCK_SIZE * n,
                            f = i.config.BLOCK_SIZE * (r + 1) - 1;
                        return f >= o.fileSize - 1 && (f = null), s.download(h, f, u), a
                    }
                },
                getConnectionStats: function() {},
                validateFileSize: function(e, t) {
                    if (e > t) return !1;
                    var n = e % i.config.BLOCK_SIZE;
                    if (0 === n) return !0;
                    var r = t % i.config.BLOCK_SIZE;
                    return n === r ? !0 : !1
                },
                addHTTPBytesToBlocks: function(t, n, r) {
                    var o = i.core.data.BlockCache.get(t);
                    if (!o) return void i.warn("addHTTPBytesToChunks - downloaded http for a resource that doesnt exist " + t);
                    var s = r.length,
                        a = s + n;
                    if (!this.validateFileSize(a, o.fileSize)) return i.error("XHR response length isnt as expected " + t), radio("removeResource").broadcast(t, i.Request.INVALID_RESPONSELENGTH, "XHR response length isnt as expected"), void i.client.FailedUrls.addUrl(t);
                    for (var c, l, d = 0; s > d;) {
                        c = d + i.config.BLOCK_SIZE <= s ? r.subarray(d, d + i.config.BLOCK_SIZE) : r.subarray(d), l = Math.floor((n + d) / i.config.BLOCK_SIZE);
                        var u = o.getNumOfBytesSetInBlock(l);
                        u > 0 && (i.log("DOH, got bytes for completed chunks"), radio("peer5_waste_http_chunk").broadcast(t, u));
                        var h = r.length - u;
                        h > 0 && radio("peer5_received_http_block").broadcast(l, t, c.length), e.removeBlock(t, l), this.addBlock(t, c, l), d += c.length
                    }
                },
                registerEvents: function() {
                    radio("bytesReceivedEvent").subscribe([function(e) {
                        this.addHTTPBytesToBlocks(e.url, e.offset, e.dataArray);
                        var t = i.core.data.BlockCache.get(e.url);
                        t && (t.isFull() && this.stop(e.url), radio("HTTPAvailableEvent").broadcast(e.url))
                    }, this])
                },
                stop: function(t) {
                    var n = this.xhrs[t];
                    n && (n.stop(), e.removeResource(t), delete this.xhrs[t])
                }
            })
        }(),
        function(e) {
            e.DownloadMode = {
                HYBRID: 1,
                P2P: 2,
                HTTP: 3,
                DYNAMIC: 4
            }
        }(i.core.util),
        function() {
            var e = (i.core.util.DownloadMode.HYBRID, i.core.util.DownloadMode.P2P),
                t = i.core.util.DownloadMode.HTTP,
                n = i.core.util.DownloadMode.DYNAMIC,
                r = i.core.dataStructures.PendingBlockMap,
                o = i.core.util.UrlSwarmIdMap,
                s = 1,
                a = 2;
            i.client.HybridController = i.core.controllers.AbstractController.subClass({
                ctor: function(e) {
                    this.P2PController = new i.core.controllers.P2PController(e), this.httpController = new i.client.HTTPController, this.urgent = Object.create(null), this.resourceState = Object.create(null), this.registerEvents(), this.lastBlockRequestedInP2P = null, this.nonFullResources = Object.create(null), i.config.SYNCED_BUFFERS && setInterval(this.blockAllocationCron.bind(this), i.config.BLOCK_ALLOCATION_INTERVAL)
                },
                registerEvents: function() {
                    radio("P2PAvailableEvent").subscribe([function(r, o) {
                        i.log("P2PAvailableEvent");
                        var s = i.state.resources.get(r);
                        if (s) {
                            var a = s.url,
                                c = s.mod;
                            if (s.mod === n) return void this.allocateBlocks(a);
                            if (c !== e && c !== t) {
                                var l = null;
                                l = i.config.SEQUENTIAL_DOWNLOAD ? this.relaxedP2PDownload(a, null, null, o) : this.relaxedP2PDownloadRandomly(a, null, null, o), !l || 0 === l.length
                            }
                        }
                    }, this]), radio("HTTPAvailableEvent").subscribe([function(e) {
                        if (i.debug("http available"), this.httpController.isAvailable(e)) {
                            var t = i.core.data.BlockCache.get(e);
                            if (t.isFull()) return i.info("HTTP Available but already have everything"), void this.httpController.stop(e);
                            if (i.state.resources.get(e).mod === n) return void this.allocateBlocks(e);
                            var r;
                            r = i.config.SEQUENTIAL_DOWNLOAD ? this.relaxedHTTPDownload(e) : this.relaxedHTTPDownloadRandomly(e), 0 === r && (this.urgent[e] = !0, i.config.SEQUENTIAL_DOWNLOAD ? this.aggressiveHTTPDownload(e) : this.aggressiveHTTPDownloadRandomly(e))
                        }
                    }, this])
                },
                removeResource: function(e) {
                    var t = o.getSwarmId(e);
                    t ? this.P2PController.removeResource(t) : i.info("not removing p2p resource " + e + " - no swarmId"), this.httpController.removeResource(e), delete this.nonFullResources[e], delete this.resourceState[e]
                },
                stopResource: function(e) {
                    this.resourceState[e] = a, delete this.nonFullResources[e];
                    var t = o.getSwarmId(e);
                    t ? this.P2PController.stopResource(t) : i.info("not stopping p2p resource " + e + " -  no swarmId"), this.httpController.stopResource(e)
                },
                download: function(e, n, r, s) {
                    if (this.isAvailable(e)) {
                        var a = i.core.data.BlockCache.get(e);
                        if (!a.isFull()) {
                            if (n || 0 === n || (n = a.getMissingBlock()), r || 0 === r || (r = a.getNumOfBlocks() - 1), s || (s = i.config.HYBRID_REQUEST_THRESHOLD), s > i.config.HYBRID_REQUEST_THRESHOLD && (this.urgent[e] = !1), n > a.getNumOfBlocks() - 1 || r > a.getNumOfBlocks() - 1) return void i.warn("out of range");
                            var c = n;
                            n = a.getMissingBlock(), n > c && radio("blockReceivedEvent").broadcast(e, i.config.BLOCK_SIZE), (s < i.config.HTTP_REQUEST_THRESHOLD || this.urgent[e] || i.state.resources.get(e).mod === t) && (s < i.config.HTTP_REQUEST_THRESHOLD && (this.urgent[e] = !0), i.debug("urgency is: " + s + " downloading from HTTP"), i.config.SEQUENTIAL_DOWNLOAD ? this.aggressiveHTTPDownload(e, n, r) : this.aggressiveHTTPDownloadRandomly(e, n, r)), (i.config.P2P_ALWAYS_DOWNLOAD || s >= i.config.P2P_REQUEST_BEGIN_THRESHOLD && s < i.config.P2P_REQUEST_END_THRESHOLD && this.P2PController.isAvailable(o.getSwarmId(e))) && (i.debug("urgency is: " + s + " downloading from P2P"), i.config.SEQUENTIAL_DOWNLOAD ? this.relaxedP2PDownload(e, n, r) : this.relaxedP2PDownloadRandomly(e, n, r)), (i.config.HTTP_ALWAYS_DOWNLOAD || s >= i.config.HTTP_REQUEST_THRESHOLD && s <= i.config.HYBRID_REQUEST_THRESHOLD && this.httpController.isAvailable(e)) && (i.config.SEQUENTIAL_DOWNLOAD ? this.relaxedHTTPDownload(e, n, r) : this.relaxedHTTPDownloadRandomly(e, n, r))
                        }
                    }
                },
                blockAllocationCron: function() {
                    for (var e = Object.keys(this.nonFullResources), t = 0, n = e.length; n > t; t++) {
                        var r = e[t];
                        if (this.resourceState[r] === s) {
                            var o = i.core.data.BlockCache.get(r);
                            if (o.isFull()) delete this.nonFullResources[r];
                            else {
                                var a = o.getMissingBlock(),
                                    c = o.getNumOfBlocks() - 1;
                                this.allocateBlocks(e[t], a, c)
                            }
                        }
                    }
                },
                dynamicDownload: function(e, t, n, r) {
                    "number" != typeof r && i.warn("HybridController::allocateBlocks: constraint is not defined", r), this.nonFullResources[e] = r, this.allocateBlocks(e, t, n)
                },
                allocateBlocks: function(e, t, n) {
                    var r, s = performance.now(),
                        a = i.state.resources.get(e);
                    if (r = i.config.ARE_YOU_FEELING_LUCKY ? a ? a.constraint : null : this.nonFullResources[e], "number" == typeof r) {
                        var c = o.getSwarmId(e),
                            l = a ? a.hashUrl : null;
                        if (i.config.HTTP_FETCH_AHEAD) {
                            var d = this.P2PController.numOfSeeders(c, l);
                            if (d < i.config.FETCH_AHEAD_MIN_SEEDERS) return i.info("seeders < MIN_SEEDERS, fetching ahead in http", e), void this.aggressiveHTTPDownloadRandomly(e, t, n)
                        }
                        r - s < i.config.EXTERNAL_CRITICAL_CONSTRAINT ? (i.info("downloading in aggressive http ", e), this.aggressiveHTTPDownloadRandomly(e, t, n), i.config.PARALLEL_HTTP_AND_P2P === !0 && (i.info("downloading in aggressive p2p ", e), this.aggressiveP2PDownloadRandomly(e, t, n))) : (i.info("downloading in relaxed p2p ", e), this.relaxedP2PDownloadRandomly(e, t, n))
                    }
                },
                relaxedHTTPDownload: function(e, t, n) {
                    var s = i.core.data.BlockCache.get(e);
                    t || 0 === t || (t = s.getFirstMissingBlock()), n || 0 === n || (n = s.getNumOfBlocks() - 1);
                    var a = this.getSeqBlocks(e, i.config.XHR_MAX_GET, function(i) {
                        return i >= t && n >= i && s.isEmpty(i) && !r.isBlockPending(e, i) && !r.isBlockPending(o.getSwarmId(e), i)
                    });
                    return 0 === a.length ? 0 : (this.httpController.download(e, a[0], a[a.length - 1]), a[a.length - 1] - a[0] + 1)
                },
                aggressiveHTTPDownload: function(e, t, n) {
                    var o = i.core.data.BlockCache.get(e);
                    t || 0 === t || (t = o.getFirstMissingBlock()), n || 0 === n || (n = o.getNumOfBlocks() - 1);
                    var s = this.getSeqBlocks(e, i.config.XHR_MAX_GET, function(i) {
                        return i >= t && n >= i && !r.isBlockPending(e, i)
                    });
                    return 0 === s.length ? 0 : (this.httpController.download(e, s[0], s[s.length - 1]), s[s.length - 1] - s[0] + 1)
                },
                relaxedHTTPDownloadRandomly: function(e, t, n) {
                    var s = i.core.data.BlockCache.get(e);
                    t || 0 === t || (t = s.getFirstMissingBlock()), n || 0 === n || (n = s.getNumOfBlocks() - 1);
                    var a = this.getRarestBlocks(e, i.config.XHR_MAX_GET, function(i) {
                            return i >= t && n >= i && s.isEmpty(i) && !r.isBlockPending(e, i) && !r.isBlockPending(o.getSwarmId(e), i)
                        }),
                        c = i.core.util.longestSequence(a);
                    return c.length > 0 && (t = c[0], n = c[c.length - 1], this.httpController.download(e, t, n)), c.length
                },
                aggressiveHTTPDownloadRandomly: function(e, t, n) {
                    var o = i.core.data.BlockCache.get(e);
                    t || 0 === t || (t = o.getFirstMissingBlock()), n || 0 === n || (n = o.getNumOfBlocks() - 1);
                    var s = this.getRarestBlocks(e, i.config.XHR_MAX_GET, function(i) {
                            return i >= t && n >= i && !o.has(i) && !r.isBlockPending(e, i)
                        }),
                        a = i.core.util.longestSequence(s);
                    return a.length > 0 && (t = a[0], n = a[a.length - 1], this.httpController.download(e, t, n)), a.length
                },
                relaxedP2PDownload: function(e, t, n, s) {
                    var a = i.core.data.BlockCache.get(e),
                        c = o.getSwarmId(e);
                    if (this.P2PController.isAvailable(c)) {
                        if (t || 0 === t || (t = a.getFirstMissingBlock()), n || 0 === n || (n = a.getNumOfBlocks() - 1), t > a.getNumOfBlocks() - 1 || n > a.getNumOfBlocks() - 1) return void i.warn("out of range");
                        var l = t;
                        for (t = this.lastBlockRequestedInP2P && !a.has(this.lastBlockRequestedInP2P) ? this.lastBlockRequestedInP2P : a.getFirstMissingBlock(), t > l && radio("blockReceivedEvent").broadcast(e, i.config.BLOCK_SIZE); n >= t && (r.isBlockPending(e, t) || this.P2PController.isPendingEntireBlock(c, t));) t++;
                        for (var d, u = [], h = t; n >= h && h < a.getNumOfBlocks() && u.length < this.P2PController.getAvailableNumOfChunksToSend(); ++h)
                            if (!r.isBlockPending(e, h) && !this.P2PController.isPendingEntireBlock(c, h)) {
                                d = [], d = a.getChunkIdsOfBlock(h);
                                for (var f = 0; f < d.length; ++f) a.hasChunk(d[f]) || this.P2PController.isPendingChunk(c, d[f]) || u.push(d[f]);
                                this.lastBlockRequestedInP2P = h
                            }
                        return this.P2PController.distributeChunksAmongSources(c, u, s), u.length
                    }
                },
                relaxedP2PDownloadRandomly: function(e, t, n, s) {
                    var a = i.core.data.BlockCache.get(e);
                    if (!a) return 0;
                    t || 0 === t || (t = a.getFirstMissingBlock()), n || 0 === n || (n = a.getNumOfBlocks() - 1);
                    var c = o.getSwarmId(e),
                        l = this,
                        d = function(i) {
                            return i >= t && n >= i && !a.has(i) && !r.isBlockPending(e, i) && !l.P2PController.isPendingEntireBlock(c, i)
                        },
                        u = this.P2PController.download(c, s, d);
                    return u
                },
                aggressiveP2PDownloadRandomly: function(e, t, n, r) {
                    var s = i.core.data.BlockCache.get(e);
                    if (!s) return 0;
                    t || (t = s.getFirstMissingBlock()), n || (n = s.getNumOfBlocks() - 1);
                    var a = o.getSwarmId(e),
                        c = this,
                        l = function(e) {
                            return e >= t && n >= e && !s.has(e) && !c.P2PController.isPendingEntireBlock(a, e)
                        },
                        d = this.P2PController.download(a, r, l);
                    return d
                },
                init: function(n) {
                    var r = i.state.resources.get(n);
                    if (!r) return void i.error("HybridController::init:no resource found", n);
                    var o = r.mod,
                        a = r.swarmId;
                    i.info("initiating resource controllers: url=" + n + " swarmId=" + a + " mod=" + o), this.resourceState[n] = s, this.P2PController.init(a), this.urgent[n] = !1, o !== e && this.httpController.init(n), o === t && this.P2PController.stopResource(a)
                },
                isAvailable: function(e) {
                    return (this.P2PController.isAvailable(o.getSwarmId(e)) || this.httpController.isAvailable(e)) && this.resourceState[e] && !(this.resourceState[e] === a)
                },
                getConnectionStats: function() {
                    return {
                        http: this.httpController.getConnectionStats(),
                        p2p: this.P2PController.getConnectionStats()
                    }
                },
                downloadPeriodicTest: function(e) {
                    this.resourceState[e] && this.httpController.isAvailable(e) && radio("HTTPAvailableEvent").broadcast(e)
                },
                stopHttp: function(e) {
                    this.httpController.stop(e)
                },
                getNumberOfConnectedPeers: function() {
                    return Object.keys(this.P2PController.peerConnections).length
                },
                numOfSeeders: function(e, t) {
                    return this.P2PController.numOfSeeders(e, t)
                }
            })
        }(),
        function(e, t) {
            function n(t, n, s) {
                function a(t) {
                    var n = e.getElementsByTagName(t);
                    if (n.length > 1) {
                        if (i.info("found multiple elements with tag " + t + ", searching for correct one"), "video" !== t) {
                            i.info("looking for flash specific properties");
                            for (var r = 0, o = n.length; o > r; r++) {
                                var s = n[r];
                                if (s.getbufferLength) return i.info("Found element with getbufferLength function"), s
                            }
                            return void i.warn("Could not find correct flash element")
                        }
                        i.info("no specific property for video tags yet, selecting first one")
                    } else if (0 === n.length) return;
                    return n[0]
                }

                function c() {
                    if (l)
                        for (var e = i.config.VIDEOTAG_BUFFERED_MAX_HOLE, t = l.currentTime, n = r(l), s = o(n, e), a = 0, c = s.length; c > a; a++) {
                            var h = s[a].start,
                                f = s[a].end;
                            if (t + e >= h && f > t) return f - t
                        } else if (d) try {
                                return d.getbufferLength()
                            } catch (p) {} else if (u) try {
                                return u.getbufferLength()
                            } catch (p) {}
                            return 0
                }
                var l = t || null,
                    d = n || null,
                    u = s || null;
                return t || setInterval(function() {
                    l = a("video")
                }, i.config.VIDEOTAG_FIND_INTERVAL), n || setInterval(function() {
                    d = a("object")
                }, i.config.VIDEOTAG_FIND_INTERVAL), u || setInterval(function() {
                    u = a("embed")
                }, i.config.VIDEOTAG_FIND_INTERVAL), {
                    getBufferLength: c
                }
            }

            function r(e) {
                for (var t = e.buffered, n = [], i = 0; i < t.length; i++) n.push({
                    start: t.start(i),
                    end: t.end(i)
                });
                return n.sort(function(e, t) {
                    var n = e.start - t.start;
                    return n ? n : t.end - e.end
                }), n
            }

            function o(e, t) {
                return e.reduce(function(e, n) {
                    var i = e.length;
                    if (i) {
                        var r = e[i - 1];
                        if (n.start - r.end < t) return n.end > r.end && (r.end = n.end), e
                    }
                    return e.push({
                        start: n.start,
                        end: n.end
                    }), e
                }, [])
            }
            t.MediaController = n
        }(document, i.core.media),
        function() {
            i.core.transport.WsConnection = Object.subClass({
                name: "peer5.core.transport.WsConnection",
                ctor: function(e, t) {
                    this.state = {
                        connectionOpenTime: 0
                    }, this.clientId = t, this.wsSeverUrl = e, this.lastPingTimestamp = 0, this.socketInitiating = !0, this.intentionalClose = !1, this.reconnectionAttempts = 0, this.reconnectionTimeout = 5e3 + Math.random() * i.config.SOCKET_RECONNECTION_INTERVAL, this.messageQueue = [], this.reconnecting = !1, this.socket, this.registerEvents(), i.config.SIMULATION ? Math.random() < i.config.SIMULATORS_DEPLOY_RATIO && (this.initiateWebSocket(this.wsSeverUrl, this.clientId), setTimeout(function() {
                        new i.client.downloadSimulator
                    }, i.config.SIMULATORS_TIMEOUT)) : this.initiateWebSocket(this.wsSeverUrl, this.clientId);
                    var n = this;
                    i.config.FEATURE_WS_HEARTBEAT && setInterval(function() {
                        var e = Date.now() - n.lastPingTimestamp;
                        if (e > i.config.FEATURE_WS_HEARTBEAT_ELAPSED) {
                            var t = new i.core.protocol.Heartbeat;
                            n.sendMessage(t)
                        }
                    }, i.config.FEATURE_WS_HEARTBEAT_INTERVAL)
                },
                initiateWebSocket: function(e, t) {
                    var n = this;
                    this.start = Date.now();
                    var r = i.core.util.getIdFromScriptTag() || i.config.TOKEN,
                        o = i.config.A_B_CONFIG_JSON ? "&abconfig=" + i.config.A_B_CONFIG_JSON : "",
                        s = encodeURIComponent(i.core.util.urlDigest.urlWithAllowedKeys(window.location.href, i.config.URL_ALLOWED_QUERY_PARAMETERS)).replace(/'/g, "%27").replace(/"/g, "%22"),
                        //a = e + "?id=" + t + "&token=" + "peerjs" + "&ver=0.56.23&conf=" + i.config.VERSION + "&fallback=" + i.config.EXTERNAL_XHR_FALLBACK + "&enabled=" + i.feature.isEnabledAndInitialized(i.config.FEATURE_PEER5_KEY) + "&page=" + s + o;
                        a = e + "/peerjs?key=peerjs";
                    this.socket = new WebSocket(a), i.log("trying to connect to a new websocket"), this.sessionid = t, this.socket.binaryType = "arraybuffer", this.socket.onclose = function(e) {
                        radio("router.disconnected").broadcast(), i.warn("WebSocket closed with error"), i.warn(e), n.socket = null, n.messageQueue.length > 0 && n.reconnect()
                    }, this.socket.onerror = function(e) {
                        n.socketInitiating = !1, i.warn("peer with Id " + n.sessionid + " had socket error")
                    }, this.socket.onopen = function() {
                        var e = Date.now();
                        n.state.connectionOpenTime = e - n.start, n.socketInitiating = !1, i.log("websocket took: " + n.state.connectionOpenTime + " to open"), n.socketInit = !0, n.registerServerNotifications(), radio("router.connected").broadcast(), n.processQueue()
                    }
                },
                close: function() {
                    this.socket.close()
                },
                registerServerNotifications: function() {
                    this.socket.onmessage = function(e) {
                        if ("string" != typeof e.data) return void i.warn("non string messages aren't supported");
                        var t = JSON.parse(e.data);
                        switch (t.tag) {
                            case i.core.protocol.GROUP_MATCH:
                                radio("receivedGroupMatchEvent").broadcast(t);
                                break;
                            case i.core.protocol.FILE_INFO:
                                radio("receivedFileInfo").broadcast(t);
                                break;
                            case i.core.protocol.SDP:
                                radio("receivedSDP").broadcast(t);
                                break;
                            case i.core.protocol.GROUP_SDP:
                                radio("receivedGroupSDP").broadcast(t);
                                break;
                            case i.core.protocol.SWARM_HEALTH:
                                radio("swarmHealth").broadcast(t);
                                break;
                            case i.core.protocol.SWARM_ERROR:
                                radio("swarmError").broadcast(t);
                                break;
                            case i.core.protocol.HEAD_RESPONSE:
                                radio("responseHeadersReceived" + t.url).broadcast(t.responseHeaders);
                                break;
                            case i.core.protocol.HEAD_ERROR:
                                radio("xhrFailed" + t.url).broadcast(t)
                        }
                    }
                },
                socketReadyToSend: function() {
                    return this.socket && this.socketInit && this.socket.readyState == this.socket.OPEN
                },
                reconnect: function() {
                    if (this.socketInitiating === !1) {
                        this.socketInitiating = !0, i.info("Peer " + this.sessionid + " is trying to reconnect to the server");
                        var e = this.reconnectionTimeout * Math.pow(2, this.reconnectionAttempts),
                            t = this;
                        setTimeout(function() {
                            t.initiateWebSocket(t.wsSeverUrl, t.clientId), t.reconnectionAttempts++
                        }, e)
                    }
                },
                processQueue: function() {
                    if (this.socketReadyToSend()) {
                        var e = this.messageQueue;
                        for (this.messageQueue = []; e.length > 0;) {
                            var t = e.shift();
                            this.sendData(t)
                        }
                    } else i.warn("cant send data - socket is not defined"), this.reconnect()
                },
                sendData: function(e) {
                    i.log("sending data on websockets, at time: " + Date.now()), this.socket.send(e), this.lastPingTimestamp = Date.now()
                },
                sendMessageDirectly: function(e) {
                    if (this.socketReadyToSend()) {
                        var t = JSON.stringify(e);
                        this.sendData(t)
                    }
                },
                sendMessage: function(e) {
                    var t = JSON.stringify(e);
                    this.messageQueue.push(t), this.processQueue()
                },
                registerEvents: function() {
                    radio("router.send").subscribe([function(e, t) {
                        t ? this.sendMessageDirectly(e) : this.sendMessage(e)
                    }, this])
                }
            })
        }(),
        function() {
            i.core.apiValidators.ApiValidatorBase = Object.subClass({
                name: "peer5.core.apiValidators.ApiValidatorBase",
                ctor: function() {
                    this.status = !1
                },
                detectBrowser: function() {
                    var e, t = navigator.appName,
                        n = navigator.userAgent,
                        i = n.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                    return i && null != (e = n.match(/version\/([\.\d]+)/i)) && (i[2] = e[1]), i = i ? [i[1], i[2]] : [t, navigator.appVersion, "-?"]
                },
                getMajorVersionNumber: function(e) {
                    var t = e.split("."),
                        n = parseInt(t[0]);
                    return n
                },
                validate: function() {
                    throw "unimplemented method"
                }
            })
        }(),
        function() {
            i.core.apiValidators.ApiValidator = Object.subClass({
                name: "peer5.core.apiValidators.ApiValidator",
                ctor: function(e) {
                    var t = this.detectBrowser();
                    this.browserName = t[0].toLowerCase(), this.browserVersion = t[1], this.validators = {}, this.validity = {}, i.browserName = this.browserName, i.browserVersion = this.browserVersion;
                    for (var n in e) this.validators[n] = new e[n](this.browserName, this.browserVersion), this.validity[n] = !1
                },
                detectBrowser: function() {
                    var e, t = navigator.appName,
                        n = navigator.userAgent,
                        i = n.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                    return i && null != (e = n.match(/version\/([\.\d]+)/i)) && (i[2] = e[1]), i = i ? [i[1], i[2]] : [t, navigator.appVersion, "-?"], i && i[0] && "Netscape" === i[0] && (i[0] = "msie"), i
                },
                validate: function() {
                    var e = !0;
                    switch (this.browserName) {
                        case "chrome":
                            if (i.config.DISABLE_CHROME) return !1;
                            break;
                        case "firefox":
                            if (i.config.DISABLE_FIREFOX) return !1
                    }
                    for (var t in this.validators) e = e && this.validators[t].validate();
                    return e
                },
                getBrowser: function() {
                    return {
                        name: this.browserName,
                        version: this.browserVersion
                    }
                },
                getStatus: function() {
                    var e = {};
                    for (var t in this.validators) e[t] = this.validators[t].status;
                    return e
                }
            })
        }(),
        function() {
            i.core.apiValidators.DataChannelsApiValidator = i.core.apiValidators.ApiValidatorBase.subClass({
                name: "peer5.core.apiValidators.DataChannelsApiValidator",
                ctor: function(e, t) {
                    this._super(), this.browserName = e, this.browserVersion = t, this.browserVersionSupprot = {
                        chrome: 31,
                        firefox: 26,
                        msie: 11,
                        opera: 12,
                        safari: 1e3
                    }
                },
                validate: function() {
                    var e = !0;
                    "chrome" == this.browserName && this.getMajorVersionNumber(this.browserVersion) < 31 && (e = !1);
                    var t;
                    try {
                        var n = "stun:stun.l.google.com:19302",
                            i = {
                                iceServers: [{
                                    urls: n
                                }]
                            };
                        t = new RTCPeerConnection(i), t.createDataChannel("test_data_channels", {
                            ordered: !1,
                            maxRetransmits: 0
                        })
                    } catch (r) {
                        e = !1
                    }
                    return t && t.close(), e || radio("browserUnsupported").broadcast(this.browserName, this.browserVersion, "data channels"), this.status = e, e
                }
            })
        }(),
        function() {
            i.core.apiValidators.FileSystemApiValidator = i.core.apiValidators.ApiValidatorBase.subClass({
                name: "peer5.core.apiValidators.FileSystemApiValidator",
                ctor: function(e, t) {
                    this._super(), this.browserName = e, this.browserVersion = t, this.browserVersionSupprot = {
                        chrome: 26,
                        firefox: 19,
                        msie: 11,
                        opera: 12,
                        safari: 1e3
                    }
                },
                validate: function() {
                    if (0 == i.config.USE_FS) return !0;
                    var e = this;
                    return "firefox" == this.browserName ? (i.config.ALLOWED_FILE_SIZE = i.config.ALLOWED_FILE_SIZE_FF, i.config.IS_FIREFOX = !0, !i.config.USE_PERSISTENT || i.config.DISABLE_FS_FF ? i.config.USE_FS = !1 : window.indexedDB && window.indexedDB.open ? i.core.data.FSio = new i.core.data.FSioFireFox(function(t) {
                        t || (i.info("changing USE_FS to false"), e.status = !1, i.config.USE_FS = !1)
                    }) : i.config.USE_FS = !1) : window.webkitRequestFileSystem && navigator.webkitTemporaryStorage ? (i.core.data.FSio.requestTempQuota(100, function(t) {
                        t || (i.info("changing USE_FS to false"), e.status = !1, i.config.USE_FS = !1)
                    }), i.config.IS_CHROME = !0) : i.config.USE_FS = !1, this.status = i.config.USE_FS, !0
                }
            })
        }(),
        function() {
            var e = window.GoogleAnalyticsObject || "__ga__",
                t = e;
            Object.defineProperty(window, "GoogleAnalyticsObject", {
                    get: function() {
                        return t
                    },
                    set: function(n) {
                        n !== t && (t = n, window[e] && window[e].q && (window[n] = window[e], e = t))
                    }
                }),
                function(e, t, n, i, r, o, s) {
                    e.GoogleAnalyticsObject = r, e[r] = e[r] || function() {
                        (e[r].q = e[r].q || []).push(arguments)
                    }, e[r].l = 1 * new Date, o = t.createElement(n), s = t.getElementsByTagName(n)[0], o.async = 1, o.src = i, s.parentNode.insertBefore(o, s)
                }(window, document, "script", "//www.google-analytics.com/analytics.js", t), window[e]("create", "UA-37859248-1", {
                    name: "peer5"
                }), window[e]("peer5.set", "dimension2", i.config.EXTERNAL_XHR_FALLBACK), window[e]("peer5.send", "pageview"), i.gaManager = function() {
                    i.config.DISABLE_GOOGLE_ANALYTICS || (this.registerEvents(), this.downloadStarted = {}, this.fallback = 0)
                }, i.gaManager.prototype = {
                    registerEvents: function() {
                        radio("scriptLoaded").subscribe([function() {
                            i.info("script loaded " + Date.now()), window[e]("peer5.send", "event", "script", "loaded")
                        }, this]), radio("scriptValidated").subscribe([function(t) {
                            t ? (i.info("script passed validated"), window[e]("peer5.send", "event", "script", "browser passed validation")) : (i.info("script failed validation"), window[e]("peer5.send", "event", "script", "browser failed validation"))
                        }, this]), radio("unhandledError").subscribe([function(t, n, i) {
                            window[e]("peer5.send", "event", "unhandled errors", t, n, i)
                        }, this]), radio("fileVerificationFailed").subscribe([function() {
                            window[e]("peer5.send", "event", "errors", "file verification failed")
                        }, this]), radio("trackerHeadExpired").subscribe([function() {
                            window[e]("peer5.send", "event", "request init", "tracker head timeout")
                        }, this]), radio("peer5error").subscribe([function(t) {
                            window[e]("peer5.send", "event", "peer5error", t)
                        }, this]), radio("startedDownloading").subscribe([function(t) {
                            i.info("started downloading " + Date.now()), window[e]("peer5.send", "event", "transfer", "downloadStarted", "requestSize", t), this.downloadStarted[t] = !0
                        }, this]), radio("downloadFinished").subscribe([function(t, n, i, r, o) {
                            window[e]("peer5.send", "event", "transfer", "downloadFinished", "fileSize", n), window[e]("peer5.send", "event", "transfer", "downloadFinished", "p2p bytes downloaded", i), window[e]("peer5.send", "event", "transfer", "downloadFinished", "http bytes downloaded", r), window[e]("peer5.send", "event", "transfer", "downloadFinished", "filesystem bytes resumed", o)
                        }, this]), radio("peer5_b1_finished").subscribe([function(t) {
                            i.info("Got first block in " + t + " ms"), window[e]("peer5.send", "event", "transfer", "received first block", "time to first block", t)
                        }, this]), radio("peer5_p1_finished").subscribe([function(t) {
                            i.info("p1 completed" + Date.now()), t = Math.abs(Math.floor(t)), window[e]("peer5.send", "event", "transfer", "downloaded 1%", "average download speed", t)
                        }, this]), radio("peer5_p5_finished").subscribe([function(t) {
                            i.info("p5 completed" + Date.now()), t = Math.abs(Math.floor(t)), window[e]("peer5.send", "event", "transfer", "downloaded 5%", "average download speed", t)
                        }, this]), radio("peer5_p10_finished").subscribe([function(t) {
                            i.info("p10 completed" + Date.now()), t = Math.abs(Math.floor(t)), window[e]("peer5.send", "event", "transfer", "downloaded 10%", "average download speed", t)
                        }, this]), radio("peer5_q1_finished").subscribe(function(t) {
                            i.info("q1 completed" + Date.now()), t = Math.abs(Math.floor(t)), window[e]("peer5.send", "event", "transfer", "downloaded 25%", "average download speed", t)
                        }), radio("peer5_q2_finished").subscribe(function(t) {
                            i.info("q2 completed" + Date.now()), t = Math.abs(Math.floor(t)), window[e]("peer5.send", "event", "transfer", "downloaded 50%", "average download speed", t)
                        }), radio("peer5_q3_finished").subscribe(function(t) {
                            i.info("q3 completed" + Date.now()), t = Math.abs(Math.floor(t)), window[e]("peer5.send", "event", "transfer", "downloaded 75%", "average download speed", t)
                        }), radio("peer5_q4_finished").subscribe(function(t) {
                            i.info("q4 completed" + Date.now()), t = Math.abs(Math.floor(t)), window[e]("peer5.send", "event", "transfer", "downloaded 100%", "average download speed", t)
                        }), radio("seeding").subscribe([function(t) {
                            switch (i.info("seeding for " + t + " miliseconds"), t) {
                                case 5e3:
                                    window[e]("peer5.send", "event", "user", "seeding", "5 seconds");
                                    break;
                                case 3e4:
                                    window[e]("peer5.send", "event", "user", "seeding", "30 seconds");
                                    break;
                                case 3e5:
                                    window[e]("peer5.send", "event", "user", "seeding", "5 minutes")
                            }
                        }, this]), radio("exitDownload").subscribe([function(t) {
                            t ? window[e]("peer5.send", "event", "user", "exit download", "download completed") : window[e]("peer5.send", "event", "user", "exit download", "download didnt complete")
                        }, this]), radio("exitPageStats").subscribe([function(t, n, i) {
                            n = Math.abs(Math.floor(n)), i = Math.abs(Math.floor(i)), .25 > t ? window[e]("peer5.send", "event", "user", "exit page", "download in Q1", n) : .5 > t ? window[e]("peer5.send", "event", "user", "exit page", "download in Q2", n) : .75 > t ? window[e]("peer5.send", "event", "user", "exit page", "download in Q3", n) : 1 > t ? window[e]("peer5.send", "event", "user", "exit page", "download in Q4", n) : window[e]("peer5.send", "event", "user", "exit page", "download finished", n), window[e]("peer5.send", "event", "user", "exit page", "average download speed", i)
                        }, this]), radio("exitPage").subscribe([function(t, n) {
                            t ? n ? window[e]("peer5.send", "event", "user", "exit page", "after download start and fallen-back") : window[e]("peer5.send", "event", "user", "exit page", "after download start and no fallback") : n ? window[e]("peer5.send", "event", "user", "exit page", "before download start and fallen-back") : window[e]("peer5.send", "event", "user", "exit page", "before download start and no fallback")
                        }, this]), radio("fallback").subscribe([function(t, n) {
                            this.fallback++, i.info("fallback " + Date.now()), this.downloadStarted[n] ? window[e]("peer5.send", "event", "errors", "fallback after download started", t) : window[e]("peer5.send", "event", "errors", "fallback before download started", t)
                        }, this]), radio("pauseClicked").subscribe([function() {
                            window[e]("peer5.send", "event", "user", "clicked paused")
                        }, this]), radio("playClicked").subscribe([function() {
                            window[e]("peer5.send", "event", "user", "clicked played")
                        }, this]), radio("external.player").subscribe([function(t) {
                            window[e]("peer5.send", "event", "player", t.action, t.label, t.value)
                        }, this]), radio("m3u8SpeedEstimation").subscribe([function(t) {
                            window[e]("peer5.send", "event", "rum", "speed estimation", "first m3u8", t)
                        }, this]), radio("mediaElementWrapperFailure").subscribe(function(t, n) {
                            window[e]("peer5.send", "event", "failure", t, n, 0)
                        }), radio("resumeStarted").subscribe([function() {
                            i.info("resume started " + Date.now()), window[e]("peer5.send", "event", "storage", "resume started")
                        }, this]), radio("resumeEnded").subscribe([function() {
                            i.info("resume ended " + Date.now()), window[e]("peer5.send", "event", "storage", "resume ended")
                        }, this]), radio("requestedPersQuota").subscribe([function() {
                            i.info("requested persistent quota event"), window[e]("peer5.send", "event", "user", "prompt persistent quota")
                        }, this]), radio("persQuotaAnswer").subscribe([function(t) {
                            t ? (i.info("user has approved using persistent quota"), window[e]("peer5.send", "event", "user", "approved persistent quota")) : (i.info("user has denied using persistent quota"), window[e]("peer5.send", "event", "user", "denied persistent quota"))
                        }, this]), radio("persQuotaTimeout").subscribe([function() {
                            window[e]("peer5.send", "event", "user", "persistent quota timed out")
                        }, this]), radio("offlineStorageError").subscribe([function(t) {
                            window[e]("peer5.send", "event", "errors", "offline storage", t)
                        }, this]), radio("usingFileSystem").subscribe([function(t) {
                            window[e]("peer5.send", "event", "cacheMethod", "filesystem", "fileSize", t)
                        }, this]), radio("usingMemory").subscribe([function(t) {
                            window[e]("peer5.send", "event", "cacheMethod", "memory", "fileSize", t)
                        }, this]), radio("outOfMemoryError").subscribe([function(t) {
                            window[e]("peer5.send", "event", "errors", "out of memory", "heap size", t)
                        }, this])
                    }
                }, i.gaManager = new i.gaManager
        }(),
        function() {
            function e(e, n) {
                if (e in t) {
                    var i, r = t[e];
                    for (i in n) {
                        if (!(i in r)) return !1;
                        if (typeof n[i] !== r[i].type) return !1
                    }
                    for (var o in r)
                        if (r[o].required && typeof n[o] !== r[o].type) return !1;
                    return !0
                }
                return !1
            }
            var t = {
                player: {
                    action: {
                        type: "string",
                        required: !0
                    },
                    label: {
                        type: "string",
                        required: !0
                    },
                    value: {
                        type: "number",
                        required: !0
                    },
                    timeSinceLoaded: {
                        type: "number",
                        required: !1
                    },
                    duration: {
                        type: "number",
                        required: !1
                    },
                    vendor: {
                        type: "string",
                        required: !0
                    },
                    id: {
                        type: "string",
                        required: !0
                    },
                    occurrence: {
                        type: "number",
                        required: !1
                    },
                    timeSinceReady: {
                        type: "number",
                        required: !1
                    }
                },
                playback: {
                    currentSegment: {
                        type: "string",
                        required: !0
                    }
                }
            };
            i.trigger = function(t, n) {
                e(t, n) && radio("external." + t).broadcast(n)
            }
        }(),
        function(e, t) {
            var n, i = function() {
                e.info("triggering beforeunload"), t("beforeUnload").broadcast(), e.core.util.envokeCallbackSync(n, [])
            };
            n = window.onbeforeunload, window.onbeforeunload = i
        }(i, radio),
        function(e) {
            function t(e) {
                return /^\d+$/.test(e)
            }

            function n(e) {
                for (var n = 0; n < e.length; ++n)
                    if (!t(e[n])) return !1;
                return !0
            }
            e.validateVersion = function(e) {
                var t = e.split(".");
                return n(t)
            }, e.compareVersionNumbers = function(e, t) {
                var i = e.split("."),
                    r = t.split(".");
                if (!n(i) || !n(r)) return NaN;
                for (var o = 0; o < i.length; ++o) {
                    if (r.length === o) return 1;
                    if (i[o] !== r[o]) return i[o] > r[o] ? 1 : -1
                }
                return i.length != r.length ? -1 : 0
            }, e.compareMajorVersionNumbers = function(e, t) {
                var i = e.split("."),
                    r = t.split(".");
                return n(i) && n(r) ? i.length > r.length ? 1 : i.length < r.length ? -1 : i[0] > r[0] ? 1 : i[0] < r[0] ? -1 : 0 : NaN
            }
        }(i.core.util),
        function() {
            i.core.Block = Object.subClass({
                name: "peer5.core.Block",
                ctor: function(e, t, n) {
                    this.blockSize = e, this.length = Math.ceil(this.blockSize / i.config.CHUNK_SIZE), this.buffer = t ? t : null, this.verified = n ? n : !1, this.hash = null, this.chunkMap = [], this.numOfChunksSet = 0;
                    for (var r = 0; r < this.length; ++r) this.chunkMap[r] = this.verified
                },
                getBlock: function(e) {
                    return this.verified ? this.buffer ? this.buffer : !0 : !1
                },
                setBlock: function(e) {
                    if (e.length === this.blockSize) {
                        if (!this.verified)
                            for (var t = 0, n = this.length; n > t; t++) this.setChunkOn(t);
                        this.buffer = e
                    }
                },
                getChunk: function(e) {
                    if (this.verified) {
                        if (this.buffer) {
                            var t = e * i.config.CHUNK_SIZE,
                                n = (1 + e) * i.config.CHUNK_SIZE;
                            return this.buffer.subarray(t, n)
                        }
                        return !0
                    }
                    return !1
                },
                hasChunk: function(e) {
                    return this.chunkMap[e]
                },
                verifySize: function(e, t) {
                    return e.length !== i.config.CHUNK_SIZE && this.buffer.length !== t ? !1 : this.buffer.length < t ? !1 : !0
                },
                setChunk: function(e, t) {
                    this.buffer || (this.buffer = new Uint8Array(this.blockSize), this.chunkMap = []);
                    var n = new Uint8Array(t),
                        r = e * i.config.CHUNK_SIZE,
                        o = this.verifySize(t, n.length + r);
                    return o ? (this.buffer.set(n, r), this.chunkMap[e] = !0, this.numOfChunksSet++, !0) : !1
                },
                setChunkOn: function(e) {
                    this.chunkMap || (this.chunkMap = []), this.chunkMap[e] = !0, this.numOfChunksSet++
                },
                getNumOfChunksSet: function() {
                    return this.numOfChunksSet
                },
                getNumOfBytesSet: function() {
                    return this.chunkMap[this.length - 1] && this.blockSize !== i.config.BLOCK_SIZE ? (this.numOfChunksSet - 1) * i.config.CHUNK_SIZE + (this.blockSize % i.config.CHUNK_SIZE || i.config.CHUNK_SIZE) : this.numOfChunksSet * i.config.CHUNK_SIZE
                },
                getNumOfChunks: function() {
                    return this.length
                },
                removeBlockData: function() {
                    delete this.buffer
                },
                verifyBlock: function(e) {
                    if (this.verified) return 0;
                    for (var t = 0; t < this.length; ++t)
                        if (!this.chunkMap[t]) return 0;
                    if (null == this.hash) return this.verified = !0, 1;
                    if (this.buffer) {
                        var n = i.core.util.MD5.ArrayBuffer.hash(this.buffer.buffer);
                        if (n === this.hash) return this.verified = !0, 1;
                        i.error("Hash didn't verify, block has been polluted")
                    } else if (e) {
                        var n = i.core.util.MD5.ArrayBuffer.hash(e.buffer);
                        if (n === this.hash) return this.buffer = e, this.verified = !0, 1;
                        i.error("Hash didn't verify, block has been polluted")
                    }
                },
                hashBlock: function() {
                    for (var e = 0; e < this.length; ++e)
                        if (!this.chunkMap[e]) return 0;
                    return this.hash = i.core.util.MD5.ArrayBuffer.hash(this.buffer.buffer), this.hash
                }
            })
        }(),
        function() {
            i.core.dataStructures.BlockMap = Object.subClass({
                name: "peer5.core.dataStructures.BlockMap",
                ctor: function(e, t, n, r) {
                    this.init = !1, this.resourceId = t, r ? (this.hashAlg = i.CryptoJS.algo.SHA1.create(), this.aprioriHash = r) : n && (this.hashAlg = new i.core.util.MD5.ArrayBuffer, this.aprioriHash = n), this.metadata = new i.core.protocol.FileInfo(null, e, null, null, i.config.BLOCK_SIZE, null, null, null, null), this.metadata.url = t, this.privateBlockMap = Object.create(null), this.numOfChunksInBlock = i.config.BLOCK_SIZE / i.config.CHUNK_SIZE, this.fileSize = e, this.numOfBlocks = Math.ceil(this.fileSize / i.config.BLOCK_SIZE), this.numOfChunks = Math.ceil(this.fileSize / i.config.CHUNK_SIZE), this.numOfVerifiedBlocks = 0, this.firstMissingBlock = 0, this.sizeOfLastBlock = e % i.config.BLOCK_SIZE, 0 == this.sizeOfLastBlock && (this.sizeOfLastBlock = i.config.BLOCK_SIZE), this.availabilityMap, this.fs = !0, this._registerEvents(), i.config.USE_FS && this.fileSize > i.config.SMALL_FILE_SIZE ? (this.lruMap = new i.core.dataStructures.LRU(Math.floor(i.config.CACHE_SIZE / i.config.BLOCK_SIZE), this._lruRemoveCb), this._initiateFileSystem()) : (this.fs = !1, this.availabilityMap = new i.core.dataStructures.AvailabilityMap(this.numOfBlocks))
                },
                dtor: function() {
                    radio("handleOutOfSpaceError").unsubscribe([this._handleOutOfSpaceError, this]), radio("handleWriteError").unsubscribe([this._handleWriteError, this])
                },
                getSerializedMap: function() {
                    return this.availabilityMap.serialize()
                },
                isFull: function() {
                    return this.numOfBlocks == this.numOfVerifiedBlocks
                },
                has: function(e) {
                    return this.privateBlockMap[e] && this.privateBlockMap[e].verified
                },
                hasChunk: function(e) {
                    var t = this.calcBlockIdChunkOffset(e);
                    return this.privateBlockMap[t.block] ? this.privateBlockMap[t.block].hasChunk(t.chunk) : !1
                },
                getNumOfBlocks: function() {
                    return this.numOfBlocks
                },
                getNumOfVerifiedBytes: function() {
                    return this.numOfVerifiedBlocks == this.numOfBlocks ? this.fileSize : this.numOfVerifiedBlocks * i.config.BLOCK_SIZE
                },
                getNumOfChunksInBlock: function(e) {
                    return e == this.numOfBlocks - 1 ? Math.ceil(this.sizeOfLastBlock / i.config.CHUNK_SIZE) : this.numOfChunksInBlock
                },
                getBlock: function(e, t) {
                    if (this.privateBlockMap[e]) {
                        var n = this.privateBlockMap[e].getBlock(e);
                        if (this.fs) {
                            if (!n) return !1;
                            if (1 == n) {
                                var r = e * i.config.BLOCK_SIZE,
                                    o = this;
                                i.core.data.FSio.read(this.resourceId, r, r + i.config.BLOCK_SIZE, function(n, i) {
                                    if (n) {
                                        var r = o.privateBlockMap[e];
                                        r.setBlock(i), o.lruMap.set(e, r), o.getBlock(e, t)
                                    }
                                })
                            } else this.lruMap.get(e), t(n)
                        } else t(n)
                    }
                },
                getChunkIdsOfBlock: function(e) {
                    if (e >= this.numOfBlocks) return [];
                    for (var t = e == this.numOfBlocks - 1 ? Math.ceil(this.sizeOfLastBlock / i.config.CHUNK_SIZE) : this.numOfChunksInBlock, n = [], r = e * this.numOfChunksInBlock, o = r; r + t > o; ++o) n.push(o);
                    return n
                },
                getBlockIdOfChunk: function(e) {
                    if (e >= this.numOfChunks) return -1;
                    var t = this.calcBlockIdChunkOffset(e);
                    return t.block
                },
                getNumOfChunksSetInBlock: function(e) {
                    return void 0 !== this.privateBlockMap[e] ? this.privateBlockMap[e].getNumOfChunksSet() : 0
                },
                getNumOfBytesSetInBlock: function(e) {
                    return void 0 !== this.privateBlockMap[e] ? this.privateBlockMap[e].getNumOfBytesSet() : 0
                },
                getChunk: function(e, t) {
                    var n = this,
                        r = this.calcBlockIdChunkOffset(e);
                    if (this.privateBlockMap[r.block]) {
                        var o = this.privateBlockMap[r.block].getChunk(r.chunk);
                        if (this.fs) {
                            if (!o) return t(!1);
                            if (1 == o) {
                                var s = r.block * i.config.BLOCK_SIZE;
                                i.core.data.FSio.read(this.resourceId, s, s + i.config.BLOCK_SIZE, function(i, o) {
                                    if (i) {
                                        var s = n.privateBlockMap[r.block];
                                        s.setBlock(o), n.lruMap.set(r.block, s), n.getChunk(e, t)
                                    }
                                })
                            } else this.lruMap.get(r.block), t(!0, o)
                        } else t(!0, o)
                    }
                },
                setChunk: function(e, t) {
                    var n = this.calcBlockIdChunkOffset(e);
                    this.privateBlockMap[n.block] || this._createANewBlock(n.block);
                    var r = this.privateBlockMap[n.block].setChunk(n.chunk, t);
                    return r ? (radio("chunkReceivedEvent").broadcast(this.metadata), this.verifyBlock(n.block), n.block) : void radio("removeResource").broadcast(this.metadata.url, i.Request.FILE_SIZE_ERR, "Wrong filesize was received from the server")
                },
                setBlock: function(e, t) {
                    this.privateBlockMap[e] || this._createANewBlock(e), this.privateBlockMap[e].setBlock(t), this.verifyBlock(e)
                },
                isEmpty: function(e) {
                    return !this.privateBlockMap[e]
                },
                getBlockIndex: function(e) {
                    return Math.ceil(e / i.config.BLOCK_SIZE)
                },
                getMissingBlock: function(e) {
                    return e ? this.getRandomMissingBlock() : this.getFirstMissingBlock()
                },
                getFirstMissingBlock: function() {
                    return this.firstMissingBlock
                },
                getRandomMissingBlock: function() {
                    for (var e = 0; 1e3 > e; e++) {
                        var t = this.numOfBlocks - this.firstMissingBlock,
                            n = this.firstMissingBlock + Math.floor(Math.random() * t);
                        if (!(n in this.privateBlockMap && this.privateBlockMap[n].verified)) return n
                    }
                    return this.firstMissingBlock
                },
                getConsecutiveBuffer: function(e, t) {
                    for (var n = e; this.has(n);) n++;
                    var r = n - e,
                        o = new Uint8Array(i.config.BLOCK_SIZE * r);
                    this._iterateBlocks(function(e) {
                        o.set(e, blockId * i.config.BLOCK_SIZE)
                    }, e, e + r - 1, function(e) {
                        t(o)
                    })
                },
                verifyBlock: function(e) {
                    if (this.privateBlockMap[e]) {
                        if (1 == this.privateBlockMap[e].verifyBlock()) {
                            for (this.numOfVerifiedBlocks++; this.has(this.firstMissingBlock);) this.firstMissingBlock++;
                            radio("blockReceivedEvent").broadcast(this.resourceId, this.privateBlockMap[e].blockSize), this.isFull() && radio("transferFinishedEvent").broadcast(this.metadata);
                            var t = this;
                            this.fs ? t.getBlock(e, function(n) {
                                i.core.data.FSio.write(t.resourceId, n, e * i.config.BLOCK_SIZE, function(n, r) {
                                    n ? (t.lruMap.set(e, t.privateBlockMap[e]), i.debug("successfully wrote block " + e + " to filesystem "), t.availabilityMap.setFS(e, function(n) {
                                        n && i.debug("successfully added block " + e + " to metadata file"), t.availabilityMap.isFullFS() && t._verifyResource(function(e) {
                                            e ? radio("transferLoadedEvent").broadcast(t.metadata) : (i.error("file verification failed"), radio("fileVerificationFailed").broadcast(), radio("removeResource").broadcast(t.resourceId, i.Request.VERIFICATION_ERR, "file verification failed"))
                                        })
                                    })) : (i.warn("couldn't write block " + e + " to filesystem"), "space" === r ? t._handleOutOfSpaceError() : t._handleWriteError())
                                })
                            }) : this.isFull() && this._verifyResource(function(e) {
                                e ? radio("transferLoadedEvent").broadcast(t.metadata) : (i.error("file verification failed"), radio("fileVerificationFailed").broadcast(), radio("removeResource").broadcast(t.resourceId, i.Request.VERIFICATION_ERR, "file verification failed"))
                            })
                        }
                        if (this.privateBlockMap[e].verified) return this.availabilityMap.set(e), !0
                    }
                    return !1
                },
                ingestBlock: function(e) {
                    return this.privateBlockMap[e] && this.privateBlockMap[e].hashBlock() ? (this.verifyBlock(e), this.privateBlockMap[e].hash) : !1
                },
                addMetadata: function(e) {
                    this.metadata = e, this.init = !0
                },
                getMetadata: function() {
                    return this.metadata
                },
                initiateFromLocalData: function(e, t, n) {
                    var r = this;
                    t || (t = 0), n || 0 == n ? r.availabilityMap.hasFS(t) ? i.core.data.FSio.read(r.resourceId, t * i.config.BLOCK_SIZE, (t + 1) * i.config.BLOCK_SIZE, function(o, s) {
                        o ? (r.initiateBlockFromLocalData(t, s) ? (radio("blockReceivedEvent").broadcast(r.resourceId, r.privateBlockMap[t].blockSize), i.log("successfully initiated block " + t + " from filesystem " + Date.now())) : i.log("couldnt verify block " + t + " from filesystem " + Date.now()), n > t ? (t++, r.initiateFromLocalData(e, t, n)) : (i.info("finished initiating from filesystem"), radio("resumeEnded").broadcast(), e(!0))) : i.warn("couldn't initiate block " + t + " from filesystem")
                    }) : (i.debug("blockId " + t + " was not in availabilityMap, skipping to next block"), n > t ? (t++, r.initiateFromLocalData(e, t, n)) : (i.info("finished initiating from filesystem"), radio("resumeEnded").broadcast(), e(!0))) : i.core.data.FSio.getResourceDetails(this.resourceId, function(n, o) {
                        var s = Math.floor(o.size / i.config.BLOCK_SIZE);
                        r.availabilityMap.removeBlocksFrom(s + 1, function(n) {
                            n ? r.initiateFromLocalData(e, t, s) : i.error("couldn't remove blocks from availability map")
                        })
                    })
                },
                initiateBlockFromLocalData: function(e, t) {
                    this._createANewBlock(e);
                    for (var n = Math.ceil(t.length / i.config.CHUNK_SIZE), r = t.length - (n - 1) * i.config.CHUNK_SIZE, o = 0; n > o; ++o) this.privateBlockMap[e].setChunkOn(o);
                    if (this.privateBlockMap[e].verifyBlock(t)) {
                        for (this.numOfVerifiedBlocks++; this.has(this.firstMissingBlock);) this.firstMissingBlock++;
                        for (var o = 0; n > o; ++o) {
                            var s = n - 1 > o ? i.config.CHUNK_SIZE : r;
                            radio("peer5_received_fs_chunk").broadcast(this.resourceId, s, e * this.numOfChunksInBlock + o);
                        }
                        if (this.availabilityMap.set(e), this.isFull()) {
                            var a = this;
                            this.availabilityMap.setFSFull(function(e) {
                                radio("transferLoadedEvent").broadcast(a.metadata)
                            })
                        }
                        return !0
                    }
                    return delete this.privateBlockMap[e], !1
                },
                changeResourceId: function(e, t) {
                    if (this.fs) {
                        var n = this;
                        i.core.data.FSio.renameResource(this.resourceId, e, function(i) {
                            i ? (n.resourceId = e, n.availabilityMap.renameResource(e, function(e) {
                                t(e)
                            })) : t(i)
                        })
                    } else this.resourceId = e, t(!0)
                },
                getDataBlob: function(e) {
                    var t = [];
                    this._iterateBlocks(function(e) {
                        t.push(e)
                    }, 0, this.numOfBlocks - 1, function(n) {
                        try {
                            var i = new Blob(t, {
                                type: "application/octet-binary"
                            })
                        } catch (r) {
                            if ("NS_ERROR_OUT_OF_MEMORY" === r.name) {
                                r.result;
                                radio("outOfMemoryError").broadcast(r.result)
                            }
                        }
                        e(i)
                    })
                },
                getDataUint8Array: function(e) {
                    try {
                        var t = new Uint8Array(this.metadata.size)
                    } catch (n) {
                        if ("NS_ERROR_OUT_OF_MEMORY" === n.name) {
                            n.result;
                            radio("outOfMemoryError").broadcast(n.result), e(!1)
                        }
                        return
                    }
                    var i = 0;
                    this._iterateBlocks(function(e) {
                        t.set(e, i), i += e.length
                    }, 0, this.numOfBlocks - 1, function(n) {
                        e(t)
                    })
                },
                getBlobUrl: function(e) {
                    var t = this;
                    if (this.fs) i.core.data.FSio.createObjectURL(this.resourceId, function(t, n) {
                        return t ? void e(t, n) : void e(!1)
                    });
                    else {
                        var n = function() {
                            try {
                                t.getDataBlob(function(t) {
                                    var n = window.URL.createObjectURL(t);
                                    e(!0, n)
                                })
                            } catch (i) {
                                if ("NS_ERROR_OUT_OF_MEMORY" === i.name) {
                                    setTimeout(n, 1e4);
                                    i.result;
                                    radio("outOfMemoryError").broadcast(i.result)
                                }
                            }
                        };
                        n()
                    }
                },
                getBlob: function(e) {
                    this.fs ? i.core.data.FSio.getBlob(this.resourceId, 0, this.fileSize, e) : this.getDataBlob(function(t) {
                        e(!0, t)
                    })
                },
                getUint8Array: function(e) {
                    this.fs ? i.core.data.FSio.getArrayBuffer(this.resourceId, 0, this.fileSize, function(t, n) {
                        t ? e(!0, new Uint8Array(n)) : e(!1)
                    }) : this.getDataUint8Array(function(t) {
                        t ? e(!0, t) : e(!1)
                    })
                },
                getText: function(e) {
                    this.getUint8Array(function(t, n) {
                        t ? e(!0, i.core.util.uint8ToString(n)) : e(!1)
                    })
                },
                getFileSize: function() {
                    return this.fileSize
                },
                allocateFileSize: function(e) {
                    var t = this;
                    i.core.data.FSio.write(this.resourceId, new Uint8Array([]), this.fileSize, function(n, r) {
                        n || "space" != r ? n || i.error("error in allocateFileSize") : t._handleOutOfSpaceError(), e(n)
                    })
                },
                allocateFileSizeSync: function(e) {
                    i.core.data.FSio.write(this.resourceId, new Uint8Array([]), this.fileSize, function(t, n) {
                        t || "space" != n ? (t || i.error("error in allocateFileSizeSync"), e && e(t)) : i.core.data.CacheManager.handleOutOfSpace(this.resourceId, this.fileSize, function(t) {
                            t ? e && e(t) : (i.warn("couldn't clear enough space from offline storage"), e && e(t))
                        })
                    })
                },
                _registerEvents: function() {
                    var e = this;
                    this._lruRemoveCb = function(t, n) {
                        e._removeBlockData(t)
                    }, radio("handleOutOfSpaceError").subscribe([this._handleOutOfSpaceError, this]), radio("handleWriteError").subscribe([this._handleWriteError, this])
                },
                _initiateFileSystem: function() {
                    var e = this;
                    i.config.USE_PERSISTENT ? i.core.data.FSio.queryPersQuota(function(t, n, r) {
                        0 != r ? i.core.data.FSio.requestPersQuota(r, function(t, n) {
                            t ? e._createOrResumeResource(n) : (i.warn("couldn't initiate filesystem"), e._fallbackToNoFS())
                        }, e.fileSize) : e._initiateTempFileSystem()
                    }) : this._initiateTempFileSystem()
                },
                _initiateTempFileSystem: function() {
                    var e = this;
                    i.core.data.FSio.queryTempQuota(function(t, n, r) {
                        r < e.fileSize ? i.config.USE_PERSISTENT ? i.core.data.FSio.requestPersQuota(i.config.PERSISTENT_FS_SIZE, function(t, n) {
                            t ? e.availabilityMap = new i.core.dataStructures.AvailabilityMapFS(e.numOfBlocks, e.resourceId, n, function(t) {
                                t ? i.core.data.FSio.createResource(e.resourceId, function(t) {
                                    t ? e._resourceInitedWithFS() : (i.warn("failed to create resource in filesystem"), e._fallbackToNoFS())
                                }) : (i.warn("couldn't initiate metadata file"), e._fallbackToNoFS())
                            }) : (i.warn("couldn't initiate persistent filesystem"), e._fallbackToNoFS())
                        }, e.fileSize) : (i.warn("not enough space in temporary storage"), e._fallbackToNoFS()) : r - n > e.fileSize ? e._createOrResumeResource(r - n) : r - n < e.fileSize && e._createOrResumeResource(r - n)
                    })
                },
                _createOrResumeResource: function(e) {
                    var t = this;
                    t.availabilityMap = new i.core.dataStructures.AvailabilityMapFS(t.numOfBlocks, t.resourceId, e, function(e) {
                        e ? t.availabilityMap.numOfOnFSBits > 0 ? i.core.data.FSio.isExist(t.resourceId, function(e) {
                            e ? (i.info("Resource " + t.resourceId + " exists already in the filesystem."), radio("resumeStarted").broadcast(), t.initiateFromLocalData(function(e) {
                                e ? t._resourceInitedWithFS() : (i.warn("there was a problem resuming the resource"), t._fallbackToNoFS())
                            })) : t.availabilityMap.reset(function(e) {
                                e ? i.core.data.FSio.createResource(t.resourceId, function(e) {
                                    e ? t._resourceInitedWithFS() : (i.warn("failed to create resource in filesystem"), t._fallbackToNoFS())
                                }) : (i.error("couldn't reset the availability map"), t._fallbackToNoFS())
                            })
                        }) : i.core.data.FSio.createResource(t.resourceId, function(e) {
                            e ? t._resourceInitedWithFS() : (i.warn("failed to create resource in filesystem"), t._fallbackToNoFS())
                        }) : (i.warn("couldn't initiate metadata file"), t._fallbackToNoFS())
                    })
                },
                _resourceInitedWithFS: function() {
                    this.fs = !0, radio("filesystemInitiated" + this.resourceId).broadcast(), this.init && radio("resourceInit").broadcast(this.metadata)
                },
                _fallbackToNoFS: function() {
                    this.fs = !1, this.availabilityMap = new i.core.dataStructures.AvailabilityMap(this.numOfBlocks), this.init && radio("resourceInit").broadcast(this.metadata), radio("filesystemInitiated" + this.resourceId).broadcast()
                },
                _removeBlockData: function(e) {
                    this.privateBlockMap[e] && this.privateBlockMap[e].removeBlockData()
                },
                _handleOutOfSpaceError: function() {
                    var e;
                    e = this.metadata.url ? this.metadata.url : this.resourceId, i.error("Out of space error"), radio("pauseResource").broadcast(e, i.Request.OUT_OF_SPACE_ERR, "out of space"), i.core.data.CacheManager.handleOutOfSpace(this.resourceId, this.fileSize, function(t) {
                        t ? radio("resumeResource").broadcast(e) : (i.warn("couldn't clear enough space from offline storage"), radio("removeResource").broadcast(e, i.Request.OUT_OF_SPACE_ERR, "out of space"))
                    })
                },
                _handleWriteError: function() {
                    i.error("offline storage write error");
                    var e;
                    e = this.metadata.url ? this.metadata.url : this.resourceId, radio("removeResource").broadcast(e, i.Request.WRITE_ERR, "offline storage write error")
                },
                _verifyResource: function(e) {
                    if (!this.hashAlg) return void e(!0);
                    var t = this;
                    return this.hashAlg ? void this._iterateBlocks(function(e, n) {
                        i.debug("hashing block " + n), t.hashAlg.append ? t.hashAlg.append(e) : t.hashAlg.update(i.core.util.base64.encode(e))
                    }, 0, this.numOfBlocks - 1, function() {
                        if (t.hashAlg.end) var n = t.hashAlg.end().toUpperCase();
                        else var n = t.hashAlg.finalize().toString().toUpperCase();
                        i.info("resourceId " + t.resourceId + " loaded with hash = " + n), e(n === t.aprioriHash)
                    }) : void e(!0)
                },
                _iterateBlocks: function(e, t, n, i) {
                    var r = this,
                        o = function(t) {
                            r.getBlock(t, function(r) {
                                r && e(r, t), t++, n >= t ? o(t) : i(!0)
                            })
                        };
                    o(t)
                },
                _createANewBlock: function(e) {
                    var t = e == this.numOfBlocks - 1 ? this.sizeOfLastBlock : i.config.BLOCK_SIZE;
                    this.privateBlockMap[e] = new i.core.Block(t), this.metadata.hashes && (this.privateBlockMap[e].hash = this.metadata.hashes[e])
                },
                calcBlockIdChunkOffset: function(e) {
                    var t = Math.floor(e / this.numOfChunksInBlock),
                        n = e % this.numOfChunksInBlock;
                    return {
                        block: t,
                        chunk: n
                    }
                }
            })
        }(),
        function() {
            i.core.data.BlockMaps = Object.subClass({
                ctor: function() {
                    this._blockMaps = {}, this._keys = {}
                },
                getRealKeyName: function(e) {
                    return void 0 !== this._blockMaps[e] ? e : void 0 !== this._keys[e] ? this.getRealKeyName(this._keys[e]) : !1
                },
                alias: function(e, t) {
                    void 0 === this._keys[e] && (this._keys[e] = t)
                },
                add: function(e, t) {
                    this._blockMaps[e] = t
                },
                get: function(e) {
                    return e = this.getRealKeyName(e), e || i.warn("could not get real key name for key:" + e), this._blockMaps[e]
                },
                has: function(e) {
                    return !!this.getRealKeyName(e)
                },
                remove: function(e) {
                    var t = this.getRealKeyName(e);
                    t ? (this._blockMaps[t].dtor(), delete this._blockMaps[t]) : i.warn("could not remove non existing key: " + e);
                    for (var n; void 0 !== this._keys[e];) n = this._keys[e], delete this._keys[e], e = n
                },
                forEach: function(e) {
                    for (var t in this._blockMaps) e(t, this._blockMaps[t])
                }
            }), i.core.data.BlockCache = new i.core.data.BlockMaps
        }(),
        function() {
            i.core.data.FSio = Object.subClass({
                ctor: function() {
                    this.writeQueue = new n, this.registerEvents(), this.pendingObjectUrlCb = {}, this.finishWriteCbs = [], this.currentlyWriting = !1
                },
                executeOnReady: function(e) {},
                createResource: function(e, t, n) {
                    e = e.replace("peer5://", ""), i.info("Adding resource " + e + " to the filesystem.");
                    var r = this;
                    this.fs.root.getFile(i.config.FS_ROOT_DIR + e, {
                        create: !0
                    }, function(e) {
                        t && t(!0)
                    }, function(e) {
                        r.errorHandler(e, t)
                    })
                },
                removeResource: function(e, t) {
                    e = e.replace("peer5://", ""), i.log("Removing resource " + e + " from the filesystem.");
                    var n = this;
                    this.fs.root.getFile(i.config.FS_ROOT_DIR + e, {
                        create: !1
                    }, function(e) {
                        e.remove(function() {
                            t && t(!0)
                        }, function(e) {
                            n.errorHandler(e, t)
                        })
                    }, function(e) {
                        n.errorHandler(e, t)
                    })
                },
                renameResource: function(e, t, n) {
                    e = e.replace("peer5://", ""), t = t.replace("peer5://", ""), i.info("changing resource name from " + e + " to " + t);
                    var r = this;
                    this.fs.root.getDirectory(i.config.FS_ROOT_DIR, {
                        create: !1
                    }, function(o) {
                        o.getFile(e, {
                            create: !1
                        }, function(e) {
                            e.moveTo(o, t, function(e) {
                                e && i.info("succesfully renamed"), n && n(!0)
                            }, function(e) {
                                r.errorHandler(e, n)
                            })
                        }, function(e) {
                            r.errorHandler(e, n)
                        })
                    }, function(e) {
                        r.errorHandler(e, n)
                    })
                },
                write: function(e, t, n, r) {
                    e = e.replace("peer5://", ""), t = new Blob([t]), i.debug("Writing to resource " + e), this._writeAvailable() ? (this._addWriteCommand(e, t, n, r), this._write(e, t, n, r)) : this.currentlyWriting ? this._addWriteCommand(e, t, n, r) : this.continueWriting()
                },
                continueWriting: function() {
                    var e = this.writeQueue.peek();
                    this._write(e.resourceId, e.data, e.position, e.cb)
                },
                read: function(e, t, n, r) {
                    e = e.replace("peer5://", "");
                    var o = this;
                    this.fs.root.getFile(i.config.FS_ROOT_DIR + e, {}, function(e) {
                        e.file(function(e) {
                            var i = new FileReader;
                            i.onloadend = function(e) {
                                e.target.readyState != FileReader.DONE || e.target.error || r && r(!0, new Uint8Array(e.target.result))
                            }, i.onerror = function(e) {
                                o.errorHandler(e, r)
                            };
                            var s = e.slice(t, n);
                            i.readAsArrayBuffer(s)
                        }, function(e) {
                            o.errorHandler(e, r)
                        })
                    }, function(e) {
                        o.errorHandler(e, r)
                    })
                },
                getBlob: function(e, t, n, r) {
                    e = e.replace("peer5://", "");
                    var o = this;
                    this.fs.root.getFile(i.config.FS_ROOT_DIR + e, {}, function(e) {
                        e.file(function(e) {
                            var i = e.slice(t, n);
                            r(!0, i)
                        }, function(e) {
                            o.errorHandler(e, r)
                        })
                    }, function(e) {
                        o.errorHandler(e, r)
                    })
                },
                getArrayBuffer: function(e, t, n, r) {
                    e = e.replace("peer5://", "");
                    var o = this;
                    this.fs.root.getFile(i.config.FS_ROOT_DIR + e, {}, function(e) {
                        e.file(function(e) {
                            var o, s = new FileReader;
                            s.onloadend = function(e) {
                                e.target.readyState == FileReader.DONE ? (i.log("getArrayBuffer::onloadend returned: " + s.readyState), r(!0, e.target.result)) : i.error("getArrayBuffer::onloadend returned with error: " + s.readyState)
                            }, o = e.slice(t, n), s.readAsArrayBuffer(o)
                        }, function(e) {
                            o.errorHandler(e, r)
                        })
                    }, function(e) {
                        o.errorHandler(e, r)
                    })
                },
                getResourceDetails: function(e, t) {
                    e = e.replace("peer5://", "");
                    var n = this;
                    this.fs.root.getFile(i.config.FS_ROOT_DIR + e, {}, function(e) {
                        e.file(function(e) {
                            t(!0, {
                                size: e.size
                            })
                        }, function(e) {
                            n.errorHandler(e, t)
                        })
                    }, function(e) {
                        n.errorHandler(e, t)
                    })
                },
                createObjectURL: function(e, t) {
                    e = e.replace("peer5://", "");
                    var n = this;
                    this.fs.root.getFile(i.config.FS_ROOT_DIR + e, {}, function(e) {
                        t && t(!0, e.toURL())
                    }, function(e) {
                        n.errorHandler(e, t)
                    })
                },
                notifyFinishWrite: function(e) {
                    this.writeQueue.getLength() <= 0 ? e() : this.finishWriteCbs.push(e)
                },
                isExist: function(e, t) {
                    e = e.replace("peer5://", ""), i.log("Checking if resource " + e + " exists in the filesystem.");
                    var n = this;
                    this.fs.root.getFile(i.config.FS_ROOT_DIR + e, {
                        create: !1
                    }, function(e) {
                        t && t(!0)
                    }, function(e) {
                        n.errorHandler(e, t)
                    })
                },
                getFileInfo: function(e, t) {
                    this.fs.root.getFile(i.config.FS_ROOT_DIR + e, {
                        create: !1
                    }, function(e) {
                        e.file(function(e) {
                            console.log(e)
                        })
                    })
                },
                listFiles: function(e) {
                    var t = this,
                        n = this.fs.root.createReader();
                    n.readEntries(function(t) {
                        t.length ? i.debug("Filesystem files: " + t) : i.debug("Filesystem is empty"), e(!0, t)
                    }, function(n) {
                        t.errorHandler(n, e)
                    })
                },
                removeAll: function(e) {
                    i.warn("removing all files in filesystem");
                    var t = this,
                        n = this.fs.root.createReader();
                    n.readEntries(function(n) {
                        for (var r, o = 0; r = n[o]; ++o) r.isDirectory ? r.removeRecursively(function() {
                            e && e(!0)
                        }, function(n) {
                            t.errorHandler(n, e)
                        }) : r.remove(function() {
                            e && e(!0)
                        }, function(n) {
                            t.errorHandler(n, e)
                        });
                        i.debug("Directory emptied.")
                    }, function(n) {
                        t.errorHandler(n, e)
                    })
                },
                removeRootDir: function(e) {
                    i.warn("removing all files in filesystem under " + i.config.FS_ROOT_DIR);
                    var t = this,
                        n = this.fs.root.createReader();
                    n.readEntries(function(n) {
                        for (var r, o = 0; r = n[o]; ++o) r.isDirectory && r.name + "/" == i.config.FS_ROOT_DIR && r.removeRecursively(function() {
                            t.fs.root.getDirectory(i.config.FS_ROOT_DIR, {
                                create: !0
                            }, function(t) {
                                e(!0)
                            }, function(n) {
                                t.errorHandler(n, e)
                            })
                        }, function(n) {
                            t.errorHandler(n, e)
                        });
                        i.debug("Directory emptied.")
                    }, function(n) {
                        t.errorHandler(n, e)
                    })
                },
                getLibraryStatistics: function(e) {
                    var t = this,
                        n = [],
                        r = [];
                    this.fs && this.fs.root.getDirectory(i.config.FS_ROOT_DIR, {}, function(i) {
                        var o = i.createReader();
                        o.readEntries(function(i) {
                            for (var o = 0; o < i.length; o++) n.push(i[o]), r.push(i[o].name);
                            t.getStatsOfFileArray(0, {
                                size: 0,
                                filesStats: []
                            }, n, r, function(t) {
                                e && e(t)
                            })
                        })
                    }, function(n) {
                        t.errorHandler(n, e)
                    })
                },
                printDirectory: function() {
                    this.fs && this.fs.root.getDirectory(i.config.FS_ROOT_DIR, {}, function(e) {
                        var t = e.createReader();
                        t.readEntries(function(e) {
                            for (var t = 0; t < e.length; t++) console.log(e[t].name)
                        })
                    }, function(e) {
                        console.log(e)
                    })
                },
                getStatsOfFileArray: function(e, t, n, i, r) {
                    var o = this;
                    if (e == n.length) r && r(t);
                    else {
                        var s = n[e];
                        s.file(function(a) {
                            var c = a.size;
                            t.size += c, t.filesStats.push({
                                key: a.name,
                                size: c,
                                lastModified: a.lastModifiedDate,
                                fileInstance: s
                            }), o.getStatsOfFileArray(e + 1, t, n, i, r)
                        })
                    }
                },
                deleteFiles: function(e, t, n) {
                    var i = t,
                        r = [];
                    for (var o in e) r.push(e[o]);
                    i.deleteMultipleFiles(0, r, t, n)
                },
                deleteMultipleFiles: function(e, t, n, i) {
                    if (e == t.length) i && i(!0);
                    else {
                        var r = t[e],
                            o = n;
                        r.fileInstance.remove(function() {
                            n.deleteMultipleFiles(e + 1, t, n, i)
                        }, function(e) {
                            o.errorHandler(e, i)
                        })
                    }
                },
                removeAllButThis: function(e, t, n) {
                    e = e.replace("peer5://", ""), t = t.replace("peer5://", ""), i.info("removing all files in filesystem under " + i.config.FS_ROOT_DIR + " besides " + e + "," + t);
                    var r = this;
                    this.fs.root.getDirectory(i.config.FS_ROOT_DIR, {}, function(i) {
                        var o = i.createReader();
                        o.readEntries(function(i) {
                            for (var o, s = i.length, a = 0; o = i[a]; ++a) o.name != e && o.name != t ? o.isDirectory ? o.removeRecursively(function() {
                                s--, 0 === s && n(!0)
                            }, function(e) {
                                r.errorHandler(e, n)
                            }) : o.remove(function() {
                                s--, 0 === s && n(!0)
                            }, function(e) {
                                r.errorHandler(e, n)
                            }) : s--
                        })
                    }, function(e) {
                        r.errorHandler(e, n)
                    });
                    var r = this,
                        o = this.fs.root.createReader();
                    o.readEntries(function(e) {
                        for (var t, o = 0; t = e[o]; ++o) t.isDirectory && t.name + "/" == i.config.FS_ROOT_DIR && t.removeRecursively(function() {
                            r.fs.root.getDirectory(i.config.FS_ROOT_DIR, {
                                create: !0
                            }, function(e) {
                                n(!0)
                            }, function(e) {
                                r.errorHandler(e, n)
                            })
                        }, function(e) {
                            r.errorHandler(e, n)
                        });
                        i.debug("Directory emptied.")
                    }, function(e) {
                        r.errorHandler(e, n)
                    })
                },
                getTypeOfFS: function() {
                    if (this.fs) {
                        if (this.fs.name.indexOf("Pers") > -1) return "PERS";
                        if (this.fs.name.indexOf("Temp") > -1) return "TEMP"
                    }
                    return null
                },
                getUnUsedQuotaSpace: function(e) {
                    "PERS" == this.getTypeOfFS() && navigator.webkitPersistentStorage.queryUsageAndQuota(function(t, n) {
                        e && e(n - t)
                    }, function(t) {
                        e && e(0)
                    }), "TEMP" == this.getTypeOfFS() && navigator.webkitTemporaryStorage.queryUsageAndQuota(function(t, n) {
                        e && e(n - t)
                    }, function(t) {
                        e && e(0)
                    })
                },
                requestTempQuota: function(e, t) {
                    if (!e) var e = 16106127360;
                    if (!t) var t = function() {};
                    i.info("requesting quota size = " + e);
                    var n = this,
                        r = 1.1 * e;
                    window.webkitRequestFileSystem(window.TEMPORARY, r, function(e) {
                        n.onInitFs(e), n.queryTempQuota(function(e, n, i) {
                            t(!0, i - n)
                        })
                    }, function(e) {
                        n.errorHandler(e, t)
                    })
                },
                testRequestPersQuota: function(e) {
                    if (!e) var e = 16106127360;
                    navigator.webkitPersistentStorage.requestQuota(e, function(e) {
                        console.log("requestQuota and got: " + e)
                    }, function(e) {
                        console.log("requestQuota Error " + e)
                    })
                },
                testRequestTempQuota: function(e) {
                    if (!e) var e = 32212254720;
                    navigator.webkitTemporaryStorage.requestQuota(e, function(e) {
                        console.log("requestQuota and got: " + e)
                    }, function(e) {
                        console.log("requestQuota Error " + e)
                    })
                },
                testPersQueryUsageAndQuota: function() {
                    navigator.webkitPersistentStorage.queryUsageAndQuota(function(e, t) {
                        console.log("Used quota: " + e + ", total quota: " + t)
                    }, function(e) {
                        console.log("Error", e)
                    })
                },
                testTempQueryUsageAndQuota: function() {
                    navigator.webkitTemporaryStorage.queryUsageAndQuota(function(e, t) {
                        console.log("Used quota: " + e + ", total quota: " + t)
                    }, function(e) {
                        console.log("Error", e)
                    })
                },
                requestPersQuota: function(e, t) {
                    if (!e) var e = 16106127360;
                    if (!t) var t = function() {};
                    i.info("requesting perma quota size = " + e);
                    var n = this,
                        r = e,
                        o = !1;
                    radio("requestedPersQuota").broadcast(), radio("peer5_persistent_fd_auth").broadcast(), navigator.webkitPersistentStorage.requestQuota(r, function(e) {
                        if (!o) {
                            if (o = !0, 0 === e) return radio("persQuotaAnswer").broadcast(!1), void(t && t(!1));
                            window.webkitRequestFileSystem(window.PERSISTENT, e, function(e) {
                                radio("persQuotaAnswer").broadcast(!0), n.onInitFs(e), n.queryPersQuota(function(e, n, i) {
                                    t(!0, i - n)
                                })
                            }, function(e) {
                                n.errorHandler(e, t), radio("persQuotaAnswer").broadcast(!1)
                            }), radio("peer5_persistent_fd_auth_finish").broadcast()
                        }
                    }, function(e) {
                        n.errorHandler(e, t), radio("persQuotaAnswer").broadcast(!1)
                    }), window.setTimeout(function() {
                        o || (o = !0, t(!1), radio("persQuotaTimeout").broadcast())
                    }, i.config.PROMPT_TIMEOUT)
                },
                queryTempQuota: function(e) {
                    navigator.webkitTemporaryStorage.queryUsageAndQuota(function(t, n) {
                        i.info("Using: " + t / n * 100 + "% of temporary storage"), e && e(!0, t, n)
                    }, function(t) {
                        i.error("Error", t), e && e(!1)
                    })
                },
                queryPersQuota: function(e) {
                    navigator.webkitPersistentStorage.queryUsageAndQuota(function(t, n) {
                        i.info("Using: " + t / n * 100 + "% of persistent storage"), e && e(!0, t, n)
                    }, function(t) {
                        i.error("Error", t), e && e(!1)
                    })
                },
                _writeAvailable: function() {
                    return this.writeQueue.isEmpty()
                },
                _write: function(e, t, n, r) {
                    e = e.replace("peer5://", "");
                    var o = this;
                    o.currentlyWriting = !0, this.fs.root.getFile(i.config.FS_ROOT_DIR + e, {
                        create: !1
                    }, function(s) {
                        s.createWriter(function(s) {
                            n > s.length ? (i.debug("truncating: filewriter length = " + s.length + " position = " + n), s.onwriteend = function(i) {
                                return o.currentlyWriting = !1, i.target.error ? (o.errorHandler(s.error, r), void o.writeQueue.dequeue()) : void o._write(e, t, n, r)
                            }, s.truncate(n)) : (s.onwriteend = function(t) {
                                if (o.currentlyWriting = !1, t.currentTarget.error) return void o.errorHandler(t.currentTarget.error, r);
                                if (o.writeQueue.dequeue(), i.debug("onwriteend( " + e + "): writeQueue length = " + o.writeQueue.getLength()), o.writeQueue.isEmpty()) {
                                    r && setTimeout(function() {
                                        r(!0)
                                    }, 0), i.debug("finished writing all the commands in command queue"), i.debug("writeQueue is empty, pendingObjectUrlCb = " + o.pendingObjectUrlCb[e]), o.pendingObjectUrlCb[e] && (o.createObjectURL(e, o.pendingObjectUrlCb[e]), delete o.pendingObjectUrlCb[e]);
                                    for (var n = 0; n < o.finishWriteCbs.length; ++n) o.finishWriteCbs[n](e);
                                    o.finishWriteCbs = []
                                } else {
                                    r && setTimeout(function() {
                                        r(!0)
                                    }, 0);
                                    var s = o.writeQueue.peek();
                                    o._write(s.resourceId, s.data, s.position, s.cb)
                                }
                            }, s.onerror = function(e) {
                                o.currentlyWriting = !1, o.errorHandler(e.currentTarget.error, r)
                            }, i.debug("data size = " + t.size + " fileWriter.length = " + s.length + " position = " + n), s.seek(n), s.write(t))
                        }, function(e) {
                            o.currentlyWriting = !1, o.errorHandler(e, r)
                        })
                    }, function(e) {
                        o.currentlyWriting = !1, o.errorHandler(e, r)
                    })
                },
                _addWriteCommand: function(e, t, n, i) {
                    e = e.replace("peer5://", "");
                    var r = {
                        resourceId: e,
                        data: t,
                        position: n,
                        cb: i
                    };
                    this.writeQueue.enqueue(r)
                },
                testQuota: function() {
                    window.webkitStorageInfo.queryUsageAndQuota(webkitStorageInfo.TEMPORARY, function(e, t) {
                        console.log("Used quota: " + e + ", remaining quota: " + t)
                    }, function(e) {
                        console.log("Error", e)
                    })
                },
                registerEvents: function() {
                    var e = this;
                    this.onInitFs = function(t) {
                        e.fs = t, t.root.getDirectory(i.config.FS_ROOT_DIR, {
                            create: !0
                        }, function(e) {
                            i.info("initiated filesystem")
                        }, function(t) {
                            e.errorHandler(t), i.warn("failed to create peer5 directory")
                        })
                    }, this.errorHandler = function(e, t) {
                        var n = "";
                        switch (e.name) {
                            case "QuotaExceededError":
                                n = "QuotaExceededError", t && t(!1, "space");
                                break;
                            case "NotFoundError":
                                n = "NotFoundError", t && t(!1);
                                break;
                            case "SecurityError":
                                n = "SecurityError", t && t(!1);
                                break;
                            case "InvalidModificationError":
                                n = "InvalidModificationError", t && t(!1);
                                break;
                            case "InvalidStateError":
                                n = "InvalidStateError", t && t(!1);
                                break;
                            default:
                                n = "Unknown Error", t && t(!1)
                        }
                        radio("offlineStorageError").broadcast(n), i.warn("File system error: " + n)
                    }
                }
            }), i.core.data.FSio = new i.core.data.FSio
        }(),
        function() {
            i.core.data.FSioFireFox = Object.subClass({
                ctor: function(e) {
                    this.writeQueue = new n, this.executeOnInit = [], this.registerEvents(), this.pendingObjectUrlCb = {}, this.finishWriteCbs = [], this.db, this.filesObjectStore = "files", this.filesMetaData = {}, this.flushSize = 67108864, this.currentlyWriting = !1;
                    var t = this;
                    this.createTempDB(function(n) {
                        n ? (t.createMainDB(function(t) {
                            t ? i.info("mainDB created successfuly") : i.warn("mainDB creation had error"), e(t)
                        }), i.info("tmpDB created successfuly")) : i.warn("tmpDB creation had error")
                    })
                },
                createTempDB: function(e) {
                    var t = this,
                        n = window.indexedDB.open(i.config.FS_ROOT_DIR, {
                            version: 4,
                            storage: "temporary"
                        });
                    n.onerror = function(n) {
                        t.errorHandler(n), console.log(n), e && e(!1)
                    }, n.onupgradeneeded = function(e) {
                        e.target.result.createObjectStore(t.filesObjectStore)
                    }, n.onsuccess = function(n) {
                        t.tempStorageDB = n.target.result, e && e(!0)
                    }
                },
                actualCreationOfmainDB: function(e) {
                    var t = this,
                        n = window.indexedDB.open(i.config.FS_ROOT_DIR, {
                            version: 4,
                            storage: "persistent"
                        });
                    n.onerror = function(n) {
                        t.errorHandler(n), console.log(n), e && e(!1)
                    }, n.onupgradeneeded = function(e) {
                        e.target.result.createObjectStore(t.filesObjectStore)
                    }, n.onsuccess = function(n) {
                        t.db = n.target.result;
                        for (var r = 0; r < t.executeOnInit.length; r++) i.core.util.envokeCallback(t.executeOnInit[r]["function"], t.executeOnInit[r].args, t.executeOnInit[r].context);
                        e && e(!0)
                    }
                },
                createMainDB: function(e, t) {
                    var n = this;
                    t ? n.actualCreationOfmainDB(e) : n.isExist("confirmed_persistent", function(t) {
                        t ? n.actualCreationOfmainDB(e) : e && e(!0)
                    }, n.tempStorageDB)
                },
                executeOnReady: function(e) {
                    this.executeOnInit.push(e)
                },
                createResource: function(e, t, n) {
                    var r = this;
                    n || (n = r.db), i.info("Adding resource " + e + " to the indexedDB.");
                    var r = this,
                        o = n.mozCreateFileHandle(e);
                    o.onsuccess = function(i) {
                        var o = this.result,
                            s = n.transaction([r.filesObjectStore], "readwrite").objectStore(r.filesObjectStore),
                            a = s.put(o, e);
                        a.onsuccess = function(n) {
                            r.filesMetaData[e] = {
                                fileLength: 0,
                                appendedSinceLastFlush: 0
                            }, t && t(!0)
                        }, a.onerror = function(e) {
                            r.errorHandler(e), t && t(!1)
                        }
                    }, o.onerror = function(e) {
                        r.errorHandler(e), t && t(!1)
                    }
                },
                removeResource: function(e, t) {
                    i.log("Removing resource " + e + " from the filesystem.");
                    var n = this,
                        r = n.db.transaction([n.filesObjectStore], "readwrite").objectStore(n.filesObjectStore),
                        o = r["delete"](e);
                    o.onsuccess = function(i) {
                        delete n.filesMetaData[e], t && t(!0)
                    }, o.onerror = function(e) {
                        n.errorHandler(e), t && t(!1)
                    }
                },
                renameResource: function(e, t, n) {
                    i.info("changing resource name from " + e + " to " + t);
                    var r = this,
                        o = r.db.transaction([r.filesObjectStore], "readwrite").objectStore(r.filesObjectStore),
                        s = o.get(e);
                    s.onsuccess = function(a) {
                        if (!a.target.result) return r.errorHandler({
                            code: "record was not found for key" + e
                        }), void(n && n(!1));
                        var c = s.result,
                            l = o.put(c, t);
                        r.filesMetaData[t] = r.filesMetaData[e], l.onsuccess = function(t) {
                            var o = r.db.transaction([r.filesObjectStore], "readwrite").objectStore(r.filesObjectStore),
                                s = o["delete"](e);
                            s.onsuccess = function(t) {
                                delete r.filesMetaData[e], i.info("succesfully renamed"), n && n(!0)
                            }, s.onerror = function(e) {
                                r.errorHandler(e), n && n(!1)
                            }
                        }, l.onerror = function(e) {
                            r.errorHandler(e), n && n(!1)
                        }
                    }, s.onerror = function(e) {
                        r.errorHandler(e), n && n(!1)
                    }
                },
                write: function(e, t, n, r) {
                    i.debug("Writing to resource " + e), t || i.error("Writing to resource " + e + " with no data: " + t), this._writeAvailable() ? (this._addWriteCommand(e, t, n, r), this._write(e, t, n, r)) : this.currentlyWriting ? this._addWriteCommand(e, t, n, r) : this.continueWriting()
                },
                continueWriting: function() {
                    var e = this.writeQueue.peek();
                    this._write(e.resourceId, e.data, e.position, e.cb)
                },
                read: function(e, t, n, i) {
                    var r = this,
                        o = r.db.transaction(["files"]),
                        s = o.objectStore("files"),
                        a = s.get(e);
                    a.onsuccess = function(o) {
                        if (!o.target.result) return r.errorHandler({
                            code: "record was not found for key" + e
                        }), void(i && i(!1));
                        var s = a.result,
                            c = s.open("readwrite");
                        c.location = t;
                        var l = c.readAsArrayBuffer(n - t);
                        l.onsuccess = function(e) {
                            i && i(!0, new Uint8Array(e.target.result))
                        }, l.onerror = function(e) {
                            r.errorHandler(e), i && i(!1)
                        }
                    }, a.onerror = function(e) {
                        r.errorHandler(e), i && i(!1)
                    }
                },
                getBlob: function(e, t, n, i) {},
                getResourceDetails: function(e, t) {
                    var n = this,
                        i = n.db.transaction([n.filesObjectStore], "readwrite").objectStore(n.filesObjectStore),
                        r = i.get(e);
                    r.onsuccess = function(i) {
                        if (!i.target.result) return n.errorHandler({
                            code: "record was not found for key" + e
                        }), void(t && t(!1));
                        var o = r.result,
                            s = o.open("readwrite"),
                            a = s.getMetadata();
                        a.onsuccess = function(e) {
                            t(!0, {
                                size: e.target.result.size
                            })
                        }, a.onerror = function(e) {
                            n.errorHandler(e), t && t(!1)
                        }
                    }, r.onerror = function(e) {
                        n.errorHandler(e), t && t(!1)
                    }
                },
                createObjectURL: function(e, t) {
                    var n = this,
                        i = n.db.transaction([n.filesObjectStore], "readwrite").objectStore(n.filesObjectStore),
                        r = i.get(e);
                    r.onsuccess = function(i) {
                        if (!i.target.result) return n.errorHandler({
                            code: "record was not found for key" + e
                        }), void(t && t(!1));
                        var o = r.result,
                            s = o.open("readwrite");
                        n.checkAndFlush(s, n, e, function(e) {
                            var i = (s.name, o.getFile());
                            i.onsuccess = function(e) {
                                var n = e.target.result;
                                !window.URL && window.webkitURL && (window.URL = window.webkitURL), t && t(!0, URL.createObjectURL(n))
                            }, i.onerror = function(e) {
                                n.errorHandler(e), t && t(!1)
                            }
                        }, !0)
                    }, r.onerror = function(e) {
                        n.errorHandler(e), t && t(!1)
                    }
                },
                notifyFinishWrite: function(e) {
                    this.writeQueue.getLength() <= 0 ? e() : this.finishWriteCbs.push(e)
                },
                isExistConfirmedPersistent: function(e, t) {
                    t(localStorage.confirmedPersistent ? !0 : !1)
                },
                isExist: function(e, t, n) {
                    var r = this;
                    n || (n = r.db), i.log("Checking if resource " + e + " exists in the filesystem.");
                    try {
                        var o = n.transaction([r.filesObjectStore], "readwrite").objectStore(r.filesObjectStore)
                    } catch (s) {
                        console.log(s)
                    }
                    if (!o) return void(t && t(!1));
                    var a = o.get(e);
                    a.onsuccess = function(n) {
                        if (!n.target.result) return void(t && t(!1));
                        var i = n.target.result,
                            o = i.open("readonly"),
                            s = o.getMetadata();
                        s.onsuccess = function(n) {
                            r.filesMetaData[e] = {
                                fileLength: n.target.result.size,
                                appendedSinceLastFlush: 0
                            }, t && t(!0)
                        }, s.onerror = function(e) {
                            r.errorHandler(e), t && t(!1)
                        }
                    }, a.onerror = function(e) {
                        r.errorHandler(e), t && t(!1)
                    }
                },
                listFiles: function(e) {
                    var t = this,
                        n = t.db.transaction([t.filesObjectStore], "readwrite").objectStore(t.filesObjectStore),
                        r = !0;
                    n.openCursor().onsuccess = function(t) {
                        var n = [],
                            o = t.target.result;
                        r && !o && i.debug("Filesystem is empty"), o ? (r = !1, n.push(o.key), o["continue"]()) : (e(!0, n), alert("No more entries!"))
                    }
                },
                forceRemoveAllDBwhenOutOfSpace: function(e) {
                    this.db.close(), window.indexedDB.deleteDatabase(i.config.FS_ROOT_DIR), this.createMainDB(function(t) {
                        t ? e && e(!0) : e && e(!1)
                    })
                },
                removeAllNew: function() {
                    var e = this,
                        t = e.db.transaction([e.filesObjectStore], "readwrite"),
                        n = t.objectStore(e.filesObjectStore).clear();
                    n.onsuccess = function(e) {
                        console.log("Filesystem is empty")
                    }, n.onerror = function(e) {
                        console.log("removeAll() failed")
                    }
                },
                removeDep: function(e) {
                    i.warn("removing all files in filesystem");
                    var t = this,
                        n = t.db.transaction([t.filesObjectStore], "readwrite").objectStore(t.filesObjectStore),
                        r = !0;
                    n.openCursor().onsuccess = function(o) {
                        var s = o.target.result;
                        if (r && !s && i.debug("Filesystem is empty"), s) {
                            r = !1;
                            var a = n["delete"](s.key);
                            a.onsuccess = function(e) {
                                t.filesMetaData[s.key] && delete t.filesMetaData[s.key], s["continue"]()
                            }, a.onerror = function(t) {
                                e && e(!1)
                            }
                        } else i.debug("Directory emptied."), e && e(!0)
                    }
                },
                getAllKeys: function(e, t) {
                    i.warn("removing all files in filesystem");
                    var n = this,
                        r = n.db.transaction([n.filesObjectStore], "readwrite").objectStore(n.filesObjectStore),
                        o = [],
                        s = [];
                    r.openCursor().onsuccess = function(n) {
                        var i = n.target.result;
                        i ? "confirmed_persistent" != i.key || t ? (o.push(i.key), s.push(i.value), i["continue"]()) : i["continue"]() : (console.log("get all keys : " + o.length), console.log("get all keys : " + s.length), e && e(s, o))
                    }
                },
                filterEntries: function(e, t, n, i) {
                    var r = this;
                    if (e == t.length) i && i(t, n);
                    else {
                        var o = t[e].open("readwrite"),
                            s = o.getMetadata();
                        s.onsuccess = function(o) {
                            var s = o.target.result.lastModified;
                            Date.now() - s.getTime() > 24 ? r.filterEntries(e + 1, t, n, i) : (t.splice(e, 1), n.splice(e, 1), r.filterEntries(e, t, n, i))
                        }
                    }
                },
                getStatsOfFileArray: function(e, t, n, i, r) {
                    var o = this;
                    if (e == n.length) r && r(t);
                    else {
                        var s = n[e].open("readwrite"),
                            a = s.getMetadata();
                        a.onsuccess = function(s) {
                            var a = s.target.result.size,
                                c = s.target.result.lastModified;
                            t.size += a, t.filesStats.push({
                                key: i[e],
                                size: a,
                                lastModified: c,
                                fileInstance: n[e]
                            }), o.getStatsOfFileArray(e + 1, t, n, i, r)
                        }
                    }
                },
                printDirectory: function() {
                    var e = this;
                    e.getAllKeys(function(e, t) {
                        for (var n = 0; n < t.length; n++) console.log(t[n])
                    }, !0)
                },
                cleanSpaceForFileDuringOutOfSpace: function(e, t) {},
                getLibraryStatistics: function(e) {
                    var t = this;
                    t.getAllKeys(function(n, i) {
                        t.getStatsOfFileArray(0, {
                            size: 0,
                            filesStats: []
                        }, n, i, function(t) {
                            e && e(t)
                        })
                    })
                },
                removeOldEntries: function(e) {
                    var t = this;
                    t.getAllKeys(function(n, i) {
                        console.log("removeOldEntries " + i), console.log("removeOldEntries " + n), t.filterEntries(0, n, i, function(n, i) {
                            console.log("truncating"), t.truncateFiles(0, n, t, function(n) {
                                n ? (console.log("done truncating successfully"), t.deleteMultipleFiles(0, i, t, function(t) {
                                    t ? (e && e(!0), console.log("done removeOldEntries successfully")) : (console.log("done removeOldEntries failure"), e && e(!1))
                                })) : (console.log("done truncating failure"), e && e(!1))
                            })
                        })
                    })
                },
                deleteFiles: function(e, t, n) {
                    var i = t,
                        r = [],
                        o = [];
                    for (var s in e) o.push(e[s].key), r.push(e[s].fileInstance);
                    i.truncateFiles(0, r, i, function(e) {
                        e ? (console.log("done truncating successfully"), i.deleteMultipleFiles(0, o, i, function(e) {
                            e ? n && n(!0) : (n && n(!1), console.log("delete failure"))
                        })) : (console.log("truncating failure"), n && n(!1))
                    })
                },
                removeAll: function(e) {
                    var t = this;
                    t.getAllKeys(function(n, i) {
                        console.log("truncating");
                        for (var r = 0; r < i.length; r++)
                            if ("confirmed_persistent" == i[r]) {
                                i.splice(r, 1), n.splice(r, 1);
                                break
                            }
                        t.truncateFiles(0, n, t, function(n) {
                            n ? (console.log("done truncating all files successfully"), t.deleteMultipleFiles(0, i, t, function(t) {
                                t ? (e && e(!0), console.log("done removeAll successfully")) : (console.log("done removeAll failure"), e && e(!1))
                            })) : (console.log("done truncating failure"), e && e(!1))
                        })
                    })
                },
                deleteMultipleFiles: function(e, t, n, r) {
                    if (e == t.length) r && r(!0);
                    else {
                        var o = n.db.transaction([n.filesObjectStore], "readwrite").objectStore(n.filesObjectStore),
                            s = o["delete"](t[e]);
                        s.onsuccess = function() {
                            n.deleteMultipleFiles(e + 1, t, n, r)
                        }, s.onerror = function(e) {
                            i.error("delete multiple files error"), r && r(!1)
                        }
                    }
                },
                truncateFiles: function(e, t, n, r) {
                    if (e == t.length) r && r(!0);
                    else {
                        console.log("truncating " + t[e]);
                        var o = t[e],
                            s = o.open("readwrite"),
                            a = s.truncate(0);
                        a.onsuccess = function() {
                            n.truncateFiles(e + 1, t, n, r)
                        }, a.onerror = function(e) {
                            i.error("truncate needed files failure"), r && r(!1)
                        }
                    }
                },
                removeRootDir: function(e) {
                    this.removeAll(e)
                },
                requestPersQuota: function(e, t, n) {
                    var r = this;
                    r.isExist("confirmed_persistent", function(e) {
                        return e ? void t(!0, i.config.PERSISTENT_FS_SIZE) : n <= i.config.ALLOWED_FILE_SIZE ? void t(!1, 0) : void r.createMainDB(function(e) {
                            e ? r.createResource("confirmed_persistent", function(e) {
                                return e ? (i.info("mainDB created in requestPersQuota successfuly"), localStorage.confirmedPersistent = !0, radio("persQuotaAnswer").broadcast(!0), void t(!0, i.config.PERSISTENT_FS_SIZE)) : (i.warn("mainDB creation in requestPersQuota had error"), void t(!1, 0))
                            }, r.tempStorageDB) : (i.warn("mainDB creation had error"), t(!1, 0)), window.setTimeout(function() {
                                localStorage.confirmedPersistent || (radio("persQuotaTimeout").broadcast(), t(!1, 0))
                            }, i.config.PROMPT_TIMEOUT), t(e)
                        }, !0)
                    }, r.tempStorageDB)
                },
                requestPersQuota1: function(e, t, n) {
                    var r = this;
                    r.isExist("confirmed_persistent", function(e) {
                        if (e) return void t(!0, i.config.PERSISTENT_FS_SIZE);
                        if (n <= i.config.ALLOWED_FILE_SIZE) return void t(!1, 0);
                        radio("requestedPersQuota").broadcast(), radio("peer5_persistent_fd_auth").broadcast();
                        var o, s = (new Date).getTime() + 100,
                            a = window.indexedDB.open(s, 1),
                            c = !1;
                        a.onerror = function(e) {
                            console.log("Error obtaining quota, retrying..."), t(!1, 0)
                        }, a.onsuccess = function(e) {
                            o = a.result, a.getquota()
                        }, a.onupgradeneeded = function(e) {
                            e.target.result.createObjectStore(s)
                        }, a.getquota = function() {
                            var e = o.transaction(s, "readwrite");
                            e.oncomplete = function() {
                                o.close(), window.indexedDB.deleteDatabase(s), r.createResource("confirmed_persistent", function(e) {
                                    if (!c) {
                                        if (c = !0, !e) return void t(!1, 0);
                                        radio("persQuotaAnswer").broadcast(!0), t(!0, i.config.PERSISTENT_FS_SIZE)
                                    }
                                }, !0)
                            }, e.onerror = function(e) {
                                return c ? void 0 : (c = !0, radio("persQuotaAnswer").broadcast(!1), o.close(), window.indexedDB.deleteDatabase(s), void t(!1, 0))
                            }, e.objectStore(s).put(new Blob([new ArrayBuffer(62914560)]), "quota"), window.setTimeout(function() {
                                c || (e.oncomplete = function() {},
                                    e.onerror = function() {}, radio("persQuotaTimeout").broadcast(), o.close(), window.indexedDB.deleteDatabase(s), t(!1, 0))
                            }, i.config.PROMPT_TIMEOUT)
                        }
                    })
                },
                requestTempQuota: function(e, t) {
                    i.warn("requestTempQuota shouldn't be called in firefox")
                },
                queryPersQuota1: function(e) {
                    this.isExist("confirmed_persistent", function(t) {
                        return t ? void e(!0, 0, i.config.PERSISTENT_FS_SIZE) : void e(!1, 0, 0)
                    })
                },
                queryPersQuota: function(e) {
                    var t = this;
                    this.isExist("confirmed_persistent", function(t) {
                        return t ? void e(!0, 0, i.config.PERSISTENT_FS_SIZE) : void e(!1, 0, 0)
                    }, t.tempStorageDB)
                },
                queryTempQuota: function(e) {
                    e(!1, 0, 0)
                },
                _writeAvailable: function() {
                    return this.writeQueue.isEmpty()
                },
                _write_dep: function(e, t, n, r) {
                    var o = this,
                        s = window.indexedDB.open(i.config.FS_ROOT_DIR, 3);
                    s.onerror = function(e) {
                        o.errorHandler(e), r && r(!1)
                    }, s.onsuccess = function(a) {
                        o.db = s.result;
                        var c = o.db.transaction([o.filesObjectStore], "readwrite").objectStore(o.filesObjectStore),
                            l = c.get(e);
                        l.onsuccess = function(s) {
                            if (!s.target.result) return o.errorHandler({
                                code: "record was not found for key" + e
                            }), void(r && r(!1));
                            var a = l.result,
                                c = a.open("readwrite"),
                                d = c.getMetadata();
                            d.onsuccess = function(s) {
                                var c = s.target.result.size;
                                if (n > c) {
                                    i.debug("truncating: filewriter length = " + s.target.result.size + " position = " + n);
                                    var l = new FileReader;
                                    l.onload = function(t) {
                                        var s = t.target.result,
                                            l = a.open("readwrite");
                                        l.oncomplete = function() {
                                            if (o.writeQueue.dequeue(), i.debug("onwriteend( " + e + "): writeQueue length = " + o.writeQueue.getLength()), o.writeQueue.isEmpty()) {
                                                r && r(!0), i.debug("finished writing all the commands in command queue"), i.debug("writeQueue is empty, pendingObjectUrlCb = " + o.pendingObjectUrlCb[e]), o.pendingObjectUrlCb[e] && (o.createObjectURL(e, o.pendingObjectUrlCb[e]), delete o.pendingObjectUrlCb[e]);
                                                for (var t = 0; t < o.finishWriteCbs.length; ++t) o.finishWriteCbs[t](e);
                                                o.finishWriteCbs = []
                                            } else {
                                                r && r(!0);
                                                var n = o.writeQueue.peek();
                                                o._write(n.resourceId, n.data, n.position, n.cb)
                                            }
                                        };
                                        for (var d = n - c, u = 0, h = new ArrayBuffer(1048576); d > u;) 1048576 > d - u && (h = new ArrayBuffer(d - u)), u += 1048576, l.append(h);
                                        var f = l.append(s);
                                        f.onerror = function(e) {
                                            o.errorHandler(e), r && r(!1)
                                        }
                                    }, l.readAsArrayBuffer(t)
                                } else {
                                    var l = new FileReader;
                                    l.onload = function(t) {
                                        var s = t.target.result,
                                            c = a.open("readwrite");
                                        c.location = n;
                                        var l = c.write(s);
                                        if (l || 0 != n || 0 != s.byteLength) l.onsuccess = function() {
                                            var t = c.flush();
                                            t.onsuccess = function(t) {
                                                if (o.writeQueue.dequeue(), i.debug("onwriteend( " + e + "): writeQueue length = " + o.writeQueue.getLength()), o.writeQueue.isEmpty()) {
                                                    r && r(!0), i.debug("finished writing all the commands in command queue"), i.debug("writeQueue is empty, pendingObjectUrlCb = " + o.pendingObjectUrlCb[e]), o.pendingObjectUrlCb[e] && (o.createObjectURL(e, o.pendingObjectUrlCb[e]), delete o.pendingObjectUrlCb[e]);
                                                    for (var n = 0; n < o.finishWriteCbs.length; ++n) o.finishWriteCbs[n](e);
                                                    o.finishWriteCbs = []
                                                } else {
                                                    r && r(!0), i.debug("onwriteend: writeQueue is not empty, writing another command");
                                                    var s = o.writeQueue.peek();
                                                    o._write(s.resourceId, s.data, s.position, s.cb)
                                                }
                                            }, t.onerror = function(e) {
                                                o.errorHandler(e), r && r(!1)
                                            }
                                        }, l.onerror = function(e) {
                                            o.errorHandler(e), r && r(!1)
                                        };
                                        else if (o.writeQueue.dequeue(), i.debug("onwriteend( " + e + "): writeQueue length = " + o.writeQueue.getLength()), r && r(!0), o.writeQueue.isEmpty()) {
                                            i.debug("finished writing all the commands in command queue"), i.debug("writeQueue is empty, pendingObjectUrlCb = " + o.pendingObjectUrlCb[e]), o.pendingObjectUrlCb[e] && (o.createObjectURL(e, o.pendingObjectUrlCb[e]), delete o.pendingObjectUrlCb[e]);
                                            for (var d = 0; d < o.finishWriteCbs.length; ++d) o.finishWriteCbs[d](e);
                                            o.finishWriteCbs = []
                                        } else {
                                            var u = o.writeQueue.peek();
                                            o._write(u.resourceId, u.data, u.position, u.cb)
                                        }
                                    }, l.readAsArrayBuffer(t)
                                }
                            }, d.onerror = function(e) {
                                o.errorHandler(e), r && r(!1)
                            }
                        }, l.onerror = function(e) {
                            o.errorHandler(e), r && r(!1)
                        }
                    }
                },
                _write_no_flush: function(e, t, n, r) {
                    var o = this,
                        s = window.indexedDB.open(i.config.FS_ROOT_DIR, 3);
                    s.onerror = function(e) {
                        o.errorHandler(e), r && r(!1)
                    }, s.onsuccess = function(a) {
                        o.db = s.result;
                        var c = o.db.transaction([o.filesObjectStore], "readwrite").objectStore(o.filesObjectStore),
                            l = c.get(e);
                        l.onsuccess = function(s) {
                            if (!s.target.result) return o.errorHandler({
                                code: "record was not found for key" + e
                            }), void(r && r(!1));
                            var a = l.result,
                                c = a.open("readwrite"),
                                d = c.getMetadata();
                            d.onsuccess = function(s) {
                                var c = s.target.result.size;
                                if (n > c) {
                                    i.debug("truncating: filewriter length = " + s.target.result.size + " position = " + n);
                                    var l = a.open("readwrite"),
                                        d = n - c;
                                    o.appendZerosBeforeRealData(l, e, d, t.buffer, !1, r, function() {
                                        o.performAfterWriteOperations(e, r)
                                    })
                                } else {
                                    var l = a.open("readwrite");
                                    l.location = n;
                                    var u = l.write(t.buffer);
                                    if (!u && 0 == n && 0 == t.buffer.byteLength) return void o.performAfterWriteOperations(e, r);
                                    u.onsuccess = function() {
                                        o.performAfterWriteOperations(e, r)
                                    }, u.onerror = function(e) {
                                        o.currentlyWriting = !1, o.errorHandler(e), r && r(!1)
                                    }
                                }
                            }, d.onerror = function(e) {
                                o.currentlyWriting = !1, o.errorHandler(e), r && r(!1)
                            }
                        }, l.onerror = function(e) {
                            o.currentlyWriting = !1, o.errorHandler(e), r && r(!1)
                        }
                    }
                },
                _write: function(e, t, n, r) {
                    var o = this,
                        s = o.db.transaction([o.filesObjectStore], "readwrite").objectStore(o.filesObjectStore),
                        a = s.get(e);
                    o.currentlyWriting = !0, a.onsuccess = function(s) {
                        if (!s.target.result) return o.currentlyWriting = !1, o.errorHandler({
                            code: "record was not found for key" + e
                        }), void(r && r(!1));
                        var c = a.result,
                            l = c.open("readwrite");
                        if (o.filesMetaData[e]) {
                            var d = o.filesMetaData[e].fileLength;
                            if (o.filesMetaData[e].fileLength = Math.max(d, n + t.buffer.byteLength), n > d) {
                                i.debug("truncating: filewriter length = " + s.target.result.size + " position = " + n);
                                var l = c.open("readwrite"),
                                    u = n - d;
                                o.appendZerosBeforeRealData(l, e, u, t.buffer, !1, r, function() {
                                    o.performAfterWriteOperations(e, r)
                                })
                            } else {
                                var l = c.open("readwrite");
                                l.location = n;
                                var h = l.write(t.buffer);
                                if (!h && 0 == t.buffer.byteLength) return void o.performAfterWriteOperations(e, r);
                                h.onsuccess = function() {
                                    o.filesMetaData[e].appendedSinceLastFlush += t.buffer.byteLength, o.performAfterWriteOperations(e, r), o.checkAndFlush(l, o, e, function(e) {
                                        e || console.log("checkAndFlush error")
                                    }, !1)
                                }, h.onerror = function(e) {
                                    o.errorHandler(e), r && r(!1)
                                }
                            }
                        } else;
                    }, a.onerror = function(e) {
                        o.errorHandler(e), r && r(!1)
                    }
                },
                performAfterWriteOperations: function(e, t) {
                    var n = this;
                    if (n.writeQueue.dequeue(), n.currentlyWriting = !1, i.debug("onwriteend( " + e + "): writeQueue length = " + n.writeQueue.getLength()), n.writeQueue.isEmpty()) {
                        t && setTimeout(function() {
                            t(!0)
                        }, 0), i.debug("finished writing all the commands in command queue"), i.debug("writeQueue is empty, pendingObjectUrlCb = " + n.pendingObjectUrlCb[e]), n.pendingObjectUrlCb[e] && (n.createObjectURL(e, n.pendingObjectUrlCb[e]), delete n.pendingObjectUrlCb[e]);
                        for (var r = 0; r < n.finishWriteCbs.length; ++r) n.finishWriteCbs[r](e);
                        n.finishWriteCbs = []
                    } else {
                        t && setTimeout(function() {
                            t(!0)
                        }, 0), i.debug("onwriteend: writeQueue is not empty, writing another command");
                        var o = n.writeQueue.peek();
                        n._write(o.resourceId, o.data, o.position, o.cb)
                    }
                },
                _addWriteCommand: function(e, t, n, i) {
                    var r = {
                        resourceId: e,
                        data: t,
                        position: n,
                        cb: i
                    };
                    this.writeQueue.enqueue(r)
                },
                appendZerosBeforeRealData: function(e, t, n, i, r, o, s) {
                    var a = this;
                    if (r)
                        if (i.byteLength > 0) {
                            var c = e.append(i);
                            c.onsuccess = function() {
                                a.filesMetaData[t].appendedSinceLastFlush += i.byteLength, s && s()
                            }, c.onerror = function() {
                                a.currentlyWriting = !1, a.writeQueue.dequeue(), o && o(!1)
                            }
                        } else s && s();
                    else if (n >= 67108864) {
                        var l = e.append(new ArrayBuffer(67108864));
                        l.onsuccess = function() {
                            var r = e.flush();
                            r.onsuccess = function(r) {
                                a.appendZerosBeforeRealData(e, t, n - 67108864, i, !1, o, s)
                            }, r.onerror = function(e) {}
                        }, l.onerror = function(e) {
                            a.currentlyWriting = !1, a.writeQueue.dequeue(), "The operation failed for reasons unrelated to the file storage itself and not covered by any other error code." == e.target.error.message && "UnknownError" == e.target.error.name || "The current locked file exceeded its quota limitations." == e.target.error.message && "QuotaExceededError" == e.target.error.name ? o && o(!1, "space") : o && o(!1)
                        }
                    } else if (n > 0) {
                        var d = e.append(new ArrayBuffer(n));
                        d.onsuccess = function() {
                            if (a.filesMetaData[t].appendedSinceLastFlush += n, a.filesMetaData[t].appendedSinceLastFlush > a.flushSize) {
                                var r = e.flush();
                                r.onsuccess = function(n) {
                                    a.appendZerosBeforeRealData(e, t, 0, i, !0, o, s)
                                }, r.onerror = function(e) {}
                            } else a.appendZerosBeforeRealData(e, t, 0, i, !0, o, s)
                        }, d.onerror = function(e) {
                            "The operation failed for reasons unrelated to the file storage itself and not covered by any other error code." == e.target.error.message && "UnknownError" == e.target.error.name || "The current locked file exceeded its quota limitations." == e.target.error.message && "QuotaExceededError" == e.target.error.name ? (a.currentlyWriting = !1, a.writeQueue.dequeue(), o && o(!1, "space")) : o && o(!1)
                        }
                    } else a.appendZerosBeforeRealData(e, t, 0, i, !0, o, s)
                },
                checkAndFlush: function(e, t, n, i, r) {
                    if (t.filesMetaData[n].appendedSinceLastFlush > t.flushSize || r) {
                        var o = e.flush();
                        o.onsuccess = function(e) {
                            t.filesMetaData[n].appendedSinceLastFlush = 0, i && i(!0)
                        }, o.onerror = function(e) {
                            console.log("flush error in checkAndFlush function")
                        }
                    } else i && i(!0)
                },
                registerEvents: function() {
                    this.errorHandler = function(e) {
                        var t = "";
                        switch (e.code) {
                            default: t = e
                        }
                        radio("offlineStorageError").broadcast(t), i.warn("File system error: " + t)
                    }
                }
            })
        }(),
        function(e) {
            function t() {
                function e(e) {
                    var t = performance.now(),
                        s = e.constraint;
                    return s - t < i.config.EXTERNAL_CRITICAL_CONSTRAINT ? (i.info("resource is within critical zone, init by download " + e.url), n) : i.config.HTTP_FETCH_AHEAD && 0 === i.clientInstance.controller.getNumberOfConnectedPeers() ? (i.info("not connected to any peers, init by download " + e.url), n) : i.config.HTTP_INIT_AHEAD ? i.clientInstance.controller.numOfSeeders(null, e.hashUrl) < i.config.HTTP_INIT_AHEAD_MIN_SEEDERS ? i.config.USE_HEAD ? (i.info("not enough seeders, init by head " + e.url), r) : (i.info("not enough seeders, init by download " + e.url), n) : i.config.USE_HEAD ? (i.info("enough seeders, init by head " + e.url), r) : (i.info("enough seeders, wait for init by peers " + e.url), o) : i.config.USE_HEAD ? (i.info("default, init by head " + e.url), r) : (i.info("default, wait for init by peers " + e.url), o)
                }
                return {
                    chooseMethod: e
                }
            }
            var n = "download",
                r = "head",
                o = "wait";
            e.initDecider = t()
        }(i.client),
        function(e) {
            function t(e, t, n) {
                function r(e, t) {
                    radio("xhrBytesReceived").broadcast(e, t)
                }

                function o() {
                    radio("httpProgressEvent").broadcast(e)
                }

                function s() {
                    radio("xhrSent" + e).unsubscribe(s), radio("xhrSent").broadcast(e)
                }

                function a() {
                    radio("xhrLoadEnd").broadcast(e)
                }

                function c(n) {
                    i.core.dataStructures.PendingBlockMap.removeResource(e), i.info("received bytes " + e), radio("bytesReceivedEvent" + e).unsubscribe(c), radio("xhrBytesReceived" + e).unsubscribe(r), radio("onprogressEvent " + e).unsubscribe(o), radio("xhrLoadend" + e).unsubscribe(a), radio("xhrFailed" + e).unsubscribe(m), radio("xhrTimeout" + e).unsubscribe(m), radio("stopHttpInit" + e).unsubscribe(d), radio("bytesReceivedEvent").broadcast(n), _.stop(), t && (t.preventDownload = !1)
                }

                function l(r) {
                    i.info("received bytes " + e), radio("bytesReceivedEvent" + e).unsubscribe(l), radio("xhrFailed" + e).unsubscribe(m), radio("xhrTimeout" + e).unsubscribe(m), radio("stopHttpInit" + e).unsubscribe(d);
                    var o = new i.core.util.MD5.ArrayBuffer;
                    o.append(r.dataArray), o.append(new Uint8Array(t.length.toString().split(""))), o.append(new Uint8Array(i.config.A_B_CONFIG_JSON.split("")));
                    var s = o.end();
                    i.info("SwarmId for url: " + e + " is: " + s), t.hashUrl = i.core.util.MD5.hash(e);
                    var a = new i.core.protocol.FileInfo(s, t.length, null, null, i.config.BLOCK_SIZE, e);
                    n(a)
                }

                function d() {
                    i.info("stopping httpDownloader init " + e), _ && _.stop(), E && clearTimeout(E), radio("responseLengthReceived" + e).unsubscribe(g), radio("responseHeadersReceived" + e).unsubscribe(p), radio("xhrFailed" + e).unsubscribe(m), radio("xhrTimeout" + e).unsubscribe(m), radio("xhrSent" + e).unsubscribe(s), radio("bytesReceivedEvent" + e).unsubscribe(l), radio("bytesReceivedEvent" + e).unsubscribe(c), radio("xhrBytesReceived" + e).unsubscribe(r), radio("onprogressEvent " + e).unsubscribe(o), radio("xhrLoadend" + e).unsubscribe(a), radio("stopHttpInit" + e).unsubscribe(d), t && delete t.preventDownload
                }

                function u() {
                    var r = new i.core.protocol.FileInfo(t.md5, t.length, t.md5, null, i.config.BLOCK_SIZE, e);
                    n(r), t.length > i.config.SMALL_FILE_SIZE && _.stop()
                }

                function h() {
                    "download" === b ? (i.core.dataStructures.PendingBlockMap.addResource(e, t.length), (4 !== t.mod || i.config.PARALLEL_HTTP_AND_P2P === !1) && (t.preventDownload = !0), radio("xhrFailed" + e).subscribe(m), radio("xhrTimeout" + e).subscribe(m), radio("bytesReceivedEvent" + e).subscribe(c), radio("xhrBytesReceived" + e).subscribe(r), radio("onprogressEvent " + e).subscribe(o), radio("xhrLoadend" + e).subscribe(a), i.feature.isEnabledAndInitialized(i.config.FEATURE_PROXY_HEAD_KEY) && (_ = new i.client.HTTPDownloader(e), _.download())) : radio("stopHttpInit" + e).unsubscribe(d);
                    var s = i.core.util.urlDigest.swarmId(e),
                        l = i.core.util.MD5.hash(t.length + s + i.config.A_B_CONFIG_JSON);
                    i.core.util.UrlSwarmIdMap.addMapping(e, l), i.info("SwarmId for url: " + e + " is: " + l);
                    var u = new i.core.protocol.FileInfo(l, t.length, null, null, i.config.BLOCK_SIZE, e);
                    n(u), radio("p2p.send.all").broadcast(new i.core.protocol.Downloading(l, t.hashUrl))
                }

                function f() {
                    _.stop(), _ = new i.client.HTTPDownloader(e), radio("xhrFailed" + e).subscribe(m), radio("xhrTimeout" + e).subscribe(m), radio("bytesReceivedEvent" + e).subscribe(l), _.download(0, i.config.CHUNKY_HEAD_LENGTH)
                }

                function p(n) {
                    t.state >= 1 && i.warn("receiveHeaders but resource is already initiated"), radio("responseHeadersReceived" + e).unsubscribe(p), "head" === b && (radio("xhrFailed" + e).unsubscribe(m), radio("xhrTimeout" + e).unsubscribe(m));
                    var r = i.core.util.parseResponseHeaders(n);
                    radio("HTTPHeadersReceived" + e).broadcast(e, n, r), r["content-md5"] && (t.md5 = r["content-md5"]);
                    var o = i.core.util.parseResponseLengthHeader(r["content-range"], r["content-length"]);
                    o && g(o)
                }

                function g(n) {
                    return t.length ? void i.warn("received length for resource that already has length, skipping " + e) : (E && clearTimeout(E), radio("responseHeadersReceived" + e).unsubscribe(p), radio("responseLengthReceived" + e).unsubscribe(g), radio("xhrFailed" + e).unsubscribe(m), radio("xhrTimeout" + e).unsubscribe(m), radio("xhrSent" + e).unsubscribe(s), t.length = n, !i.config.USE_FS && t.length > i.config.ALLOWED_FILE_SIZE ? void radio("removeResource").broadcast(e, i.Request.FILE_SIZE_ERR, "file size too big") : t.md5 ? void u() : t.length <= i.config.SMALL_FILE_SIZE ? void h() : void f())
                }

                function m(t) {
                    E && clearTimeout(E), radio("responseLengthReceived" + e).unsubscribe(g), radio("responseHeadersReceived" + e).unsubscribe(p), radio("xhrFailed" + e).unsubscribe(m), radio("xhrTimeout" + e).unsubscribe(m), radio("xhrSent" + e).unsubscribe(s), radio("bytesReceivedEvent" + e).unsubscribe(l), radio("bytesReceivedEvent" + e).unsubscribe(c), radio("xhrBytesReceived" + e).unsubscribe(r), radio("onprogressEvent " + e).unsubscribe(o), radio("xhrLoadend" + e).unsubscribe(a), radio("stopHttpInit" + e).unsubscribe(d), radio("removeResource").broadcast(e, t.status, "xhr failed or timed out")
                }
                var _ = new i.client.HTTPDownloader(e, !1),
                    E = null,
                    v = i.core.util.HashUrlLengthMap.getLength(t.hashUrl);
                if (v) i.info("initializing resource with pre-saved length: " + e), g(v);
                else {
                    var b = "download";
                    switch (i.feature.isEnabledAndInitialized(i.config.FEATURE_PROXY_HEAD_KEY) ? (i.config.USE_HEAD || "preload" === t.origin) && (b = "head") : 4 === t.mod ? b = i.client.initDecider.chooseMethod(t) : 2 === t.mod && (b = i.config.USE_HEAD || "preload" === t.origin ? "head" : "wait"), radio("responseLengthReceived" + e).subscribe(g), radio("stopHttpInit" + e).subscribe(d), b) {
                        case "head":
                            i.info("initializing resource with HEAD: " + e), radio("responseHeadersReceived" + e).subscribe(p), radio("xhrFailed" + e).subscribe(m), radio("xhrTimeout" + e).subscribe(m), radio("xhrSent" + e).subscribe(s), _.head();
                            break;
                        case "download":
                            i.info("initializing resource with GET: " + e), radio("responseHeadersReceived" + e).subscribe(p), radio("xhrFailed" + e).subscribe(m), radio("xhrTimeout" + e).subscribe(m), radio("xhrSent" + e).subscribe(s), _.download();
                            break;
                        case "wait":
                            if ("undefined" != typeof t.constraint) {
                                var S = t.constraint - i.config.EXTERNAL_CRITICAL_CONSTRAINT - performance.now();
                                i.info("waiting for up to " + S + "ms for peers to initialize resource: " + e), E = setTimeout(function() {
                                    t.length || (b = "download", i.info("timed-out waiting for peers to initialize resource: " + e), radio("responseHeadersReceived" + e).subscribe(p), radio("xhrFailed" + e).subscribe(m), radio("xhrTimeout" + e).subscribe(m), radio("xhrSent" + e).subscribe(s), _.download(), radio("p2p.send.all").broadcast(new i.core.protocol.Initializing(t.hashUrl)))
                                }, S)
                            } else i.info("waiting for peers to initialize resource: " + e);
                            return
                    }
                    radio("p2p.send.all").broadcast(new i.core.protocol.Initializing(t.hashUrl))
                }
            }
            e.getHttpMeta = t
        }(i.client),
        function(e) {
            function t(e, t) {
                e.response = t, ("" === e.responseType || "text" === e.responseType) && (e.responseText = t), e.readyState = 4, e.responseURL = e._url, e.status = 200;
                for (var n = {
                        currentTarget: e,
                        lengthComputable: !0,
                        loaded: t.length,
                        loadedFS: 0,
                        loadedHTTP: t.length,
                        loadedP2P: 0,
                        total: t.length
                    }, r = 0; r < e.eventListeners.readystatechange.length; r++) {
                    var o = e.eventListeners.readystatechange[r];
                    i.core.util.envokeCallback(o, [n], e)
                }
                i.core.util.envokeCallback(e.onreadystatechange, [n], e);
                for (var r = 0; r < e.eventListeners.load.length; r++) {
                    var o = e.eventListeners.load[r];
                    i.core.util.envokeCallback(o, [n], e)
                }
                i.core.util.envokeCallback(e.onload, [n], e);
                for (var r = 0; r < e.eventListeners.loadend.length; r++) {
                    var o = e.eventListeners.loadend[r];
                    i.core.util.envokeCallback(o, [n], e)
                }
                i.core.util.envokeCallback(e.onloadend, [n], e)
            }
            e.bypassServer = t
        }(i.client),
        function(e) {
            function t() {
                function e(e, t) {
                    var n = Object.create(null);
                    n.value = t, n.keys = [e], o[e] = n, s[e] = e
                }

                function t(e, t) {
                    return s[t] !== t ? void i.warn("cant alias a non existing key") : (s[e] = t, void o[t].keys.push(e))
                }

                function n(e) {
                    var t = o[e] || o[s[e]];
                    return t ? t.value : void 0
                }

                function r(e) {
                    var t = s[e],
                        n = o[t].keys;
                    n.forEach(function(e) {
                        delete s[e]
                    }), delete o[t]
                }
                var o = Object.create(null),
                    s = Object.create(null);
                return {
                    add: e,
                    get: n,
                    alias: t,
                    remove: r
                }
            }
            e.MultiKeyMap = t
        }(i.core.dataStructures);
    var i = i || {};
    i.state = {},
        function(e) {
            function t() {
                function e(e) {
                    var t = Object.create(null);
                    t.url = e.url, t.swarmId = e.swarmId, t.mod = e.mod, t.sha1 = e.sha1, t.md5 = e.md5, t.constraint = e.constraint, t.state = e.state, t.origin = e.origin, t.hashAlg = e.hashAlg, t.blockHashes = e.hashAlg, t.chunkRead = e.chunkRead, t.size = e.size, t.preventDownload = e.preventDownload, t.httpIdle = e.httpIdle;
                    var n = t.url;
                    return n && (o.add(n, t), t.swarmId && o.alias(swarmId, n)), t
                }

                function t(e) {
                    return o.get(e)
                }

                function n(e) {
                    o.remove(e)
                }

                function r(e, t) {
                    o.alias(e, t)
                }
                var o = i.core.dataStructures.MultiKeyMap();
                return {
                    add: e,
                    get: t,
                    remove: n,
                    alias: r
                }
            }
            e.resources = t()
        }(i.state),
        function(e) {
            var t = i.core.util.DownloadMode.HYBRID,
                n = i.core.util.DownloadMode.P2P,
                r = i.core.util.DownloadMode.HTTP,
                o = i.core.util.DownloadMode.DYNAMIC,
                s = i.core.util.UrlSwarmIdMap;
            i.client.DownloadUploadManager = Object.subClass({
                name: "peer5.client.DownloadUploadManager",
                ctor: function() {
                    if (this.clientId = i.core.util.generate_uuid(), this.registerEvents(), this.apiValidator = new i.core.apiValidators.ApiValidator({
                            dataChannels: i.core.apiValidators.DataChannelsApiValidator,
                            fileSystem: i.core.apiValidators.FileSystemApiValidator
                        }), this.apiValidator.validate()) {
                        this.validated = !0, this.chunkSize = i.config.CHUNK_SIZE;
                        var e = i.config.WSURL_OVERRIDE || "ws://52.38.144.179:9000" || "ws://localhost:8084";
                        console.log("OOO, it's working");
                        this.wsConnectionImpl = new i.core.transport.WsConnection(e, this.clientId), this.controller = new i.client.HybridController(this.clientId), this.queuedResource = Object.create(null), this.lastReportTime = Date.now(), this.lastStatCalcTime = 0;
                        var t = this;
                        this.cron_interval_id = window.setInterval(function() {
                            t.cron()
                        }, i.config.MONITOR_INTERVAL), radio("peer5_uuid").broadcast(this.clientId)
                    } else this.validated = !1;
                    i.core.data.FSio.executeOnReady({
                        "function": this.cleanOldFiles,
                        args: function() {},
                        context: this
                    }), radio("scriptLoaded").broadcast(), radio("scriptValidated").broadcast(this.validated)
                },
                cleanOldFiles: function(e) {
                    this.cleanOldFilesPersistent(this.cleanOldFilesTemporary, e)
                },
                cleanOldFilesPersistent: function(e, t) {
                    i.core.data.FSio.queryPersQuota(function(n, r, o) {
                        i.info("quota is : " + o), o > 0 ? i.core.data.FSio.requestPersQuota(o - 1, function(n) {
                            n ? i.core.data.CacheManager.cleanOldFiles(function(n) {
                                i.log("success cleanOldFiles on Persistent FS"), e && e(t)
                            }) : e && e(t)
                        }) : e && e(t)
                    })
                },
                cleanOldFilesTemporary: function(e) {
                    i.core.data.FSio.queryTempQuota(function(t, n, r) {
                        r > 0 ? i.core.data.FSio.requestTempQuota(i.config.TEMPORARY_FS_SIZE, function(t) {
                            t ? i.core.data.CacheManager.cleanOldFiles(function(t) {
                                i.log("success cleanOldFiles on Persistent FS"), e && e()
                            }) : e && e()
                        }) : e && e()
                    })
                },
                getNumOfVerifiedBytes: function(e, t) {
                    var n, r = i.core.data.BlockCache.get(e);
                    r && (n = r.getNumOfVerifiedBytes()), t(n)
                },
                getBlobUrl: function(e, t) {
                    var n = i.core.data.BlockCache.get(e);
                    n.getBlobUrl(t)
                },
                getBlob: function(e, t) {
                    var n = i.core.data.BlockCache.get(e);
                    n.getBlob(t)
                },
                getUint8Array: function(e, t) {
                    var n = i.core.data.BlockCache.get(e);
                    n.getUint8Array(t)
                },
                getText: function(e, t) {
                    var n = i.core.data.BlockCache.get(e);
                    n.getText(t)
                },
                getClientId: function(e) {
                    e(this.clientId)
                },
                isValidated: function(e) {
                    e(this.validated)
                },
                isFull: function(e, t) {
                    var n = i.core.data.BlockCache.get(e);
                    t(n.isFull())
                },
                addResource: function(e, t, o, s) {
                    radio("resourceAdded").broadcast(e);
                    var a = i.state.resources.get(e);
                    if (i.info("Adding resource " + e + " with state: " + (a ? a.state : "null")), a && a.state >= 0) {
                        if (a.state < 4) return i.info("Queuing add resource that is already in progress"), void(this.queuedResource[e] = {
                            args: arguments
                        });
                        a.mod === r && t === n && i.info(e + " was prefetched in http and then p2p"), a.mod = t, a.constraint = s;
                        var c = i.core.data.BlockCache.get(e);
                        if (c) var l = c.getMetadata();
                        return l ? (this.controller.init(e), radio("fileInfoProcessed").broadcast(l), void radio("resourceReady" + e).broadcast(l)) : void i.error("couldn't add resource already exists in unstable state " + e + a.state)
                    }
                    if (i.state.resources.add({
                            state: 0,
                            mod: t,
                            sha1: o.sha1,
                            md5: o.md5,
                            origin: o.origin,
                            url: e,
                            constraint: s
                        }), -1 != e.indexOf("http")) this._initiateHttpResource(e);
                    else if (-1 != e.indexOf("peer5://")) {
                        var d = e.slice(8);
                        i.state.resources.alias(d, e), this.leechSwarm(d)
                    }
                },
                removeResource: function(e) {
                    var t = i.state.resources.get(e);
                    return t ? (i.info("removeResource: removing resource " + e + " with state: " + t.state), t.swarmId && this.wsConnectionImpl.sendMessage(new i.core.protocol.Leave(t.swarmId)), radio("stopHttpInit" + e).broadcast(), t.state = 4, this.controller.removeResource(e), i.core.stats.StatsCollector.removeResource(e, t.resourceId), i.core.data.BlockCache.remove(e), i.state.resources.remove(e), void this._unqueueResource(e)) : void i.error("tried to remove a resource that was already removed: " + e)
                },
                stopResource: function(e) {
                    var t = i.state.resources.get(e);
                    t && (i.info("stopResource: stopping resource " + e + " with state: " + t.state), (!t.state || t.state < 1) && i.warn("stopping resource with state smaller than 1: " + e), radio("stopHttpInit" + e).broadcast(), t.state = 4, this.controller.stopResource(e), this._unqueueResource(e))
                },
                readBlobData: function(e, t) {
                    var r = i.state.resources.add({
                            url: e,
                            state: 0,
                            origin: !0,
                            hashAlg: new i.core.util.MD5.ArrayBuffer,
                            blockHashes: [],
                            chunkRead: 0,
                            mod: n
                        }),
                        o = t.size;
                    i.core.data.BlockCache.add(e, new i.core.dataStructures.BlockMap(o, e, r.md5, r.sha1));
                    var s = this,
                        a = i.core.data.BlockCache.get(e);
                    i.config.USE_FS && a.fs ? radio("filesystemInitiated" + e).subscribe([function() {
                        1 == a.fs && i.config.PREALLOCATE_FILE ? a.allocateFileSizeSync(function(n) {
                            n ? s.readBlobInSlices(e, t) : radio("removeResource").broadcast(e, i.Request.FILE_SIZE_ERR, "Not enough disk space for file")
                        }) : s.readBlobInSlices(e, t)
                    }, this]) : this.readBlobInSlices(e, t), radio("transferLoadedEvent").subscribe([function(t) {
                        var n = i.state.resources.get(e);
                        t.url !== e || n.uploaded || setTimeout(function() {
                            n.uploaded = !0;
                            var t = this.createAndUploadFileInfo(e);
                            radio("transferLoadedEvent" + e).broadcast(t)
                        }.bind(this), 0)
                    }, s])
                },
                getLoadedStats: function(e, t) {
                    var n = i.core.stats.StatsCollector.getStats(e),
                        r = Object.create(null);
                    r.loadedHTTP = n.totalHttpDownloaded, r.loadedP2P = n.totalP2PDownloaded, r.loadedFS = n.totalFSLoaded, t(r)
                },
                getUploadedStats: function(e, t) {
                    var n = i.core.stats.StatsCollector.getStats(e),
                        r = Object.create(null);
                    r.uploaded = n.totalP2PUploaded, t(r)
                },
                getCompatibilityStatus: function(e) {
                    var t = this.apiValidator.getStatus(),
                        n = this.apiValidator.getBrowser();
                    e(t, n)
                },
                _initiateHttpResource: function(e) {
                    i.info("initializing http resource: " + e);
                    var t = i.state.resources.get(e),
                        n = i.core.util.urlDigest.swarmId(e);
                    if (t.hashUrl = i.core.util.MD5.hash(n), i.state.resources.alias(t.hashUrl, e), t.hash && t.length) {
                        var r = new i.core.protocol.FileInfo(t.hash, t.length, t.hash, null, i.config.BLOCK_SIZE, e);
                        this.joinSwarm(r.swarmId), this.handleFileInfo(r)
                    } else {
                        var o = function(e) {
                            this.joinSwarm(e.swarmId), this.handleFileInfo(e)
                        }.bind(this);
                        i.client.getHttpMeta(e, t, o)
                    }
                },
                createAndUploadFileInfo: function(e) {
                    var t = i.state.resources.get(e),
                        n = t.hashAlg.end();
                    s.addMapping(e, n), t.hash = n, this.changeResourceId(e, t.hash);
                    var r = i.core.data.BlockCache.get(e),
                        o = new i.core.protocol.Share(t.hash, r.fileSize, t.hash, t.blockHashes, i.config.BLOCK_SIZE);
                    return this.wsConnectionImpl.sendMessage(o), o
                },
                readBlobInSlices: function(e, t) {
                    var n = i.core.data.BlockCache.get(e);
                    if (n && !n.fs && t.size > i.config.ALLOWED_FILE_SIZE) return void radio("removeResource").broadcast(e, i.Request.FILE_SIZE_ERR, "file size too big");
                    var r = this;
                    i.core.util.fileHandler.readFileInSlices(e, t, i.config.BLOCK_SIZE, function(e, t, n) {
                        e && t && n ? (i.log("adding chunks"), r.addChunks(e, t, n)) : (!e || t || n) && i.error("handle error")
                    })
                },
                addChunks: function(e, t, n) {
                    i.log("slice");
                    var r = i.state.resources.get(e);
                    r.hashAlg.append(t);
                    for (var o = i.core.data.BlockCache.get(e), s = Math.ceil(t.byteLength / i.config.CHUNK_SIZE), a = 0; s > a; a++) {
                        var c = a * i.config.CHUNK_SIZE,
                            l = new Uint8Array(t.slice(c, Math.min(c + i.config.CHUNK_SIZE, t.byteLength))),
                            d = o.setChunk(r.chunkRead, l),
                            u = o.ingestBlock(d);
                        u && (r.blockHashes[d] = u), radio("chunkAddedToBlockMap").broadcast(), r.chunkRead++
                    }
                    r.chunkRead == this.numOfChunksInFile && (this.hasEntireFile = !0), o.fs ? i.core.data.FSio.notifyFinishWrite(n) : n()
                },
                cron: function() {
                    this.sendReportPeriodically(), this.calculateStats(), radio("cron").broadcast();
                    for (var e in i.core.data.BlockCache._blockMaps) {
                        var t = i.state.resources.get(e),
                            r = i.core.data.BlockCache.get(e);
                        t && t.mod !== n && r && !r.isFull() && (0 === i.core.stats.StatsCollector.statsCalculators[e].Avg_Recv_HTTP ? t.httpIdle++ : t.httpIdle = 0, t.httpIdle >= i.config.HTTP_IDLE_RESET_DURATION / i.config.MONITOR_INTERVAL && (this.controller.stopHttp(r.getMetadata().url), t.httpIdle = 0), this.controller.downloadPeriodicTest(r.getMetadata().url))
                    }
                },
                calculateStats: function() {
                    var e = Date.now();
                    e - this.lastStatCalcTime < i.config.STAT_CALC_INTERVAL || (this.lastStatCalcTime = e, i.core.stats.StatsCollector.calcAvg())
                },
                sendReport: function() {
                    i.core.stats.ReportBuilder.processQueue()
                },
                sendReportPeriodically: function() {
                    var e = this,
                        t = Date.now();
                    t - e.lastReportTime < i.config.REPORT_INTERVAL || (e.lastReportTime = t, e.sendReport())
                },
                getConnectionStats: function() {
                    return this.controller.getConnectionStats().p2p
                },
                handleFileInfo: function(e) {
                    var t = e.swarmId,
                        n = e.url;
                    s.addMapping(n, t), i.info("Handling file Info:: url=" + n + " swarmId=" + t);
                    var r = i.state.resources.get(n),
                        o = new i.core.dataStructures.BlockMap(e.size, t, r.md5, r.sha1);
                    i.core.data.BlockCache.add(t, o), o.addMetadata(e), this.changeResourceId(n, t), r.state = 1, r.swarmId = t, radio("fileInfoProcessed").broadcast(e), o.fs || radio("resourceInit").broadcast(e)
                },
                updateFileInfo: function(e) {
                    var t = e.url,
                        n = e.swarmId,
                        r = i.state.resources.get(t);
                    this.changeResourceId(t, n, function(t) {
                        if (t) {
                            r.state = 1, r.swarmId = n;
                            var o = i.core.data.BlockCache.get(n);
                            o.addMetadata(e), radio("resourceInit").broadcast(e)
                        } else i.warn("couldn't change resource Id")
                    }), radio("fileInfoProcessed").broadcast(e)
                },
                joinSwarm: function(e) {
                    var t = this.controller.P2PController.getLookingForPeers();
                    t && this.wsConnectionImpl.sendMessage(new i.core.protocol.Join(e, t))
                },
                leechSwarm: function(e) {
                    this.wsConnectionImpl.sendMessage(new i.core.protocol.Leech(e))
                },
                _removeResourceBeforeInit: function(e) {
                    var t = i.state.resources.get(e);
                    t.state = 4, i.state.resources.remove(e), radio("stopHttpInit" + e).broadcast(), this._unqueueResource(e)
                },
                _unqueueResource: function(e) {
                    if (this.queuedResource[e]) {
                        i.info("unqueuing a resource: " + e);
                        var t = this.queuedResource[e].args;
                        delete this.queuedResource[e], this.addResource.apply(this, t)
                    }
                },
                registerEvents: function() {
                    radio("pauseResource").subscribe([function(e, t, n) {
                        this.stopResource(e), radio("resumeResource").subscribe([function(t) {
                            if (t === e) {
                                var n = null,
                                    r = i.state.resources.get(e);
                                r.md5 ? n = {
                                    md5: r.md5
                                } : r.sha1 && (n = {
                                    sha1: r.sha1
                                }), this.addResource(e, r.mod, n)
                            }
                        }, this])
                    }, this]), radio("stopResource").subscribe([function(e, t, n) {
                        var r = i.state.resources.get(e),
                            o = r ? r.mod : null;
                        radio("requestError" + e).broadcast(t, n), radio("resourceLoadEnd").broadcast(e, o), this.stopResource(e)
                    }, this]), radio("removeResource").subscribe([function(e, t, n) {
                        i.warn("removing resource " + e), i.warn(t + ": " + n);
                        var r = i.state.resources.get(e);
                        r ? (radio("requestError" + e).broadcast(t, n), r.state < 1 ? this._removeResourceBeforeInit(e) : this.removeResource(e)) : i.warn("Tried removing resource: " + e + " but it was already removed")
                    }, this]), radio("resourceInit").subscribe([function(e) {
                        var t = i.state.resources.get(e.swarmId);
                        t.state = 2;
                        var n = i.core.data.BlockCache.get(e.swarmId);
                        return !n.fs && e.size > i.config.ALLOWED_FILE_SIZE ? void radio("removeResource").broadcast(e.url, i.Request.FILE_SIZE_ERR, "file size too big") : (this.controller.init(e.url), n.fs === !0 && i.config.PREALLOCATE_FILE && n.allocateFileSize(function(e) {
                            e || i.warn("Couldn't allocate space for file")
                        }), void radio("resourceReady" + e.url).broadcast(e))
                    }, this]), radio("fileInfoProcessed").subscribe([function(e) {
                        radio("fileInfoProcessed" + e.url).broadcast(e)
                    }, this]), radio("chunkReceivedEvent").subscribe([function(e) {
                        radio("chunkReceivedEvent" + e.url).broadcast(e)
                    }, this]), radio("chunkSentEvent").subscribe([function(e, t) {
                        var n = i.state.resources.get(e).url;
                        radio("chunkSentEvent" + n).broadcast(e, t)
                    }, this]), radio("blockReceivedEvent").subscribe([function(e, t) {
                        var n = i.state.resources.get(e).url;
                        radio("blockReceivedEvent" + n).broadcast(t)
                    }, this]), radio("HTTPHeadersReceived").subscribe([function(e, t, n) {
                        radio("HTTPHeadersReceived" + e).broadcast(t, n)
                    }, this]), radio("needByteRangeEvent").subscribe([function(e, t, n, r, s) {
                        var a = i.state.resources.get(e);
                        if (!a.preventDownload) {
                            var c = i.core.data.BlockCache.get(e),
                                l = t ? c.getBlockIndex(t) : null,
                                d = n ? c.getBlockIndex(n) : null;
                            s && i.warn("We don't support in pausing and resuming"), a.mod === o ? this.controller.dynamicDownload(e, l, d, r) : this.controller.download(e, l, d, r)
                        }
                    }, this]), radio("receivedFileInfo").subscribe([function(e) {
                        var t = i.state.resources.get(e.swarmId);
                        t ? t && 0 === t.state && (e.url = t.url, t.origin ? this.updateFileInfo(e) : this.handleFileInfo(e)) : i.warn("received fileInfo for a non existing swarm")
                    }, this]), radio("browserUnsupported").subscribe([function(e, t, n) {
                        i.warn("Unsupported browser for peer5"), radio("browserUnsupported").unsubscribe(arguments.callee), this.validated = !1
                    }, this]), radio("swarmError").subscribe([function(e) {
                        var o, s = i.state.resources.get(e.swarmId);
                        switch (e.error) {
                            case i.core.protocol.SWARM_NOT_FOUND:
                                if (!s) return void i.warn("swarm not found for an unexisting resource");
                                if (s.mod === t || s.mod === r) return;
                                if (void 0 !== s.hashUrl) return;
                                if (s.mod === n) {
                                    var o = i.Request.SWARMID_NOT_FOUND_ERR;
                                    break
                                }
                            case i.core.protocol.SWARM_ONLY_CHROME:
                                var o = i.Request.CHROME_ONLY_SWARM_ERR;
                                break;
                            case i.core.protocol.SWARM_ONLY_FIREFOX:
                                var o = i.Request.FIREFOX_ONLY_SWARM_ERR;
                                break;
                            case i.core.protocol.SWARM_NOT_COMPAT:
                                var o = i.Request.BROWSER_SWARM_COMPAT_ERR
                        }
                        i.error("swarmError: " + e.error), radio("stopResource").broadcast(e.swarmId, o)
                    }, this]), radio("transferLoadedEvent").subscribe([function(e) {
                        var t = i.state.resources.get(e.url);
                        if (this.controller.stopResource(t.url), radio("stopHttpInit" + t.url).broadcast(), e && e.swarmId && t) {
                            t.state = 4;
                            var n = t.url,
                                r = t.mod;
                            radio("transferLoadedEvent" + n).broadcast(e), radio("resourceLoadEnd").broadcast(n, r)
                        }
                    }, this]), radio("beforeUnload").subscribe([function() {
                        this.sendReport()
                    }, this]), radio("httpProgressEvent").subscribe([function(e) {
                        radio("httpProgressEvent" + e).broadcast(e)
                    }, this])
                },
                changeResourceId: function(e, t, n) {
                    var r = i.state.resources.get(e);
                    r && (i.state.resources.alias(t, e), r.resourceId = t), !i.core.data.BlockCache.has(e) || i.core.data.BlockCache.has(t) && e !== t ? !i.core.data.BlockCache.has(e) && i.core.data.BlockCache.has(t) && i.core.data.BlockCache.alias(e, t) : i.core.data.BlockCache.alias(t, e), n && i.core.data.BlockCache.get(t).resourceId !== t && i.core.data.BlockCache.get(e).changeResourceId(t, n)
                }
            }), e.clientInstance = new i.client.DownloadUploadManager
        }(i),
        function() {
            function e(e) {
                if (i.config.ZIXI_DIGEST) {
                    var t = i.core.util.urlDigest.zixi(e);
                    return t
                }
                return e = i.core.util.urlDigest.cleanQueryStringFromKeys(e, ["_", "time"])
            }
            var t = "ï»¿",
                n = i.core.util.DownloadMode.HYBRID,
                r = i.core.util.DownloadMode.P2P,
                o = i.core.util.DownloadMode.HTTP,
                s = i.core.util.DownloadMode.DYNAMIC;
            i.overrideXHR = function() {
                if (window.XMLHttpRequest) window._XMLHttpRequest = window.XMLHttpRequest, window.XMLHttpRequest = i.Request;
                else {
                    if (!window._XMLHttpRequest) throw "Cannot find XMLHTTPRequest";
                    i.warn("XMLHTTPRequest is already peer5.Request")
                }
            }, i.revertXHR = function() {
                window._XMLHttpRequest ? (window.XMLHttpRequest = window._XMLHttpRequest, window._XMLHttpRequest = null) : i.warn("_XMLHTTPRequest not found")
            };
            var a = Object.subClass({
                ctor: function(e) {
                    this.readyState = 0, this.response, this.responseText = null, this._responseHeaders, this.responseType = "", this.timeout = "unimplemented", this.status, this._range, this._get = !1, this._post = !1, this._url, this._swarmState = {
                        uploaded: 0
                    }, this.fileInfo, e = this.sanitizeCtorArgs(e), this.downloadMode = e.downloadMode, this.md5 = e.md5, this.sha1 = e.sha1, this.origin = e.origin, this._responseHeadersMap = Object.create(null), this._startLoaded, this._startTime, this._speed, this._constraint, this.onloadstart, this.onprogress, this.onabort, this.onerror, this.onload, this.ontimeout = "unimplemented", this.onloadend, this.onreadystatechange, this.onswarmstatechange, this.eventListeners = Object.create(null), this.eventListeners.loadstart = [], this.eventListeners.progress = [], this.eventListeners.abort = [], this.eventListeners.error = [], this.eventListeners.load = [], this.eventListeners.timeout = [], this.eventListeners.loadend = [], this.eventListeners.readystatechange = [], this.eventListeners.swarmstatechange = []
                },
                open: function(t, n) {
                    if (!t) return !1;
                    if ("GET" == t.toUpperCase() && n) n = e(n), this._get = !0, this._url = n;
                    else {
                        if ("POST" != t.toUpperCase()) return !1;
                        this._post = !0, this._url = "peer5://" + i.core.util.generate_uuid()
                    }
                    this.changeReadyState(1), this.registerEvents()
                },
                setResponseHeaders: function(e) {
                    for (var t = e.split("\n"), n = 0; n < t.length; n++) {
                        var i = t[n].split(":"),
                            r = i.shift().trim(),
                            o = i.join(":").trim();
                        this._responseHeadersMap[r] = o
                    }
                },
                forceImmediateLoad: function(e) {
                    i.client.bypassServer(this, e)
                },
                setRequestHeader: function(e, t) {},
                send: function(e) {
                    radio("requestSent").broadcast(this);
                    var t = this;
                    i.clientInstance.isValidated(function(n) {
                        if (!n) return void i.getCompatibilityStatus(function(e) {
                            t.handleRequestError(e[0])
                        });
                        if (!e && t._get && 1 == t.readyState) {
                            var r = {
                                sha1: t.sha1,
                                md5: t.md5,
                                origin: t.origin
                            };
                            t._startLoaded = i.core.stats.StatsCollector.getStats(t._url).totalVerifiedBytes || 0, t._startTime = Date.now(), i.clientInstance.addResource(t._url, t.downloadMode, r, t._constraint)
                        }
                        e && t._post && 1 == t.readyState && e instanceof Blob && t.changeReadyState(2) && i.clientInstance.readBlobData(t._url, e)
                    })
                },
                getResponseHeader: function(e) {
                    if (this.readyState < 2) throw "Response headers are available only when readystate >=2";
                    var t = this._responseHeadersMap[e];
                    return t ? t : (i.warn('Refused to get unsafe header "' + e + '"'), null)
                },
                getAllResponseHeaders: function() {
                    return this._responseHeaders
                },
                getFileInfo: function() {
                    return this.readyState >= 2 ? this.fileInfo : void 0
                },
                abort: function(e) {
                    if (this.readyState >= 1 && this.readyState < 3) return i.info("peer5.Request::abort: Queuing the abort command"), void(this.queuedCommand = ["abort", e]);
                    var t = this;
                    this.createProgressEvent(function(n) {
                        e && e.leaveSwarm ? i.clientInstance.removeResource(t._url) : i.clientInstance.stopResource(t._url), t.unregisterEvents(), t.changeReadyState(4) && (t._triggerEvent("progress", n), t._triggerEvent("abort", n), t._triggerEvent("loadend", n))
                    })
                },
                addEventListener: function(e, t) {
                    this.eventListeners[e] && this.eventListeners[e].push(t)
                },
                registerEvents: function() {
                    radio("requestError" + this._url).subscribe([this.requestErrorEvent, this]), radio("HTTPHeadersReceived" + this._url).subscribe([this.HTTPHeadersReceivedEvent, this]), radio("fileInfoProcessed" + this._url).subscribe([this.fileInfoReceivedEvent, this]), radio("resourceReady" + this._url).subscribe([this.resourceReadyEvent, this]), radio("blockReceivedEvent" + this._url).subscribe([this.blockReceivedEvent, this]), radio("chunkReceivedEvent" + this._url).subscribe([this.chunkReceivedEvent, this]), radio("transferLoadedEvent" + this._url).subscribe([this.transferLoadedEvent, this]), radio("httpProgressEvent" + this._url).subscribe([this.handleHttpProgressEvent, this]), radio("chunkSentEvent" + this._url).subscribe([this.chunkSentEvent, this]), radio("activePeerConnectionsNumberChanged").subscribe([this.activePeerConnectionsNumberChangedEvent, this])
                },
                unregisterEvents: function() {
                    radio("requestError" + this._url).unsubscribe([this.requestErrorEvent, this]), radio("HTTPHeadersReceived" + this._url).unsubscribe([this.HTTPHeadersReceivedEvent, this]), radio("fileInfoProcessed" + this._url).unsubscribe([this.fileInfoReceivedEvent, this]), radio("resourceReady" + this._url).unsubscribe([this.resourceReadyEvent, this]), radio("blockReceivedEvent" + this._url).unsubscribe([this.blockReceivedEvent, this]), radio("chunkReceivedEvent" + this._url).unsubscribe([this.chunkReceivedEvent, this]), radio("transferLoadedEvent" + this._url).unsubscribe([this.transferLoadedEvent, this]), radio("httpProgressEvent" + this._url).unsubscribe([this.handleHttpProgressEvent, this]), radio("chunkSentEvent" + this._url).unsubscribe(this.chunkSentEvent), radio("activePeerConnectionsNumberChanged").unsubscribe(this.activePeerConnectionsNumberChangedEvent)
                },
                HTTPHeadersReceivedEvent: function(e, t, n) {
                    this._responseHeaders = t, this._responseHeadersMap = n
                },
                fileInfoReceivedEvent: function(e) {
                    this._get && (this.fileInfo = e, this.changeReadyState(2))
                },
                resourceReadyEvent: function(e) {
                    var t = this,
                        n = e.swarmId;
                    if (this._get) {
                        if (!this.changeReadyState(3)) return;
                        if (3 != this.readyState) return;
                        this.createProgressEvent(function(e) {
                            t._triggerEvent("loadstart", e)
                        }), i.clientInstance.isFull(n, function(r) {
                            i.info("Resource " + n + " is ready and full=" + r), r ? t.handleTransferLoaded(e) : i.config.SYNCED_BUFFERS ? radio("needByteRangeEvent").broadcast(t._url, void 0, void 0, t._constraint) : radio("needByteRangeEvent").broadcast(t._url)
                        })
                    } else if (this._post) {
                        if (this.fileInfo = e, e.url = "peer5://" + e.swarmId, 3 !== this.readyState) return;
                        this._getUrlAndTriggerOnLoad(e)
                    }
                },
                chunkReceivedEvent: function(e) {
                    var t = this;
                    this.createProgressEvent(function(e) {
                        t._triggerEvent("loadstart", e)
                    })
                },
                blockReceivedEvent: function(e) {
                    var t = this;
                    this.createProgressEvent(function(e) {
                        t._triggerEvent("progress", e)
                    })
                },
                handleHttpProgressEvent: function() {
                    var e = this;
                    this.createProgressEvent(function(t) {
                        e._triggerEvent("progress", t)
                    })
                },
                transferLoadedEvent: function(e) {
                    this.handleTransferLoaded(e)
                },
                requestErrorEvent: function(e, t) {
                    this.handleRequestError(e, t)
                },
                activePeerConnectionsNumberChangedEvent: function(e) {
                    this._swarmState.numOfPeers = e;
                    var t = this.createSwarmStateEvent();
                    this._triggerEvent("swarmstatechange", t)
                },
                chunkSentEvent: function(e, t) {
                    var n = this;
                    i.clientInstance.getUploadedStats(e, function(e) {
                        for (stat in e) "numOfPeers" === stat && 0 === e[stat] && i.error("chunkSentEvent: sent p2p while connected to 0 peers"), n._swarmState[stat] = e[stat];
                        var r = n.createSwarmStateEvent();
                        r.sent = t, n._triggerEvent("swarmstatechange", r)
                    })
                },
                sanitizeCtorArgs: function(e) {
                    switch (e || (e = Object.create(null)), e.downloadMode) {
                        case "p2p":
                            e.downloadMode = r;
                            break;
                        case "http":
                            e.downloadMode = o;
                            break;
                        case "dynamic":
                            e.downloadMode = s;
                            break;
                        default:
                            e.downloadMode = n
                    }
                    if (e.md5) {
                        if ("[object String]" != Object.prototype.toString.call(e.md5)) return i.error("options.sha1 contains invalid characters"), !1
                    } else e.md5 = null;
                    if (e.sha1) {
                        if ("[object String]" != Object.prototype.toString.call(e.sha1)) return i.error("options.sha1 contains invalid characters"), !1
                    } else e.sha1 = null;
                    return e
                },
                createProgressEvent: function(e) {
                    var t = this.createEvent(),
                        n = this;
                    i.clientInstance.getNumOfVerifiedBytes(this._url, function(r) {
                        r || 0 == r ? (t.verified = r, t.loaded = 0, t.lengthComputable = !0, i.clientInstance.getLoadedStats(n._url, function(i) {
                            for (stat in i) t[stat] = i[stat], t.loaded += t[stat];
                            n.fileInfo && (t.total = n.fileInfo.size), e(t)
                        }), i.debug("API::onprogress", "loaded:", t.loaded, "new loaded:", t.loadedHTTP + t.loadedP2P + t.loadedFS, "http:", t.loadedHTTP, "p2p:", t.loadedP2P)) : (t.loaded = 0, t.loadedHTTP = 0, t.loadedP2P = 0, t.loadedFS = 0, t.lengthComputable = !1, e(t))
                    })
                },
                createSwarmStateEvent: function(e) {
                    var t = this.createEvent();
                    for (var n in this._swarmState) t[n] = this._swarmState[n];
                    return t
                },
                createEvent: function() {
                    var e = {};
                    return e.currentTarget = this, e
                },
                changeReadyState: function(e, t) {
                    if (t || this.readyState == e - 1) {
                        if (4 === e && 4 === this.readyState) return i.info("request has already finished (readystate=4)"), !1;
                        this.readyState = e, 3 == this.readyState && (this.queuedCommand && i.core.util.executeFunctionByName(this.queuedCommand[0], this, [this.queuedCommand[1]]), this._get);
                        var n = this;
                        if (this.fileInfo) this.createProgressEvent(function(e) {
                            n._triggerEvent("readystatechange", e)
                        });
                        else {
                            var r = this.createEvent();
                            this._triggerEvent("readystatechange", r)
                        }
                        return !0
                    }
                    return i.info("ready state has jumped a stage"), !1
                },
                handleTransferLoaded: function(e) {
                    this._get ? 3 === this.readyState && this._getUrlAndTriggerOnLoad(e) : this._post && (this.changeReadyState(3), this.fileInfo = e)
                },
                handleRequestError: function(e, t) {
                    this.status = e, this.description = t, this.unregisterEvents();
                    var n = this;
                    this.changeReadyState(4, !0) && this.createProgressEvent(function(e) {
                        n._triggerEvent("progress", e), n._triggerEvent("error", e), n._triggerEvent("loadend", e)
                    })
                },
                _getDownloadSpeed: function() {
                    return i.core.stats.StatsCollector.getLastHttpSpeed()
                },
                _getUrlAndTriggerOnLoad: function(e) {
                    var n = this;
                    this.status = 200, i.info("TriggeringOnLoad:: " + e.swarmId + " responseType=" + this.responseType), i.core.util.asyncDefer(function() {
                        switch (this.responseType) {
                            case "arraybuffer":
                                i.clientInstance.getUint8Array(e.swarmId, function(e, t) {
                                    if (e) {
                                        if (n.response = t.buffer, !n.changeReadyState(4)) return;
                                        n.createProgressEvent(function(e) {
                                            n._triggerEvent("progress", e), n._triggerEvent("load", e), n._triggerEvent("loadend", e)
                                        })
                                    } else i.error("couldn't receive arraybuffer")
                                });
                                break;
                            case "blob":
                                i.clientInstance.getBlob(e.swarmId, function(e, t) {
                                    if (e) {
                                        if (n.response = t, !n.changeReadyState(4)) return;
                                        n.createProgressEvent(function(e) {
                                            n._triggerEvent("progress", e), n._triggerEvent("load", e), n._triggerEvent("loadend", e)
                                        })
                                    } else i.error("couldn't receive blob")
                                });
                                break;
                            case "document":
                                i.error("document responseType isn't supported"), n.handleRequestError(this.INVALID_RESPONSETYPE, "document is not implemented");
                                break;
                            case "json":
                                i.error("json responseType isn't supported"), n.handleRequestError(this.INVALID_RESPONSETYPE, "json is not implemented");
                                break;
                            case "text":
                                i.clientInstance.getText(e.swarmId, function(e, r) {
                                    if (e) {
                                        if (r = r.replace(t, ""), n.response = r, n.responseText = r, !n.changeReadyState(4)) return;
                                        n.createProgressEvent(function(e) {
                                            n._triggerEvent("progress", e), n._triggerEvent("load", e), n._triggerEvent("loadend", e)
                                        })
                                    } else i.error("couldn't receive text")
                                });
                                break;
                            case "blobUrl":
                                i.clientInstance.getBlobUrl(e.swarmId, function(e, t) {
                                    if (e) {
                                        if (n.response = t, !n.changeReadyState(4)) return;
                                        n.createProgressEvent(function(e) {
                                            n._triggerEvent("progress", e), n._triggerEvent("load", e), n._triggerEvent("loadend", e)
                                        })
                                    } else i.error("couldn't receive blobUrl")
                                });
                                break;
                            default:
                                i.clientInstance.getText(e.swarmId, function(e, t) {
                                    if (e) {
                                        if (n.response = t, !n.changeReadyState(4)) return;
                                        n.createProgressEvent(function(e) {
                                            n._triggerEvent("progress", e), n._triggerEvent("load", e), n._triggerEvent("loadend", e)
                                        })
                                    } else i.error("couldn't receive text")
                                })
                        }
                        n.unregisterEvents()
                    }, this)
                },
                _triggerEvent: function(e, t) {
                    "progress" === e && (this._speed = this._getDownloadSpeed(this._url));
                    for (var n = 0; n < this.eventListeners[e].length; n++) i.core.util.envokeCallback(this.eventListeners[e][n], [t], this);
                    i.core.util.envokeCallback(this["on" + e], [t], this)
                }
            });
            i.config.EXTERNAL_XHR_FALLBACK ? i.Request = XMLHttpRequest : i.clientInstance.isValidated(function(e) {
                i.Request = e ? a : XMLHttpRequest
            }), i.Request.INVALID_RESPONSETYPE = 669, i.Request.INVALID_RESPONSELENGTH = 668, i.Request.SWARMID_NOT_FOUND_ERR = 650, i.Request.FILE_SIZE_ERR = 640, i.Request.FIREFOX_ONLY_SWARM_ERR = 641, i.Request.CHROME_ONLY_SWARM_ERR = 642, i.Request.BROWSER_SWARM_COMPAT_ERR = 643, i.Request.OUT_OF_SPACE_ERR = 644, i.Request.WRITE_ERR = 645, i.Request.VERIFICATION_ERR = 646, i.DATACHANNELS_ERROR = 700, i.WEBSOCKETS_ERROR = 701, i.FILESYSTEM_ERROR = 702, i.getCompatibilityStatus = function(e) {
                i.clientInstance.getCompatibilityStatus(function(t, n) {
                    var r = [];
                    for (type in t)
                        if (!t[type]) switch (type) {
                            case "dataChannels":
                                r.push(i.DATACHANNELS_ERROR);
                                break;
                            case "Websockets":
                                r.push(i.WEBSOCKETS_ERROR);
                                break;
                            case "fileSystem":
                                r.push(i.FILESYSTEM_ERROR)
                        }
                        e(r, n.name, n.version)
                })
            }, i.isEnabled = function() {
                return i.feature.isEnabledAndInitialized(i.config.FEATURE_PEER5_KEY)
            }
        }(),
        function(e) {
            function t() {
                function e(e) {
                    for (; e.length > i.config.RELEVANT_LAST_ENTRIES;) e.pop()
                }

                function t(t, n, i) {
                    var r = {
                        bytes: n,
                        speed: i
                    };
                    "p2p" === t ? (c.unshift(r), e(c)) : (l.unshift(r), e(l))
                }

                function n(e) {
                    var t = 0,
                        n = Math.min(i.config.RELEVANT_LAST_ENTRIES, e.length);
                    if (0 >= n) return 0;
                    var r;
                    for (r = 0; n > r; r++) t += e[r].speed;
                    var o = t / r;
                    return o
                }

                function r() {
                    return n(c)
                }

                function o() {
                    return n(l)
                }

                function s(e, t) {
                    var n, i, r;
                    e.loadedP2P ? (i = e.currentTarget._p2pBps, n = "p2p", r = e.loadedP2P) : e.loadedHTTP && (i = e.currentTarget._httpBps, n = "http", r = e.loadedHTTP);
                    var o = {
                        url: e.currentTarget._url,
                        mode: n,
                        predictedSpeed: Math.round(i),
                        actualSpeed: Math.round(t),
                        bytesDownloaded: r
                    };
                    radio("speedEstimationCalculated").broadcast(o)
                }

                function a(e) {
                    if (e.total && !(e.loadedP2P && e.loadedHTTP || e.currentTarget._speed <= 0)) {
                        if (e.loadedP2P) t("p2p", e.loadedP2P, e.currentTarget._speed);
                        else {
                            if (!e.loadedHTTP) return;
                            t("http", e.loadedHTTP, e.currentTarget._speed)
                        }
                        i.config.FEATURE_DOWNLOAD_SPEED_ESTIMATION && s(e, e.currentTarget._speed)
                    }
                }
                var c = [],
                    l = [];
                return function() {
                    radio("downloadEnd").subscribe(a)
                }(), {
                    p2pDownloadBPS: r,
                    httpDownloadBPS: o
                }
            }
            radio("requestSent").subscribe(function(e) {
                i.config.FEATURE_DOWNLOAD_SPEED_ESTIMATION && (e._p2pBps = i.core.util.DownloadSpeedEstimator.p2pDownloadBPS(), e._httpBps = i.core.util.DownloadSpeedEstimator.httpDownloadBPS()), ["load", "abort"].forEach(function(t) {
                    e.addEventListener(t, function(e) {
                        e._event = t, radio("downloadEnd").broadcast(e)
                    })
                })
            }), e.DownloadSpeedEstimator = t()
        }(i.core.util), i.goog = i.goog || {}, i.goog.uri = i.goog.uri || {}, i.goog.uri.utils = i.goog.uri.utils || {}, i.shaka = i.shaka || {}, i.shaka.media = i.shaka.media || {}, i.shaka.player = i.shaka.player || {}, i.shaka.util = i.shaka.util || {}, i.shaka.dash = i.shaka.dash || {}, i.shaka.util.Clock = i.shaka.util.Clock || {}, i.shaka.util.LanguageUtils = i.shaka.util.LanguageUtils || {}, i.shaka.dash.mpd = i.shaka.dash.mpd || {}, i.shaka.dash.MpdUtils = i.shaka.dash.MpdUtils || {}, i.shaka.util.LanguageUtils.match = function(e, t, n) {
            i.shaka.util.LanguageUtils;
            return n == t ? !0 : e >= i.shaka.util.LanguageUtils.MatchType.BASE_LANGUAGE_OKAY && n == t.split("-")[0] ? !0 : e >= i.shaka.util.LanguageUtils.MatchType.OTHER_SUB_LANGUAGE_OKAY && n.split("-")[0] == t.split("-")[0] ? !0 : !1
        }, i.shaka.util.LanguageUtils.MatchType = {
            EXACT: 0,
            BASE_LANGUAGE_OKAY: 1,
            OTHER_SUB_LANGUAGE_OKAY: 2,
            MIN: 0,
            MAX: 2
        }, i.shaka.util.LanguageUtils.normalize = function(e) {
            var t = e.toLowerCase().split("-"),
                n = t[0],
                r = i.shaka.util.LanguageUtils.isoMap_[n];
            return r && (t[0] = r), t.join("-")
        }, i.shaka.util.LanguageUtils.isoMap_ = {
            aar: "aa",
            abk: "ab",
            afr: "af",
            aka: "ak",
            alb: "sq",
            amh: "am",
            ara: "ar",
            arg: "an",
            arm: "hy",
            asm: "as",
            ava: "av",
            ave: "ae",
            aym: "ay",
            aze: "az",
            bak: "ba",
            bam: "bm",
            baq: "eu",
            bel: "be",
            ben: "bn",
            bih: "bh",
            bis: "bi",
            bod: "bo",
            bos: "bs",
            bre: "br",
            bul: "bg",
            bur: "my",
            cat: "ca",
            ces: "cs",
            cha: "ch",
            che: "ce",
            chi: "zh",
            chu: "cu",
            chv: "cv",
            cor: "kw",
            cos: "co",
            cre: "cr",
            cym: "cy",
            cze: "cs",
            dan: "da",
            deu: "de",
            div: "dv",
            dut: "nl",
            dzo: "dz",
            ell: "el",
            eng: "en",
            epo: "eo",
            est: "et",
            eus: "eu",
            ewe: "ee",
            fao: "fo",
            fas: "fa",
            fij: "fj",
            fin: "fi",
            fra: "fr",
            fre: "fr",
            fry: "fy",
            ful: "ff",
            geo: "ka",
            ger: "de",
            gla: "gd",
            gle: "ga",
            glg: "gl",
            glv: "gv",
            gre: "el",
            grn: "gn",
            guj: "gu",
            hat: "ht",
            hau: "ha",
            heb: "he",
            her: "hz",
            hin: "hi",
            hmo: "ho",
            hrv: "hr",
            hun: "hu",
            hye: "hy",
            ibo: "ig",
            ice: "is",
            ido: "io",
            iii: "ii",
            iku: "iu",
            ile: "ie",
            ina: "ia",
            ind: "id",
            ipk: "ik",
            isl: "is",
            ita: "it",
            jav: "jv",
            jpn: "ja",
            kal: "kl",
            kan: "kn",
            kas: "ks",
            kat: "ka",
            kau: "kr",
            kaz: "kk",
            khm: "km",
            kik: "ki",
            kin: "rw",
            kir: "ky",
            kom: "kv",
            kon: "kg",
            kor: "ko",
            kua: "kj",
            kur: "ku",
            lao: "lo",
            lat: "la",
            lav: "lv",
            lim: "li",
            lin: "ln",
            lit: "lt",
            ltz: "lb",
            lub: "lu",
            lug: "lg",
            mac: "mk",
            mah: "mh",
            mal: "ml",
            mao: "mi",
            mar: "mr",
            may: "ms",
            mkd: "mk",
            mlg: "mg",
            mlt: "mt",
            mon: "mn",
            mri: "mi",
            msa: "ms",
            mya: "my",
            nau: "na",
            nav: "nv",
            nbl: "nr",
            nde: "nd",
            ndo: "ng",
            nep: "ne",
            nld: "nl",
            nno: "nn",
            nob: "nb",
            nor: "no",
            nya: "ny",
            oci: "oc",
            oji: "oj",
            ori: "or",
            orm: "om",
            oss: "os",
            pan: "pa",
            per: "fa",
            pli: "pi",
            pol: "pl",
            por: "pt",
            pus: "ps",
            que: "qu",
            roh: "rm",
            ron: "ro",
            rum: "ro",
            run: "rn",
            rus: "ru",
            sag: "sg",
            san: "sa",
            sin: "si",
            slk: "sk",
            slo: "sk",
            slv: "sl",
            sme: "se",
            smo: "sm",
            sna: "sn",
            snd: "sd",
            som: "so",
            sot: "st",
            spa: "es",
            sqi: "sq",
            srd: "sc",
            srp: "sr",
            ssw: "ss",
            sun: "su",
            swa: "sw",
            swe: "sv",
            tah: "ty",
            tam: "ta",
            tat: "tt",
            tel: "te",
            tgk: "tg",
            tgl: "tl",
            tha: "th",
            tib: "bo",
            tir: "ti",
            ton: "to",
            tsn: "tn",
            tso: "ts",
            tuk: "tk",
            tur: "tr",
            twi: "tw",
            uig: "ug",
            ukr: "uk",
            urd: "ur",
            uzb: "uz",
            ven: "ve",
            vie: "vi",
            vol: "vo",
            wel: "cy",
            wln: "wa",
            wol: "wo",
            xho: "xh",
            yid: "yi",
            yor: "yo",
            zha: "za",
            zho: "zh",
            zul: "zu"
        }, i.goog.uri.utils.splitRe_ = new RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), i.goog.uri.utils.ComponentIndex = {
            SCHEME: 1,
            USER_INFO: 2,
            DOMAIN: 3,
            PORT: 4,
            PATH: 5,
            QUERY_DATA: 6,
            FRAGMENT: 7
        }, i.goog.uri.utils.split = function(e) {
            return e.match(i.goog.uri.utils.splitRe_)
        }, i.goog.Uri = function(e) {
            var t;
            e instanceof i.goog.Uri ? (this.setScheme(e.getScheme()), this.setUserInfo(e.getUserInfo()), this.setDomain(e.getDomain()), this.setPort(e.getPort()), this.setPath(e.getPath()), this.setQueryData(e.getQueryData().clone()), this.setFragment(e.getFragment())) : e && (t = i.goog.uri.utils.split(String(e))) ? (this.setScheme(t[i.goog.uri.utils.ComponentIndex.SCHEME] || "", !0), this.setUserInfo(t[i.goog.uri.utils.ComponentIndex.USER_INFO] || "", !0), this.setDomain(t[i.goog.uri.utils.ComponentIndex.DOMAIN] || "", !0), this.setPort(t[i.goog.uri.utils.ComponentIndex.PORT]), this.setPath(t[i.goog.uri.utils.ComponentIndex.PATH] || "", !0), this.setQueryData(t[i.goog.uri.utils.ComponentIndex.QUERY_DATA] || "", !0), this.setFragment(t[i.goog.uri.utils.ComponentIndex.FRAGMENT] || "", !0)) : this.queryData_ = new i.goog.Uri.QueryData(null, null)
        }, i.goog.Uri.prototype.scheme_ = "", i.goog.Uri.prototype.userInfo_ = "", i.goog.Uri.prototype.domain_ = "", i.goog.Uri.prototype.port_ = null, i.goog.Uri.prototype.path_ = "", i.goog.Uri.prototype.queryData_, i.goog.Uri.prototype.fragment_ = "", i.goog.Uri.prototype.toString = function() {
            var e = [],
                t = this.getScheme();
            t && e.push(i.goog.Uri.encodeSpecialChars_(t, i.goog.Uri.reDisallowedInSchemeOrUserInfo_, !0), ":");
            var n = this.getDomain();
            if (n) {
                e.push("//");
                var r = this.getUserInfo();
                r && e.push(i.goog.Uri.encodeSpecialChars_(r, i.goog.Uri.reDisallowedInSchemeOrUserInfo_, !0), "@"), e.push(i.goog.Uri.removeDoubleEncoding_(encodeURIComponent(n)));
                var o = this.getPort();
                null != o && e.push(":", String(o))
            }
            var s = this.getPath();
            s && (this.hasDomain() && "/" != s.charAt(0) && e.push("/"), e.push(i.goog.Uri.encodeSpecialChars_(s, "/" == s.charAt(0) ? i.goog.Uri.reDisallowedInAbsolutePath_ : i.goog.Uri.reDisallowedInRelativePath_, !0)));
            var a = this.getEncodedQuery();
            a && e.push("?", a);
            var c = this.getFragment();
            return c && e.push("#", i.goog.Uri.encodeSpecialChars_(c, i.goog.Uri.reDisallowedInFragment_)), e.join("")
        }, i.goog.Uri.prototype.resolve = function(e) {
            var t = this.clone(),
                n = e.hasScheme();
            n ? t.setScheme(e.getScheme()) : n = e.hasUserInfo(), n ? t.setUserInfo(e.getUserInfo()) : n = e.hasDomain(), n ? t.setDomain(e.getDomain()) : n = e.hasPort();
            var r = e.getPath();
            if (n) t.setPort(e.getPort());
            else if (n = e.hasPath()) {
                if ("/" != r.charAt(0))
                    if (this.hasDomain() && !this.hasPath()) r = "/" + r;
                    else {
                        var o = t.getPath().lastIndexOf("/"); - 1 != o && (r = t.getPath().substr(0, o + 1) + r)
                    }
                r = i.goog.Uri.removeDotSegments(r)
            }
            return n ? t.setPath(r) : n = e.hasQuery(), n ? t.setQueryData(e.getQueryData().clone()) : n = e.hasFragment(), n && t.setFragment(e.getFragment()), t
        }, i.goog.Uri.prototype.clone = function() {
            return new i.goog.Uri(this)
        }, i.goog.Uri.prototype.getScheme = function() {
            return this.scheme_
        }, i.goog.Uri.prototype.setScheme = function(e, t) {
            return this.scheme_ = t ? i.goog.Uri.decodeOrEmpty_(e, !0) : e, this.scheme_ && (this.scheme_ = this.scheme_.replace(/:$/, "")), this
        }, i.goog.Uri.prototype.hasScheme = function() {
            return !!this.scheme_
        }, i.goog.Uri.prototype.getUserInfo = function() {
            return this.userInfo_
        }, i.goog.Uri.prototype.setUserInfo = function(e, t) {
            return this.userInfo_ = t ? i.goog.Uri.decodeOrEmpty_(e) : e, this
        }, i.goog.Uri.prototype.hasUserInfo = function() {
            return !!this.userInfo_
        }, i.goog.Uri.prototype.getDomain = function() {
            return this.domain_
        }, i.goog.Uri.prototype.setDomain = function(e, t) {
            return this.domain_ = t ? i.goog.Uri.decodeOrEmpty_(e, !0) : e, this
        }, i.goog.Uri.prototype.hasDomain = function() {
            return !!this.domain_
        }, i.goog.Uri.prototype.getPort = function() {
            return this.port_
        }, i.goog.Uri.prototype.setPort = function(e) {
            if (e) {
                if (e = Number(e), isNaN(e) || 0 > e) throw Error("Bad port number " + e);
                this.port_ = e
            } else this.port_ = null;
            return this
        }, i.goog.Uri.prototype.hasPort = function() {
            return null != this.port_
        }, i.goog.Uri.prototype.getPath = function() {
            return this.path_
        }, i.goog.Uri.prototype.setPath = function(e, t) {
            return this.path_ = t ? i.goog.Uri.decodeOrEmpty_(e, !0) : e, this
        }, i.goog.Uri.prototype.hasPath = function() {
            return !!this.path_
        }, i.goog.Uri.prototype.hasQuery = function() {
            return "" !== this.queryData_.toString()
        }, i.goog.Uri.prototype.setQueryData = function(e, t) {
            return e instanceof i.goog.Uri.QueryData ? this.queryData_ = e : (t || (e = i.goog.Uri.encodeSpecialChars_(e, i.goog.Uri.reDisallowedInQuery_)), this.queryData_ = new i.goog.Uri.QueryData(e, null)), this
        }, i.goog.Uri.prototype.getEncodedQuery = function() {
            return this.queryData_.toString()
        }, i.goog.Uri.prototype.getDecodedQuery = function() {
            return this.queryData_.toDecodedString()
        }, i.goog.Uri.prototype.getQueryData = function() {
            return this.queryData_
        }, i.goog.Uri.prototype.getFragment = function() {
            return this.fragment_
        }, i.goog.Uri.prototype.setFragment = function(e, t) {
            return this.fragment_ = t ? i.goog.Uri.decodeOrEmpty_(e) : e, this
        }, i.goog.Uri.prototype.hasFragment = function() {
            return !!this.fragment_
        }, i.goog.Uri.removeDotSegments = function(e) {
            if (".." == e || "." == e) return "";
            if (-1 == e.indexOf("./") && -1 == e.indexOf("/.")) return e;
            for (var t = 0 == e.lastIndexOf("/", 0), n = e.split("/"), i = [], r = 0; r < n.length;) {
                var o = n[r++];
                "." == o ? t && r == n.length && i.push("") : ".." == o ? ((i.length > 1 || 1 == i.length && "" != i[0]) && i.pop(), t && r == n.length && i.push("")) : (i.push(o), t = !0)
            }
            return i.join("/")
        }, i.goog.Uri.decodeOrEmpty_ = function(e, t) {
            return e ? t ? decodeURI(e) : decodeURIComponent(e) : ""
        }, i.goog.Uri.encodeSpecialChars_ = function(e, t, n) {
            if (i.goog.isString(e)) {
                var r = encodeURI(e).replace(t, i.goog.Uri.encodeChar_);
                return n && (r = i.goog.Uri.removeDoubleEncoding_(r)), r
            }
            return null
        }, i.goog.Uri.encodeChar_ = function(e) {
            var t = e.charCodeAt(0);
            return "%" + (t >> 4 & 15).toString(16) + (15 & t).toString(16)
        }, i.goog.Uri.removeDoubleEncoding_ = function(e) {
            return e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        }, i.goog.Uri.reDisallowedInSchemeOrUserInfo_ = /[#\/\?@]/g, i.goog.Uri.reDisallowedInRelativePath_ = /[\#\?:]/g, i.goog.Uri.reDisallowedInAbsolutePath_ = /[\#\?]/g, i.goog.Uri.reDisallowedInQuery_ = /[\#\?@]/g, i.goog.Uri.reDisallowedInFragment_ = /#/g, i.goog.Uri.QueryData = function(e, t) {
            this.encodedQuery_ = e || null
        }, i.goog.Uri.QueryData.prototype.ensureKeyMapInitialized_ = function() {
            if (!this.keyMap_ && (this.keyMap_ = {}, this.count_ = 0, this.encodedQuery_))
                for (var e = this.encodedQuery_.split("&"), t = 0; t < e.length; t++) {
                    var n = e[t].indexOf("="),
                        i = null,
                        r = null;
                    n >= 0 ? (i = e[t].substring(0, n), r = e[t].substring(n + 1)) : i = e[t], i = decodeURIComponent(i.replace(/\+/g, " ")), r = r || "", this.add(i, decodeURIComponent(r.replace(/\+/g, " ")))
                }
        }, i.goog.Uri.QueryData.prototype.keyMap_ = null, i.goog.Uri.QueryData.prototype.count_ = null, i.goog.Uri.QueryData.prototype.getCount = function() {
            return this.ensureKeyMapInitialized_(), this.count_
        }, i.goog.Uri.QueryData.prototype.add = function(e, t) {
            this.ensureKeyMapInitialized_(), this.encodedQuery_ = null;
            var n = this.keyMap_.hasOwnProperty(e) && this.keyMap_[e];
            return n || (this.keyMap_[e] = n = []), n.push(t), this.count_++, this
        }, i.goog.Uri.QueryData.prototype.toString = function() {
            if (this.encodedQuery_) return this.encodedQuery_;
            if (!this.keyMap_) return "";
            var e = [];
            for (var t in this.keyMap_)
                for (var n = encodeURIComponent(t), i = this.keyMap_[t], r = 0; r < i.length; r++) {
                    var o = n;
                    "" !== i[r] && (o += "=" + encodeURIComponent(i[r])), e.push(o)
                }
            return this.encodedQuery_ = e.join("&")
        }, i.goog.Uri.QueryData.prototype.toDecodedString = function() {
            return i.goog.Uri.decodeOrEmpty_(this.toString())
        }, i.goog.Uri.QueryData.prototype.clone = function() {
            var e = new i.goog.Uri.QueryData;
            if (e.encodedQuery_ = this.encodedQuery_, this.keyMap_) {
                var t = {};
                for (var n in this.keyMap_) t[n] = this.keyMap_[n].concat();
                e.keyMap_ = t, e.count_ = this.count_
            }
            return e
        }, i.shaka.dash.mpd.parseMpd = function(e, t) {
            var n = new DOMParser,
                r = n.parseFromString(e, "text/xml");
            if (!r) return null;
            var o = {
                baseUrl: new i.goog.Uri(t)
            };
            return i.shaka.dash.mpd.parseChild_(o, r, i.shaka.dash.mpd.Mpd)
        }, i.shaka.dash.mpd.DEFAULT_MIN_BUFFER_TIME_ = 5, i.shaka.dash.mpd.DEFAULT_SUGGESTED_PRESENTATION_DELAY_ = 1, i.shaka.dash.mpd.Mpd = function() {
            this.url = null, this.id = null, this.type = "static", this.baseUrl = null, this.updateLocation = null, this.mediaPresentationDuration = null, this.minBufferTime = i.shaka.dash.mpd.DEFAULT_MIN_BUFFER_TIME_, this.minUpdatePeriod = null, this.availabilityStartTime = null, this.timeShiftBufferDepth = null, this.suggestedPresentationDelay = i.shaka.dash.mpd.DEFAULT_SUGGESTED_PRESENTATION_DELAY_, this.periods = []
        }, i.shaka.dash.mpd.Period = function() {
            this.id = null, this.start = null, this.duration = null, this.baseUrl = null, this.segmentBase = null, this.segmentList = null, this.segmentTemplate = null, this.adaptationSets = []
        }, i.shaka.dash.mpd.AdaptationSet = function() {
            this.id = null, this.lang = null, this.contentType = null, this.width = null, this.height = null, this.mimeType = null, this.codecs = null, this.main = !1, this.baseUrl = null, this.segmentBase = null, this.segmentList = null, this.segmentTemplate = null, this.contentProtections = [], this.representations = []
        }, i.shaka.dash.mpd.Role = function() {
            this.value = null
        }, i.shaka.dash.mpd.ContentComponent = function() {
            this.id = null, this.lang = null, this.contentType = null
        }, i.shaka.dash.mpd.Representation = function() {
            this.id = null, this.lang = null, this.bandwidth = null, this.width = null, this.height = null, this.mimeType = null, this.codecs = null, this.baseUrl = null, this.segmentBase = null, this.segmentList = null, this.segmentTemplate = null, this.contentProtections = []
        }, i.shaka.dash.mpd.ContentProtection = function() {
            this.schemeIdUri = null, this.value = null, this.children = [], this.pssh = null
        }, i.shaka.dash.mpd.CencPssh = function() {
            this.psshBox = null, this.parsedPssh = null
        }, i.shaka.dash.mpd.BaseUrl = function() {
            this.url = null
        }, i.shaka.dash.mpd.Location = function() {
            this.url = null
        }, i.shaka.dash.mpd.SegmentBase = function() {
            this.baseUrl = null, this.timescale = 1, this.presentationTimeOffset = null, this.indexRange = null, this.representationIndex = null, this.initialization = null
        }, i.shaka.dash.mpd.SegmentBase.prototype.clone = function() {
            var e = i.shaka.dash.mpd,
                t = new i.shaka.dash.mpd.SegmentBase;
            return t.baseUrl = this.baseUrl ? new i.goog.Uri(this.baseUrl) : null, t.timescale = this.timescale, t.presentationTimeOffset = this.presentationTimeOffset, t.indexRange = e.clone_(this.indexRange), t.representationIndex = e.clone_(this.representationIndex), t.initialization = e.clone_(this.initialization), t
        }, i.shaka.dash.mpd.RepresentationIndex = function() {
            this.url = null, this.range = null
        }, i.shaka.dash.mpd.RepresentationIndex.prototype.clone = function() {
            var e = i.shaka.dash.mpd,
                t = new i.shaka.dash.mpd.RepresentationIndex;
            return t.url = this.url ? new i.goog.Uri(this.url) : null, t.range = e.clone_(this.range), t
        }, i.shaka.dash.mpd.Initialization = function() {
            this.url = null, this.range = null
        }, i.shaka.dash.mpd.Initialization.prototype.clone = function() {
            var e = i.shaka.dash.mpd,
                t = new i.shaka.dash.mpd.Initialization;
            return t.url = this.url ? new i.goog.Uri(this.url) : null, t.range = e.clone_(this.range), t
        }, i.shaka.dash.mpd.SegmentList = function() {
            this.baseUrl = null, this.timescale = 1, this.presentationTimeOffset = null, this.segmentDuration = null, this.startNumber = 1, this.initialization = null, this.segmentUrls = []
        }, i.shaka.dash.mpd.SegmentList.prototype.clone = function() {
            var e = i.shaka.dash.mpd,
                t = new i.shaka.dash.mpd.SegmentList;
            return t.baseUrl = this.baseUrl ? new i.goog.Uri(this.baseUrl) : null, t.timescale = this.timescale, t.presentationTimeOffset = this.presentationTimeOffset, t.segmentDuration = this.segmentDuration, t.startNumber = this.startNumber, t.initialization = e.clone_(this.initialization), t.segmentUrls = this.segmentUrls.map(function(e) {
                return e.clone()
            }), t
        }, i.shaka.dash.mpd.SegmentUrl = function() {
            this.mediaUrl = null, this.mediaRange = null
        }, i.shaka.dash.mpd.SegmentUrl.prototype.clone = function() {
            var e = i.shaka.dash.mpd,
                t = new i.shaka.dash.mpd.SegmentUrl;
            return t.mediaUrl = this.mediaUrl ? new i.goog.Uri(this.mediaUrl) : null, t.mediaRange = e.clone_(this.mediaRange), t
        }, i.shaka.dash.mpd.SegmentTemplate = function() {
            this.timescale = 1, this.presentationTimeOffset = null, this.segmentDuration = null, this.startNumber = 1, this.mediaUrlTemplate = null, this.indexUrlTemplate = null, this.initializationUrlTemplate = null, this.timeline = null
        }, i.shaka.dash.mpd.SegmentTemplate.prototype.clone = function() {
            var e = i.shaka.dash.mpd,
                t = new i.shaka.dash.mpd.SegmentTemplate;
            return t.timescale = this.timescale, t.presentationTimeOffset = this.presentationTimeOffset, t.segmentDuration = this.segmentDuration, t.startNumber = this.startNumber, t.mediaUrlTemplate = this.mediaUrlTemplate, t.indexUrlTemplate = this.indexUrlTemplate, t.initializationUrlTemplate = this.initializationUrlTemplate, t.timeline = e.clone_(this.timeline), t
        }, i.shaka.dash.mpd.SegmentTimeline = function() {
            this.timePoints = []
        }, i.shaka.dash.mpd.SegmentTimeline.prototype.clone = function() {
            var e = new i.shaka.dash.mpd.SegmentTimeline;
            return e.timePoints = this.timePoints.map(function(e) {
                return e.clone()
            }), e
        }, i.shaka.dash.mpd.SegmentTimePoint = function() {
            this.startTime = null, this.duration = null, this.repeat = null
        }, i.shaka.dash.mpd.SegmentTimePoint.prototype.clone = function() {
            var e = new i.shaka.dash.mpd.SegmentTimePoint;
            return e.startTime = this.startTime, e.duration = this.duration, e.repeat = this.repeat, e
        }, i.shaka.dash.mpd.Range = function(e, t) {
            this.begin = e, this.end = t
        }, i.shaka.dash.mpd.Range.prototype.clone = function() {
            return new i.shaka.dash.mpd.Range(this.begin, this.end)
        }, i.shaka.dash.mpd.Mpd.TAG_NAME = "MPD", i.shaka.dash.mpd.Period.TAG_NAME = "Period", i.shaka.dash.mpd.AdaptationSet.TAG_NAME = "AdaptationSet", i.shaka.dash.mpd.Role.TAG_NAME = "Role", i.shaka.dash.mpd.ContentComponent.TAG_NAME = "ContentComponent", i.shaka.dash.mpd.Representation.TAG_NAME = "Representation", i.shaka.dash.mpd.ContentProtection.TAG_NAME = "ContentProtection", i.shaka.dash.mpd.CencPssh.TAG_NAME = "cenc:pssh", i.shaka.dash.mpd.BaseUrl.TAG_NAME = "BaseURL", i.shaka.dash.mpd.Location.TAG_NAME = "Location", i.shaka.dash.mpd.SegmentBase.TAG_NAME = "SegmentBase", i.shaka.dash.mpd.RepresentationIndex.TAG_NAME = "RepresentationIndex", i.shaka.dash.mpd.Initialization.TAG_NAME = "Initialization", i.shaka.dash.mpd.SegmentList.TAG_NAME = "SegmentList", i.shaka.dash.mpd.SegmentUrl.TAG_NAME = "SegmentURL", i.shaka.dash.mpd.SegmentTemplate.TAG_NAME = "SegmentTemplate", i.shaka.dash.mpd.SegmentTimeline.TAG_NAME = "SegmentTimeline", i.shaka.dash.mpd.SegmentTimePoint.TAG_NAME = "S", i.shaka.dash.mpd.Mpd.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd;
            this.url = new i.goog.Uri(e.baseUrl), this.id = n.parseAttr_(t, "id", n.parseString_), this.type = n.parseAttr_(t, "type", n.parseString_) || "static", this.mediaPresentationDuration = n.parseAttr_(t, "mediaPresentationDuration", n.parseDuration_), this.minBufferTime = n.parseAttr_(t, "minBufferTime", n.parseDuration_, this.minBufferTime), this.minUpdatePeriod = n.parseAttr_(t, "minimumUpdatePeriod", n.parseDuration_, this.minUpdatePeriod), this.availabilityStartTime = n.parseAttr_(t, "availabilityStartTime", n.parseDate_, this.availabilityStartTime), this.timeShiftBufferDepth = n.parseAttr_(t, "timeShiftBufferDepth", n.parseDuration_, this.timeShiftBufferDepth), this.suggestedPresentationDelay = n.parseAttr_(t, "suggestedPresentationDelay", n.parseDuration_, this.suggestedPresentationDelay);
            var r = n.parseChild_(this, t, n.BaseUrl);
            this.baseUrl = n.resolveUrl_(e.baseUrl, r ? r.url : null);
            var o = n.parseChild_(this, t, n.Location);
            o && (this.updateLocation = n.resolveUrl_(e.baseUrl, o.url)), this.periods = n.parseChildren_(this, t, n.Period)
        }, i.shaka.dash.mpd.Period.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd;
            this.id = n.parseAttr_(t, "id", n.parseString_), this.start = n.parseAttr_(t, "start", n.parseDuration_), this.duration = n.parseAttr_(t, "duration", n.parseDuration_);
            var r = n.parseChild_(this, t, n.BaseUrl);
            this.baseUrl = n.resolveUrl_(e.baseUrl, r ? r.url : null), this.segmentBase = n.parseChild_(this, t, n.SegmentBase), this.segmentList = n.parseChild_(this, t, n.SegmentList), this.segmentTemplate = n.parseChild_(this, t, n.SegmentTemplate), this.adaptationSets = n.parseChildren_(this, t, n.AdaptationSet)
        }, i.shaka.dash.mpd.AdaptationSet.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd,
                r = n.parseChild_(this, t, n.ContentComponent) || {},
                o = n.parseChild_(this, t, n.Role);
            this.id = n.parseAttr_(t, "id", n.parseString_), this.lang = n.parseAttr_(t, "lang", n.parseString_, r.lang), this.contentType = n.parseAttr_(t, "contentType", n.parseString_, r.contentType), this.width = n.parseAttr_(t, "width", n.parsePositiveInt_), this.height = n.parseAttr_(t, "height", n.parsePositiveInt_), this.mimeType = n.parseAttr_(t, "mimeType", n.parseString_), this.codecs = n.parseAttr_(t, "codecs", n.parseString_), this.main = o && "main" == o.value, this.lang && (this.lang = i.shaka.util.LanguageUtils.normalize(this.lang));
            var s = n.parseChild_(this, t, n.BaseUrl);
            this.baseUrl = n.resolveUrl_(e.baseUrl, s ? s.url : null), this.contentProtections = n.parseChildren_(this, t, n.ContentProtection), !this.contentType && this.mimeType && (this.contentType = this.mimeType.split("/")[0]), this.segmentBase = e.segmentBase ? n.mergeChild_(this, t, e.segmentBase) : n.parseChild_(this, t, n.SegmentBase), this.segmentList = e.segmentList ? n.mergeChild_(this, t, e.segmentList) : n.parseChild_(this, t, n.SegmentList), this.segmentTemplate = e.segmentTemplate ? n.mergeChild_(this, t, e.segmentTemplate) : n.parseChild_(this, t, n.SegmentTemplate), this.representations = n.parseChildren_(this, t, n.Representation), !this.mimeType && this.representations.length && (this.mimeType = this.representations[0].mimeType, !this.contentType && this.mimeType && (this.contentType = this.mimeType.split("/")[0]))
        }, i.shaka.dash.mpd.Role.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd;
            this.value = n.parseAttr_(t, "value", n.parseString_)
        }, i.shaka.dash.mpd.ContentComponent.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd;
            this.id = n.parseAttr_(t, "id", n.parseString_), this.lang = n.parseAttr_(t, "lang", n.parseString_), this.contentType = n.parseAttr_(t, "contentType", n.parseString_), this.lang && (this.lang = i.shaka.util.LanguageUtils.normalize(this.lang))
        }, i.shaka.dash.mpd.Representation.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd;
            this.id = n.parseAttr_(t, "id", n.parseString_), this.bandwidth = n.parseAttr_(t, "bandwidth", n.parsePositiveInt_), this.width = n.parseAttr_(t, "width", n.parsePositiveInt_, e.width), this.height = n.parseAttr_(t, "height", n.parsePositiveInt_, e.height), this.mimeType = n.parseAttr_(t, "mimeType", n.parseString_, e.mimeType), this.codecs = n.parseAttr_(t, "codecs", n.parseString_, e.codecs), this.lang = e.lang;
            var r = n.parseChild_(this, t, n.BaseUrl);
            this.baseUrl = n.resolveUrl_(e.baseUrl, r ? r.url : null), this.contentProtections = n.parseChildren_(this, t, n.ContentProtection), this.segmentBase = e.segmentBase ? n.mergeChild_(this, t, e.segmentBase) : n.parseChild_(this, t, n.SegmentBase), this.segmentList = e.segmentList ? n.mergeChild_(this, t, e.segmentList) : n.parseChild_(this, t, n.SegmentList), this.segmentTemplate = e.segmentTemplate ? n.mergeChild_(this, t, e.segmentTemplate) : n.parseChild_(this, t, n.SegmentTemplate), 0 == this.contentProtections.length && (this.contentProtections = e.contentProtections)
        }, i.shaka.dash.mpd.ContentProtection.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd;
            this.schemeIdUri = n.parseAttr_(t, "schemeIdUri", n.parseString_), this.value = n.parseAttr_(t, "value", n.parseString_), this.pssh = n.parseChild_(this, t, n.CencPssh), this.children = Array.prototype.slice.call(t.childNodes)
        }, i.shaka.dash.mpd.CencPssh.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd,
                r = i.shaka.util.Uint8ArrayUtils,
                o = n.getContents_(t);
            if (o) {
                this.psshBox = r.fromBase64(o);
                try {
                    this.parsedPssh = new i.shaka.util.Pssh(this.psshBox)
                } catch (s) {
                    if (!(s instanceof RangeError)) throw s
                }
            }
        }, i.shaka.dash.mpd.BaseUrl.prototype.parse = function(e, t) {
            this.url = i.shaka.dash.mpd.getContents_(t)
        }, i.shaka.dash.mpd.Location.prototype.parse = function(e, t) {
            this.url = i.shaka.dash.mpd.getContents_(t)
        }, i.shaka.dash.mpd.SegmentBase.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd;
            this.baseUrl = e.baseUrl || this.baseUrl, this.timescale = n.parseAttr_(t, "timescale", n.parsePositiveInt_, this.timescale), this.presentationTimeOffset = n.parseAttr_(t, "presentationTimeOffset", n.parseNonNegativeInt_, this.presentationTimeOffset), this.indexRange = n.parseAttr_(t, "indexRange", n.parseRange_, this.indexRange), this.representationIndex = n.parseChild_(this, t, n.RepresentationIndex) || this.representationIndex, this.initialization = n.parseChild_(this, t, n.Initialization) || this.initialization
        }, i.shaka.dash.mpd.RepresentationIndex.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd,
                r = n.parseAttr_(t, "sourceURL", n.parseString_);
            this.url = n.resolveUrl_(e.baseUrl, r), this.range = n.parseAttr_(t, "range", n.parseRange_, n.clone_(e.indexRange))
        }, i.shaka.dash.mpd.Initialization.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd,
                r = n.parseAttr_(t, "sourceURL", n.parseString_);
            this.url = n.resolveUrl_(e.baseUrl, r), this.range = n.parseAttr_(t, "range", n.parseRange_)
        }, i.shaka.dash.mpd.SegmentList.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd;
            this.baseUrl = e.baseUrl || this.baseUrl, this.timescale = n.parseAttr_(t, "timescale", n.parsePositiveInt_, this.timescale), this.presentationTimeOffset = n.parseAttr_(t, "presentationTimeOffset", n.parseNonNegativeInt_, this.presentationTimeOffset), this.segmentDuration = n.parseAttr_(t, "duration", n.parsePositiveInt_, this.segmentDuration), this.startNumber = n.parseAttr_(t, "startNumber", n.parseNonNegativeInt_, this.startNumber), this.initialization = n.parseChild_(this, t, n.Initialization) || this.initialization, this.segmentUrls = n.parseChildren_(this, t, n.SegmentUrl) || this.segmentUrls
        }, i.shaka.dash.mpd.SegmentUrl.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd,
                r = n.parseAttr_(t, "media", n.parseString_);
            this.mediaUrl = n.resolveUrl_(e.baseUrl, r), this.mediaRange = n.parseAttr_(t, "mediaRange", n.parseRange_)
        }, i.shaka.dash.mpd.SegmentTemplate.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd;
            this.timescale = n.parseAttr_(t, "timescale", n.parsePositiveInt_, this.timescale), this.presentationTimeOffset = n.parseAttr_(t, "presentationTimeOffset", n.parseNonNegativeInt_, this.presentationTimeOffset), this.segmentDuration = n.parseAttr_(t, "duration", n.parsePositiveInt_, this.segmentDuration), this.startNumber = n.parseAttr_(t, "startNumber", n.parseNonNegativeInt_, this.startNumber), this.mediaUrlTemplate = n.parseAttr_(t, "media", n.parseString_, this.mediaUrlTemplate), this.indexUrlTemplate = n.parseAttr_(t, "index", n.parseString_, this.indexUrlTemplate), this.initializationUrlTemplate = n.parseAttr_(t, "initialization", n.parseString_, this.initializationUrlTemplate), this.timeline = n.parseChild_(this, t, n.SegmentTimeline) || this.timeline
        }, i.shaka.dash.mpd.SegmentTimeline.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd;
            this.timePoints = n.parseChildren_(this, t, n.SegmentTimePoint)
        }, i.shaka.dash.mpd.SegmentTimePoint.prototype.parse = function(e, t) {
            var n = i.shaka.dash.mpd;
            this.startTime = n.parseAttr_(t, "t", n.parseNonNegativeInt_), this.duration = n.parseAttr_(t, "d", n.parseNonNegativeInt_), this.repeat = n.parseAttr_(t, "r", n.parseNonNegativeInt_)
        }, i.shaka.dash.mpd.resolveUrl_ = function(e, t) {
            var n = t ? new i.goog.Uri(t) : null;
            return e ? n ? e.resolve(n) : e : n
        }, i.shaka.dash.mpd.mergeChild_ = function(e, t, n) {
            var r = i.shaka.dash.mpd,
                o = r.clone_(n),
                s = r.findChild_(t, n.constructor.TAG_NAME);
            return s && o.parse(e, s), o
        }, i.shaka.dash.mpd.parseChild_ = function(e, t, n) {
            var r = i.shaka.dash.mpd,
                o = null,
                s = r.findChild_(t, n.TAG_NAME);
            return s && (o = new n, o.parse(e, s)), o
        }, i.shaka.dash.mpd.findChild_ = function(e, t) {
            for (var n = null, i = 0; i < e.childNodes.length; i++)
                if (e.childNodes[i].tagName == t) {
                    if (n) return null;
                    n = e.childNodes[i]
                }
            return n
        }, i.shaka.dash.mpd.parseChildren_ = function(e, t, n) {
            for (var i = [], r = 0; r < t.childNodes.length; r++)
                if (t.childNodes[r].tagName == n.TAG_NAME) {
                    var o = new n;
                    o.parse.call(o, e, t.childNodes[r]), i.push(o)
                }
            return i
        }, i.shaka.dash.mpd.getContents_ = function(e) {
            var t = e.firstChild;
            return t.nodeType != Node.TEXT_NODE ? null : t.nodeValue
        }, i.shaka.dash.mpd.clone_ = function(e) {
            return e ? e.clone() : null
        }, i.shaka.dash.mpd.parseAttr_ = function(e, t, n, i) {
            var r = n(e.getAttribute(t));
            return null != r ? r : void 0 !== i ? i : null
        }, i.shaka.dash.mpd.parseDate_ = function(e) {
            if (!e) return null;
            var t = Date.parse(e);
            return isNaN(t) ? null : Math.floor(t / 1e3)
        }, i.shaka.dash.mpd.parseDuration_ = function(e) {
            if (!e) return null;
            var t = "^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$",
                n = new RegExp(t).exec(e);
            if (!n) return null;
            var r = 0,
                o = i.shaka.dash.mpd.parseNonNegativeInt_(n[1]);
            o && (r += 31536e3 * o);
            var s = i.shaka.dash.mpd.parseNonNegativeInt_(n[2]);
            s && (r += 2592e3 * s);
            var a = i.shaka.dash.mpd.parseNonNegativeInt_(n[3]);
            a && (r += 86400 * a);
            var c = i.shaka.dash.mpd.parseNonNegativeInt_(n[4]);
            c && (r += 3600 * c);
            var l = i.shaka.dash.mpd.parseNonNegativeInt_(n[5]);
            l && (r += 60 * l);
            var d = i.shaka.dash.mpd.parseFloat_(n[6]);
            return d && (r += d), r
        }, i.shaka.dash.mpd.parseRange_ = function(e) {
            var t = /([0-9]+)-([0-9]+)/.exec(e);
            if (!t) return null;
            var n = i.shaka.dash.mpd.parseNonNegativeInt_(t[1]);
            if (null == n) return null;
            var r = i.shaka.dash.mpd.parseNonNegativeInt_(t[2]);
            return null == r ? null : new i.shaka.dash.mpd.Range(n, r)
        }, i.shaka.dash.mpd.parsePositiveInt_ = function(e) {
            var t = window.parseInt(e, 10);
            return t > 0 ? t : null
        }, i.shaka.dash.mpd.parseNonNegativeInt_ = function(e) {
            var t = window.parseInt(e, 10);
            return t >= 0 ? t : null
        }, i.shaka.dash.mpd.parseFloat_ = function(e) {
            var t = window.parseFloat(e);
            return isNaN(t) ? null : t
        }, i.shaka.dash.mpd.parseString_ = function(e) {
            return e
        },
        function(e) {
            var t = i.core.util,
                n = function() {
                    function e(e, t) {
                        for (var n, i, r = 0; r < Math.min(e.length, t.length); r++)
                            if (e[r] !== t[r]) {
                                n = r;
                                break
                            }
                        for (var o = e.length - 1, s = t.length - 1; o >= 0 && s >= 0; o--, s--)
                            if (e[o] !== t[s]) {
                                i = s;
                                break
                            }
                        var a = t.substring(n, i + 1);
                        return Number(a)
                    }

                    function n(e) {
                        var t = e.split("/"),
                            n = t[0] + "//" + t[2] + "/";
                        return n
                    }

                    function r(e) {
                        if (e.mpdAvailabilityStartTime > e.manifestCreationTime) return -1;
                        var t = e.mpdSuggestedPresentationDelay || 0,
                            n = e.mpdTimeShiftBufferDepth || 0,
                            i = e.segmentTemplate,
                            r = i.segmentDuration / i.timescale,
                            o = e.manifestCreationTime - (e.mpdAvailabilityStartTime + e.periodStart);
                        if (0 > o) return -1;
                        var s = o - 2 * r - n;
                        0 > s && (s = 0);
                        var a = Math.ceil(s / r) * r,
                            c = o;
                        if (0 > c) return -1;
                        var l = Math.floor(c / r) * r,
                            d = l - t;
                        0 > d && (d = 0);
                        var u, h = Math.floor(d / r) * r;
                        u = h >= a ? h : a;
                        var f = u / r + 1;
                        return f += e.segmentTemplate.startNumber || 0
                    }

                    function o(e, t) {
                        for (var n = [], i = e.mediaPresentationDuration, r = 0; r < e.periods.length; r++) {
                            var o = e.periods[r];
                            if (i = o.duration || i, o.adaptationSets)
                                for (var s = 0; s < o.adaptationSets.length; s++) {
                                    var a = o.adaptationSets[s];
                                    if (a.representations)
                                        for (var c = 0; c < a.representations.length; c++) {
                                            var l = a.representations[c];
                                            l.mpdType = e.type, l.mpdAvailabilityStartTime = e.availabilityStartTime, l.mpdSuggestedPresentationDelay = e.suggestedPresentationDelay, l.mpdTimeShiftBufferDepth = e.timeShiftBufferDepth, l.periodStart = o.start, l.periodDuration = i, l.manifestCreationTime = t, n.push(l)
                                        }
                                }
                        }
                        return n
                    }

                    function s(e) {
                        if (e.baseUrl && e.baseUrl.path_) {
                            var t = e.baseUrl.path_.lastIndexOf("/");
                            return -1 !== t ? e.baseUrl.path_.substring(0, t + 1) : e.baseUrl.path_
                        }
                        return ""
                    }

                    function a(n) {
                        var i = t.UrlUtils.combine(n.urlPrefix, t.UrlUtils.combine(n.segmentBaseUrl, n.staticParsedUrlTemplate)),
                            o = Math.ceil(1800 / n.normalizedSegmentDuration),
                            s = r(n);
                        if (0 > s) return null;
                        for (var a = s + o, c = [], l = s; a > l; l++) {
                            var d = i.replace("$Number$", l);
                            c.push(d)
                        }
                        return c = {
                            segs: c,
                            generateNextSegments: function(t) {
                                for (var r = e(i, t), s = r + 1, a = s + o, c = n.segmentTemplate.segmentDuration / (n.segmentTemplate.timescale || 1), l = [], d = s; a > d; d++) {
                                    var u = i.replace("$Number$", d);
                                    l.push(u)
                                }
                                return {
                                    segs: l,
                                    duration: c
                                }
                            }
                        }
                    }

                    function c(e) {
                        for (var n = Math.ceil(e.periodDuration / e.normalizedSegmentDuration), i = e.segmentTemplate.startNumber || 1, r = i + n, o = [], s = i; r > s; s++) {
                            var a = e.staticParsedUrlTemplate.replace("$Number$", s),
                                c = t.UrlUtils.combine(e.urlPrefix, t.UrlUtils.combine(e.segmentBaseUrl, a));
                            o.push(c)
                        }
                        return {
                            segs: o
                        }
                    }

                    function l(e) {
                        var n = [],
                            i = [];
                        if (e.segmentTemplate && e.segmentTemplate.timeline && e.segmentTemplate.timeline.timePoints && e.segmentTemplate.timeline.timePoints.length > 0)
                            for (var r = null, o = 0; o < e.segmentTemplate.timeline.timePoints.length; o++) {
                                var s = e.segmentTemplate.timeline.timePoints[o],
                                    a = [],
                                    c = s.startTime || r || 0;
                                r = c + s.duration * (s.repeat || 1);
                                for (var l = c, d = 0; d < (s.repeat || 1); l += s.duration, d++) {
                                    var u = s.duration / (e.segmentTemplate.timescale || 1);
                                    i.push(u);
                                    var h = e.staticParsedUrlTemplate.replace("$Time$", l),
                                        f = t.UrlUtils.combine(e.urlPrefix, t.UrlUtils.combine(e.segmentBaseUrl, h));
                                    a.push(f)
                                }
                                n = n.concat(a)
                            }
                        return {
                            segs: n,
                            durations: i
                        }
                    }

                    function d(e) {
                        var t;
                        t = e.periodDuration ? c(e) : a(e);
                        for (var n = e.segmentTemplate.segmentDuration / (e.segmentTemplate.timescale || 1), i = [], r = 0; r < t.segs.length; r++) i.push(n);
                        return t.durations = i, t
                    }

                    function u(e) {
                        var n = s(e);
                        if (e.segmentList && e.segmentList.segmentUrls && e.segmentList.segmentUrls.length > 0) {
                            for (var i = e.segmentList.segmentDuration / (e.segmentList.timescale || 1), r = [], o = 0; o < e.segmentList.segmentUrls.length; o++) r.push(i);
                            var a = e.segmentList.segmentUrls.map(function(n) {
                                var i = t.UrlUtils.combine(e.urlPrefix, t.UrlUtils.combine(e.segmentBaseUrl, n.mediaUrl.path_));
                                return i
                            });
                            return {
                                segs: a,
                                durations: r
                            }
                        }
                        if (e.segmentTemplate && e.segmentTemplate.mediaUrlTemplate) {
                            if (e.staticParsedUrlTemplate = e.segmentTemplate.mediaUrlTemplate.replace("$Bandwidth$", e.bandwidth).replace("$RepresentationID$", e.id), e.normalizedSegmentDuration = e.segmentTemplate.timescale ? e.segmentTemplate.segmentDuration / e.segmentTemplate.timescale : e.segmentTemplate.segmentDuration, e.segmentBaseUrl = n, -1 !== e.staticParsedUrlTemplate.indexOf("$Time$")) return l(e);
                            if (-1 !== e.staticParsedUrlTemplate.indexOf("$Number$")) {
                                var c = d(e);
                                if (c) return c
                            }
                            return []
                        }
                        return []
                    }

                    function h(e, t, n) {
                        for (var i = {}, r = 0; r < t.length; r++) {
                            var o = t[r];
                            o.urlPrefix = e;
                            var s = u(o),
                                a = "representation_" + r + "_" + o.id,
                                c = {
                                    segments: s.segs || [],
                                    durations: s.durations || [],
                                    mode: n,
                                    generateNextSegmentsFunc: s.generateNextSegments
                                };
                            i[a] = c
                        }
                        return i
                    }

                    function f(e, t) {
                        var r = i.shaka.dash.mpd.parseMpd(t, e);
                        if (!r) return null;
                        var s = (new Date).getTime() / 1e3,
                            a = o(r, s),
                            c = n(e),
                            l = p(t) ? "live" : "vod",
                            d = h(c, a, l);
                        return d
                    }

                    function p(e) {
                        var t = i.shaka.dash.mpd.parseMpd(e, "http://dummy.com/");
                        return "dynamic" === t.type
                    }
                    return {
                        extractPlaylistsData: f,
                        isLiveMod: p
                    }
                },
                r = n();
            e.MPDPlaylistParser = r
        }(i.core.util),
        function(e) {
            var t = function() {
                    function e(e) {
                        var t = e.split("/");
                        return t[t.length - 1] = "", t.join("/")
                    }

                    function t(e) {
                        var t = document.createElement("a");
                        return t.href = e, t.protocol + "//" + t.hostname
                    }

                    function n(n, r) {
                        r = r.toString();
                        var o = e(n),
                            s = t(n),
                            a = r.split("\n"),
                            c = a.filter(function(e) {
                                return "#" !== e[0] && "" !== e
                            }),
                            l = c.map(function(e) {
                                return "/" === e[0] ? e = s + e : o && -1 === e.indexOf(o) && -1 === e.indexOf("://") && (e = o + e), i.config.ZIXI_DIGEST && (e = i.core.util.urlDigest.zixi(e)), e
                            });
                        return l
                    }

                    function r(e) {
                        e = e.toString();
                        var t = e.split("\n"),
                            n = t.filter(function(e) {
                                return -1 !== e.indexOf("#EXTINF")
                            }).map(function(e) {
                                var t = e.indexOf(",");
                                return -1 === t ? Number(e.substring(8)) : Number(e.substring(8, t))
                            });
                        return n
                    }

                    function o(e) {
                        for (var t, n, i = e.toString().split("\n"), r = 0; r < i.length; r++)
                            if (t = i[r], t.indexOf("#EXT-X-MEDIA-SEQUENCE:") > -1) {
                                n = t;
                                break
                            }
                        var o = 0;
                        void 0 !== n && (o = +n.substr(22));
                        var s = i.filter(function(e) {
                            return -1 !== e.indexOf("#EXTINF")
                        }).map(function(e, t) {
                            return o + t
                        });
                        return s
                    }

                    function s(t, n) {
                        var r = e(t),
                            o = n.split("\n"),
                            s = o.filter(function(e) {
                                return -1 === e.indexOf("#") && !!e.match(/\.(m3u8)(.*)?/)
                            }),
                            a = s.map(function(e) {
                                return r && -1 === e.indexOf(r) && -1 === e.indexOf("://") && (e = r + e), i.config.ZIXI_DIGEST && (e = i.core.util.urlDigest.zixi(e)), e
                            });
                        return a
                    }

                    function a(e, t) {
                        var i = s(e, t);
                        if (i && i.length > 0) {
                            for (var a = Object.create(null), l = 0; l < i.length; l++) {
                                var d = i[l];
                                a[d] = null
                            }
                            return a
                        }
                        var u = n(e, t),
                            h = r(t),
                            f = o(t),
                            p = c(t) ? "live" : "vod",
                            g = {
                                segments: u,
                                durations: h,
                                seqs: f,
                                mode: p
                            },
                            m = {};
                        return m[e] = g, m
                    }

                    function c(e) {
                        e = e.toString();
                        var t = Math.max(0, e.length - 15);
                        return -1 === e.indexOf("#EXT-X-ENDLIST", t)
                    }
                    return {
                        extractPlaylistsData: a,
                        isLiveMod: c
                    }
                },
                n = t();
            e.M3U8PlaylistParser = n
        }(i.core.util),
        function(e) {
            var t = function() {
                    function e(e) {
                        if (e.responseType && "text" !== e.responseType) return !1;
                        var n = e._url;
                        return t(n) ? !0 : !1
                    }

                    function t(e) {
                        return e.indexOf("m3u8") > -1 ? i.core.util.M3U8PlaylistParser : e.indexOf("mpd") > -1 ? i.core.util.MPDPlaylistParser : null
                    }
                    return {
                        isPlaylistCandidate: e,
                        getParser: t
                    }
                },
                n = t();
            e.PlaylistParserFactory = n
        }(i.core.util),
        function(e) {
            e.Playlist = function(e) {
                function t(e, t, n) {
                    for (var i = t; n > i; i++) {
                        var r = e.segments[i],
                            o = {
                                duration: e.durations[i],
                                seqs: e.seqs[i]
                            };
                        p[r] = o
                    }
                }

                function n(e) {
                    var n = e.segments;
                    if (n && 0 !== n.length && (-1 === f.indexOf(n[0]) || -1 === f.indexOf(n[n.length - 1]))) {
                        if (-1 !== f.indexOf(n[0])) {
                            for (var i = 0; i < n.length && -1 !== f.indexOf(n[i]); i++);
                            t(e, i, n.length);
                            var r = n.slice(i);
                            return void(f = f.concat(r))
                        }
                        if (-1 !== f.indexOf(n[n.length - 1])) {
                            for (var i = 0; i < n.length && -1 === f.indexOf(n[i]); i++);
                            t(e, 0, i);
                            var o = n.slice(0, i);
                            return void(f = o.concat(f))
                        }
                        t(e, 0, n.length), f = n.slice()
                    }
                }

                function i() {
                    return f
                }

                function r(e) {
                    return f.indexOf(e)
                }

                function o(e) {
                    var t = f.indexOf(e);
                    return 0 === f.length || t === f.length - 1 ? null : -1 === t ? f[0] : f[t + 1]
                }

                function s(e) {
                    var t = f.indexOf(e);
                    if (-1 !== t) {
                        f.splice(0, t)
                    }
                }

                function a(e, n) {
                    var i = r(e) + 1,
                        o = i + n;
                    if (o >= f.length && h) {
                        for (var s = f[f.length - 1], a = h(s), c = [], l = 0; l < a.segs.length; l++) c[l] = a.duration;
                        var d = {
                            segments: a.segs,
                            durations: c
                        };
                        t(d, 0, a.segs.length), f = f.concat(a.segs)
                    }
                    return f.slice(i, o)
                }

                function c(e, t) {
                    var n = a(e, t),
                        i = n.map(function(e) {
                            var t = p[e];
                            return {
                                segment: e,
                                segmentData: t
                            }
                        });
                    return i
                }

                function l() {
                    return g
                }

                function d(e) {
                    var t = p[e];
                    return {
                        segment: e,
                        segmentData: t
                    }
                }

                function u() {
                    return f[f.length - 1]
                }
                var h = e.generateNextSegments,
                    f = [],
                    p = Object.create(null),
                    g = e.mode;
                return n(e), {
                    getSegments: i,
                    addSegments: n,
                    getIndex: r,
                    getNextSegmentUrl: o,
                    deleteToSegment: s,
                    getSegmentsInterval: a,
                    getSegmentsDataInterval: c,
                    getMode: l,
                    getSegmentData: d,
                    getNewestSegment: u
                }
            }
        }(i.core.playlist),
        function(e) {
            e.PlaylistsHandler = function() {
                function e() {
                    return b
                }

                function t(e, t) {
                    if (!t) return [];
                    void 0 !== b[e] ? b[e].addSegments(t) : b[e] = i.core.playlist.Playlist(t);
                    for (var n = 0; n < t.segments.length; n++) {
                        var r = t.segments[n];
                        S[r] = e
                    }
                    return t.segments
                }

                function n() {
                    return S[T]
                }

                function r() {
                    return T
                }

                function o(e) {
                    w.segment = e, w.timeStamp = Date.now()
                }

                function s(e) {
                    T = e
                }

                function a(e) {
                    R = e
                }

                function c(e) {
                    var t = S[e],
                        n = b[t];
                    n.deleteToSegment(e)
                }

                function l(e) {
                    var t = S[e],
                        n = b[t];
                    return n.getNextSegmentUrl(e)
                }

                function d(e) {
                    if (!T) return null;
                    var t = S[T],
                        n = b[t],
                        i = n.getIndex(e);
                    if (-1 === i) return null;
                    var r = n.getIndex(T);
                    return i - r
                }

                function u(e) {
                    if (!T || 0 >= e) return [];
                    var t = S[T],
                        n = b[t],
                        i = n.getSegmentsInterval(T, e);
                    return i
                }

                function h(e) {
                    e || (e = S[T]);
                    var t = b[e];
                    if (t) return t.getNewestSegment()
                }

                function f(e) {
                    if (!T || 0 >= e) return null;
                    var t = S[T],
                        n = b[t],
                        i = n.getSegmentsDataInterval(T, e);
                    i.forEach(function(e) {
                        e.segmentData.playlistName = t
                    });
                    var r = {
                        segmentsData: i,
                        playlistName: t
                    };
                    return r
                }

                function p() {
                    if (!T) return !1;
                    var e = S[T],
                        t = b[e],
                        n = t.getIndex(T);
                    return n > -1
                }

                function g(e, n) {
                    var r = i.core.util.PlaylistParserFactory.getParser(e);
                    if (!r) return [];
                    var o = r.extractPlaylistsData(e, n);
                    if (!o) return [];
                    var s = [];
                    for (var a in o) {
                        var c = o[a],
                            l = t(a, c);
                        l && l.length > 0 && (s = s.concat(l))
                    }
                    return s
                }

                function m() {
                    for (var e in b)
                        if ("live" === b[e].getMode()) return !0;
                    return !1
                }

                function _(e) {
                    var t = S[e],
                        n = b[t],
                        i = n.getSegmentData(e);
                    return i.segmentData.playlistName = t, i
                }

                function E() {
                    var e = w.segment;
                    if (!e) return null;
                    var t = _(e);
                    if ("live" !== b[t.segmentData.playlistName].getMode()) return null;
                    var n = (Date.now() - w.timeStamp) / 1e3;
                    n = Math.min(n, t.segmentData.duration);
                    for (var i = t.segmentData.duration - n, r = S[e], o = b[r], s = o.getSegments(), a = s.indexOf(e), c = 0, l = a + 1; l < s.length; l++) {
                        var d = s[l],
                            u = _(d);
                        c += u.segmentData.duration
                    }
                    return c += i, Math.round(c)
                }

                function v(e) {
                    if (!R) return 0;
                    var t = S[e],
                        n = b[t],
                        r = n.getIndex(R),
                        o = n.getIndex(e),
                        s = n.getSegments();
                    if (-1 === r || -1 === o) return i.warn("couldnt find lastRequestSegment or segment in playlist " + R + " " + e), 0;
                    for (var a = 0, c = r + 1; o > c; c++) {
                        var l = _(s[c]);
                        a += l.segmentData.duration
                    }
                    return a
                }
                var b = Object.create(null),
                    S = Object.create(null),
                    T = null,
                    R = null,
                    w = {
                        segment: null,
                        timeStamp: null
                    };
                return radio("external.playback").subscribe(function(e) {
                    e.currentSegment && o(e.currentSegment)
                }), i.feature.isEnabledAndInitialized(i.config.FEATURE_REPORT_LIVE_DELAY_KEY) && setInterval(function() {
                    var e = E();
                    null !== e && radio("playbackDelay").broadcast(e)
                }, i.config.DELAY_REPORT_INTERVAL), {
                    getPlaylists: e,
                    getCurrentPlaylist: n,
                    getLastRequestedSegment: r,
                    setLastRequestedSegment: s,
                    setLastLoadedSegment: a,
                    deleteToSegment: c,
                    getNextSegmentUrl: l,
                    getPositionRelativeToLastRequested: d,
                    getNextSegmentsWindow: u,
                    getNewestSegment: h,
                    getNextSegmentsDataWindow: f,
                    lastRequestedSegmentExists: p,
                    extractSegments: g,
                    updatePlaylist: t,
                    hasLivePlaylist: m,
                    getSegmentData: _,
                    getDurationFromLastLoadedToSegment: v
                }
            }
        }(i.core.playlist),
        function(e) {
            var t = function(e) {
                function t(e, t) {
                    var n = e.querySelector("MPD").getAttribute("suggestedPresentationDelay");
                    if (n) {
                        var r = i.core.util.durationToSeconds(n);
                        0 > r && (r = 0), t = Math.min(t, r)
                    }
                    for (var o = null, s = e.querySelectorAll("SegmentTemplate"), a = 0; a < s.length; a++) {
                        var c = s[a],
                            l = c.getAttribute("startNumber");
                        if (l && l > 0) {
                            o = e;
                            var d = c.getAttribute("duration"),
                                u = c.getAttribute("timescale"),
                                h = u ? d / u : d,
                                f = Math.floor(t / h),
                                p = Math.max(0, l - f);
                            c.setAttribute("startNumber", p)
                        }
                    }
                    return o
                }

                function n(e, t) {
                    var n = e.documentElement.getAttribute("availabilityStartTime");
                    if (!n) return e;
                    var i = new Date(n);
                    return i.setSeconds(i.getSeconds() + t), e.documentElement.setAttribute("availabilityStartTime", i.toISOString()), e
                }

                function r(e, i) {
                    var r = t(e, i);
                    return r ? r : n(e, i)
                }

                function o(e, t) {
                    for (var n = e.getAttribute("d"), i = e.getAttribute("r") || 0; i >= 0 && t > 0;) t -= n, i--;
                    return e.setAttribute("r", i), t
                }

                function s(e, t) {
                    for (var n = e.getAttribute("timescale"), i = t * n, r = e.querySelector("SegmentTimeline"), s = r.querySelectorAll("S"); i > 0 && s.length > 0;) {
                        var a = s[s.length - 1];
                        if (i = o(a, i), a.getAttribute("r") < 0) {
                            if (!(s.length > 1)) {
                                a.setAttribute("r", 0);
                                break
                            }
                            r.removeChild(a)
                        }
                        s = r.querySelectorAll("S")
                    }
                }

                function a(e, t) {
                    for (var n = e.querySelectorAll("SegmentTemplate"), i = 0; i < n.length; i++) {
                        var r = n[i];
                        s(r, t)
                    }
                    return e
                }

                function c(e, t) {
                    for (var n = Number(e.getAttribute("duration")), i = e.getAttribute("timescale"), r = i ? Number(i) : 1, o = n / r, s = Math.floor(t / o), a = e.querySelectorAll("SegmentURL"), c = a.length > s ? s : a.length - 1, l = a.length - 1; c > 0; l--, c--) e.removeChild(a[l])
                }

                function l(e, t) {
                    for (var n = e.querySelectorAll("SegmentList"), i = 0; i < n.length; i++) {
                        var r = n[i];
                        c(r, t)
                    }
                    return e
                }

                function d(e, t) {
                    var n = e.documentElement.outerHTML;
                    return -1 !== n.indexOf("$Time$") && (e = a(e, t)), -1 !== n.indexOf("$Number$") && (e = r(e, t)), -1 !== n.indexOf("SegmentList") && (e = l(e, t)), e.documentElement.outerHTML
                }

                function u(e, t, n) {
                    var r = n - i.config.SEGMENTS_AFTER_PRUNE + 1;
                    if (0 >= r) return e;
                    var o = e.indexOf(t[0]) - 1,
                        s = e.indexOf(t[r]) - 1,
                        a = e.slice(0, o),
                        c = e.slice(s),
                        l = a.concat(c);
                    return l = l.map(function(e) {
                        if (-1 !== e.indexOf("#EXT-X-MEDIA-SEQUENCE")) {
                            var t = +e.match(/\d+/)[0];
                            e = "#EXT-X-MEDIA-SEQUENCE: " + (t + r)
                        }
                        return e
                    })
                }

                function h(e) {
                    if (i.config.EXTERNAL_MEDIA_LIVE_START_POS && -1 !== i.config.EXTERNAL_MEDIA_LIVE_START_POS) return p;
                    var t = i.core.util.M3U8PlaylistParser.extractPlaylistsData("", p)[""];
                    if (!t || "live" !== t.mode) return p;
                    if (!t || void 0 === t.durations) return p;
                    for (var n = 0, r = t.durations.length; e > n && r > 0;) n += t.durations[r - 1], r--;
                    if (r = Math.max(r, i.config.MIN_NUMBER_OF_REMAINING_SEGMENTS), t.segments.length <= r) return p;
                    var o, s = p.split("\n").map(function(e) {
                            return "," === e[e.length - 1] ? e.substring(0, e.length - 1) : e
                        }),
                        a = t.segments[r],
                        c = s.indexOf(a) - 1,
                        l = s.slice(0, c);
                    return o = i.config.FEATURE_PRUNE_SEGMENTS_FROM_START ? u(l, t.segments, r - 1) : l, o.join("\n")
                }

                function f(e) {
                    if ("string" != typeof p || !p || 0 === p.length || 0 === e) return p;
                    if (p.indexOf("#EXTM3U") > -1) return h(e);
                    var t = new DOMParser,
                        n = t.parseFromString(p, "application/xml"),
                        i = n.querySelector("MPD");
                    if (i && "dynamic" === i.getAttribute("type")) {
                        var r = d(n, e);
                        return r
                    }
                    return p
                }
                var p = e;
                return {
                    delayManifest: f
                }
            };
            e.ManifestManipulator = t
        }(i.core.util),
        function(e) {
            function t(e, t) {
                var n = Object.create(null);
                for (var i in e) n[i] = e[i];
                return n.currentTarget = t, n
            }

            function n(e, n) {
                return e ? function() {
                    if (arguments.length > 0) {
                        var i = t(arguments[0], n);
                        e.call(n, i)
                    } else e.call(n)
                } : null
            }

            function r(e, t, n) {
                var i = new e;
                for (var r in t) void 0 === i[r] && (i[r] = t[r]);
                return i.open("GET", t._url), o(i, t, n), i
            }

            function o(e, t, i) {
                e.addEventListener("readystatechange", function(n) {
                    for (var r in this) "responseXML" !== r && "responseText" !== r && "function" != typeof e[r] && ("response" === r && 4 === n.currentTarget.readyState && i ? t[r] = i(e[r]) : t[r] = e[r]), "responseXML" !== r || "" !== e.responseType && "document" !== e.responseType || (t[r] = e[r]), "responseText" !== r || "" !== e.responseType && "text" !== e.responseType || 4 === n.currentTarget.readyState && (i ? t[r] = i(e[r]) : t[r] = e[r]);
                    var o = this.getAllResponseHeaders();
                    o && t.setResponseHeaders(o)
                }), e.onreadystatechange = t.onreadystatechange ? t.onreadystatechange.bind(t) : null, e.responseType = t.responseType, e.onloadstart = n(t.onloadstart, t), e.onprogress = n(t.onprogress, t), e.onabort = n(t.onabort, t), e.onerror = n(t.onerror, t), e.onload = n(t.onload, t), e.ontimeout = n(t.ontimeout, t), e.onloadend = n(t.onloadend, t);
                for (var r in t.eventListeners)
                    for (var o = 0; o < t.eventListeners[r].length; o++) e.addEventListener(r, n(t.eventListeners[r][o], t))
            }

            function s() {
                function e(e, t) {
                    return r(XMLHttpRequest, e, t)
                }
                return {
                    create: e
                }
            }

            function a() {
                function e(e, t) {
                    return r(i.Request, e, t)
                }
                return {
                    create: e
                }
            }
            e.requestToXhr = s(), e.requestToRequest = a(), e.copyRequestEvents = o
        }(i.core.util),
        function(e) {
            function t() {
                function e(e, t) {
                    r[e] = t
                }

                function t(e) {
                    return r[e]
                }

                function n(e) {
                    r[e] = null
                }

                function i() {
                    r = Object.create(null)
                }
                var r = Object.create(null);
                return {
                    save: e,
                    load: t,
                    remove: n,
                    clear: i
                }
            }
            e.createPlaylistCache = t
        }(i.core.util),
        function(e) {
            function t(e, t) {
                function n(e) {
                    var t = {
                        type: "fileDownloaded",
                        url: e.currentTarget._url,
                        loaded: e.loaded,
                        p2p: e.loadedP2P,
                        http: e.loadedHTTP,
                        waste: e.loadedP2P + e.loadedHTTP - e.total,
                        fileSize: e.total,
                        downloadTimeMS: Date.now() - e.currentTarget.timestamp
                    };
                    window.P2PPerformanceUpdate && window.P2PPerformanceUpdate(t)
                }

                function r() {
                    var e = new i.Request({
                            downloadMode: s.downloadMode || "p2p",
                            origin: "preload"
                        }),
                        t = s.segment;
                    return e._segmentData = s, e.mediaPrefetch = !0, e.responseType = "blob", e.open("GET", t), e.onswarmstatechange = function(e) {
                        a.onswarmstatechange && a.onswarmstatechange(e)
                    }, e.onerror = function(e) {
                        i.info("onerror prefetching resource: " + t), a.onerror && a.onerror(e)
                    }, e.onabort = function(e) {
                        a.onabort && a.onabort(e)
                    }, e.onload = function(e) {
                        i.info(e), i.info("onload " + t), n(e), a.onload && a.onload(e)
                    }, i.info("requesting " + t), e
                }

                function o() {
                    return c.send(), c
                }
                var s = e,
                    a = t,
                    c = r();
                return {
                    send: o
                }
            }
            e.PrefetchRequestSender = t
        }(i.core.util),
        function(e) {
            function t(e, t) {
                function s(e, t) {
                    i.info("prefetching " + e.segment + " in p2p"), e.downloadMode = "p2p";
                    var s = {
                            onswarmstatechange: function(e) {
                                v.requestSwarmStateChanged(e)
                            },
                            onerror: function(e) {
                                S.reportRequestDone(n), t()
                            },
                            onabort: function(e) {
                                S.reportRequestDone(o), T.onRequestEvent("abort", e), t()
                            },
                            onload: function(e) {
                                S.reportRequestDone(r), T.onRequestEvent("load", e), 200 === e.currentTarget.status && v.saveDownloadSpeed(e.currentTarget), t()
                            }
                        },
                        a = i.core.util.PrefetchRequestSender(e, s),
                        c = a.send();
                    return S.useP2PSlot(), R[c._segmentData.segment] = c, c
                }

                function a(e) {
                    var t = new XMLHttpRequest;
                    t.open("GET", e), t.onload = function() {
                        var t = i.core.util.PlaylistParserFactory.getParser(e),
                            n = t.extractPlaylistsData(e, this.response),
                            r = Object.keys(n),
                            o = n[r[0]];
                        if (o) {
                            b.extractSegments(e, this.response), o.rawContent = this.response, o.manifestUrl = e;
                            var s = t.isLiveMod(this.response);
                            s ? h(o) : (w.save(e, this.response), p(o))
                        } else w.save(e, this.response), a(r[0])
                    }, t.send()
                }

                function c() {
                    var e = i.core.util.ManifestManipulator(E.rawContent),
                        t = e.delayManifest(i.config.LIVE_SECONDS_DELAY);
                    w.save(E.manifestUrl, t);
                    var n = i.core.util.PlaylistParserFactory.getParser(E.manifestUrl),
                        r = n.extractPlaylistsData(E.manifestUrl, t),
                        o = Object.keys(r),
                        s = r[o[0]];
                    return s
                }

                function l(e) {
                    var t = e.segments;
                    if (!t || 0 === t.length) return i.warn("delayed manifest shouldnt be empty"), null;
                    for (var n = null, r = 0; r < i.config.PLAYER_SEGMENTS_BUFFER && t.length > 0; r++) n = t.pop();
                    return n
                }

                function d() {
                    var e = c(),
                        t = l(e);
                    if (!t) return 0;
                    for (var n = E.segments.indexOf(t), i = 0, r = n; r < E.segments.length; r++) {
                        var o = T.getAvgDownloadTime(E.manifestUrl),
                            s = E.durations[r],
                            a = s * o;
                        if (i >= a) break;
                        i += s
                    }
                    return r
                }

                function u() {
                    if (!A) {
                        for (var e = null, t = d(); t < E.segments.length && (e = E.segments[t], R[e]); t++);
                        if (e)
                            for (var n = g(e), i = S.availableP2PSlots(); t < E.segments.length && i > 0; t++) {
                                var r = n.segmentsData.shift();
                                s(r, function() {
                                    u()
                                }), i--
                            }
                    }
                }

                function h(e) {
                    E = e, u(), A || setTimeout(function() {
                        a(e.manifestUrl)
                    }, i.config.PREFETCH_LIVE_INTERVAL_MS)
                }

                function f(e) {
                    if (!A)
                        for (var t = S.availableP2PSlots(); t > 0 && e.length > 0;) {
                            var n = e.shift();
                            s(n, function() {
                                f(e)
                            }), t--
                        }
                }

                function p(e) {
                    if (e.segments && 0 !== e.segments.length) {
                        var t = e.segments[0],
                            n = g(t);
                        f(n.segmentsData)
                    }
                }

                function g(e) {
                    var t = b.getSegmentData(e);
                    b.setLastRequestedSegment(e);
                    var n = b.getNextSegmentsDataWindow(i.config.SEGMENTS_TO_PREFETCH_BEFORE_PLAY);
                    return n.segmentsData.unshift(t), n
                }

                function m(e) {
                    a(e), setTimeout(function() {
                        _(), w.clear()
                    }, 1e3 * i.config.STOP_PREFETCH_AFTER_SECONDS)
                }

                function _() {
                    A = !0, Object.keys(R).forEach(function(e) {
                        var t = R[e];
                        4 !== t.readyState && t.abort()
                    })
                }
                var E, v = t,
                    b = e.playlistsHandler,
                    S = e.prefetchSlotsHandler,
                    T = e.prefetchSpeedEstimator,
                    R = Object.create(null),
                    w = e.playlistsCache,
                    A = !1;
                return {
                    startPrefetch: m,
                    stopPrefetch: _
                }
            }
            var n = "error",
                r = "load",
                o = "abort";
            e.prePlayPrefetcher = t
        }(i.core.util),
        function(e) {
            function t() {
                function e(e, t) {
                    var r = e.segmentData.playlistName,
                        s = e.segmentData.duration,
                        a = t / 1e3;
                    o[r] || (o[r] = []), o[r].unshift({
                        duration: s,
                        downloadTime: a
                    }), o[r].length > n && o[r].splice(i.config.TIME_ESTIMATION_LIST_LENGTH, i.config.TIME_ESTIMATION_LIST_LENGTH)
                }

                function t(e) {
                    if (!o[e] || 0 === o[e].length) return i.config.INITIAL_DL_SECS_ESTIMATION;
                    for (var t = o[e], n = 0, r = 0, s = 0; s < Math.min(i.config.TIME_ESTIMATION_LIST_LENGTH, t.length); s++) {
                        var a = t[s];
                        n += a.duration, r += a.downloadTime
                    }
                    var c = r / n;
                    return c
                }

                function r(t, n) {
                    var i = n.currentTarget,
                        r = Date.now() - i._startTime;
                    if ("load" === t) e(i._segmentData, r);
                    else if ("abort" === t) {
                        var o = n.total ? n.loadedP2P / n.total : 0;
                        if (0 === o) return;
                        var s = r / o;
                        e(i._segmentData, s)
                    }
                }
                var o = Object.create(null);
                return {
                    onRequestEvent: r,
                    getAvgDownloadTime: t
                }
            }
            var n = 2 * i.config.TIME_ESTIMATION_LIST_LENGTH;
            e.PrefetchSpeedEstimator = t
        }(i.core.util),
        function(e) {
            function t(e) {
                function t() {
                    S++, S >= i.config.ADD_SLOT_LOADED_REQUESTS_THRESHOLD && b && d()
                }

                function s() {
                    S = 0
                }

                function a() {
                    T++, T >= i.config.REDUCE_SLOT_ABORTS_THRESHOLD && u()
                }

                function c() {
                    T = 0
                }

                function l(e) {
                    switch (p(), e) {
                        case n:
                            s();
                            break;
                        case o:
                            a(), s();
                            break;
                        case r:
                            t()
                    }
                }

                function d() {
                    if (i.config.FEATURE_LIMIT_SLOTS_BY_PEERS) {
                        var e = g(),
                            t = E();
                        t > e && (R.availableP2PSlots++, b = !1, c(), s())
                    } else R.availableP2PSlots++, b = !1, c(), s()
                }

                function u() {
                    var e = g();
                    e <= i.config.MINIMUM_P2P_SLOTS || (R.availableP2PSlots--, c(), s())
                }

                function h(e) {
                    if (i.config.FEATURE_LIMIT_SLOTS_BY_PEERS) {
                        if (0 === e) return;
                        var t = g();
                        if (e >= t) return;
                        var n = Math.min(t - e, t - i.config.MINIMUM_P2P_SLOTS);
                        R.availableP2PSlots -= n, c(), s()
                    }
                }

                function f() {
                    R.availableP2PSlots--, v++
                }

                function p() {
                    R.availableP2PSlots++, v--
                }

                function g() {
                    var e = R.availableP2PSlots + v;
                    return e
                }

                function m() {
                    return R.availableP2PSlots
                }

                function _() {
                    b = !0
                }
                var E = e,
                    v = 0,
                    b = !1,
                    S = 0,
                    T = 0,
                    R = {
                        availableP2PSlots: i.config.INITIAL_P2P_SLOTS
                    };
                return function() {
                    radio("activePeerConnectionsNumberChanged").subscribe([h, this])
                }(), {
                    availableP2PSlots: m,
                    useP2PSlot: f,
                    askForP2PSlot: _,
                    reportRequestDone: l
                }
            }
            var n = "error",
                r = "load",
                o = "abort";
            e.PrefetchSlotsHandler = t
        }(i.core.util),
        function(e) {
            function t(e, t) {
                function s(e) {
                    e.downloadMode = "p2p";
                    var t = {
                            onswarmstatechange: function(e) {
                                g.requestSwarmStateChanged(e)
                            },
                            onerror: function(e) {
                                _.reportRequestDone(n), g.onP2PPrefetchComplete()
                            },
                            onabort: function(e) {
                                radio("p2pAbort").broadcast(e.currentTarget.fileInfo.swarmId), _.reportRequestDone(o), g.onP2PPrefetchComplete(), E.onRequestEvent("abort", e)
                            },
                            onload: function(e) {
                                _.reportRequestDone(r), g.onP2PPrefetchComplete(), E.onRequestEvent("load", e), 200 === e.currentTarget.status && g.saveDownloadSpeed(e.currentTarget)
                            }
                        },
                        s = i.core.util.PrefetchRequestSender(e, t),
                        a = s.send();
                    return _.useP2PSlot(), v[a._segmentData.segment] = a, a
                }

                function a() {
                    if (!b || !b.segmentData) return 0;
                    var e = b.segmentData.duration,
                        t = (Date.now() - b.segmentData.playerAskTime) / 1e3,
                        n = e - t;
                    return n
                }

                function c(e, t) {
                    var n = 0;
                    t.forEach(function(e) {
                        v[e.segment] || n++
                    }), n > e && _.askForP2PSlot()
                }

                function l(e) {
                    if (e)
                        for (var t = a(), n = i.config.EXTERNAL_MEDIA_MAXBUFFER - t; n > 0 && e.length > 0;) {
                            var r = e.shift();
                            S[r.segment] = !0, n -= r.segmentData.duration
                        }
                }

                function d(e, t) {
                    if (S[e.segment]) return null;
                    var n = e.segmentData.duration,
                        i = e.segmentData.playlistName,
                        r = E.getAvgDownloadTime(i),
                        o = r * n;
                    if (o *= 1.15, null === t || t > o) {
                        var a = g.getSeeders(e.segment),
                            c = a ? Object.keys(a).length : 0;
                        if (c > 0 && !v[e.segment]) {
                            var l = s(e);
                            return {
                                xhr: l,
                                url: e.segment
                            }
                        }
                    }
                    return null
                }

                function u(e) {
                    var t = _.availableP2PSlots();
                    if (0 === t) return i.warn("no available p2p slots for too long"), null;
                    for (var n = e.length - 1; n >= 0; n--) {
                        var r = e[n],
                            o = d(r, null);
                        if (o) return o
                    }
                    return null
                }

                function h() {
                    var e = m.getNextSegmentsDataWindow(i.config.P2P_VOD_WINDOW);
                    if (!e || 0 === e.segmentsData.length) return [];
                    var t = e.segmentsData,
                        n = _.availableP2PSlots();
                    c(n, t);
                    for (var r = a(), o = [], s = 0, l = 0; n > s && l < t.length; l++) {
                        var h = t[l],
                            f = d(h, r);
                        f && (o.push(f), s++), r += h.segmentData.duration
                    }
                    if (0 === o.length) {
                        var p = u(t);
                        p && o.push(p)
                    }
                    return o
                }

                function f() {
                    var e = m.getNextSegmentsDataWindow(i.config.P2P_VOD_WINDOW);
                    l(e.segmentsData)
                }

                function p(e) {
                    m.setLastRequestedSegment(e), T && (f(), T = !1);
                    var t = m.getSegmentData(e);
                    t.segmentData.playerAskTime = Date.now(), b = t, delete v[t.segment]
                }
                var g = t,
                    m = e.playlistsHandler,
                    _ = e.prefetchSlotsHandler,
                    E = e.prefetchSpeedEstimator,
                    v = Object.create(null),
                    b = null,
                    S = Object.create(null),
                    T = !0;
                return {
                    prefetchSegments: h,
                    updatePlayerLastRequestedSegment: p
                }
            }
            var n = "error",
                r = "load",
                o = "abort";
            e.SegmentsPrefetcher = t
        }(i.core.util),
        function(e) {
            function t(e, t) {
                var n = i.core.util.ManifestManipulator(e),
                    r = n.delayManifest(t);
                return r
            }

            function n(e) {
                function n(e) {
                    if (e && -1 === e.indexOf(".m3u8")) {
                        r = !0;
                        var n = t(e, i.config.LIVE_SECONDS_DELAY);
                        return n
                    }
                    return e
                }

                function o(e) {
                    return e
                }
                return r ? i.core.util.requestToXhr.create(e, o) : i.core.util.requestToXhr.create(e, n)
            }
            var r = !1;
            e.createManifestRequest = n
        }(i.client),
        function(e) {
            var t = i.core.util.DownloadMode.HYBRID,
                n = i.core.util.DownloadMode.P2P,
                r = i.core.util.DownloadMode.HTTP,
                o = i.core.util.DownloadMode.DYNAMIC;
            i.core.apis.MediaFetcher = Object.subClass({
                ctor: function() {
                    this.segmentsInfo = Object.create(null), this.interceptRequests = Object.create(null), this.playlistsHandler = i.core.playlist.PlaylistsHandler(), this.playlistsCache = i.core.util.createPlaylistCache(), this.segmentsPrefetcher = null, this.prePlaySegmentsPrefetcher = null, this.requests = Object.create(null), this.numOfPeers = 0, this.httpPendingRequests = 0, this.p2pPendingRequests = 0, this.peersHave = Object.create(null), this.requestLRU = new i.core.dataStructures.LRU(null, this._scavange.bind(this), this._requestCacheTester.bind(this)), this.totalRequestSize = 0, this.downloadSpeed = [0, 0], this.playerStarted = !1, this.MAX_REQUEST_CACHE_SIZE_LIVE, this.mediaController = new i.core.media.MediaController, this.playlistXhr = null, this.playlistXhrTimer = null, radio("requestSent").subscribe([this._interceptP5Request, this]), radio("activePeerConnectionsNumberChanged").subscribe([this._changeNumOfPeers, this]), radio("receivedHaveMessage").subscribe([this._handleHaveMessage, this]), radio("receivedDontHaveMessage").subscribe([this._handleDontHaveMessage, this]), radio("connectionFailed").subscribe([this._handleConnectionFail, this]), radio("external.prePlayPrefetch").subscribe([this._prePlayPrefetch, this]), radio("peerDiscoveredSegment").subscribe([this._handleDiscoveredSegment, this]), this._initPrefetchers()
                },
                _initPrefetchers: function() {
                    var e = {
                            increaseP2PPendingRequests: this._increaseP2PPendingRequests.bind(this),
                            increaseHTTPPendingRequests: this._increaseHTTPPendingRequests.bind(this),
                            decreaseP2PPendingRequests: this._decreaseP2PPendingRequests.bind(this),
                            decreaseHTTPPendingRequests: this._decreaseHTTPPendingRequests.bind(this),
                            requestSwarmStateChanged: this._requestSwarmStateChanged.bind(this),
                            saveDownloadSpeed: this._saveDownloadSpeed.bind(this),
                            reportProgress: this.reportProgress,
                            onP2PPrefetchComplete: this._prefetch.bind(this),
                            getSeeders: function(e) {
                                var t = i.core.util.urlDigest.getNormalizedUrlHash(e);
                                return this.segmentsInfo[t]
                            }.bind(this)
                        },
                        t = function() {
                            return this.numOfPeers
                        }.bind(this),
                        n = {
                            playlistsHandler: this.playlistsHandler,
                            prefetchSlotsHandler: i.core.util.PrefetchSlotsHandler(t),
                            prefetchSpeedEstimator: i.core.util.PrefetchSpeedEstimator(),
                            playlistsCache: this.playlistsCache
                        };
                    this.segmentsPrefetcher = i.core.util.SegmentsPrefetcher(n, e), this.prePlaySegmentsPrefetcher = i.core.util.prePlayPrefetcher(n, e)
                },
                _prePlayPrefetch: function(e) {
                    i.config.FEATURE_PRE_PLAY_PREFETCH && i.Request !== XMLHttpRequest && this.prePlaySegmentsPrefetcher.startPrefetch(e)
                },
                _interceptP5Request: function(e) {
                    if (!e.mediaPrefetch)
                        if (this.interceptRequests[e._url]) this._interceptSegmentRequest(e);
                        else if (!this.interceptRequests[e._url] && i.core.util.PlaylistParserFactory.isPlaylistCandidate(e)) this.prePlaySegmentsPrefetcher.stopPrefetch(), this.playerStarted = !0, this._interceptPlaylistRequest(e);
                    else if (i.config.INTERCEPT_AES && -1 !== e._url.indexOf("aes")) {
                        var t = i.core.util.requestToXhr.create(e);
                        t.send(), e._get = !1
                    } else i.warn("didnt intercept: " + e._url)
                },
                _interceptPlaylistRequest: function(e) {
                    this.playlistXhr && (this.playlistXhr.abort(), this.playlistXhr = null), this.playlistXhrTimer && (clearInterval(this.playlistXhrTimer), this.playlistXhrTimer = null), i.info("Intercepted a playlist request"), e._get = !1;
                    var t = this.playlistsCache.load(e._url),
                        n = this;
                    if (t) return void i.core.util.envokeCallback(function() {
                        setTimeout(function() {
                            n.playlistsCache.remove(e._url)
                        }, 1e3), e.addEventListener("load", function(e) {
                            var t = e.currentTarget.status;
                            200 > t || t >= 300 || (n._measurePlaylistSpeed(e), n._parsePlaylist(e))
                        }), e.forceImmediateLoad(t)
                    }, null, this);
                    e.addEventListener("load", function(e) {
                        var t = e.currentTarget.status;
                        200 > t || t >= 300 || n._cachePlaylist(e)
                    });
                    var r = i.client.createManifestRequest(e);
                    if (r.addEventListener("load", function(e) {
                            var t = e.currentTarget.status;
                            200 > t || t >= 300 || (n._measurePlaylistSpeed(e), n._parsePlaylist(e))
                        }), i.config.PLAYLIST_SPEED_ESTIMATION && 0 === this.downloadSpeed[0] && r.addEventListener("progress", this._playlistRequestProgress.bind(this)), r.send(), i.config.PLAYLIST_TIMEOUT) {
                        var o = i.config.PLAYLIST_TIMEOUT_DURATION;
                        setTimeout(function() {
                            r.readyState < 4 && (i.info("playlist request timedout " + r._url), r.abort())
                        }.bind(this), o)
                    }
                },
                _interceptSegmentRequest: function(e) {
                    if (i.info("intercepted an interesting request: " + e._url), i.client.FailedUrls.contains(e._url)) {
                        var t = i.core.util.requestToXhr.create(e);
                        return t.addEventListener("load", this._requestLoaded.bind(this)), t.send(), void(e._get = !1)
                    }
                    i.config.FEATURE_P2P_IMPROVEMENT_ENABLED ? this.segmentsPrefetcher.updatePlayerLastRequestedSegment(e._url) : this.playlistsHandler.setLastRequestedSegment(e._url), e.addEventListener("load", this._requestLoaded.bind(this)), e.addEventListener("swarmstatechange", this._requestSwarmStateChanged.bind(this)), this._requestExist(e._url) ? this._updateRequest(e, e._url) : this._addRequest(e, e._url), this._overrideInterceptedRequest(e)
                },
                _changeNumOfPeers: function(e) {
                    this.numOfPeers = e, this.reportProgress({
                        type: "swarmChange",
                        peers: e
                    })
                },
                _handleHaveMessage: function(e, t) {
                    var n = e.hashUrl;
                    this.segmentsInfo[n] || (this.segmentsInfo[n] = Object.create(null)), this.segmentsInfo[n][t] = e.seeder ? !0 : !1, this.peersHave[t] || (this.peersHave[t] = Object.create(null)), this.peersHave[t][n] = !0, this._prefetch("p2p")
                },
                _handleDontHaveMessage: function(e, t) {
                    i.info("received" + e + " from peer" + t);
                    var n = e.hashUrl;
                    this.segmentsInfo[n] && this.segmentsInfo[n][t] && (delete this.segmentsInfo[n][t], delete this.peersHave[t][n])
                },
                _handleConnectionFail: function(e) {
                    if (this.peersHave[e]) {
                        for (var t = Object.keys(this.peersHave[e]), n = 0, i = t.length; i > n; n++) delete this.segmentsInfo[t[n]][e];
                        delete this.peersHave[e]
                    }
                },
                _playlistRequestProgress: function(e) {
                    e.currentTarget.startTime || (e.currentTarget.startTime = performance.now())
                },
                _measurePlaylistSpeed: function(e) {
                    if (i.config.PLAYLIST_SPEED_ESTIMATION && 0 === this.downloadSpeed[0]) {
                        var t = performance.now() - e.currentTarget.startTime,
                            n = 1e3 * e.total / t;
                        radio("playlistSpeedEstimation").broadcast(n)
                    }
                },
                _requestLoaded: function(e) {
                    i.info("request " + e.currentTarget._url + " loaded"), e.currentTarget.downloadMode === n ? this._decreaseP2PPendingRequests() : e.currentTarget.downloadMode === r || e.currentTarget.downloadMode === t ? this._decreaseHTTPPendingRequests() : e.currentTarget.downloadMode === o || i.error("unidentified downloadMode request loaded" + e.currentTarget.downloadMode), this.reportProgress({
                        type: "fileDownloaded",
                        url: e.currentTarget._url,
                        loaded: e.loaded,
                        p2p: e.loadedP2P,
                        http: e.loadedHTTP,
                        waste: e.loadedP2P + e.loadedHTTP - e.total,
                        fileSize: e.total,
                        downloadTimeMS: Date.now() - e.currentTarget.timestamp
                    }), 200 == e.currentTarget.status && (this.playlistsHandler.deleteToSegment(e.currentTarget._url), this.playlistsHandler.setLastLoadedSegment(e.currentTarget._url), this._saveDownloadSpeed(e.currentTarget), setTimeout(function() {
                        this._prefetch("http"), this._prefetch("p2p")
                    }.bind(this), 10))
                },
                _requestSwarmStateChanged: function(e) {
                    if (e.sent) {
                        var t = {
                            type: "swarmChange",
                            sent: e.sent
                        };
                        this.reportProgress(t)
                    }
                },
                _prefetch: function(e) {
                    if (this.playerStarted && 0 !== this.numOfPeers)
                        if (this.playlistsHandler.lastRequestedSegmentExists() || i.warn("last id player requested is not found"), i.config.FEATURE_P2P_IMPROVEMENT_ENABLED)
                            for (var t = this.segmentsPrefetcher.prefetchSegments(), n = 0; n < t.length; n++) {
                                var r = t[n];
                                this._addRequest(r.xhr, r.url)
                            } else if ("http" === e) {
                                if (this.httpPendingRequests >= i.config.MAX_HTTP_REQUESTS || 0 === i.config.MAX_HTTP_REQUESTS) return;
                                for (var o = [], s = this.playlistsHandler.getNextSegmentsWindow(i.config.HTTP_VOD_WINDOW), n = 0; n < s.length; n++) {
                                    var a = s[n];
                                    if (!this._requestExist(a)) {
                                        var c = i.core.util.urlDigest.getNormalizedUrlHash(a),
                                            l = Object.keys(this.segmentsInfo[c]).length;
                                        0 === l && o.push(a)
                                    }
                                }
                                var a = o[Math.floor(Math.random() * o.length)];
                                if (!a) return void this._prefetch("p2p");
                                i.info("prefetching " + a + " in http"), this._requestP5(a, null, {
                                    downloadMode: "http"
                                }), this._prefetch("http")
                            } else if ("p2p" === e) {
                        if (this.p2pPendingRequests >= i.config.MAX_P2P_REQUESTS || 0 === i.config.MAX_P2P_REQUESTS) return;
                        for (var o = [], d = 1, s = this.playlistsHandler.getNextSegmentsWindow(i.config.P2P_VOD_WINDOW), n = 0; n < s.length; n++) {
                            var a = s[n];
                            if (!this._requestExist(a)) {
                                var c = i.core.util.urlDigest.getNormalizedUrlHash(a),
                                    u = this.segmentsInfo[c];
                                if (u) {
                                    var l = Object.keys(u).length;
                                    l === d ? o.push(a) : l > d && (o = [a], d = l)
                                }
                            }
                        }
                        var a = o[Math.floor(Math.random() * o.length)];
                        if (!a) return;
                        i.config.DYNAMIC_PREFETCH && (e = "dynamic"), i.info("prefetching " + a + " in " + e + " mod"), this._requestP5(a, null, {
                            downloadMode: e
                        }), this._prefetch("p2p")
                    }
                },
                _requestP5: function(e, t, n) {
                    var r = new i.Request({
                        downloadMode: n.downloadMode
                    });
                    r.mediaPrefetch = !0, r.responseType = "arraybuffer", r.open("GET", e);
                    var o = this;
                    if (r.addEventListener("swarmstatechange", this._requestSwarmStateChanged.bind(this)), r.addEventListener("error", function(t) {
                            i.warn("onerror prefetching resource: " + e), o._scavange(e, r)
                        }), r.addEventListener("abort", function(e) {
                            n.downloadMode && "p2p" === n.downloadMode && radio("p2pAbort").broadcast(e.currentTarget.fileInfo.swarmId)
                        }), r.addEventListener("loadend", function(t) {
                            i.info("MediaFetcher::_requestP5:onloadend " + e, " status ", this.status), n.downloadMode && "p2p" === n.downloadMode ? o._decreaseP2PPendingRequests() : n.downloadMode && "http" === n.downloadMode && o._decreaseHTTPPendingRequests(), this.status >= 200 && this.status < 300 && (o._saveDownloadSpeed(this), o.reportProgress({
                                type: "fileDownloaded",
                                url: e,
                                loaded: t.loaded,
                                p2p: t.loadedP2P,
                                http: t.loadedHTTP,
                                waste: t.loadedP2P + t.loadedHTTP - t.total,
                                fileSize: t.total,
                                downloadTimeMS: Date.now() - t.currentTarget.timestamp
                            })), o._prefetch(n.downloadMode || "http")
                        }), i.info("MediaFetcher::_requestP5:requesting " + e), n.downloadMode && "p2p" === n.downloadMode ? (this._increaseP2PPendingRequests(), i.info("request:p2pPendingRequests = " + this.p2pPendingRequests + " , " + e)) : n.downloadMode && "http" === n.downloadMode && this._increaseHTTPPendingRequests(), this._addRequest(r, e), "dynamic" === n.downloadMode) {
                        var s = this.mediaController.getBufferLength(),
                            a = this.playlistsHandler.getDurationFromLastLoadedToSegment(e);
                        r._constraint = performance.now() + 1e3 * (s + a)
                    }
                    r.send()
                },
                _requestExist: function(e) {
                    return e in this.requests
                },
                _addRequest: function(e, t) {
                    i.info("adding request " + t + " to requests"), e.timestamp = Date.now(), this.requests[t] = e, this.requestLRU.set(t, e);
                    var n = !1;
                    e.addEventListener("readystatechange", function(e) {
                        !n && e.currentTarget.readyState >= 2 && e.lengthComputable && (this.totalRequestSize += e.total, n = !0)
                    }.bind(this))
                },
                _updateRequest: function(e, t) {
                    i.info("updating request " + t + " to requests"), e.timestamp = Date.now();
                    var r = this.requests[t];
                    r.readyState < 4 && (i.config.MERGE_REQUESTS ? (i.info("MediaFetcher::_updateRequest: merging new request to a prefetched request: " + t), i.core.util.copyRequestEvents(r, e), this._timeoutPlayerRequests(r), e._get = !1) : (i.info("aborting a prefetched request:" + t), r.abort(), this.reportProgress({
                        type: "requestAborted",
                        mode: r.downloadMode === n ? "p2p" : "http"
                    }), this._saveDownloadSpeed(r))), this.requests[t] = e, this.requestLRU.update(t, e)
                },
                _scavange: function(e, t) {
                    if (i.info("removing request" + e), !t) return void i.warn("scavanging an undefined request");
                    var n = t.getFileInfo();
                    n ? (t.abort({
                        leaveSwarm: !0
                    }), t.readyState >= 2 && (this.totalRequestSize -= n.size)) : i.warn("scavanged a request that hadnt initiated" + e), delete this.requests[e]
                },
                _requestCacheTester: function() {
                    return this.totalRequestSize > this.MAX_REQUEST_CACHE_SIZE
                },
                _cachePlaylist: function(e) {
                    i.info("caching playlist");
                    var t = e.currentTarget._url,
                        n = e.currentTarget.response;
                    this.playlistsCache.save(t, n);
                    var r = this;
                    setTimeout(function() {
                        r.playlistsCache.remove(t)
                    }, 1e3)
                },
                _parsePlaylist: function(e) {
                    if (i.info("parsing playlist"), "blob" === e.currentTarget.responseType) return void i.warn("playlist was requested as a blob", e.currentTarget._url);
                    var t = e.currentTarget._url,
                        n = e.currentTarget.response;
                    this.MAX_REQUEST_CACHE_SIZE = this.playlistsHandler.hasLivePlaylist() ? i.config.MAX_REQUEST_CACHE_SIZE_LIVE : i.config.MAX_REQUEST_CACHE_SIZE_VOD;
                    var r = this.playlistsHandler.getNewestSegment(t),
                        o = this.playlistsHandler.extractSegments(t, n),
                        s = this.playlistsHandler.getNewestSegment(t);
                    if (o && 0 !== o.length) {
                        for (var a = 0; a < o.length; a++) {
                            var c = o[a],
                                l = i.core.util.urlDigest.getNormalizedUrlHash(c);
                            this.segmentsInfo[l] || (this.segmentsInfo[l] = Object.create(null)), this.interceptRequests[c] = !0
                        }
                        if (i.info(this.segmentsInfo), i.config.PEER_LIVE_DETECTION && r && r !== s) {
                            i.info("detected new segment, sending to peers");
                            var d = this.playlistsHandler.getSegmentData(s).segmentData,
                                u = d.seqs,
                                h = new i.core.protocol.NewSegment(u);
                            radio("p2p.send.all").broadcast(h)
                        }
                        i.config.EARLY_LIVE_DETECTION && (this.playlistXhrTimer = setTimeout(function() {
                            this.playlistXhrTimer = null, this._requestPlaylist(t)
                        }.bind(this), i.config.EARLY_LIVE_DETECTION_INTERVAL)), (i.config.EARLY_LIVE_DETECTION || i.config.PEER_LIVE_DETECTION) && r && s !== r && !this._isActivePlayerRequest() && e.currentTarget.prefetch && (i.info("discovered new segment - prefetching" + s), this._requestP5(s, null, {
                            downloadMode: "dynamic"
                        }))
                    }
                },
                _overrideInterceptedRequest: function(e) {
                    var t, s = i.core.util.urlDigest.getNormalizedUrlHash(e._url),
                        a = Object.keys(this.segmentsInfo[s]).length;
                    if (0 === a ? t = 0 : a >= 1 && (t = this.downloadSpeed[1]), i.config.AGGRESSIVE_P2P && t > this.downloadSpeed[0]) i.info("override interception to p2p"), e.downloadMode = n, this._increaseP2PPendingRequests();
                    else if (i.config.SYNCED_BUFFERS) {
                        i.info("override interception to dynamic mode"), e.downloadMode = o;
                        var c = this.mediaController.getBufferLength(),
                            l = this.playlistsHandler.getDurationFromLastLoadedToSegment(e._url);
                        e._constraint = performance.now() + 1e3 * (c + l)
                    } else i.info("override interception to http"), e.downloadMode = r, this._increaseHTTPPendingRequests();
                    this._timeoutPlayerRequests(e)
                },
                _timeoutPlayerRequests: function(e) {
                    if (i.config.REQUEST_TIMEOUT) {
                        var t, o = e.downloadMode;
                        switch (o) {
                            case n:
                                t = i.config.P2P_TIMEOUT_DURATION;
                                break;
                            case r:
                                t = i.config.HTTP_TIMEOUT_DURATION;
                                break;
                            default:
                                t = i.config.HTTP_TIMEOUT_DURATION
                        }
                        i.config.REQUEST_TIMEOUT && setTimeout(function() {
                            e.readyState < 4 && (i.info("intercepted request timedout " + e._url), e.abort(), e.downloadMode === n ? this._decreaseP2PPendingRequests() : e.downloadMode === r && this._decreaseHTTPPendingRequests(), this._saveDownloadSpeed(e))
                        }.bind(this), t)
                    }
                },
                _saveDownloadSpeed: function(e) {
                    var t = e._speed;
                    if (t) {
                        if (e.downloadMode === n) var r = (i.core.util.urlDigest.getNormalizedUrlHash(e._url), 1);
                        else var r = 0;
                        this.downloadSpeed[r] = t, i.info("speed =" + t + " bucket=" + r)
                    }
                },
                _increaseHTTPPendingRequests: function() {
                    this.httpPendingRequests++
                },
                _increaseP2PPendingRequests: function() {
                    this.p2pPendingRequests++
                },
                _decreaseHTTPPendingRequests: function() {
                    this.httpPendingRequests--, this.httpPendingRequests < 0 && i.error("httpPendingRequests smaller than 0")
                },
                _decreaseP2PPendingRequests: function() {
                    this.p2pPendingRequests--, this.p2pPendingRequests < 0 && i.error("p2pPendingRequests smaller than 0")
                },
                _requestPlaylist: function(e) {
                    if (!this.playlistXhr) {
                        var t = new XMLHttpRequest;
                        t._url = e, t.prefetch = !0;
                        var n = this;
                        t.open("GET", e), t.onloadend = function(e) {
                            n.playlistXhr = !1;
                            var t = e.currentTarget.status,
                                i = e.currentTarget.response;
                            t >= 200 && 300 > t && i && n._parsePlaylist(e)
                        }, t.send(), this.playlistXhr = t
                    }
                },
                _handleDiscoveredSegment: function(e) {
                    var t = this.playlistsHandler.getCurrentPlaylist(),
                        n = this.playlistsHandler.getNewestSegment(t),
                        r = this.playlistsHandler.getSegmentData(n).segmentData.seqs;
                    e > r && (i.info("new segment discovered by a peer, downloading playlist" + r + e), this._requestPlaylist(t))
                },
                _isActivePlayerRequest: function() {
                    var e = this.playlistsHandler.getLastRequestedSegment(),
                        t = this.requests[e];
                    return t && 4 === t.readyState ? !1 : !0
                },
                reportProgress: function(e) {
                    window.P2PPerformanceUpdate && window.P2PPerformanceUpdate(e)
                }
            }), e.core.apis.MediaFetcher = new i.core.apis.MediaFetcher, e.prefetch = function(e) {
                radio("external.prePlayPrefetch").broadcast(e)
            }
        }(i),
        function(e) {
            function t(t) {
                return e.core.util.MD5.hash(t)
            }
            if (e && e.config.PIXEL_SWARM) {
                var n = window.location.href,
                    i = t(n),
                    r = new e.core.protocol.Join(i);
                radio("router.send").broadcast(r)
            }
        }(i),
        function() {
            i.core.data.CacheManager = Object.subClass({
                ctor: function() {
                    this.mb = 1048576
                },
                getRandomArbitrary: function(e, t) {
                    return Math.floor(Math.random() * (t - e) + e)
                },
                testFillLibrary: function(e, t, n) {
                    this.fillLibraryWithMultipleFiles(0, e, t, n, function(e) {
                        console.log("wrote all test files")
                    })
                },
                fillLibraryWithMultipleFiles: function(e, t, n, r, o) {
                    var s = this,
                        a = this.getRandomArbitrary(n, r);
                    if (console.log(a), e == t) o(!0);
                    else {
                        var c = Date.now();
                        i.core.data.FSio.createResource(c, function(l) {
                            console.log("started to write file with id " + c), i.core.data.FSio.write(c, new Uint8Array([]), a, function(i, l) {
                                i ? (console.log("wrote file with id " + c), s.fillLibraryWithMultipleFiles(e + 1, t, n, r, o)) : "space" === l && s.handleOutOfSpace(c, a, function() {
                                    console.log("handleOutOfSpace")
                                })
                            })
                        }, !0)
                    }
                },
                performHandleOuOfSpaceMainFunction: function(e, t, n, r, o, s, a) {
                    var c = e;
                    i.core.data.FSio.getLibraryStatistics(function(e) {
                        o = e;
                        var l = c.getFileSizeFromArray(t, o.filesStats),
                            d = c.sumFilesSizeExcludingCurrent(t, o.filesStats),
                            u = 0,
                            h = [],
                            f = 0;
                        if (n > (l + d + a) / s) c.failedToCleanUpOutOfSpace(t, o, r);
                        else {
                            for (c.sortArrayOfFilesObjectByLastModified(o.filesStats);
                                (s * n - l - a > u || (d - l - a) / 2 + n > u) && f < o.filesStats.length;)
                                if (-1 == o.filesStats[f].key.toString().indexOf(".fi"))
                                    if (t != o.filesStats[f].key && c.isSafeToDeleteFile(o.filesStats[f])) {
                                        h.push(o.filesStats[f]);
                                        var p = c.findCorrespondingFileInfo(o.filesStats, o.filesStats[f].key + ".fi");
                                        p && h.push(p), u += o.filesStats[f].size, f++
                                    } else f++;
                            else f++;
                            u >= s * n - l - a ? i.core.data.FSio.deleteFiles(h, i.core.data.FSio, function(e) {
                                e ? r && r(!0) : (i.error("deleteFiles failed for an unknown reason"), r && r(!1))
                            }) : c.failedToCleanUpOutOfSpace(t, o, r)
                        }
                    })
                },
                handleOutOfSpace: function(e, t, n) {
                    var r, o, s = this,
                        a = 0;
                    i.config.IS_FIREFOX ? (o = 2, a = 0, s.performHandleOuOfSpaceMainFunction(s, e, t, n, r, o, a)) : (o = 1, i.core.data.FSio.getUnUsedQuotaSpace(function(i) {
                        a = i, s.performHandleOuOfSpaceMainFunction(s, e, t, n, r, o, a)
                    }))
                },
                test: function() {
                    var e, t = this;
                    i.core.data.FSio.getLibraryStatistics(function(n) {
                        e = n, t.standardCleanUp(e, function(e) {
                            console.log(e)
                        })
                    })
                },
                standardCleanUp: function(e, t) {
                    var n = 0,
                        r = [],
                        o = 0;
                    for (this.sortArrayOfFilesObjectByLastModified(e.filesStats); n < e.size / 2 && o < e.filesStats.length;)
                        if (-1 == e.filesStats[o].key.toString().indexOf(".fi"))
                            if (this.isSafeToDeleteFile(e.filesStats[o])) {
                                r.push(e.filesStats[o]);
                                var s = this.findCorrespondingFileInfo(e.filesStats, e.filesStats[o].key + ".fi");
                                s && r.push(s), n += e.filesStats[o].size, o++
                            } else o++;
                    else o++;
                    i.core.data.FSio.deleteFiles(r, i.core.data.FSio, function(e) {
                        e ? t && t(!0) : t && t(!1)
                    })
                },
                testCleanOldFiles: function() {
                    this.cleanOldFiles(function(e) {
                        console.log(e)
                    })
                },
                isSafeToDeleteFile: function(e) {
                    var t = 0;
                    return t = Date.now() - e.lastModified.getTime(), t < i.config.TIME_PERIOD_FILE_STILL_LIVE ? !1 : !0
                },
                cleanOldFiles: function(e) {
                    var t = this;
                    i.core.data.FSio.getLibraryStatistics(function(n) {
                        var r = n,
                            o = 0,
                            s = [],
                            a = 0;
                        t.sortArrayOfFilesObjectByLastModified(r.filesStats);
                        for (var c in r.filesStats)
                            if (a = Date.now() - r.filesStats[c].lastModified.getTime(), a > i.config.PERIODIC_CACHE_CLEANUP_PERIOD) {
                                s.push(r.filesStats[c]);
                                var l = t.findCorrespondingFileInfo(r.filesStats, r.filesStats[c].key + ".fi");
                                l && s.push(l), o += r.filesStats[c].size
                            }
                        i.core.data.FSio.deleteFiles(s, i.core.data.FSio, function(t) {
                            t ? e && e(!0) : e && e(!1)
                        })
                    })
                },
                convertMiliToDays: function(e) {
                    return Math.floor(e / 864e5)
                },
                findCorrespondingFileInfo: function(e, t) {
                    var n;
                    for (var i in e) e[i].key == t && (n = e[i]);
                    return n
                },
                spliceFileObjectFromArray: function(e, t) {
                    for (var n in e) e[n].key == t && e.splice(n, 1)
                },
                sortArrayOfFilesObjectByLastModified: function(e) {
                    return e.sort(function(e, t) {
                        var n = new Date(e.lastModified),
                            i = new Date(t.lastModified);
                        return i > n ? -1 : n > i ? 1 : 0
                    }), e
                },
                getFileSizeFromArray: function(e, t) {
                    var n = 0;
                    for (var i in t)
                        if (t[i].key == e) {
                            n = t[i].size;
                            break
                        }
                    return n
                },
                sumFilesSizeExcludingCurrent: function(e, t) {
                    for (var n = 0, i = 0; i < t.length; i++) t[i].key != e && this.isSafeToDeleteFile(t[i]) && (n += t[i].size);
                    return n
                },
                failedToCleanUpOutOfSpace: function(e, t, n) {
                    var r = this,
                        o = [],
                        s = this.findCorrespondingFileInfo(t.filesStats, e),
                        a = this.findCorrespondingFileInfo(t.filesStats, e + ".fi");
                    s && o.push(s), a && o.push(a), s && (t.size -= s.size), a && (t.size -= a.size), this.spliceFileObjectFromArray(t.filesStats, e), this.spliceFileObjectFromArray(t.filesStats, e + ".fi"), i.core.data.FSio.deleteFiles(o, i.core.data.FSio, function(e) {
                        i.warn("handleOutOfSpace can not clean enough space for the wanted download "), r.standardCleanUp(t, function(e) {
                            n(!1)
                        })
                    })
                }
            }), i.core.data.CacheManager = new i.core.data.CacheManager
        }(),
        function() {
            function e(e, t) {
                var n = !1,
                    i = !0,
                    r = e.document,
                    o = r.documentElement,
                    s = r.addEventListener ? "addEventListener" : "attachEvent",
                    a = r.addEventListener ? "removeEventListener" : "detachEvent",
                    c = r.addEventListener ? "" : "on",
                    l = function(i) {
                        ("readystatechange" != i.type || "complete" == r.readyState) && (("load" == i.type ? e : r)[a](c + i.type, l, !1), !n && (n = !0) && t.call(e, i.type || i))
                    },
                    d = function() {
                        try {
                            o.doScroll("left")
                        } catch (e) {
                            return void setTimeout(d, 50)
                        }
                        l("poll")
                    };
                if ("complete" == r.readyState) t.call(e, "lazy");
                else {
                    if (r.createEventObject && o.doScroll && !r.addEventListener) {
                        try {
                            i = !e.frameElement
                        } catch (u) {}
                        i && d()
                    }
                    r[s](c + "DOMContentLoaded", l, !1), r[s](c + "readystatechange", l, !1), e[s](c + "load", l, !1)
                }
            }
            i.contentLoaded = e
        }(),
        function(e) {
            var t = Object.create(null);
            t.initialize = "Initializing file...", t.filesystem = "Please allow the file to be stored to your computer", t.complete = "Download complete", t.verify = "Verifying file...", t.speed = "Speed by peers", t.peers = "Peers", t.error_generic = "An error has occurred while downloading, please retry.", t.error_filesize = "File size is too big, please allow persistent storage.", t.error_diskspace = "Not enough disk space, please clear some space and retry.", t.error_write = "A problem has occurred while writing to disk, please retry.", t.error_corrupt = "The file you have downloaded is corrupt, please contact site owner.", t.error_connection = "There is a connectivity problem, please check your connection.", e.messages = t
        }(i),
        function() {
            function n(e, t) {
                return Array.prototype.slice.call((t || document).querySelectorAll(e))
            }

            function r() {
                o.resizing || (o.resizing = !0, window.requestAnimationFrame(function() {
                    o.instances.forEach(function(e) {
                        e.checkPanesWidth(), e.resize()
                    }), o.resizing = !1
                }))
            }

            function o(e) {
                this.document_container = e, this.instances = [], this.$children = [], this.feedback_open = !1, this.elementInited = !1, o.instances.push(this)
            }

            function s(n) {
                var r = {},
                    o = n.Avg_Recv_P2P + n.Avg_Recv_HTTP,
                    s = n.Total_Recv_No_Waste;
                this.size || (this.file_size = n.size, this.size = e(n.size), this.size_type = this.size.substring(this.size.length - 2), r.size = this.size), this.total_avg_download = n.Total_Avg_Download, this.disp_speed ? this.new_disp_speed = .9 * this.disp_speed + .1 * o : this.new_disp_speed = o, this.disp_speed = Math.floor(this.new_disp_speed), this.disp_speed < 10 && (this.disp_speed = 0);
                var a = this.disp_speed ? Math.floor((n.size - s) / this.disp_speed) : "Forever";
                null == this.eta || this.eta > 86400 || a + 1 == this.eta || this.eta_off > 10 || isNaN(this.eta) && !isNaN(a) ? (this.eta_off = 0, this.eta = a) : (this.eta_off++, this.eta--), r.time = t(this.eta), r.speed = this.disp_speed;
                var c = 0;
                n.Total_Recv_HTTP > 0 && n.Total_Recv_P2P > 0 && (c = (n.Total_Recv_HTTP + n.Total_Recv_P2P) / n.Total_Recv_HTTP, c = Math.round(100 * (c - 1)), c = Math.min(c, 999), c > 0 && (r.extra_speed = c));
                var l = e(s, 1) + "";
                return this.completion_rate = s / n.size, r.downloaded = l, s < n.size ? r.progress = Math.round(s / n.size * 100) : (i.warn("FileUI trimmed the percentage to 100%"), r.progress = 100), r
            }

            function a(e, t) {
                var n = t.filename.split("."),
                    r = n.pop();
                n = n.join("."), this.manager = e, this.options = t, this.started = !1, this.paused = !1, this.completed = !1, this.drawn = Object.create(null), this.paint_buffer = [], this.buffering = !1, this.chunks_in_block = i.config.BLOCK_SIZE / i.config.CHUNK_SIZE, this.new_disp_speed = 409600 + 100 * Math.random() * 1024, this.disp_speed = 0, this.url = t.url, this.http_color = l, this.fs_color = l, this.waste_color = l, this.colors = [l], this.num_of_peers = 0, this.start_time = Date.now(), this._debug(), this._initElement(), this._initCanvas(), this.setFilename(n), this.setFileExt(r), this.displayInitializing(), this.manager.resize()
            }

            function c() {
                a.apply(this, arguments);
                var e, t = document.body,
                    n = window.getComputedStyle(t),
                    i = "overflow",
                    r = "visible";
                e = n.getPropertyValue(i), e != r && (this._old_body_overflow = e, t.style.setProperty(i, r, "important")), window.addEventListener("touchmove", this._touchMoveHandler, !1)
            }
            var l = "#428bca",
                d = 400,
                u = 8,
                h = "rgba(255,101,35,1)",
                f = 4,
                p = Math.PI,
                g = p / 180,
                m = !1,
                _ = "iso, tar, gz, lz, lzma, lzo, rz, xz, 7z, s7z, ace, apk, arc, arj" + ", ice, jar, rar, zip, zipx, cab, lzh, bz2, uue, z".split(", "),
                E = "webm, mkv, flv, ogv, ogg, avi, mov, qt, wmv, rm, rmvb, mp4, m4p" + ", m4v, mpg, mp2, mpeg, mpe, mpv, m2v, m4v, 3gp, 3g2".split(", "),
                v = "jpg, jpeg, jpe, jfif, gif, png, bmp, tif, tiff".split(", "),
                b = {
                    "p5-dl-container-template": '<div class="p5-dl-main-wrapper">\n    <ul class="p5-dl-main"></ul>\n</div>\n<div class="p5-dl-scroller"><span class="p5-dl-grip"></span></div>\n<div class="p5-dl-feedback">\n    <form class="p5-dl-feedback-form" method="post" action="//peer5.com/feedback-form">\n        <div class="p5-dl-feedback-left">\n            <span class="p5-dl-need-help">ANY FEEDBACK?</span>\n            <ul>\n                <li>\n                    <label><input type="radio" name="rating" value="1" /></label>\n                </li>\n                <li>\n                    <label><input type="radio" name="rating" value="2" /></label>\n                </li>\n                <li>\n                    <label><input type="radio" name="rating" value="3" /></label>\n                </li>\n                <li>\n                    <label><input type="radio" name="rating" value="4" /></label>\n                </li>\n                <li>\n                    <label><input type="radio" name="rating" value="5" /></label>\n                </li>\n            </ul>\n            <span class="p5-dl-feedback-open"></span>\n\n            <a target="_blank" href="https://www.peer5.com"><div class="p5-dl-brand"></div></a>\n        </div>\n        <div class="p5-dl-feedback-right">\n            <textarea class="p5-dl-feedback-comment" name="comment" placeholder="YOUR FEEDBACK HERE"></textarea>\n            <span class="p5-dl-feedback-submit">SUBMIT</span>\n        </div>\n    </form>\n</div>\n',
                    "p5-dl-pane-template": '<span class="p5-dl-button p5-dl-close-pane"></span>\n<div class="p5-dl-progress">\n    <div class="p5-dl-progress-fill"></div>\n    <span class="p5-dl-progress-label"></span>\n    <span class="p5-dl-button p5-dl-pause p5-dl-hide"></span>\n    <span class="p5-dl-button p5-dl-play"></span>\n    <span class="p5-dl-button p5-dl-done p5-dl-hide"></span>\n</div>\n<div class="p5-dl-meta">\n    <h1 class="p5-dl-file">\n        <span class="p5-dl-filename p5-dl-ellipsis"></span><span\n            class="p5-dl-file-ext p5-dl-em"></span>\n    </h1>\n\n    <div class="p5-dl-stats">\n        <div class="p5-dl-peers-speed">\n            <span class="p5-dl-stats-datum p5-dl-stats-peers"><span class="p5-dl-stats-peers-content"></span></span><span\n                class="p5-dl-stats-datum p5-dl-stats-speed p5-dl-stats-speed-content"></span><span\n                class="p5-dl-extra-speed p5-dl-extra-speed-content"></span>\n        </div><span\n            class="p5-dl-stats-datum p5-dl-stats-time p5-dl-stats-time-content"></span><span\n            class="p5-dl-stats-datum p5-dl-stats-size"><span class="p5-dl-stats-size-content"></span><span\n            class="p5-dl-stats-size-total p5-dl-stats-size-total-content"></span></span>\n        <div class="p5-dl-stats-message"></div>\n    </div>\n</div>\n'
                },
                S = function() {
                    var e = document.createElement("div"),
                        t = e.style;
                    return "transition" in t ? "transitionend" : "webkitTransition" in t ? "webkitTransitionEnd" : "msTransition" in t ? "MSTransitionEnd" : null
                }();
            window.matchMedia ? window.addEventListener("load", function() {
                if (window.matchMedia("only screen and (min-device-width : 320px) and (max-device-width : 640px) and (max-device-height: 768px)").matches) {
                    m = !0;
                    var e, t = document.querySelector("meta[name=viewport]"),
                        n = {
                            width: "device-width",
                            "user-scalable": "no",
                            "initial-scale": "1"
                        },
                        i = [],
                        r = !1;
                    t ? (e = t.getAttribute("content").match(/([-\w]+=[^\s,]*)/g), e && e.length && e.forEach(function(e) {
                        e = e.split("="), e[0] in n || i.push(e[0] + "=" + e[1])
                    })) : (t = document.createElement("meta"), t.setAttribute("name", "viewport"), r = !0), Object.keys(n).forEach(function(e) {
                        i.push(e + "=" + n[e])
                    }), t.setAttribute("content", i.join(", ")), r && document.head.appendChild(t)
                }
            }, !1) : window.addEventListener("resize", r, !1), o.instances = [], o.prototype._initElement = function() {
                var e = this.$container = document.createElement("div");
                e.classList.add("p5-dl-container"), e.classList.add("p5-dl-hide"), e.innerHTML = b["p5-dl-container-template"], this.$el = n(".p5-dl-main", this.$container)[0], this.document_container.appendChild(e)
            }, o.prototype.resize = function() {
                m || this.instances.forEach(function(e) {
                    e.resize()
                })
            }, o.prototype.checkPanesWidth = function() {
                if (!m) {
                    var e, t = this.$el,
                        n = t.clientWidth,
                        i = this.$children,
                        r = i.length;
                    r * d + (r - 1) * u >= n ? (t.parentNode.classList.add("p5-dl-fixed-panes"), i.forEach(function(e) {
                        e.style.removeProperty("width")
                    }), i[0].classList.remove("p5-dl-only-child")) : (t.parentNode.classList.remove("p5-dl-fixed-panes"), r > 1 ? (e = Math.floor((n - (r - 1) * u) / r), i.forEach(function(t) {
                        t.style.width = e + "px"
                    }), i[0].classList.remove("p5-dl-only-child")) : r && (i[0].classList.add("p5-dl-only-child"), i[0].style.removeProperty("width")))
                }
            }, o.prototype.addPane = function(e) {
                return this.elementInited || (this._initElement(), this._initFeedbackForm(), this.elementInited = !0), m ? new c(this, e) : new a(this, e)
            }, o.prototype.open = function(e) {
                this.instances.length || (this.$container.classList.remove("p5-dl-hide"), document.body.classList.add("p5-dl-fixed")), this.instances.push(e), this.$children.push(e.$el), this.$el.insertBefore(e.$el, this.$el.firstChild), this.checkPanesWidth()
            }, o.prototype.close = function(e) {
                this.instances.splice(this.instances.indexOf(e), 1), this.$children.splice(this.$children.indexOf(e.$el), 1), this.instances.length || (this.$container.classList.add("p5-dl-hide"), document.body.classList.remove("p5-dl-fixed")), this.$el.removeChild(e.$el), this.checkPanesWidth(), this.resize()
            }, o.prototype.serializeFeedbackForm = function() {
                var e = new FormData(this.$feedback_form),
                    t = window.location,
                    n = t.href.replace(t.protocol + "//" + t.hostname, ""),
                    r = t.port,
                    o = this.collectStats();
                return r && (n = n.replace(":" + r, "")), e.append("user_agent", window.navigator.userAgent), e.append("user_domain", t.hostname), e.append("path", n), e.append("log_capture", i.logString.substring(0, 1048576) || "n.a"), e.append("files", JSON.stringify(o)), e
            }, o.prototype._initFeedbackForm = function() {
                var e, t = "p5-dl-checked",
                    i = !1,
                    r = function() {
                        this.checkPanesWidth(), this.resize(), i && window.requestAnimationFrame(r);
                    }.bind(this),
                    o = function() {
                        i = !1
                    },
                    s = function(e) {
                        this.feedback_open = !this.feedback_open, null == S && setTimeout(o, 300), this.$container.classList.toggle("p5-dl-feedback-opened"), i = !0, window.requestAnimationFrame(r)
                    }.bind(this),
                    a = function(e) {
                        this.$submit.removeEventListener("click", a, !1);
                        var t = new XMLHttpRequest,
                            i = this.serializeFeedbackForm();
                        t.open("POST", "https://api.peer5.com/downloader-feedback"), t.onreadystatechange = function() {
                            4 === t.readyState && this.$submit.addEventListener("click", a, !1)
                        }.bind(this), t.send(i), n(".p5-dl-feedback-comment")[0].value = "", s()
                    }.bind(this);
                this.$feedback_container = n(".p5-dl-feedback", this.$container)[0], this.$feedback_form = n(".p5-dl-feedback-form", this.$container)[0], this.$submit = n(".p5-dl-feedback-submit", this.$feedback_form)[0], S && this.$feedback_container.addEventListener(S, o, !1), this.$submit.addEventListener("click", a, !1), n(".p5-dl-feedback-open", this.$container)[0].addEventListener("click", s, !1), n("input[name=rating]", this.$feedback_form).forEach(function(n) {
                    n.addEventListener("change", function(i) {
                        this.feedback_open || s();
                        var r = n.parentNode.parentNode;
                        e && e.classList.remove(t), n.checked && (r.classList.add(t), r.parentNode.classList.add(t), e = r)
                    }.bind(this), !1)
                }, this)
            }, o.prototype.collectStats = function() {
                return this.instances.map(function(e) {
                    return e.collectStats()
                })
            }, a.prototype.update = function(e) {
                if (!this.paused) {
                    var t = s.call(this, e);
                    t.size && this.setTotalSize(t.size), t.time && this.setTime(t.time), t.speed && this.setSpeed(t.speed), this.setExtraSpeed(t.extra_speed), t.downloaded && this.setSize(t.downloaded), t.progress && this.setProgress(t.progress)
                }
            }, a.prototype.collectStats = function() {
                return {
                    speed_avg: this.total_avg_download || -1,
                    completion_rate: this.completion_rate || -1,
                    file_size: this.file_size || -1,
                    time_elapsed: this.start_time ? Date.now() - this.start_time : -1
                }
            }, a.prototype.enablePause = function() {
                this.$pause.classList.remove("p5-dl-hide")
            }, a.prototype.disablePause = function() {
                this.$pause.classList.add("p5-dl-hide")
            }, a.prototype.setFilename = function(e) {
                this.$filename.textContent = e
            }, a.prototype.setFileExt = function(e) {
                this.$fileext.textContent = "." + e, ~_.indexOf(e) ? this.$file_type.classList.add("p5-dl-zip") : ~E.indexOf(e) ? this.$file_type.classList.add("p5-dl-media") : ~v.indexOf(e) && this.$file_type.classList.add("p5-dl-pic")
            }, a.prototype.setProgress = function(e) {
                this.progress = e, this.$progress_fill.style.height = e / 100 * this.progress_fill_max_height + "px", this.$progress.textContent = e + "%"
            }, a.prototype.setTime = function(e) {
                e ? this.$time.textContent = e : this.$time.textContent = ""
            }, a.prototype.setSpeed = function(t) {
                if (isNaN(t)) this.$speed.textContent = "";
                else {
                    var n = t > 1048576 ? 2 : 0;
                    this.$speed.textContent = e(Math.floor(1.1 * t), n) + "/s"
                }
            }, a.prototype.setSize = function(e) {
                e ? this.$size.textContent = e + "/" : this.$size.textContent = ""
            }, a.prototype.setTotalSize = function(e) {
                this.$total_size.textContent = e
            }, a.prototype.setPeers = function(e) {
                isNaN(e) ? this.$peers.textContent = "" : (this.num_of_peers = e, this.$peers.textContent = e + " " + window.peer5.messages.peers)
            }, a.prototype.setExtraSpeed = function(e) {
                e ? (this.$extra_speed.textContent = "+" + e + "% " + window.peer5.messages.speed, this.$peers_speed.classList.add("p5-dl-has-peers")) : this.$peers_speed.classList.remove("p5-dl-has-peers")
            }, a.prototype.setNumOfChunks = function(e) {
                this.num_of_chunks = Math.ceil(e / i.config.CHUNK_SIZE), this.num_of_blocks = this.num_of_chunks / this.chunks_in_block
            }, a.prototype._debug = function() {
                location.hash.indexOf("visual") > 0 && (this.colors = ["#3491E3", "#2871B0", "#1D507D", "#62A7E3", "#8FBCE3", "#4F677D"], this.http_color = "#111111", this.fs_color = "#555555", this.waste_color = "#FFFFFF", radio("peer5_pending_http_chunk").subscribe([function(e, t) {
                    this.paintHttp(e, .5)
                }, this]), radio("peer5_p2p_pending_chunk").subscribe([function(e, t, n) {
                    this.paintP2p(e, .5, n)
                }, this]))
            }, a.prototype._initElement = function() {
                var e = this.$el = document.createElement("li");
                e.classList.add("p5-dl-pane"), e.innerHTML = b["p5-dl-pane-template"], this.manager.open(this), this.progress_fill_max_height = n(".p5-dl-progress", this.$el)[0].clientHeight - 8, this.$progress_fill = n(".p5-dl-progress-fill", this.$el)[0], this.$pause = n(".p5-dl-pause", this.$el)[0], this.$play = n(".p5-dl-play", this.$el)[0], this.$done = n(".p5-dl-done", this.$el)[0], this.$close = n(".p5-dl-close-pane", this.$el)[0], this.$filename = n(".p5-dl-filename", this.$el)[0], this.$fileext = n(".p5-dl-file-ext", this.$el)[0], this.$progress = n(".p5-dl-progress-label", this.$el)[0], this.$peers = n(".p5-dl-stats-peers-content", this.$el)[0], this.$speed = n(".p5-dl-stats-speed-content", this.$el)[0], this.$extra_speed = n(".p5-dl-extra-speed-content", this.$el)[0], this.$peers_speed = n(".p5-dl-peers-speed", this.$el)[0], this.$time = n(".p5-dl-stats-time-content", this.$el)[0], this.$total_size = n(".p5-dl-stats-size-total-content", this.$el)[0], this.$file_type = n(".p5-dl-stats-size", this.$el)[0], this.$size = n(".p5-dl-stats-size-content", this.$el)[0], this.$message = n(".p5-dl-stats-message", this.$el)[0], this.$pause.addEventListener("click", this.pause.bind(this), !1), this.$play.addEventListener("click", this.resume.bind(this), !1), this.$close.addEventListener("click", this.close.bind(this), !1)
            }, a.prototype._initCanvas = function() {
                var e, t = document.createElement("canvas");
                return this.canvas = t, t.classList.add("boxes"), this.$el.insertBefore(t, this.$el.firstChild), e = window.getComputedStyle(this.$el), this.canvas_width = +e.getPropertyValue("width").slice(0, -2), this.canvas_height = 6, t.width = this.canvas_width, t.height = this.canvas_height, this.ctx = t.getContext("2d"), this.ctx.strokeStyle = h, this.ctx.fillStyle = h, this.ctx.lineWidth = f, this
            }, a.prototype.pause = function() {
                this.paused = !0, this.$pause.style.display = "none", this.$play.style.display = "block", this.options.pause(this)
            }, a.prototype.resume = function() {
                this.paused = !1, this.$play.style.display = "none", this.$pause.style.display = "block", this.options.resume(this)
            }, a.prototype.resize = function() {
                this.resized = !0;
                var e = window.getComputedStyle(this.$el);
                this.canvas_width = +e.getPropertyValue("width").slice(0, -2), this.canvas.width = this.canvas_width, this.ctx.strokeStyle = h, this.ctx.fillStyle = h, this.ctx.lineWidth = f, this.draw()
            }, a.prototype.draw = function(e) {
                this.resized && (this.resized = !1, this.drawState()), arguments.length && this.drawChunk(e)
            }, a.prototype.drawState = function() {
                var e, t = this.drawn;
                for (e in t) this.drawBlock(e)
            }, a.prototype.drawChunk = function(e) {
                var t = Math.floor(e / this.chunks_in_block),
                    n = this.drawn[t];
                n || (n = this.drawn[t] = []), ~n.indexOf(e) || (n.push(e), this.drawBlock(t))
            }, a.prototype.drawBlock = function(e) {
                var t = this.canvas_width / this.num_of_blocks,
                    n = this.drawn[e].length / this.chunks_in_block,
                    i = (e * t | 0) % this.canvas_width;
                this.paint(i, t * n)
            }, a.prototype.fillBuffer = function(e, t) {
                this.paint_buffer.push([e, t])
            }, a.prototype.paint = function(e, t) {
                this.fillBuffer(e, t), this.buffering || (this.buffering = !0, window.requestAnimationFrame(this._paint.bind(this)))
            }, a.prototype._paint = function() {
                for (var e, t = this.paint_buffer; e = t.pop();) this.ctx.fillRect(e[0], 0, e[1] || 1, 6);
                this.buffering = !1
            }, a.prototype.close = function() {
                this.manager.close(this), this.options.close(this)
            }, a.prototype.getColor = function(e) {
                return this.colors[e.charCodeAt(0) % this.colors.length]
            }, a.prototype.paintFs = function(e, t, n) {
                this.draw(e, t, this.fs_color)
            }, a.prototype.paintHttp = function(e, t, n) {
                this.draw(e, t, this.http_color)
            }, a.prototype.paintP2p = function(e, t, n) {
                this.draw(e)
            }, a.prototype.paintWasteP2p = function(e, t) {
                this.draw(e, t, this.waste_color)
            }, a.prototype.paintWasteHttp = function(e, t, n) {
                this.draw(e, t, this.waste_color)
            }, a.prototype.displayDownloadStart = function() {
                this.setMessage(), this.enablePause(), this.setPeers(0)
            }, a.prototype.displayInitializing = function() {
                this.setMessage(window.peer5.messages.initialize)
            }, a.prototype.displayFilesystemAuth = function(e) {
                e ? this.setMessage(window.peer5.messages.filesystem) : this.setMessage(window.peer5.messages.initialize)
            }, a.prototype.displayCompleted = function(t) {
                this.completed = !0, 100 !== this.progress && (i.warn("FileUI trimmed the percentage to 100%"), this.setProgress(100), this.setSize(e(t))), this.disablePause(), this.$el.classList.add("p5-dl-completed"), this.setSpeed(this.total_avg_download), this.$done.classList.remove("p5-dl-hide"), this.setMessage(window.peer5.messages.complete)
            }, a.prototype.displayVerifying = function() {
                this.setMessage(window.peer5.messages.verify)
            }, a.prototype.concealStats = function() {
                this.setExtraSpeed(), this.setSize(), this.setSpeed(), this.setTime(), this.setPeers()
            }, a.prototype.showError = function(e) {
                this.paused = !0, this.disablePause(), this.concealStats(), this.setMessage(String(e))
            }, a.prototype.setMessage = function(e) {
                e ? (this.$message.textContent = e, this.setExtraSpeed()) : this.$message.textContent = ""
            }, c.prototype = Object.create(a.prototype, {
                constructor: {
                    value: c
                },
                _initCanvas: {
                    value: function() {
                        var e = n(".p5-dl-progress", this.$el)[0],
                            t = document.createElement("canvas"),
                            i = window.getComputedStyle(e);
                        return this.canvas = t, t.classList.add("arcs"), this.canvas_width = +i.getPropertyValue("width").slice(0, -2) + 20, this.canvas_height = +i.getPropertyValue("height").slice(0, -2) + 20, e.parentNode.insertBefore(t, e), t.width = this.canvas_width, t.height = this.canvas_height, this.ctx = t.getContext("2d"), this.ctx.strokeStyle = h, this.ctx.fillStyle = h, this.ctx.lineWidth = f, this.x = this.canvas_width / 2, this.r = this.canvas_width / 2 - 8, this.y = this.canvas_height / 2, this.ctx.beginPath(), this
                    },
                    enumerable: !0
                },
                drawBlock: {
                    value: function(e) {
                        var t = 360 / this.num_of_blocks,
                            n = this.drawn[e].length / this.chunks_in_block,
                            i = e * t % 360,
                            r = i + n * t;
                        this.paint(i, r)
                    },
                    enumerable: !0
                },
                fillBuffer: {
                    value: function(e, t) {
                        this.ctx.moveTo(this.x + this.r * Math.cos(e * g), this.y + this.r * Math.sin(e * g)), this.ctx.arc(this.x, this.y, this.r, e * g, t * g)
                    },
                    enumerable: !0
                },
                _paint: {
                    value: function() {
                        this.ctx.stroke(), this.ctx.beginPath(), this.buffering = !1
                    },
                    enumerable: !0
                },
                close: {
                    value: function() {
                        a.prototype.close.call(this), this._old_body_overflow && (document.body.style.setProperty("overflow", this._old_body_overflow), this._old_body_overflow = null), window.removeEventListener("touchmove", this._touchMoveHandler, !1)
                    },
                    enumerable: !0
                },
                _touchMoveHandler: {
                    value: function(e) {
                        e.preventDefault()
                    },
                    enumerable: !0
                }
            }), i.client.downloader.PaneManager = o
        }(), i.client.downloader.AdManager = Object.subClass({
            name: "peer5.client.downloader.AdManager",
            ctor: function(e) {
                this.container = e
            },
            display: function(e, t) {
                function n() {
                    if (Math.random() > i.config.AD_SMPL_RTIO) {
                        var e = document.createElement("div"),
                            t = document.createElement("div");
                        e.className = "p5-dl-ad-display", t.className = "p5-dl-ad-overlay", e.innerHTML = i.config.AD_FRAME, t.appendChild(e)
                    } else {
                        var e = document.createElement("div"),
                            t = document.createElement("div");
                        e.className = "p5-dl-ad-display", t.className = "p5-dl-ad-overlay", e.innerHTML = i.config.AD_FRAME2, t.appendChild(e)
                    }
                    var n = document.createElement("span");
                    n.className = "p5-dl-button p5-dl-ad-display-close", n.onclick = function(e) {
                        this.parentNode.remove(), clearInterval(thi$.intervalId)
                    }, e.appendChild(n), thi$.container.appendChild(e)
                }

                function r() {
                    var e = document.querySelector("div.p5-dl-ad-display > iframe");
                    e.src = e.src
                }

                function o() {
                    n(), thi$.refresh > 0 && (thi$.intervalId = setInterval(r, thi$.refresh))
                }
                isNaN(e) ? this.delay = 0 : this.delay = e, isNaN(t) ? this.refresh = 0 : this.refresh = t, thi$ = this, setTimeout(o, this.delay)
            },
            stop: function() {}
        }),
        function() {
            function e() {
                function e() {
                    o += Math.round(2 * Math.random() - 1), document.querySelector(".peer5_users_counter").innerHTML = o
                }
                var n = document.head,
                    r = document.createElement("style");
                if (r.innerHTML = "@import url(//fonts.googleapis.com/css?family=Exo+2:200);.p5-dl-file,.p5-dl-stats-datum{white-space:nowrap;overflow:hidden}.p5-dl-container,.p5-dl-feedback-comment{font-family:'Exo 2',sans-serif!important}body.p5-dl-fixed{padding-bottom:144px!important}.p5-dl-container{position:fixed;bottom:0;left:0;right:0;z-index:2147483647;height:144px;padding:0;margin:0;background-color:#000;font-size:16px!important;text-transform:uppercase}.p5-dl-container *{margin:0;padding:0;color:#EEE;font-weight:400}.p5-dl-button,.p5-dl-feedback-form p{font-weight:700}.p5-dl-main-wrapper{position:absolute;top:0;bottom:0;left:0;right:234px;z-index:-1;overflow:hidden;-webkit-transition:right .3s ease-in-out 0s;transition:right .3s ease-in-out 0s}.p5-dl-feedback-opened .p5-dl-main-wrapper{right:500px}.p5-dl-main-wrapper.p5-dl-fixed-panes{overflow-x:auto;overflow-y:hidden}.p5-dl-scroller{display:none;position:absolute;bottom:0;left:0;right:233px;height:10px;background-color:#58585B}.p5-dl-grip{display:block;position:absolute;bottom:2px;left:4px;width:20%;height:6px;border-radius:3px;background-color:#AAA}.p5-dl-main{list-style:none;position:absolute;top:0;bottom:0;left:0;z-index:-1;width:100%;white-space:nowrap}.p5-dl-fixed-panes .p5-dl-main{width:auto;min-width:100%}.p5-dl-pane{display:inline-block;position:relative;z-index:-1;height:100%;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background-color:#58585B}.p5-dl-button,.p5-dl-extra-speed{-webkit-box-sizing:border-box;-moz-box-sizing:border-box}.p5-dl-pane+.p5-dl-pane{margin-left:6px}.p5-dl-fixed-panes .p5-dl-pane{width:400px}.p5-dl-pane canvas.boxes{position:absolute;left:0;right:0;top:0}.p5-dl-pane canvas.arcs{position:absolute;top:25px;left:10px}.p5-dl-fixed-panes .p5-dl-pane canvas.arcs{top:10px}.p5-dl-progress{display:inline-block;position:absolute;left:20px;top:35px;overflow:hidden;width:83px;height:83px;border:none;border-radius:83px;-webkit-box-shadow:inset 0 0 0 4px #FFF;-moz-box-shadow:inset 0 0 0 4px #FFF;box-shadow:inset 0 0 0 4px #FFF}.p5-dl-button,.p5-dl-progress-label{display:block;position:absolute;text-align:center}.p5-dl-fixed-panes .p5-dl-progress{top:20px}.p5-dl-progress-fill{position:absolute;bottom:4px;left:0;right:0;z-index:-1;background-color:#FF6523}.p5-dl-progress-label{z-index:1;width:100%;height:50%;padding-top:15px;font-size:19px;color:#DFE0E1}.p5-dl-button{z-index:2;width:100%;height:100%;padding-top:45px;font-size:24px;color:#FFF;box-sizing:border-box;cursor:pointer}.p5-dl-ad-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;filter:alpha(opacity=50);-moz-opacity:.5;-khtml-opacity:.5;opacity:.5;z-index:0}.p5-dl-ad-display{position:fixed;bottom:141px;z-index:10001;left:50%;transform:translate(-50%)}.p5-dl-ad-display-smpl1,.p5-dl-ad-display-smpl2{height:90px;width:728px;position:fixed;bottom:144px;z-index:10001;left:50.7%;transform:translate(-50%);background-size:100% auto}.p5-dl-ad-display-smpl1{background-image:url(https://api.peer5.com/downloader/icons/ads/VLCbanner.png)}.p5-dl-ad-display-smpl2{background-image:url(https://api.peer5.com/downloader/icons/ads/Megaglest1.png)}.p5-dl-ad-display-close{right:2px;top:2px;width:20px;height:20px;padding:0;background:url(https://api.peer5.com/downloader/icons/x_button.svg) left top no-repeat;background-size:cover}.p5-dl-close-pane{right:12px;top:12px;width:20px;height:20px;padding:0;background:url(https://api.peer5.com/downloader/icons/x_button.svg) left top no-repeat;background-size:cover}.p5-dl-pause{background:url(https://api.peer5.com/downloader/icons/pause-white.svg) center 70% no-repeat;background-size:40% auto}.p5-dl-play{display:none;background:url(https://api.peer5.com/downloader/icons/play-white.svg) center 70% no-repeat;background-size:40% auto}.p5-dl-done{background:url(https://api.peer5.com/downloader/icons/v-white.svg) center 70% no-repeat;background-size:40% auto;cursor:default}.p5-dl-meta{display:inline-block;position:absolute;top:20px;bottom:20px;right:13px;left:123px}.p5-dl-fixed-panes .p5-dl-meta{top:10px;bottom:10px}.p5-dl-extra-speed{display:none;position:absolute;bottom:-8px;left:5%;min-width:90%;padding:2px 4px;font-size:10px;text-align:center;background-color:#FF6523;color:#111;box-sizing:border-box}.p5-dl-has-peers .p5-dl-extra-speed{display:block}.p5-dl-pane.p5-dl-only-child .p5-dl-extra-speed{font-size:13px;bottom:-46px}.p5-dl-file{position:absolute;top:0;left:2px;right:0;height:40px;line-height:40px;font-size:20px;text-overflow:ellipsis;text-align:center}.p5-dl-filename{color:#FFF}.p5-dl-pane.p5-dl-only-child .p5-dl-file{right:51%;height:104px;line-height:111px;font-size:23px}.p5-dl-pane.p5-dl-only-child .p5-dl-file:after,.p5-dl-pane.p5-dl-only-child .p5-dl-file:before{content:\"\";position:absolute;top:15px;bottom:15px;right:0;border-right:1px solid #979797}.p5-dl-pane.p5-dl-only-child .p5-dl-file:before{right:auto;left:0}.p5-dl-em{color:#FF6523}.p5-dl-stats{position:absolute;top:40px;bottom:0;left:0;right:0}.p5-dl-pane.p5-dl-only-child .p5-dl-stats{top:0;left:50%;height:104px}.p5-dl-stats-datum{display:inline-block;width:25%;height:60px;padding:34px 4px 0;font-size:11px;text-overflow:ellipsis;text-align:center;vertical-align:top;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background-repeat:no-repeat;background-size:30px auto;background-position:center 6px}.p5-dl-pane.p5-dl-only-child .p5-dl-stats-peers,.p5-dl-pane.p5-dl-only-child .p5-dl-stats-size,.p5-dl-pane.p5-dl-only-child .p5-dl-stats-speed,.p5-dl-pane.p5-dl-only-child .p5-dl-stats-time{background-position:center 26px}.p5-dl-pane.p5-dl-only-child .p5-dl-stats-datum{height:104px;padding:60px 6px 20px;line-height:100%;font-size:16px;background-size:40px auto}.p5-dl-stats-time{background-image:url(https://api.peer5.com/downloader/icons/timer.svg)}.p5-dl-stats-speed{width:50%;background-image:url(https://api.peer5.com/downloader/icons/speedometer.svg)}.p5-dl-stats-size{background-image:url(https://api.peer5.com/downloader/icons/doc.svg)}.p5-dl-stats-size.p5-dl-zip{background-image:url(https://api.peer5.com/downloader/icons/zip.svg)}.p5-dl-stats-size.p5-dl-media{background-image:url(https://api.peer5.com/downloader/icons/media.svg)}.p5-dl-stats-size.p5-dl-pic{background-image:url(https://api.peer5.com/downloader/icons/pic.svg)}.p5-dl-peers-speed{display:inline-block;position:relative;width:50%;height:60px}.p5-dl-feedback,.p5-dl-stats-message{position:absolute;text-align:center;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}.p5-dl-stats-peers{width:50%;background-image:url(https://api.peer5.com/downloader/icons/peer-deactivated.svg)}.p5-dl-has-peers .p5-dl-stats-peers{background-image:url(https://api.peer5.com/downloader/icons/peer-activated.svg)}.p5-dl-has-peers .p5-dl-stats-speed{background-image:url(https://api.peer5.com/downloader/icons/speedometer-extra.svg)}.p5-dl-stats-message{width:90%;margin:0 auto;bottom:-8px;right:6px;left:6px;line-height:150%;font-size:13px;background-color:#999;color:#FFF;box-sizing:border-box}.p5-dl-pane.p5-dl-only-child .p5-dl-stats-message{bottom:0}.p5-dl-completed .p5-dl-stats-message{background-color:#FF6523;color:#111}.p5-dl-feedback{top:0;bottom:0;right:0;width:234px;padding:20px 0;border:6px solid #000;background-color:#000;box-sizing:border-box;-webkit-box-shadow:-5px 0 4px 0 rgba(0,0,0,.5);-moz-box-shadow:-5px 0 4px 0 rgba(0,0,0,.5);box-shadow:-5px 0 4px 0 rgba(0,0,0,.5);-webkit-transition:width .3s ease-in-out 0s;transition:width .3s ease-in-out 0s}.p5-dl-feedback-opened .p5-dl-feedback{width:500px}.p5-dl-brand{display:inline-block;width:116px;height:30px;line-height:30px;text-align:left;background:url(https://api.peer5.com/downloader/icons/logo.svg) left top no-repeat}.p5-dl-need-help{font-size:23px}.p5-dl-brand:before{content:\"BY\";font-size:23px}.p5-dl-feedback-form{height:30px;text-align:center}.p5-dl-feedback-left{position:relative;top:0;left:0;width:234px}.p5-dl-feedback-right{position:absolute;top:20px;right:0;left:234px;padding:0 20px}.p5-dl-feedback-open{display:inline-block;width:26px;height:26px;background:url(https://api.peer5.com/downloader/icons/speech_bubble.svg) center center no-repeat;cursor:pointer}.p5-dl-feedback-form ul{display:inline-block;vertical-align:top;list-style:none}.p5-dl-feedback-form li{display:inline-block;width:26px;text-align:center}.p5-dl-feedback-form li label{display:block;position:relative;width:26px;height:26px;cursor:pointer}.p5-dl-feedback-form li label:after{position:absolute;content:'';display:block;top:0;width:30px;height:25px;background:url(https://api.peer5.com/downloader/icons/empty_feedback_star.svg) center center no-repeat}.p5-dl-feedback-form ul.p5-dl-checked label:after{background:url(https://api.peer5.com/downloader/icons/orange_feedback_star.svg) center center no-repeat}.p5-dl-feedback-form li.p5-dl-checked~li label:after{background:url(https://api.peer5.com/downloader/icons/empty_feedback_star.svg) center center no-repeat}.p5-dl-feedback-form ul.p5-dl-checked:hover label:after,.p5-dl-feedback-form ul:hover label:after{background:url(https://api.peer5.com/downloader/icons/orange_feedback_star.svg) center center no-repeat}.p5-dl-feedback-form .p5-dl-checked li:hover~li label:after,.p5-dl-feedback-form li:hover~li label:after{background:url(https://api.peer5.com/downloader/icons/empty_feedback_star.svg) center center no-repeat}.p5-dl-completed canvas,.p5-dl-feedback-submit{background-color:#FF6523}.p5-dl-feedback-form li input{visibility:hidden}.p5-dl-feedback-comment{display:block;padding:6px;width:100%;height:56px;margin-bottom:8px;border:none;resize:none;border-radius:6px;color:#000;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-weight:600}.p5-dl-feedback-submit{display:block;padding:2px 0;border-radius:6px;color:#fff;cursor:pointer}@media only screen and (min-device-width :320px) and (max-device-width :640px) and (max-device-height :768px){.p5-dl-completed canvas,.p5-dl-pane{background-color:transparent}::-webkit-input-placeholder{color:#474747}:-moz-placeholder{color:#474747;opacity:1}::-moz-placeholder{color:#474747;opacity:1}:-ms-input-placeholder{color:#474747}.p5-dl-container{height:auto;top:0}.p5-dl-feedback-open{display:none}.p5-dl-main-wrapper{right:0;bottom:200px;border:none}.p5-dl-feedback-opened .p5-dl-main-wrapper{right:0}.p5-dl-main{bottom:0}.p5-dl-pane canvas.arcs{position:absolute;top:50%;left:50%;margin:-65px 0 0 -85px}.p5-dl-progress{top:50%;left:50%;width:150px;height:150px;margin:-55px 0 0 -75px;border-radius:100px;-webkit-box-shadow:inset 0 0 0 6px #FFF;-moz-box-shadow:inset 0 0 0 6px #FFF;box-shadow:inset 0 0 0 6px #FFF}.p5-dl-progress-label{padding-top:30px}.p5-dl-progress-fill{background-color:#FF6523}.p5-dl-pause{padding-top:110px}.p5-dl-file{margin-top:10px;font-size:26px}.p5-dl-stats{top:50px}.p5-dl-pane.p5-dl-only-child .p5-dl-file:after{border:none}.p5-dl-em,.p5-dl-stats-size-total{color:#FF6523}.p5-dl-meta{top:0;bottom:0;left:0;right:0}.p5-dl-pane.p5-dl-only-child .p5-dl-stats{top:auto;left:0;height:80px;line-height:80px}.p5-dl-stats-datum{width:50%;padding:42px 4px 0;background-size:40px auto;font-size:16px}.p5-dl-peers-speed{position:absolute;bottom:12px;width:100%;padding-bottom:20px}.p5-dl-extra-speed{width:100%;left:0;bottom:-12px;font-size:18px}.p5-dl-stats-size,.p5-dl-stats-time{display:inline-block;width:50%;height:auto;padding:0;font-size:19px}.p5-dl-stats-size{text-align:center;background:0 0!important}.p5-dl-stats-time{background:0 0}.p5-dl-stats-message{left:0;right:0;bottom:0;width:100%}.p5-dl-feedback{top:auto;width:100%;height:200px;padding:10px 0;border:none;background-color:#666}.p5-dl-feedback-opened .p5-dl-feedback{width:100%}.p5-dl-feedback-right{position:static;margin-top:9px}.p5-dl-feedback-left{position:static;width:auto}.p5-dl-need-help{display:none}.p5-dl-feedback-form{top:0;left:50px;right:50px;height:auto;text-align:center}.p5-dl-feedback-form li:hover label:before{position:initial;content:initial;display:initial;top:initial;width:initial;height:initial;background:initial}.p5-dl-feedback-comment{display:block;width:100%;height:64px;padding:8px;background-color:#999;border:3px solid #777;border-radius:8px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:'Exo 2',sans-serif!important}.p5-dl-feedback-submit{display:block;margin-top:12px;padding:3px 0;border-radius:8px;background-color:#FF6523;color:#fff;cursor:pointer;-webkit-box-shadow:0 1px 0 0 #000;-moz-box-shadow:0 1px 0 0 #000;box-shadow:0 1px 0 0 #000}.p5-dl-brand{position:absolute;bottom:10px;left:50%;margin-left:-58px;background:url(https://api.peer5.com/downloader/icons/logo.svg) left top no-repeat}}@media only screen and (min-device-width :320px) and (max-device-width :640px) and (max-device-height :768px) and (min-width :321px) and (orientation :landscape){.p5-dl-main-wrapper{bottom:12px}.p5-dl-stats-size,.p5-dl-stats-time{display:inline-block;width:50%}.p5-dl-brand,.p5-dl-feedback-opened .p5-dl-file{display:none}.p5-dl-feedback-opened .p5-dl-main-wrapper{right:0;bottom:200px}.p5-dl-feedback-opened .p5-dl-progress,.p5-dl-feedback-opened canvas.arcs{top:90%}.p5-dl-feedback-opened .p5-dl-stats{top:12px}.p5-dl-feedback-opened .p5-dl-peers-speed{padding-bottom:0}.p5-dl-feedback-opened .p5-dl-peers-speed .p5-dl-stats-datum{background-image:none}.p5-dl-feedback-opened .p5-dl-brand{display:block}.p5-dl-feedback{height:39px}.p5-dl-feedback-opened .p5-dl-feedback{height:200px;width:100%}.p5-dl-feedback-open{display:inline-block}}.p5-dl-hide{display:none!important}", n.appendChild(r), t = new i.client.downloader.PaneManager(document.body), document.body.addEventListener("click", function(e) {
                        for (var t = e.target; t && "a" !== t.nodeName.toLowerCase();) t = t.parentElement;
                        if (t && null !== t.getAttribute("peer5-download")) {
                            e.preventDefault();
                            var n = t.getAttribute("href");
                            i.download(n)
                        }
                    }), document.querySelector(".peer5_users_counter")) {
                    var o = Math.floor(Date.now() / 3e4 % 9e5);
                    window.setInterval(e, 500), e()
                }
            }
            i.download = function(e, t) {
                if (t || (t = {}), !e) return i.error("Empty URL"), !1;
                var r = document.createElement("a");
                if (r.href = e, e = r.href, t.name ? t.name = t.name.toString() : t.name = decodeURI(e.substr(e.lastIndexOf("/") + 1).split("?")[0].split("#")[0]), t.onFallback && "function" != typeof t.onFallback && (i.warn("options.onFallback is not a function - ignoring"), t.onFallback = null), t.onDownloadComplete && "function" != typeof t.onDownloadComplete && (i.warn("options.onDownloadComplete is not a function - ignoring"), t.onDownloadComplete = null), t.md5) {
                    if ("[object String]" != Object.prototype.toString.call(t.md5)) return i.error("options.sha1 contains invalid characters"), !1
                } else t.md5 = null;
                if (t.sha1) {
                    if ("[object String]" != Object.prototype.toString.call(t.sha1)) return i.error("options.sha1 contains invalid characters"), !1
                } else t.sha1 = null;
                var o = n[e];
                if (o) i.warn(e + " was already existed in the filewrappers"), o.download();
                else {
                    var s = new i.client.downloader.FileWrapper(e, t);
                    s.download(), n[e] = s
                }
            }, i.stopDownload = function(e) {
                n[e].stop()
            }, i.exitDownload = function(e) {
                n[e].exit(), delete n[e]
            };
            var t, n = {},
                r = function() {
                    var e = !1;
                    i.core.util.envokeCallbackSync(o, []);
                    for (var t in n) radio("fwBeforeUnload").broadcast(n[t].url, n[t].size), radio("exitPage").broadcast(n[t].started, n[t].fallback), !n[t].started || n[t].completed || n[t].fallback || (e = !0);
                    return e ? "Download in progress. Closing this tab will stop the download." : void 0
                },
                o = window.onbeforeunload;
            window.onbeforeunload = r, i.client.downloader.FileWrapper = Object.subClass({
                name: "peer5.client.downloader.FileWrapper",
                ctor: function(e, t) {
                    this.completed = !1, this.started = !1, this.fallback = !1, this.ui = null, this.url = e, this.swarmId = null, this.size = null, t.name ? this.filename = t.name : this.filename = "", this.options = t || {}, this.ui_events_cache = {
                        peer5_received_http_block: function(e, t, n) {
                            if (t == this.url)
                                for (var r = e * (i.config.BLOCK_SIZE / i.config.CHUNK_SIZE), o = r + n / i.config.CHUNK_SIZE - 1, s = r; o >= s; s++) this.ui.paintHttp(s, 1)
                        },
                        peer5_pending_http_chunk: function(e, t) {
                            t != this.url
                        },
                        peer5_waste_http_chunk: function(e, t, n) {
                            e != this.url
                        },
                        peer5_state_updated: function(e, t) {
                            t == this.url && this.ui.update(e)
                        },
                        transferFinishedEvent: function(e) {
                            (this.url === e.url || this.swarmId === e.swarmId) && this.ui.displayVerifying()
                        },
                        peer5_persistent_fd_auth: function() {
                            this.ui.displayFilesystemAuth(!0)
                        },
                        peer5_persistent_fd_auth_finish: function() {
                            this.ui.displayFilesystemAuth(!1)
                        },
                        peer5_received_fs_chunk: function(e, t, n) {
                            e == this.swarmId && this.ui.paintFs(n, 1)
                        },
                        peer5_new_p2p_chunk: function(e, t, n) {
                            this.swarmId && e == this.swarmId && this.ui.paintP2p(n, 1)
                        },
                        peer5_p2p_pending_chunk: function(e, t, n) {
                            this.swarmId && t == this.swarmId && this.ui.paintP2p(e, 1, n)
                        },
                        peer5_waste_p2p_chunk: function(e, t, n) {
                            this.swarmId && e == this.swarmId && this.ui.paintWasteP2p(n, 1)
                        }
                    }, this.startTime
                },
                download: function() {
                    var e = this;
                    this.isEnabled(function() {
                        e._download()
                    }, function(t) {
                        i.warn("Downloader isEnabled returned false"), e.regularDownload()
                    })
                },
                _download: function() {
                    function e(e) {
                        var t = "attachment; filename=";
                        if (-1 == e.indexOf(t)) return null;
                        var n = e.replace(t, "");
                        return n.substring(1, n.length - 1)
                    }

                    function n() {
                        if (!r.ui) {
                            var e = {
                                url: r.url,
                                filename: r.filename,
                                pause: function() {
                                    radio("pauseClicked").broadcast(), i.stopDownload(r.url)
                                },
                                resume: function() {
                                    radio("playClicked").broadcast(), i.download(r.url)
                                },
                                close: function() {
                                    i.exitDownload(r.url)
                                }
                            };
                            r.ui = t.addPane(e), i.config.AD_FRAME && document.body.clientWidth > 1e3 && (r.adsManager = new i.client.downloader.AdManager(document.getElementsByClassName("p5-dl-container")[0]), r.adsManager.display(i.config.AD_FRAME_DELAY, i.config.AD_FRAME_REFRESH)), r.registerEvents()
                        }
                    }
                    var r = this,
                        o = {};
                    this.options.sha1 ? o.sha1 = this.options.sha1 : this.options.md5 && (o.md5 = this.options.md5), (i.config.HTTP_ONLY || i.config.IS_CHROME && i.config.HTTP_ONLY_CHROME || i.config.IS_FIREFOX && i.config.HTTP_ONLY_FIREFOX) && (o.downloadMode = "http");
                    var s = new i.Request(o);
                    s.responseType = "blobUrl", s.onreadystatechange = function(t) {
                        if (!r.options || !r.options.disableUI) {
                            if (!r.swarmId && this.readyState >= 2) {
                                var n = this.getFileInfo();
                                r.size = n.size, r.ui && r.ui.setNumOfChunks(n.size), r.swarmId = n.swarmId;
                                try {
                                    var o = e(this.getResponseHeader("content-disposition")),
                                        s = decodeURIComponent(o);
                                    o && s && (r.filename = s)
                                } catch (t) {
                                    i.info("content-disposition is not found")
                                }
                            }
                            3 == this.readyState && (radio("startedDownloading").broadcast(this.fileInfo.size), r.ui && r.ui.displayDownloadStart(), r.started = !0)
                        }
                    }, s.open("GET", this.url), n(), this.b1 = !1, this.p1 = !1, this.p5 = !1, this.p10 = !1, this.q1 = !1, this.q2 = !1, this.q3 = !1, this.q4 = !1, s.onprogress = function(e) {
                        r.updateProgressEvents(e)
                    }, s.onload = function(e) {
                        r.completed = !0, r.ui && (r.ui.displayCompleted(e.total), r.deregisterEvents()), radio("downloadFinished").broadcast(r.url, e.total, e.loadedP2P, e.loadedHTTP, e.loadedFS), setTimeout(function() {
                            radio("seeding").broadcast(5e3), setTimeout(function() {
                                radio("seeding").broadcast(3e4), setTimeout(function() {
                                    radio("seeding").broadcast(3e5)
                                }, 27e4)
                            }, 25e3)
                        }, 5e3), !window.URL && window.webkitURL && (window.URL = window.webkitURL);
                        var t = document.createElement("a");
                        t.setAttribute("download", r.filename), t.setAttribute("href", this.response), document.body.appendChild(t), t.click();
                        var n = i.core.data.BlockCache.get(r.url);
                        if (i.config.IS_FIREFOX && n && n.fs) {
                            var o = new XMLHttpRequest;
                            o.open("GET", "//peer5.com/downloader/peer5_logo_white.png", !1), o.onload = function(e) {}, o.send(null)
                        }
                        r.options.onDownloadComplete && r.options.onDownloadComplete()
                    }, s.onerror = function(e) {
                        i.error("filewrapper::request:onerror"), r.ui && r.parseError(e), r.options.onFallback ? r.options.onFallback() : (i.warn("FileWrapper Fallbacking to normal download"), r.regularDownload()), r.fallback = !0, radio("fallback").broadcast(this.status, e.total)
                    }, s.onswarmstatechange = function(e) {
                        e.numOfPeers && r.ui.setPeers(e.numOfPeers)
                    }, this.startTime = Date.now(), s.send(), this.request = s
                },
                updateProgressEvents: function(e) {
                    var t = e.loaded / e.total;
                    !this.b1 && t > 0 && (this.b1 = !0, radio("peer5_b1_finished").broadcast(1e3 * e.loaded / (Date.now() - this.startTime))), !this.p1 && t >= .01 && (this.p1 = !0, radio("peer5_p1_finished").broadcast(1e3 * e.loaded / (Date.now() - this.startTime))), !this.p5 && t >= .05 && (this.p5 = !0, radio("peer5_p5_finished").broadcast(1e3 * e.loaded / (Date.now() - this.startTime))), !this.p10 && t >= .1 && (this.p10 = !0, radio("peer5_p10_finished").broadcast(1e3 * e.loaded / (Date.now() - this.startTime))), !this.q1 && t >= .25 && (this.q1 = !0, radio("peer5_q1_finished").broadcast(1e3 * e.loaded / (Date.now() - this.startTime))), !this.q2 && t >= .5 && (this.q2 = !0, radio("peer5_q2_finished").broadcast(1e3 * e.loaded / (Date.now() - this.startTime))), !this.q3 && t >= .75 && (this.q3 = !0, radio("peer5_q3_finished").broadcast(1e3 * e.loaded / (Date.now() - this.startTime))), !this.q4 && t >= 1 && (this.q4 = !0, radio("peer5_q4_finished").broadcast(1e3 * e.loaded / (Date.now() - this.startTime)))
                },
                stop: function() {
                    i.warn("download stopped " + this.url), this.request.abort()
                },
                isEnabled: function(e, t) {
                    i.getCompatibilityStatus(function(n, r, o) {
                        if (n.length > 0 && 702 != n[0]) return void t();
                        switch (r) {
                            case "chrome":
                                if (i.config.DISABLE_CHROME) return void t();
                                break;
                            case "opera":
                                if (i.config.DISABLE_OPERA) return void t();
                                break;
                            case "firefox":
                                if (i.config.DISABLE_FIREFOX) return void t()
                        }
                        e()
                    })
                },
                parseError: function(e) {
                    var t = "";
                    switch (e.currentTarget.status) {
                        case i.Request.INVALID_RESPONSETYPE:
                            t = window.peer5.messages.error_generic;
                            break;
                        case i.Request.SWARMID_NOT_FOUND_ERR:
                            t = window.peer5.messages.error_generic;
                            break;
                        case i.Request.FILE_SIZE_ERR:
                            t = window.peer5.messages.error_filesize;
                            break;
                        case i.Request.FIREFOX_ONLY_SWARM_ERR:
                            t = window.peer5.messages.error_generic;
                            break;
                        case i.Request.CHROME_ONLY_SWARM_ERR:
                            t = window.peer5.messages.error_generic;
                            break;
                        case i.Request.BROWSER_SWARM_COMPAT_ERR:
                            t = window.peer5.messages.error_generic;
                            break;
                        case i.Request.OUT_OF_SPACE_ERR:
                            t = window.peer5.messages.error_diskspace;
                            break;
                        case i.Request.WRITE_ERR:
                            t = window.peer5.messages.error_write;
                            break;
                        case i.Request.VERIFICATION_ERR:
                            t = window.peer5.messages.error_corrupt;
                            break;
                        default:
                            t = e.currentTarget.status < 600 ? window.peer5.messages.error_connection : window.peer5.messages.error_generic
                    }
                    this.ui.showError(t)
                },
                exit: function() {
                    i.warn("download exited " + this.url), this.request.abort({
                        leaveSwarm: !0
                    }), this.dtor(), radio("exitDownload").broadcast(this.completed)
                },
                regularDownload: function() {
                    !window.URL && window.webkitURL && (window.URL = window.webkitURL);
                    var e = document.createElement("a");
                    if (e.setAttribute("download", this.options.name), e.setAttribute("href", this.url), document.body.appendChild(e), e.click) e.click();
                    else {
                        var t = "hiddenDownloader",
                            n = document.getElementById(t);
                        null === n && (n = document.createElement("iframe"), n.id = t, n.style.display = "none", document.body.appendChild(n)), n.src = this.url
                    }
                },
                deregisterEvents: function() {
                    var e = this.ui_events_cache;
                    Object.keys(e).forEach(function(t) {
                        radio(t).unsubscribe([e[t], this])
                    }, this)
                },
                registerEvents: function() {
                    var e = this.ui_events_cache;
                    Object.keys(e).forEach(function(t) {
                        radio(t).subscribe([e[t], this])
                    }, this)
                },
                dtor: function() {
                    this.deregisterEvents(), this.ui = null, this.url = null, this.options = null, this.request = null
                }
            }), i.contentLoaded(window, e)
        }();
    var r = {};
    r.setLogLevel = i.setLogLevel, r.download = i.download, r.prefetch = i.prefetch, r.initJWPlayer = i.initJWPlayer, r.stopDownload = i.stopDownload, r.exitDownload = i.exitDownload, r.Request = i.Request, r.getMedia = i.getMedia, r.getCompatibilityStatus = i.getCompatibilityStatus, r.isEnabled = i.isEnabled, r.getStats = i.getStats, r.trigger = i.trigger, r.DATACHANNELS_ERROR = i.DATACHANNELS_ERROR, r.WEBSOCKETS_ERROR = i.WEBSOCKETS_ERROR, r.FILESYSTEM_ERROR = i.FILESYSTEM_ERROR, r.getConfig = i.getConfig, r.browserName = i.browserName, r.messages = i.messages, window.peer5 = r, "object" == typeof module && "object" == typeof module.exports && (module.exports = r)
}();