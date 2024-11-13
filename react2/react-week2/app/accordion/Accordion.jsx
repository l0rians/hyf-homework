"use client";

import { AccordionProvider, useAccordionContext } from "./AccordionContext";
import { useState } from "react";
import clsx from "clsx";

function Panel({ title, children, activeIndex }) {
  const { activeIndex: contextIndex, onChange } = useAccordionContext();
  const toggle = () => onChange(activeIndex);
  const isOpen = contextIndex === activeIndex;

  return (
    <div
      className={
        "p-2 border-t border-t-black flex flex-col justify-center items-center"
      }
    >
      <h2 className={"text-xl font-bold"}>{title}</h2>
      <div
        className={clsx({
          hidden: !isOpen,
        })}
      >
        {children}
      </div>
      {!isOpen && (
        <button
          className={"border border-blue-500 rounded text-blue-500"}
          onClick={() => toggle()}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default function Accordion() {
  return (
    <AccordionProvider>
      <div className={"flex flex-col border border-black rounded"}>
        <Panel title={"Section 1"} activeIndex={1}>
          Content 1
        </Panel>
        <Panel title={"Section 2"} activeIndex={2}>
          Content 2
        </Panel>
        <Panel title={"Section 3"} activeIndex={3}>
          Content 2
        </Panel>
      </div>
    </AccordionProvider>
  );
}
