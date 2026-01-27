'use client';

import Header from '@/components/Editor/Header';
import LeftSidebar from '@/components/Editor/LeftSidebar';
import ResourcePanel from '@/components/Editor/ResourcePanel';
import Canvas from '@/components/Editor/Canvas';
import RightPanel from '@/components/Editor/RightPanel';
import Timeline from '@/components/Editor/Timeline';
import { useEditorStore } from '@/store/editorStore';
import { cn } from '@/lib/utils';

export default function EditorPage() {
  const { isDarkMode } = useEditorStore();

  return (
    <div className={cn(
      "h-screen flex flex-col",
      isDarkMode ? "bg-gray-900" : "bg-gray-100"
    )}>
      {/* Header */}
      <Header />

      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left sidebar */}
        <LeftSidebar />

        {/* Resource panel */}
        <ResourcePanel />

        {/* Center - Canvas area */}
        <Canvas />

        {/* Right panel - Properties */}
        <RightPanel />
      </div>

      {/* Timeline */}
      <div className="h-56">
        <Timeline />
      </div>
    </div>
  );
}
