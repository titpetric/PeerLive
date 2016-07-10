import requests

# Basic Variables
MIN_RANGE = 22000
MAX_RANGE = 40000
BASE_URL = 'http://B%d.cdn.telefonica.com/%d/ch%t/%s.m3u8'
CHANNELS_IDS = ['NICK_SUB', 'DSNJR_SUB', '40TV_SUB', 'DSNYXD_SUB', 'COCINA_SUB', '24HORAS_SUB', 'INVITADO_SUB', 'FOX_SUB', 
				'AXN_SUB', 'CLL13_SUB', 'TNT_SUB', 'FOXCRIME_SUB', 'CSMO_SUB', 'AXNWHITE_SUB', 'PCMDY_SUB', 'SYFY_SUB', 'TCM_SUB', 
				'CPLUSLG_SUB', 'MOVFUTBOL_SUB', 'CPLUSCHP_SUB', 'NTLG_SUB', 'NATGEOWILD_SUB', 'CPLUS1_SUB','1','2','3','4','5','6','7','8','9']

CHANNELS_T = ['01', '02', '03','04','05', '06', '07', '08']
# Execution
print 'Test'
for channel in CHANNELS_IDS
	print 'testing channel 1'
	for host_number in range(MIN_RANGE, MAX_RANGE):
		for t_number in CHANNELS_T
			url = BASE_URL % (host_number, host_number, t_number,channel)

			try: 
				req = requests.get(url, timeout=30)
				if req.status_code == 200 and 'chunklist' not in req.text:
					print '%s: %s' % (channel, url)
					break
			except Exception as e:
				print e
				pass