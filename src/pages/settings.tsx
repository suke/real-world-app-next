import { NextPage } from 'next'
import { Settings } from '@/components/templates/Settings'
import { AuthGuard } from '@/components/guards/AuthGuard'

const SettingsPage: NextPage = () => {
  return (
    <AuthGuard>
      <Settings />
    </AuthGuard>
  )
}

export default SettingsPage
