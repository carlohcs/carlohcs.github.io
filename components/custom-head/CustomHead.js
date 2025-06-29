
import { useContext } from 'react'
import Head from 'next/head'
import { AppContext } from '../providers/AppProvider'
import PropTypes from 'prop-types'

export const CustomHead = ({ title }) => {
  const { getMessage } = useContext(AppContext)

  const finalTitle = title ? `${title} ${getMessage('page', 'titleSuffix')}` : getMessage('page', 'defaultTitle')

  return (
    <Head>
      <title>{finalTitle}</title>
    </Head>
  )
}

CustomHead.propTypes = {
  title: PropTypes.string
}
