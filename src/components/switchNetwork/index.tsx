import React, { useRef } from 'react'
import { MessageCircle, Send, Info, Twitter, GitHub, Book, Calendar, MessageSquare, CheckSquare } from 'react-feather'
import styled from 'styled-components'
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg'
import { LANDING_PAGE } from '../../constants'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'

import { StyledMenu, StyledMenuButton, MenuFlyout, MenuItem, MenuNavItem } from '../StyledMenu'

import { useTranslation } from 'react-i18next'

const TutorialPage = LANDING_PAGE + 'tutorials'

const StyledMenuIcon = styled(MenuIcon)`
  path {
    stroke: ${({ theme }) => theme.text1};
  }
`

const NarrowMenuFlyout = styled(MenuFlyout)`
  min-width: 8.125rem;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    top: -10.25rem;
  `};
`

export default function SwitchNetwork() {
  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.NETWORK)
  const toggle = useToggleModal(ApplicationModal.NETWORK)
  const { t } = useTranslation()
  useOnClickOutside(node, open ? toggle : undefined)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledMenu ref={node as any}>
      <StyledMenuButton onClick={toggle}> BSC </StyledMenuButton>

      {open && (
        <NarrowMenuFlyout>
          <MenuItem id="link" href="http://eth.teddyswap.co">
            <Send size={14} />
            ETH
          </MenuItem>
          <MenuItem id="link" href="http://kcc.teddyswap.co">
            <Send size={14} />
            KCC
          </MenuItem>
          {/* <MenuNavItem id="link" to={'/IDO'}>
            <Calendar size={14} />
            {t('menu.idos')}
          </MenuNavItem>
          <MenuItem id="link" href={TutorialPage}>
            <Book size={14} />
            {t('menu.tutorials')}
          </MenuItem> */}
          {/* <MenuItem id="link" href="https://t.me/s2LPWnB1200zMmY0">
            <Send size={14} />
            {t('menu.telegram')}
          </MenuItem> */}
          {/* <MenuItem id="link" href="https://www.facebook.com/HalfPizzaGroup">
            <MessageCircle size={14} />
            {t('menu.facebook')}
          </MenuItem> */}
          {/* <MenuItem id="link" href="https://gov.pangolin.exchange">
            <MessageSquare size={14} />
            {t('header.forum')}
          </MenuItem>
          <MenuNavItem id="link" to={'/vote'}>
            <CheckSquare size={14} />
            {t('header.vote')}
          </MenuNavItem> */}
          {/* <MenuItem id="link" href="https://twitter.com/HalfPizza3">
            <Twitter size={14} />
            {t('menu.twitter')}
          </MenuItem> */}
          {/* <MenuItem id="link" href="https://github.com/halfpizza/Half-Pizza">
            <GitHub size={14} />
            {t('menu.code')}
          </MenuItem> */}
        </NarrowMenuFlyout>
      )}
    </StyledMenu>
  )
}
