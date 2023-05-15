import { describe, expect, it } from '@jest/globals'

import { getDecryptedMessage} from './'


describe('Given a sentence and a key', () => {
    it('should return the caesar cipher decrypted sentence', () => {
        
        const str1 = "Dear Julius, Let us meet near the Theatre of Pompey at sundown. Ave Caesar!"
        const key1 = 3
        const res1 = "Ghdu Mxolxv, Ohw xv phhw qhdu wkh Wkhdwuh ri Srpshb dw vxqgrzq. Dyh Fdhvdu!"
        expect(getDecryptedMessage(str1, key1)).toEqual(res1)

        const str2 = "Ftq cguow ndaiz raj vgybe ahqd ftq xmlk pas. Ftq ruhq najuzs iulmdpe vgyb cguowxk."
        const key2 = -12
        const res2 = "The quick brown fox jumps over the lazy dog. The five boxing wizards jump quickly."
        expect(getDecryptedMessage(str2, key2)).toEqual(res2)

    })
})

