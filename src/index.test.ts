// src/index.test.ts
import { describe, it, expect } from 'vitest'
import { OursPrivacyApi } from './index'

describe('OursPrivacyApi', () => {
    it('should be defined', () => {
        expect(OursPrivacyApi).toBeDefined()
    });

    it('should have track method', () => {
        const api = new OursPrivacyApi();
        expect(api.track).toBeDefined();
    });
    
    it('should have identify method', () => {
        const api = new OursPrivacyApi();
        expect(api.identify).toBeDefined();
    });
        
})