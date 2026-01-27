import { create } from 'zustand';
import { EditorStore, Page, Element, Resource, ImageElement, VideoElement, AudioElement, TextElement, QRCodeElement } from '@/types/editor';
import { generateId } from '@/lib/utils';

// Sample resources with placeholder images
const sampleResources: Resource[] = [
    {
        id: 'res-1',
        type: 'image',
        name: 'Book in a jungle s...',
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&h=150&fit=crop',
    },
    {
        id: 'res-2',
        type: 'audio',
        name: 'Book in a jungle s...',
        src: '/audio/sample.mp3',
        duration: 180,
    },
    {
        id: 'res-3',
        type: 'image',
        name: 'Book in a jungle s...',
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=150&fit=crop',
    },
    {
        id: 'res-4',
        type: 'audio',
        name: 'Book in a jungle s...',
        src: '/audio/sample2.mp3',
        duration: 120,
    },
    {
        id: 'res-5',
        type: 'image',
        name: 'Book in a jungle s...',
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&h=150&fit=crop',
    },
    {
        id: 'res-6',
        type: 'image',
        name: 'Book in a jungle s...',
        src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=200&h=150&fit=crop',
    },
    {
        id: 'res-7',
        type: 'image',
        name: 'Book in a jungle s...',
        src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&h=300&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=200&h=150&fit=crop',
    },
    {
        id: 'res-8',
        type: 'audio',
        name: 'Book in a jungle s...',
        src: '/audio/sample3.mp3',
        duration: 90,
    },
];

// Page 1: Living room + QR code + Title text (like Image 2)
const page1Elements: Element[] = [
    {
        id: 'el-1-1',
        type: 'video',
        name: 'Video.mp4',
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
        position: { x: 0, y: 0 },
        size: { width: 320, height: 240 },
        duration: 10,
        startTime: 0,
        freePosition: false,
        volume: 75,
        fill: 'fill',
    } as VideoElement,
    {
        id: 'el-1-2',
        type: 'qrcode',
        name: 'QR Code',
        data: 'https://example.com',
        title: 'Title Goes There',
        position: { x: 350, y: 50 },
        size: { width: 120, height: 150 },
        duration: 10,
        startTime: 0,
        freePosition: true,
    } as QRCodeElement,
    {
        id: 'el-1-3',
        type: 'text',
        name: 'Text',
        content: 'Title Goes There',
        fontSize: 28,
        fontWeight: '600',
        color: '#0891b2',
        backgroundColor: '#fce7f3',
        position: { x: 0, y: 280 },
        size: { width: 640, height: 60 },
        duration: 10,
        startTime: 0,
        freePosition: false,
    } as TextElement,
    {
        id: 'el-1-4',
        type: 'audio',
        name: 'Audio.mp3',
        src: '/audio/background.mp3',
        volume: 75,
        fadeIn: 1.5,
        fadeOut: 1.5,
        position: { x: 0, y: 0 },
        size: { width: 0, height: 0 },
        duration: 180,
        startTime: 0,
        freePosition: false,
    } as AudioElement,
];

// Page 2: Full canvas image (like Image 3 - cloud illustration)
const page2Elements: Element[] = [
    {
        id: 'el-2-1',
        type: 'image',
        name: 'Image.jpg',
        src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
        position: { x: 0, y: 0 },
        size: { width: 640, height: 360 },
        duration: 10,
        startTime: 0,
        freePosition: false,
        fill: 'fill',
    } as ImageElement,
    {
        id: 'el-2-2',
        type: 'audio',
        name: 'Audio.mp3',
        src: '/audio/background.mp3',
        volume: 75,
        fadeIn: 1.5,
        fadeOut: 1.5,
        position: { x: 0, y: 0 },
        size: { width: 0, height: 0 },
        duration: 180,
        startTime: 0,
        freePosition: false,
    } as AudioElement,
];

// Page 3: Split view (like Image 4 - clothing + map + 50% Sale)
const page3Elements: Element[] = [
    {
        id: 'el-3-1',
        type: 'image',
        name: 'Image.jpg',
        src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
        position: { x: 0, y: 0 },
        size: { width: 320, height: 240 },
        duration: 10,
        startTime: 0,
        freePosition: false,
        fill: 'fill',
    } as ImageElement,
    {
        id: 'el-3-2',
        type: 'video',
        name: 'Video.mp4',
        src: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=200&h=150&fit=crop',
        position: { x: 320, y: 0 },
        size: { width: 320, height: 240 },
        duration: 30,
        startTime: 10,
        freePosition: false,
        volume: 75,
        fill: 'fill',
    } as VideoElement,
    {
        id: 'el-3-3',
        type: 'text',
        name: 'Text',
        content: '50% Sale',
        fontSize: 24,
        fontWeight: '600',
        color: '#ffffff',
        backgroundColor: '#0891b2',
        position: { x: 0, y: 280 },
        size: { width: 640, height: 50 },
        duration: 10,
        startTime: 0,
        freePosition: false,
    } as TextElement,
    {
        id: 'el-3-4',
        type: 'audio',
        name: 'Audio.mp3',
        src: '/audio/background.mp3',
        volume: 75,
        fadeIn: 1.5,
        fadeOut: 1.5,
        position: { x: 0, y: 0 },
        size: { width: 0, height: 0 },
        duration: 180,
        startTime: 0,
        freePosition: false,
    } as AudioElement,
];

const initialPages: Page[] = [
    {
        id: 'page-1',
        name: 'Page 1',
        duration: 180,
        backgroundColor: '#FCFAFF',
        layout: '2:1-h',
        elements: page1Elements,
    },
    {
        id: 'page-2',
        name: 'Page 2',
        duration: 180,
        backgroundColor: '#FCFAFF',
        layout: '1:1',
        elements: page2Elements,
    },
    {
        id: 'page-3',
        name: 'Page 3',
        duration: 180,
        backgroundColor: '#FCFAFF',
        layout: '2:1-h',
        elements: page3Elements,
    },
];

export const useEditorStore = create<EditorStore>((set, get) => ({
    // Initial state
    projectName: 'Template 2025-08-29',
    projectDate: '2025-08-29',
    pages: initialPages,
    currentPageId: 'page-1',
    selectedElementId: null,
    resources: sampleResources,
    zoom: 60,
    timelinePosition: 0,
    isPlaying: false,
    isDarkMode: false,
    activeLeftTab: 'upload',
    activeResourceTab: 'all',

    // Project actions
    setProjectName: (name) => set({ projectName: name }),

    setZoom: (zoom) => set({ zoom: Math.max(10, Math.min(200, zoom)) }),

    toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

    // Page actions
    addPage: () => {
        const pages = get().pages;
        const newPage: Page = {
            id: generateId(),
            name: `Page ${pages.length + 1}`,
            duration: 180,
            backgroundColor: '#FCFAFF',
            layout: '1:1',
            elements: [],
        };
        set({
            pages: [...pages, newPage],
            currentPageId: newPage.id,
        });
    },

    duplicatePage: (pageId) => {
        const pages = get().pages;
        const pageToDuplicate = pages.find(p => p.id === pageId);
        if (pageToDuplicate) {
            const newPage: Page = {
                ...pageToDuplicate,
                id: generateId(),
                name: `${pageToDuplicate.name} (Copy)`,
                elements: pageToDuplicate.elements.map(el => ({ ...el, id: generateId() })),
            };
            const index = pages.findIndex(p => p.id === pageId);
            const newPages = [...pages];
            newPages.splice(index + 1, 0, newPage);
            set({ pages: newPages, currentPageId: newPage.id });
        }
    },

    deletePage: (pageId) => {
        const pages = get().pages;
        if (pages.length > 1) {
            const newPages = pages.filter(p => p.id !== pageId);
            const currentPageId = get().currentPageId;
            set({
                pages: newPages,
                currentPageId: currentPageId === pageId ? newPages[0].id : currentPageId,
            });
        }
    },

    setCurrentPage: (pageId) => set({ currentPageId: pageId, selectedElementId: null }),

    updatePage: (pageId, updates) => {
        set((state) => ({
            pages: state.pages.map(p =>
                p.id === pageId ? { ...p, ...updates } : p
            ),
        }));
    },

    // Element actions
    addElement: (pageId, element) => {
        set((state) => ({
            pages: state.pages.map(p =>
                p.id === pageId
                    ? { ...p, elements: [...p.elements, element] }
                    : p
            ),
            selectedElementId: element.id,
        }));
    },

    updateElement: (pageId, elementId, updates) => {
        set((state) => ({
            pages: state.pages.map(p =>
                p.id === pageId
                    ? {
                        ...p,
                        elements: p.elements.map(el =>
                            el.id === elementId ? { ...el, ...updates } as Element : el
                        )
                    }
                    : p
            ),
        }));
    },

    deleteElement: (pageId, elementId) => {
        set((state) => ({
            pages: state.pages.map(p =>
                p.id === pageId
                    ? { ...p, elements: p.elements.filter(el => el.id !== elementId) }
                    : p
            ),
            selectedElementId: state.selectedElementId === elementId ? null : state.selectedElementId,
        }));
    },

    setSelectedElement: (elementId) => set({ selectedElementId: elementId }),

    duplicateElement: (pageId, elementId) => {
        const page = get().pages.find(p => p.id === pageId);
        const element = page?.elements.find(el => el.id === elementId);
        if (element) {
            const newElement: Element = {
                ...element,
                id: generateId(),
                name: `${element.name} (Copy)`,
                position: {
                    x: element.position.x + 20,
                    y: element.position.y + 20,
                },
            };
            get().addElement(pageId, newElement);
        }
    },

    // Resource actions
    addResource: (resource) => {
        set((state) => ({ resources: [...state.resources, resource] }));
    },

    deleteResource: (resourceId) => {
        set((state) => ({
            resources: state.resources.filter(r => r.id !== resourceId),
        }));
    },

    // Playback actions
    setTimelinePosition: (positionOrUpdater) => set((state) => ({
        timelinePosition: typeof positionOrUpdater === 'function'
            ? positionOrUpdater(state.timelinePosition)
            : positionOrUpdater
    })),

    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

    // Tab actions
    setActiveLeftTab: (tab) => set({ activeLeftTab: tab }),
    setActiveResourceTab: (tab) => set({ activeResourceTab: tab }),
}));
