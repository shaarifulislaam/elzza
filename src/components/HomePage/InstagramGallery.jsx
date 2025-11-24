// components/InstagramGallery.js
"use client";

import { useState, useEffect } from "react";
import CommonTitle from "../commonElement/CommonTitle";

const InstagramGallery = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Demo data for demonstration
  const demoData = [
    {
      id: "1",
      caption:
        "Neem geen genoegen met standaardbeveiliging.Elke Elzza deur en elk raam is uitgerust met ons meerpuntssluitsysteem, speciaal ontworpen om jou en je gezin veilig te houden. 🏡🔒Gemoedsrust is onbetaalbaar. Klik op de link in bio en ontdek hoe wij veiligheid standaard maken.",
      media_type: "IMAGE",
      media_url: "/assets/images/instagram-1.jpg",
      permalink: "https://www.instagram.com/p/DRVMXLxE-8Q/",
      timestamp: "2025-11-22T10:00:00Z",
      like_count: 123,
      comments_count: 5,
    },
    {
      id: "2",
      caption:
        "Weer een tevreden klant! De ingangdeur en de kozijnen aan de voorzijde zijn vervangen en voorzien van HR+++ VSG-glas. Geleverd en gemonteerd volgens de hoogste kwaliteitsstandaard #schueco #ijsselstein",
      media_type: "IMAGE",
      media_url: "/assets/images/instagram-2.jpg",
      permalink: "https://www.instagram.com/p/DRPdwl5CFz3/",
      timestamp: "2025-11-21T08:30:00Z",
      like_count: 987,
      comments_count: 34,
    },
    {
      id: "3",
      caption:
        "Het is meer dan alleen glas, het is het element dat de uitstraling van je woning bepaalt. ✨Voel jij je aangetrokken tot het gedurfde contrast van modern zwart of kies je voor de tijdloze elegantie van klassiek wit?Laat ons jouw favoriet weten in de reacties! 👇",
      media_type: "IMAGE",
      media_url: "/assets/images/instagram-3.jpg",
      permalink: "https://www.instagram.com/p/DROU4tfDVMC/",
      timestamp: "2025-11-19T20:15:00Z",
      like_count: 234,
      comments_count: 0,
    },
    {
      id: "4",
      caption: "Fresh morning dew 🌿",
      media_type: "IMAGE",
      media_url:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
      permalink: "https://instagram.com/p/demo4",
      timestamp: "2024-11-17T07:00:00Z",
      like_count: 1567,
      comments_count: 67,
    },
    {
      id: "5",
      caption: "Delicious food platter 🍽️",
      media_type: "IMAGE",
      media_url:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
      permalink: "https://instagram.com/p/demo5",
      timestamp: "2024-11-16T12:30:00Z",
      like_count: 3421,
      comments_count: 123,
    },
    {
      id: "6",
      caption: "Mountain adventure ⛰️",
      media_type: "IMAGE",
      media_url:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      permalink: "https://instagram.com/p/demo6",
      timestamp: "2024-11-15T15:45:00Z",
      like_count: 4567,
      comments_count: 234,
    },
  ];

  useEffect(() => {
    fetchInstagramPosts();
  }, []);

  const fetchInstagramPosts = async () => {
    try {
      setLoading(true);

      // FOR REAL API: Replace with your actual API endpoint
      // const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
      // const response = await fetch(
      //   `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count&access_token=${accessToken}`
      // );
      // const data = await response.json();
      // setPosts(data.data);

      // Using demo data for now
      setTimeout(() => {
        setPosts(demoData);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError("Failed to fetch Instagram posts");
      setLoading(false);
      console.error(err);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="instagram-gallery">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="instagram-gallery">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="instagram-gallery">
      <CommonTitle
        title="Instagram-galerij"
        desc="Laatste berichten van onze Instagram"
      />

      <div className="gallery-grid">
        {posts.slice(0, 3).map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-item"
          >
            <div className="image-wrapper">
              <img
                src={post.media_url}
                alt={post.caption || "Instagram post"}
              />
              <div className="overlay">
                <div className="overlay-content">
                  <div className="stats">
                    {post.like_count && (
                      <span className="stat">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        {post.like_count.toLocaleString()}
                      </span>
                    )}
                    {post.comments_count && (
                      <span className="stat">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                        </svg>
                        {post.comments_count.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <p className="caption">
                    {post.caption?.substring(0, 100)}
                    {post.caption && post.caption.length > 100 ? "..." : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="post-footer">
              <span className="date">{formatDate(post.timestamp)}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramGallery;
