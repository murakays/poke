import { atom } from 'recoil'

type HeaderState = {
    anchorElNav: HTMLElement,
    anchorElUser: HTMLElement
}

export const headerState = atom({
    key: 'header',
    default: {
        anchorElNav: null,
        anchorElUser: null
    }
})