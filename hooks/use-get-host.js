import { config, isProd } from '../etc/config'

export const useGetHost = () => {
  const protocol = isProd ? 'https' : 'http'
  const host = `${protocol}://${config.host}${config.port ? `:${config.port}` : ''}`

  return host
}
