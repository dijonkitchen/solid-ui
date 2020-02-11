import { JSDOM } from 'jsdom'

jest.mock('rdflib')
jest.mock('solid-auth-client')
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>').window.document

import {
  ACLControlBox5,
  preventBrowserDropEvents,
  shortNameForFolder
} from '../../../src/acl/acl-control'

describe('ACLControlBox5', () => {
  it('exists', () => {
    expect(ACLControlBox5).toBeInstanceOf(Function)
  })
})

describe('preventBrowserDropEvents', () => {
  it('exists', () => {
    expect(preventBrowserDropEvents).toBeInstanceOf(Function)
  })
})

describe('shortNameForFolder', () => {
  it('exists', () => {
    expect(shortNameForFolder).toBeInstanceOf(Function)
  })
})