import { useSyncArticleAuthor } from '@/hooks/mutations/useSyncProfileCache'
import { Profile } from '@/types/domain'
import React, { createContext, useCallback, useContext, useMemo } from 'react'

type ActionButtonHandlerValue = {
  handleFollowUser: (profile: Profile) => void
  handleUnfollowUser: (profile: Profile) => void
}

const ActionButtonHandlerContext = createContext<ActionButtonHandlerValue | undefined>(undefined)

type ActionButtonHandlerProviderProps = {
  slug: string
}

export const ActionButtonHandlerProvider: React.FC<React.PropsWithChildren<ActionButtonHandlerProviderProps>> = ({
  slug,
  children,
}) => {
  const syncArticleAuthor = useSyncArticleAuthor()
  const handleFollowAndUnfollow = useCallback(
    (profile: Profile) => {
      syncArticleAuthor(slug, profile)
    },
    [slug, syncArticleAuthor]
  )

  const actionButtonHandlerValue: ActionButtonHandlerValue = useMemo(
    () => ({ handleFollowUser: handleFollowAndUnfollow, handleUnfollowUser: handleFollowAndUnfollow }),
    [handleFollowAndUnfollow]
  )

  return (
    <ActionButtonHandlerContext.Provider value={actionButtonHandlerValue}>
      {children}
    </ActionButtonHandlerContext.Provider>
  )
}

export const useActionButtonHandler = () => useContext(ActionButtonHandlerContext)
