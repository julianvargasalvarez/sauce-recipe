WEBHOOK=https://oauth-julian.vargas-e98bb:62762380-cefd-42e5-92b7-53a7e68d6831@api.eu-central-1.saucelabs.com/api-testing/rest/v4/9ec3bc2a-b8e3-4a87-a347-2fb82f41f5d4

echo "Running frontend tests"
cd sauce-client

docker run -d -v "$(pwd)/:/specs" -p 5000:5000 quay.io/saucelabs/piestry -u /specs/sauce-contract.yml --validate-request --logger $WEBHOOK/insights/events/_contract
sleep 5

$HOME/.deno/bin/deno test --allow-net

# cleanup
docker stop $(docker ps -q)
cd ..

echo "Running backend tests"
cd sauce-server
$HOME/.deno/bin/deno test 
cd ..

docker run --rm quay.io/saucelabs/apifctl run -i 6278fdf90f50a70398588952 -T 93e0b60e078c4e1095c355b2e645a91e -H $WEBHOOK
