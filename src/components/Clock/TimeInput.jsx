import React from 'react';
import { Card } from "@heroui/react";
export default function TimeInput() {
    return (
        <div className="mx-auto">
            <Card className="w-xl h-[120px]">
                <Card.Header>
                    <Card.Title className="font-bold text-xl">
                        <span>10</span>
                        <span>:</span>
                        <span>00</span>
                        <span>:</span>
                        <span>10</span>
                    </Card.Title>
                </Card.Header>
            </Card>

        </div>
    )
}