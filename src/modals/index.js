import { modal0 } from '@/modals/modal0.js'
import { modal1 } from '@/modals/modal1.js'
import { modal2 } from '@/modals/modal2.js'
import { modal3 } from '@/modals/modal3.js'
import { modal4 } from '@/modals/modal4.js'
import { modal5 } from '@/modals/modal5.js'

const modalMap = [
    {
        id: 'modal0',
        title: 'INTERCEPT 0: PREVENTION',
        pdf: '/static/pdf/test.pdf',
        body: modal0
    },
    {
        id: 'modal1',
        title: 'INTERCEPT 1: LAW ENFORCEMENT',
        pdf: '/static/pdf/test.pdf',
        body: modal1
    },
    {
        id: 'modal2',
        title: 'INTERCEPT 2: INITIAL DETENTION/INITIAL COURT HEARINGS',
        pdf: '/static/pdf/test.pdf',
        body: modal2
    },
    {
        id: 'modal3',
        title: 'INTERCEPT 3: COURTS AND JAILS',
        pdf: '/static/pdf/test.pdf',
        body: modal3
    },
    {
        id: 'modal4',
        title: 'INTERCEPT 4: INSTITUTIONS AND REENTRY',
        pdf: '/static/pdf/test.pdf',
        body: modal4
    },
    {
        id: 'modal5',
        title: 'INTERCEPT 5: COMMUNITY CORRECTIONS',
        pdf: '/static/pdf/test.pdf',
        body: modal5
    }
]

export {modalMap}
