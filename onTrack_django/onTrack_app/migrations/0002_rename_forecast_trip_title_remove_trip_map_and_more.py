# Generated by Django 4.0.6 on 2022-08-24 16:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('onTrack_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='trip',
            old_name='forecast',
            new_name='title',
        ),
        migrations.RemoveField(
            model_name='trip',
            name='map',
        ),
        migrations.RemoveField(
            model_name='trip',
            name='supplies',
        ),
        migrations.CreateModel(
            name='Supplies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.CharField(max_length=255)),
                ('trip', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='onTrack_app.trip')),
            ],
        ),
        migrations.CreateModel(
            name='Map',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('center', models.CharField(max_length=255)),
                ('points', models.CharField(max_length=255)),
                ('trip', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='onTrack_app.trip')),
            ],
        ),
    ]
