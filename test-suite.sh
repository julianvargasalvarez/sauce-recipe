echo "Running frontend tests"
cd sauce-client

docker run -d -v "$(pwd)/:/specs" -p 5000:5000 quay.io/saucelabs/piestry -u /specs/sauce-contract.yml --validate-request
sleep 5

$HOME/.deno/bin/deno test --allow-net

# cleanup
docker stop $(docker ps -q)
cd ..

