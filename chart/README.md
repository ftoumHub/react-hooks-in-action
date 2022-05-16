# Package Helm declaration: pae-frontend


Il faut déployer comme ceci pour RECX :

```
helm repo add releases http://nexus-fabfonc.maif.local/repository/helm-releases
helm repo add snapshots http://nexus-fabfonc.maif.local/repository/helm-snapshots

env=recx
version=x.y.z
namespace=personne-a-evenement
oc project $namespace-$env
helm repo update
helm dependency update chart/

helm upgrade -i --set env=$env --version $version -n $namespace-$env pae-frontend \
releases/personne-a-evenement-pae-frontend
```

ou pour une version snapshot

```
helm upgrade -i --devel --set env=$env --version $version -n $namespace-$env pae-frontend \
snapshots/personne-a-evenement-pae-frontend
```

ou pour un déploiement par AWX

```
---
product: personne-a-evenement
env: recx
repository: releases
chart: personne-a-evenement-pae-frontend
version: x.y.z
set_env: yes
wait: true
timeout: 300s
force: false
```
