PeerLive
====


PeerLive is an Peer to peer/P2P CDN for video based on an hybride solution

It's work with **Peerjs** , **Videojs** and **WebRTC**.

It's a prof of concept.


Riquirement 
==========

 - Videojs video player
 - Compatible Browsers
 - HLS video

Client
=====

Copy past on your video page this code

    
    <script src="/js/apiCDNP2P.js"></script>
    <script>
        apiCDNP2P({host:"52.38.144.179",port:"9000",key: 'peerjs',debug:3});
    </script>
    
Configuration:

 - host: host of the server
 - port: port of the peerjs server
 - key: api key of my peerjs server
 - debug: Level of debug 0-3 see peerjs configuration 
 - more: [Peerjs API configuration](http://peerjs.com/)

Server
=====

**Peerjs server**

host:52.38.144.179
port:9000
key:peerjs

**Your own PCDN server**

    $ cd server/peerjs-server
    $ npm install
    $ cd bin
    $ node peerjs --help
    $ node peerjs --port 9000