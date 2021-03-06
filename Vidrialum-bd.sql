PGDMP                         y            postgres    13.4    13.3     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    13707    postgres    DATABASE     ]   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE postgres;
                postgres    false            ?           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3266            ?            1259    16455    users    TABLE     ?   CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(50) NOT NULL,
    password character varying(200) NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    16458    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    200            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    201            ?            1259    16460    works    TABLE     ?   CREATE TABLE public.works (
    id bigint NOT NULL,
    name character varying(50) NOT NULL,
    image character varying(200) NOT NULL
);
    DROP TABLE public.works;
       public         heap    postgres    false            ?            1259    16463    works_id_seq    SEQUENCE     u   CREATE SEQUENCE public.works_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.works_id_seq;
       public          postgres    false    202            ?           0    0    works_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.works_id_seq OWNED BY public.works.id;
          public          postgres    false    203            1           2604    16475    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    201    200            2           2604    16476    works id    DEFAULT     d   ALTER TABLE ONLY public.works ALTER COLUMN id SET DEFAULT nextval('public.works_id_seq'::regclass);
 7   ALTER TABLE public.works ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202            ?          0    16455    users 
   TABLE DATA           3   COPY public.users (id, name, password) FROM stdin;
    public          postgres    false    200   ?       ?          0    16460    works 
   TABLE DATA           0   COPY public.works (id, name, image) FROM stdin;
    public          postgres    false    202   ?       ?           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 16, true);
          public          postgres    false    201            ?           0    0    works_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.works_id_seq', 17, true);
          public          postgres    false    203            4           2606    16468    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    200            6           2606    16470    works works_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.works DROP CONSTRAINT works_pkey;
       public            postgres    false    202            ?     x?}?ˎ?J ??q?=?[???H?\D?' 
H? O???Nv??_?g?/???(A???˾??1?;[:w?w??uu??gzk?ĕG/_?a??????"???h??#|N????5?{%?2jS??gp?:?Mv!rm98g?=???N?8??!P
?U	??s? ????`k?c?ݽ\CNU??Ʈo??9J???Q???O?Px?k???S????2?#?y?x?? Z<J?K??_?????\Kj?{+S ?6?)?!?פ?;?mАXK?,??&???w?????B?࣠??q???ӌ???Q?r??ڸn+??4[?V}<?*???<?????Hg??0?}-?^??A?]1e?z??㆜?3o\Nx$Q????????О??\Vƶ?
??????Gہٖn'_??)??M?,?6ʅ ???t<?{'??cW??I ?q?/2Yt??"?qܽh? 7 
?L?]?f#g?I??1)?9>????(*?`kb??'??ا ?????G?_Άm???̳b?P??B?Nja??SХm4'??N??Q??`?eu?&S???4:'???Dx???K/O??:I5zDW??? C? ??$CC?????<?ޔ?Ĝb??\??y??????mEo?^??34?f5`B?^Lm"??$U?c???k?O??ٴ??4???ҵ????%~0^?ڻǔ???8|?V᷸UN??H??:L?6~\?JP????Hm&??=??[ur?Nf4?pՒ?X?w?p&?? #??X???I??)??tk`3      ?   ?   x???A
?0??ur
/u'?\???&j?q?Z???P???[?|?H?xM?????9d?4?ͅ?\?%?????mk?f^?"???)?l"9k?	??``p??~???Z????
J?X????*?c?Y?C?փ- ?m??u?F?ӏ=Pl-???Z?5Pg=     