deploy_sandbox:
	git checkout main
	git pull
	git checkout sandbox
	git rebase main
	git push

deploy_production:
  git checkout sandbox
	git pull
	git checkout production
	git rebase sandbox
	git push