load('api_rpc.js');
load('api_shadow.js');

RPC.addHandler('Reveal', function() {
  print('Node 074 activates: no sacrifice');
  return {phase: 2.09439};
});

print('Mongoose OS Brain 074 online – hydrogen valve ready');
