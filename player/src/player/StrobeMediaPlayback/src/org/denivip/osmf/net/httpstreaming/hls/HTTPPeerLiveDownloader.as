package org.denivip.osmf.net.httpstreaming.hls
{
	
	import org.osmf.net.httpstreaming.HTTPStreamDownloader;
	import flash.external.ExternalInterface;


	public class HTTPPeerLiveDownloader extends HTTPStreamDownloader
	{
		
		public function HTTPPeerLiveDownloader() {
			ExternalInterface.call("console.log", "The first call PeerLive...");
			super();
		}
		
	}
}