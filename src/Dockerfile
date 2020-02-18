FROM envoyproxy/envoy-dev:bf132fbdd837dceefd523d056334595bdd9d96f8
	

COPY ./envoy.yaml /etc/envoy/envoy.yaml
	

CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace --log-path /tmp/envoy_info.log