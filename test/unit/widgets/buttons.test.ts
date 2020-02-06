jest.mock('rdflib')
import * as RdfLib from 'rdflib'
jest.mock('solid-auth-client')
import * as SolidAuthClient from 'solid-auth-client'
import { dom, element, event } from '../../helpers/dom'

import {
  addStyleSheet,
  allClassURIs,
  askName,
  attachmentList,
  button,
  cancelButton,
  clearElement,
  complain,
  continueButton,
  defaultAnnotationStore,
  deleteButtonWithCheck,
  extractLogURI,
  findImage,
  findImageFromURI,
  fileUploadButtonDiv,
  formatDateTime,
  imagesOf,
  index,
  isAudio,
  isImage,
  isVideo,
  linkButton,
  linkIcon,
  openHrefInOutlineMode,
  personTR,
  propertyTriage,
  refreshTree,
  removeButton,
  selectorPanel,
  selectorPanelRefresh,
  setImage,
  setName,
  shortDate,
  shortTime,  
  timestamp,
} from '../../../src/widgets/buttons'

describe('addStyleSheet', () => {
  it('exists', () => {
    expect(addStyleSheet).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const href = ''
    expect(addStyleSheet(dom, href)).toEqual(undefined)
  })
})

describe('allClassURIs', () => {
  it('exists', () => {
    expect(allClassURIs).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(allClassURIs()).toBeTruthy()
  })

})

describe('askName', () => {
  it('exists', () => {
    expect(askName).toBeInstanceOf(Function)
  })
  it.skip('runs', async () => {
    const kb = RdfLib.graph()
    const container = element
    const predicate = {}
    const klass = {}
    const noun = {}
    expect(await askName(dom, kb, container, predicate, klass, noun)).toBeTruthy()
  })
})

describe('attachmentList', () => {
  it('exists', () => {
    expect(attachmentList).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const subject = RdfLib.sym('')
    const div = element
    const options = {}
    expect(attachmentList(dom, subject, div, options)).toBeTruthy()
  })
})

describe('button', () => {
  it('exists', () => {
    expect(button).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const iconURI = ''
    const text = 'txt'
    const handler = () => {}
    expect(button(dom, iconURI, text, handler)).toBeTruthy()
  })
})

describe('cancelButton', () => {
  it('exists', () => {
    expect(cancelButton).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const handler = () => {}
    expect(cancelButton(dom, handler)).toBeTruthy()
  })
})

describe('clearElement', () => {
  it('exists', () => {
    expect(clearElement).toBeInstanceOf(Function)
  })
  it.skip('runs', () => {
    expect(clearElement(element)).toBeTruthy()
  })
})

describe('complain', () => {
  it('exists', () => {
    expect(complain).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(complain()).toEqual(undefined)
  })
})

describe('continueButton', () => {
  it('exists', () => {
    expect(continueButton).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const handler = () => {}
    expect(continueButton(dom, handler)).toBeTruthy()
  })
})

describe('defaultAnnotationStore', () => {
  it('exists', () => {
    expect(defaultAnnotationStore).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(defaultAnnotationStore(RdfLib.sym(''))).toEqual(undefined)
  })
})

describe('deleteButtonWithCheck', () => {
  it('exists', () => {
    expect(deleteButtonWithCheck).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const container = element
    const noun = ''
    const deleteFunction = () => {}
    expect(deleteButtonWithCheck(dom, container, noun, deleteFunction)).toBeTruthy()
  })
})

describe('extractLogURI', () => {
  it('exists', () => {
    expect(extractLogURI).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const fullURI = ''
    expect(extractLogURI(fullURI)).toEqual('')
  })
})

describe('findImage', () => {
  it('exists', () => {
    expect(findImage).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(findImage(RdfLib.sym(''))).toEqual('uri')
  })
})

describe('findImageFromURI', () => {
  it('exists', () => {
    expect(findImageFromURI).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(findImageFromURI('')).toEqual('https://solid.github.io/solid-ui/src/icons/noun_10636_grey.svg')
  })
})

describe('fileUploadButtonDiv', () => {
  it('exists', () => {
    expect(fileUploadButtonDiv).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const handler = () => {}
    expect(fileUploadButtonDiv(dom, handler)).toBeTruthy()
  })
})

describe('formatDateTime', () => {
  it('exists', () => {
    expect(formatDateTime).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const date = new Date('2020')
    const format = ''
    expect(formatDateTime(date, format)).toEqual('')
  })
})

describe('imagesOf', () => {
  it('exists', () => {
    expect(imagesOf).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(imagesOf(null, RdfLib.graph())).toBeTruthy()
  })
})

describe('index', () => {
  it('exists', () => {
    expect(index).toBeInstanceOf(Object)
  })
})
describe('index.line', () => {
  it('exists', () => {
    expect(index.line).toBeInstanceOf(Object)
  })
})
describe('index.twoLine', () => {
  it('exists', () => {
    expect(index.twoLine).toBeInstanceOf(Object)
  })
})
describe('index.twoLine[\'\']', () => {
  it('exists', () => {
    expect(index.twoLine['']).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(index.twoLine[''](dom, null)).toEqual(element)
  })
})
describe('index.twoLine[\'http://www.w3.org/2000/10/swap/pim/qif#Transaction\']', () => {
  it('exists', () => {
    expect(index.twoLine['http://www.w3.org/2000/10/swap/pim/qif#Transaction']).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(index.twoLine['http://www.w3.org/2000/10/swap/pim/qif#Transaction'](dom, null)).toEqual(element)
  })
})
describe('index.twoLine[\'http://www.w3.org/ns/pim/trip#Trip\']', () => {
  it('exists', () => {
    expect(index.twoLine['http://www.w3.org/ns/pim/trip#Trip']).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(index.twoLine['http://www.w3.org/ns/pim/trip#Trip'](dom, null)).toEqual(element)
  })
})
describe('index.twoLine.widgetForClass', () => {
  it('exists', () => {
    expect(index.twoLine.widgetForClass).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(index.twoLine.widgetForClass(RdfLib.sym(''))).toBeInstanceOf(Function)
  })
})

describe('isAudio', () => {
  it('exists', () => {
    expect(isAudio).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(isAudio()).toEqual(false)
  })
})

describe('isImage', () => {
  it('exists', () => {
    expect(isImage).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(isImage()).toEqual(false)
  })
})

describe('isVideo', () => {
  it('exists', () => {
    expect(isVideo).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(isVideo()).toEqual(false)
  })
})

describe('linkButton', () => {
  it('exists', () => {
    expect(linkButton).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const object = RdfLib.sym('')
    expect(linkButton(dom, object)).toBeTruthy()
  })
})

describe('linkIcon', () => {
  it('exists', () => {
    expect(linkIcon).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const subject = RdfLib.sym('')
    const iconURI = ''
    expect(linkIcon(dom, subject, iconURI)).toBeTruthy()
  })
})

describe('openHrefInOutlineMode', () => {
  it('exists', () => {
    expect(openHrefInOutlineMode).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(openHrefInOutlineMode(event)).toEqual(undefined)
  })
})

describe('personTR', () => {
  it('exists', () => {
    expect(personTR).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const pred = RdfLib.sym('')
    const obj = RdfLib.sym('')
    const options = {}
    expect(personTR(dom, pred, obj, options)).toBeTruthy()
  })
})

describe('propertyTriage', () => {
  it('exists', () => {
    expect(propertyTriage).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(propertyTriage(RdfLib.graph())).toBeTruthy()
  })
})

describe('refreshTree', () => {
  it('exists', () => {
    expect(refreshTree).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(refreshTree({ children: []})).toEqual(undefined)
  })
})

describe('removeButton', () => {
  it('exists', () => {
    expect(removeButton).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(removeButton(dom, element)).toBeTruthy()
  })
})

describe('selectorPanel', () => {
  it('exists', () => {
    expect(selectorPanel).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const kb = RdfLib.graph()
    const type = ''
    const predicate = ''
    const inverse = false
    const possible = true
    const options = {}
    const callbackFunction = () => {}
    const linkCallback = () => {}
    expect(selectorPanel(
      dom,
      kb,
      type,
      predicate,
      inverse,
      possible,
      options,
      callbackFunction,
      linkCallback)).toBeTruthy()
  })
})

describe('selectorPanelRefresh', () => {
  it('exists', () => {
    expect(selectorPanelRefresh).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const kb = RdfLib.graph()
    const type = ''
    const predicate = ''
    const inverse = false
    const possible = true
    const options = {}
    const callbackFunction = () => {}
    const linkCallback = () => {}
    expect(selectorPanelRefresh(
      dom,
      kb,
      type,
      predicate,
      inverse,
      possible,
      options,
      callbackFunction,
      linkCallback)).toBeTruthy()
  })
})

describe('setImage', () => {
  it('exists', () => {
    expect(setImage).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const thing = RdfLib.sym('')
    expect(setImage(element, thing)).toEqual(undefined)
  })
})

describe('setName', () => {
  it('exists', () => {
    expect(setName).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const thing = RdfLib.sym('')
    expect(setName(element, thing)).toEqual(undefined)
  })
})

describe('shortDate', () => {
  it('exists', () => {
    expect(shortDate).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(shortDate()).toBeTruthy()
  })
})

describe('shortTime', () => {
  it('exists', () => {
    expect(shortTime).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(shortTime()).toBeTruthy()
  })
})

describe('timestamp', () => {
  it('exists', () => {
    expect(timestamp).toBeInstanceOf(Function)
  })
  it('runs', () => {
    expect(timestamp()).toBeTruthy()
  })
})

