import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const albums = [
    { title: "Digital Dreams", year: "2024", cover: "🎵", tracks: 12, type: "Альбом" },
    { title: "Street Poetry", year: "2025", cover: "🔥", tracks: 15, type: "Альбом" },
    { title: "Late Night Vibes", year: "2025", cover: "🌙", tracks: 8, type: "EP" },
    { title: "Summer Hits", year: "2026", cover: "☀️", tracks: 10, type: "Альбом" },
  ];

  const releases = [
    { date: "2026-01-15", title: "New Single: Космос", type: "Сингл", status: "Анонс" },
    { date: "2026-02-20", title: "Альбом: Звёздная пыль", type: "Альбом", status: "В работе" },
    { date: "2026-03-10", title: "Коллаб с DJ Pulse", type: "Сингл", status: "Запись" },
    { date: "2026-04-05", title: "EP: Ночной город", type: "EP", status: "Анонс" },
  ];

  const articles = [
    { title: "Интервью для Rolling Stone Russia", date: "10 дек 2025", category: "Интервью" },
    { title: "Как мы создавали альбом Street Poetry", date: "25 ноя 2025", category: "За кулисами" },
    { title: "10 причин, почему рэп меняет Россию", date: "15 ноя 2025", category: "Мнение" },
    { title: "Выступление на премии МУЗ-ТВ", date: "05 ноя 2025", category: "Новости" },
  ];

  const videos = [
    { title: "Digital Dreams - Official Video", views: "2.5M", duration: "3:45" },
    { title: "Behind The Scenes: Street Poetry", views: "850K", duration: "15:20" },
    { title: "Live at Moscow Arena 2025", views: "1.2M", duration: "45:30" },
    { title: "Freestyle Session #5", views: "650K", duration: "8:15" },
  ];

  const gallery = [
    { id: 1, image: 'https://cdn.poehali.dev/projects/e3eca07f-b4d1-491a-a325-30b6c7379be5/files/7ea67445-ba51-46eb-85c8-adb7ad2b2246.jpg' },
    { id: 2, image: 'https://cdn.poehali.dev/projects/e3eca07f-b4d1-491a-a325-30b6c7379be5/files/4a5fca63-d0ce-47c6-a674-3753c08e2d8e.jpg' },
    { id: 3, image: 'https://cdn.poehali.dev/projects/e3eca07f-b4d1-491a-a325-30b6c7379be5/files/f5642d38-a242-4e69-92e6-45fbcdd55e6c.jpg' },
    { id: 4, emoji: '🎤' },
    { id: 5, emoji: '🎧' },
    { id: 6, emoji: '🎸' },
    { id: 7, emoji: '🎬' },
    { id: 8, emoji: '🎪' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-black text-gradient">ДВОЙНОЙ УДАР</h1>
            <div className="hidden md:flex gap-6">
              {['hero', 'bio', 'discography', 'releases', 'gallery', 'videos', 'articles', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium hover:text-primary transition-colors capitalize"
                >
                  {section === 'hero' ? 'Главная' : 
                   section === 'bio' ? 'Биография' :
                   section === 'discography' ? 'Дискография' :
                   section === 'releases' ? 'Релизы' :
                   section === 'gallery' ? 'Галерея' :
                   section === 'videos' ? 'Видео' :
                   section === 'articles' ? 'Статьи' :
                   'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/e3eca07f-b4d1-491a-a325-30b6c7379be5/files/7ea67445-ba51-46eb-85c8-adb7ad2b2246.jpg"
            alt="Двойной удар выступление"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8 backdrop-blur">
            <Icon name="Music" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Лучший рэп-дуэт 2026</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-gradient leading-tight">
            ДВОЙНОЙ<br />УДАР
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Алекс Пламя и Макс Скорость — два голоса, одна энергия. 
            Разрушаем стереотипы русского рэпа с 2023 года.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="gradient-primary text-white font-bold px-8 hover-scale">
              <Icon name="Play" size={20} className="mr-2" />
              Слушать треки
            </Button>
            <Button size="lg" variant="outline" className="font-bold px-8 hover-scale backdrop-blur">
              <Icon name="Calendar" size={20} className="mr-2" />
              Купить билеты
            </Button>
          </div>
        </div>
      </section>

      <section id="bio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Биография</h2>
            <p className="text-xl text-muted-foreground">История команды</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex gap-8 items-start">
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center text-4xl flex-shrink-0">
                2023
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Начало пути</h3>
                <p className="text-muted-foreground">
                  Алекс и Макс встретились на андеграундной рэп-баттле в Москве. 
                  Их первый трек "Двойная сила" собрал 500K прослушиваний за неделю 
                  и привлёк внимание крупных лейблов.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="w-20 h-20 rounded-full gradient-accent flex items-center justify-center text-4xl flex-shrink-0">
                2024
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Прорыв</h3>
                <p className="text-muted-foreground">
                  Релиз дебютного альбома "Digital Dreams" и тур по 30 городам России. 
                  Номинация на премию МУЗ-ТВ в категории "Прорыв года". 
                  Коллаборация с Oxxxymiron на треке "Новая волна".
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center text-4xl flex-shrink-0">
                2025
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Покорение вершин</h3>
                <p className="text-muted-foreground">
                  Альбом "Street Poetry" занял 1 место в чартах Apple Music. 
                  Выступления на фестивалях Rap Fest и Kubana. 
                  Более 50 миллионов стримов на всех платформах.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="w-20 h-20 rounded-full gradient-accent flex items-center justify-center text-4xl flex-shrink-0">
                2026
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Настоящее</h3>
                <p className="text-muted-foreground">
                  Работа над новым альбомом "Звёздная пыль". 
                  Международный тур по Европе и СНГ. 
                  Запуск собственного музыкального лейбла "Double Hit Records".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="discography" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Дискография</h2>
            <p className="text-xl text-muted-foreground">Наши релизы</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {albums.map((album, index) => (
              <Card key={index} className="hover-scale overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="text-8xl text-center mb-4">{album.cover}</div>
                  <Badge className="mb-3">{album.type}</Badge>
                  <h3 className="text-xl font-bold mb-2">{album.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{album.year} • {album.tracks} треков</p>
                  <Button className="w-full gradient-primary text-white font-semibold">
                    <Icon name="Play" size={16} className="mr-2" />
                    Слушать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="releases" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">График релизов</h2>
            <p className="text-xl text-muted-foreground">Анонсы будущих проектов</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {releases.map((release, index) => (
              <Card key={index} className="overflow-hidden border-l-4 border-l-primary hover-scale">
                <CardContent className="p-6 flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center">
                      <Icon name="Calendar" size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary">{release.status}</Badge>
                      <Badge variant="outline">{release.type}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{release.title}</h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      Дата выхода: {new Date(release.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground">Моменты из жизни</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {gallery.map((item) => (
              <Card key={item.id} className="aspect-square hover-scale overflow-hidden border-2 border-primary/20">
                <CardContent className="p-0 h-full flex items-center justify-center text-8xl bg-gradient-to-br from-primary/20 to-secondary/20">
                  {item.image ? (
                    <img src={item.image} alt={`Gallery ${item.id}`} className="w-full h-full object-cover" />
                  ) : (
                    item.emoji
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Видео</h2>
            <p className="text-xl text-muted-foreground">Клипы и записи</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {videos.map((video, index) => (
              <Card key={index} className="hover-scale overflow-hidden border-2 border-primary/20">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center relative">
                    <Icon name="Play" size={64} className="text-white opacity-80" />
                    <Badge className="absolute top-4 right-4">{video.duration}</Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Icon name="Eye" size={16} />
                      {video.views} просмотров
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Статьи</h2>
            <p className="text-xl text-muted-foreground">Пресса и новости</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {articles.map((article, index) => (
              <Card key={index} className="hover-scale overflow-hidden border-l-4 border-l-accent cursor-pointer">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex-1">
                    <Badge className="mb-2">{article.category}</Badge>
                    <h3 className="text-xl font-bold mb-1">{article.title}</h3>
                    <p className="text-muted-foreground text-sm">{article.date}</p>
                  </div>
                  <Icon name="ArrowRight" size={24} className="text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Связь с нами</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="hover-scale text-center cursor-pointer">
                <CardContent className="p-8">
                  <Icon name="Instagram" size={48} className="mx-auto mb-4 text-secondary" />
                  <h3 className="font-bold text-lg mb-2">Instagram</h3>
                  <p className="text-muted-foreground">@doublehit_official</p>
                </CardContent>
              </Card>

              <Card className="hover-scale text-center cursor-pointer">
                <CardContent className="p-8">
                  <Icon name="Youtube" size={48} className="mx-auto mb-4 text-accent" />
                  <h3 className="font-bold text-lg mb-2">YouTube</h3>
                  <p className="text-muted-foreground">DoubleHitOfficial</p>
                </CardContent>
              </Card>

              <Card className="hover-scale text-center cursor-pointer">
                <CardContent className="p-8">
                  <Icon name="Mail" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">info@doublehit.ru</p>
                </CardContent>
              </Card>
            </div>

            <Card className="gradient-primary text-white">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-black mb-4">Подпишись на рассылку</h3>
                <p className="mb-6 opacity-90">Получай новости о релизах и концертах первым</p>
                <div className="flex gap-3 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="твой@email.ru" 
                    className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white/90 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8">
                    Отправить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-black text-gradient mb-4">ДВОЙНОЙ УДАР</h2>
          <p className="text-muted-foreground mb-6">© 2026 Double Hit Records. Все права защищены.</p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="sm">Политика конфиденциальности</Button>
            <Button variant="ghost" size="sm">Условия использования</Button>
            <Button variant="ghost" size="sm">Пресс-центр</Button>
          </div>
        </div>
      </footer>
    </div>
  );
}