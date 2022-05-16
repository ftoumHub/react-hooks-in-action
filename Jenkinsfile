@Library('maif-pipeline-library') _

import fr.maif.ingdev.forge.*
import fr.maif.ingdev.jenkins.*
import fr.maif.ingdev.utils.Logger
import fr.maif.ingdev.utils.Workspace
import fr.maif.ingdev.forge.devflow.Devflow
import fr.maif.ingdev.delivery.*
import fr.maif.ingdev.delivery.models.*
import fr.maif.ingdev.git.BranchTypes

funPipeline {
        Devflow devflow = RunContext.get('devflow')
        String branchName = Pipeline.getEnv('BRANCH_NAME')

        if (devflow.getBranchType(branchName) == BranchTypes.DEVELOP) {
                CloudbeesParameters params = new CloudbeesParameters()
                params.target = "RECX"
                params.project = "personne-a-evenement"
                params.application = "personne-a-evenement"
                params.components = [["name": "personne-a-evenement-pae-frontend", "deploy": "true", "version":"pApplicationVersion"]]
                //params.options = [["name": "pApplicationAtomic", "value": "true"],["name": "pApplicationForce", "value": "false"],["name": "pApplicationTimeout", "value": "5m0s"]]

                RunContext.set("deliveryService": new CloudbeesService(params))
                RunContext.set("waitForDelivery": false)
        }
}
