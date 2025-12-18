import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

interface Track {
  id: string;
  title: string;
  genre: string;
  duration: string;
  coverEmoji: string;
  createdAt: string;
}

interface Artist {
  name: string;
  emoji: string;
}

export default function Index() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([
    { id: '1', title: 'Summer Nights', genre: 'Electronic', duration: '3:45', coverEmoji: '🌙', createdAt: '2 часа назад' },
    { id: '2', title: 'City Dreams', genre: 'Hip-Hop', duration: '4:12', coverEmoji: '🏙️', createdAt: '5 часов назад' },
    { id: '3', title: 'Ocean Waves', genre: 'Ambient', duration: '5:30', coverEmoji: '🌊', createdAt: 'Вчера' },
    { id: '4', title: 'Electric Soul', genre: 'Pop', duration: '3:20', coverEmoji: '⚡', createdAt: '2 дня назад' },
  ]);

  const [trackTitle, setTrackTitle] = useState('');
  const [trackDescription, setTrackDescription] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [uploadedVoice, setUploadedVoice] = useState<string | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);

  const genres = [
    { name: 'Hip-Hop', emoji: '🎤', color: 'from-purple-500 to-pink-500' },
    { name: 'Pop', emoji: '🎵', color: 'from-pink-500 to-rose-500' },
    { name: 'Rock', emoji: '🎸', color: 'from-red-500 to-orange-500' },
    { name: 'Electronic', emoji: '🎧', color: 'from-blue-500 to-cyan-500' },
    { name: 'Jazz', emoji: '🎺', color: 'from-yellow-500 to-amber-500' },
    { name: 'Ambient', emoji: '🌌', color: 'from-indigo-500 to-purple-500' },
  ];

  const popularArtists: Artist[] = [
    { name: 'Drake', emoji: '🦉' },
    { name: 'Taylor Swift', emoji: '✨' },
    { name: 'The Weeknd', emoji: '🌃' },
    { name: 'Billie Eilish', emoji: '👁️' },
    { name: 'Ed Sheeran', emoji: '🎸' },
    { name: 'Ariana Grande', emoji: '🎀' },
  ];

  const handleCreateTrack = () => {
    if (!trackTitle || !selectedGenre) return;

    const newTrack: Track = {
      id: Date.now().toString(),
      title: trackTitle,
      genre: selectedGenre,
      duration: '0:00',
      coverEmoji: genres.find(g => g.name === selectedGenre)?.emoji || '🎵',
      createdAt: 'Только что',
    };

    setTracks([newTrack, ...tracks]);
    setIsCreateOpen(false);
    setTrackTitle('');
    setTrackDescription('');
    setSelectedGenre('');
    setUploadedVoice(null);
    setSelectedArtist(null);
  };

  const handleVoiceUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedVoice(file.name);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <Icon name="Music" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-black text-gradient">VoiceAI Studio</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="gap-2">
                <Icon name="Library" size={20} />
                <span className="hidden md:inline">Библиотека</span>
              </Button>
              <Button variant="ghost" className="gap-2">
                <Icon name="User" size={20} />
                <span className="hidden md:inline">Профиль</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-gradient animate-fade-in">
              Создавай музыку<br />со своим голосом
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
              Загружай свой голос, выбирай стиль и делай фиты с популярными артистами. 
              AI создаст уникальный трек за минуты.
            </p>

            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gradient-primary text-white font-bold px-8 gap-3 hover-scale animate-pulse-slow">
                  <Icon name="Plus" size={24} />
                  Создать трек
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-black">Создание трека</DialogTitle>
                </DialogHeader>

                <div className="space-y-6 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Название трека</Label>
                    <Input
                      id="title"
                      placeholder="Введите название..."
                      value={trackTitle}
                      onChange={(e) => setTrackTitle(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Описание (опционально)</Label>
                    <Textarea
                      id="description"
                      placeholder="О чём трек?..."
                      value={trackDescription}
                      onChange={(e) => setTrackDescription(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Выберите стиль</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {genres.map((genre) => (
                        <button
                          key={genre.name}
                          onClick={() => setSelectedGenre(genre.name)}
                          className={`p-4 rounded-lg border-2 transition-all hover-scale ${
                            selectedGenre === genre.name
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="text-4xl mb-2">{genre.emoji}</div>
                          <div className="font-semibold">{genre.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Добавить аудио (ваш голос)</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={handleVoiceUpload}
                        className="hidden"
                        id="voice-upload"
                      />
                      <label htmlFor="voice-upload" className="cursor-pointer">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon name="Mic" size={32} className="text-primary" />
                          </div>
                          {uploadedVoice ? (
                            <div className="space-y-1">
                              <p className="font-semibold text-primary">{uploadedVoice}</p>
                              <p className="text-sm text-muted-foreground">Нажмите, чтобы изменить</p>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <p className="font-semibold">Загрузите аудиофайл</p>
                              <p className="text-sm text-muted-foreground">MP3, WAV до 10 МБ</p>
                            </div>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Выберите артиста для фита (опционально)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {popularArtists.map((artist) => (
                        <button
                          key={artist.name}
                          onClick={() => setSelectedArtist(artist.name)}
                          className={`p-3 rounded-lg border-2 transition-all hover-scale ${
                            selectedArtist === artist.name
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="text-3xl mb-1">{artist.emoji}</div>
                          <div className="text-sm font-medium">{artist.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={handleCreateTrack}
                      disabled={!trackTitle || !selectedGenre}
                      className="flex-1 gradient-primary text-white font-bold"
                      size="lg"
                    >
                      <Icon name="Sparkles" size={20} className="mr-2" />
                      Создать трек
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsCreateOpen(false)}
                      size="lg"
                    >
                      Отмена
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold">Моя библиотека</h3>
              <Badge variant="secondary" className="text-sm">
                {tracks.length} {tracks.length === 1 ? 'трек' : 'треков'}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tracks.map((track, index) => (
                <Card
                  key={track.id}
                  className="hover-scale overflow-hidden border-2 border-primary/20 group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center relative">
                      <div className="text-8xl">{track.coverEmoji}</div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button size="lg" className="rounded-full w-16 h-16 gradient-primary">
                          <Icon name="Play" size={24} className="text-white" />
                        </Button>
                      </div>
                      <Badge className="absolute top-3 right-3">{track.duration}</Badge>
                    </div>
                    <div className="p-4 space-y-2">
                      <h4 className="font-bold text-lg truncate">{track.title}</h4>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{track.genre}</span>
                        <span>{track.createdAt}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="hover-scale overflow-hidden border-2 border-dashed border-primary/40 cursor-pointer">
                <CardContent className="p-0 h-full">
                  <div
                    className="aspect-square flex flex-col items-center justify-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsCreateOpen(true)}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Plus" size={32} className="text-primary" />
                    </div>
                    <p className="font-semibold">Создать новый трек</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-6">Популярные жанры</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {genres.map((genre) => (
                <Card
                  key={genre.name}
                  className="hover-scale cursor-pointer border-2 border-primary/20 overflow-hidden group"
                >
                  <CardContent className="p-6">
                    <div className={`bg-gradient-to-br ${genre.color} rounded-lg p-8 mb-3 group-hover:scale-110 transition-transform`}>
                      <div className="text-5xl text-center">{genre.emoji}</div>
                    </div>
                    <p className="font-bold text-center">{genre.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8 px-6 mt-12">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm">
            © 2026 VoiceAI Studio. Создавай музыку с помощью AI. 🎵
          </p>
        </div>
      </footer>
    </div>
  );
}
