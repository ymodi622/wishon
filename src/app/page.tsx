"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Sparkles, Gift } from "lucide-react";

export default function BirthdayWish() {
  const [answer, setAnswer] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  // You can change this to your desired question and answer
  const question =
    "What place did we first held our hands and talked about our feelings?";
  const correctAnswer = "walkway"; // Change this to your correct answer

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.toLowerCase().trim() === correctAnswer.toLowerCase()) {
      setShowCard(true);
      setIsWrong(false);
    } else {
      setIsWrong(true);
      setTimeout(() => setIsWrong(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header with decorative elements */}
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-2">
            <Sparkles className="h-8 w-8 text-pink-500" />
            <Gift className="h-10 w-10 text-purple-600" />
            <Sparkles className="h-8 w-8 text-pink-500" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Special Birthday Message
          </h1>
          <p className="text-gray-600">
            Answer the question to reveal your surprise!
          </p>
        </div>

        {/* Question Form */}
        {!showCard && (
          <Card className="backdrop-blur-sm bg-white/80 border-pink-200 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-gray-800">
                A Little Question for You
              </CardTitle>
              <CardDescription className="text-gray-600">
                {/* Think carefully... you know the answer! 💭 */}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="answer" className="text-gray-700 font-medium">
                    {question}
                  </Label>
                  <Input
                    id="answer"
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Type your answer here..."
                    className={`transition-all duration-300 ${
                      isWrong
                        ? "border-red-400 bg-red-50 shake"
                        : "border-pink-300 focus:border-purple-400"
                    }`}
                    required
                  />
                  {isWrong && (
                    <p className="text-red-500 text-sm animate-pulse">
                      Hmm, that&apos;s not quite right. Try again! 🤔
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  Reveal My Surprise 🎁
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Birthday Card - Hidden until correct answer */}
        {showCard && (
          <Card className="backdrop-blur-sm bg-white/90 border-pink-200 shadow-2xl animate-in fade-in-0 zoom-in-95 duration-700">
            <CardHeader className="text-center border-b border-pink-100">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Heart className="h-12 w-12 text-pink-500 animate-pulse" />
                  <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
                </div>
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Happy Birthday, Dhruvi!
              </CardTitle>
              <CardDescription className="text-gray-600">
                A special poem just for you
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4 text-center">
                {/* Poetry Section */}
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-100">
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p className="italic">
                      They say there doesn’t exists a girl,
                    </p>
                    <p className="italic">
                      Whose calmness can make you feel home,
                    </p>
                    <p className="italic">
                      Whose silliness can make you a child too,
                    </p>
                    <p className="italic">
                      They say there doesn’t exists a girl,
                    </p>
                    <p className="italic">
                      Whose eyes are deep as a sea and hair smells blossom,
                    </p>
                    <p className="italic">
                      Whose touch feels like breeze at shore,
                    </p>
                    <p className="italic">
                      Whose whispers never escape your ears,
                    </p>
                    <p className="italic">
                      Whose hug is warm enough to stable your soul
                    </p>
                    <p className="italic">
                      They say there doesn’t exists a girl,
                    </p>
                    <p className="italic">
                      Whose mere presence is gentle enough to get all your
                      heart,
                    </p>
                    <p className="italic  font-medium text-lg mt-4">
                      Only after having you in my life I started wondering they
                      may be wrong.
                    </p>
                    <p className="italic">-Your babu</p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-2 text-pink-600">
                  <Heart className="h-5 w-5 fill-current" />
                  <span className="font-medium">With love and best wishes</span>
                  <Heart className="h-5 w-5 fill-current" />
                </div>

                <div className="text-sm text-gray-500 mt-6">
                  Hope your special day is absolutely amazing! 🎂✨
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
