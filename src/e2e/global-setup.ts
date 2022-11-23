import { FullConfig } from '@playwright/test'

async function globalSetup(config: FullConfig) {
  console.log('begin global setup!')
  //   Globalな設定があれば設定する
  console.log('end global setup!')
}

export default globalSetup
