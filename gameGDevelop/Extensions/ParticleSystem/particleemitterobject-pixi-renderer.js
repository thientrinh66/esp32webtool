var gdjs;(function(n){const u=(p,t,r)=>{const e=p.first;e.value=t,e.next=e.next||{time:1,value:0},e.next.value=r};class o{constructor(t,r,e){this.started=!1;const i=t.getGame().getRenderer().getPIXIRenderer(),a=t.getGame().getImageManager();let s=PIXI.Texture.WHITE;i&&(e.rendererType==="Point"?s=a.getOrCreateDiskTexture(e.rendererParam1,i):e.rendererType==="Line"?s=a.getOrCreateRectangleTexture(e.rendererParam1,e.rendererParam2,i):e.textureParticleName?s=a.getOrCreateScaledTexture(e.textureParticleName,e.rendererParam1,e.rendererParam2,i):s=a.getOrCreateRectangleTexture(e.rendererParam1,e.rendererParam2,i));const g={ease:void 0,emit:void 0,lifetime:{min:e.particleLifeTimeMin,max:e.particleLifeTimeMax},frequency:e.flow<0?1e-4:1/e.flow,spawnChance:1,particlesPerWave:e.flow<0?e.maxParticleNb:1,maxParticles:e.maxParticleNb,emitterLifetime:o.computeLifetime(e.flow,e.tank),pos:{x:0,y:0},addAtBack:!1,behaviors:[{type:"alpha",config:{alpha:{isStepped:!1,list:[{time:0,value:e.particleAlpha1/255},{time:1,value:e.particleAlpha2/255}]}}},{type:"moveAcceleration",config:{accel:{x:e.particleGravityX,y:e.particleGravityY},minStart:e.emitterForceMin,maxStart:e.emitterForceMax,rotate:e.particleAngle1===0&&e.particleAngle2===0&&(e.particleGravityX!==0||e.particleGravityY!==0||e.emitterForceMin<0||e.emitterForceMax<0)}},{type:"scale",config:{scale:{isStepped:!1,list:[{time:0,value:e.particleSize1/100*(1+e.particleSizeRandomness1/100)},{time:1,value:e.particleSize2/100*(1+e.particleSizeRandomness2/100)}]}}},{type:"color",config:{color:{isStepped:!1,list:[{time:0,value:n.rgbToHex(e.particleRed1,e.particleGreen1,e.particleBlue1)},{time:1,value:n.rgbToHex(e.particleRed2,e.particleGreen2,e.particleBlue2)}]}}},{type:"rotation",config:{accel:0,minStart:-e.emitterAngleB/2,maxStart:e.emitterAngleB/2,maxSpeed:e.particleAngle2,minSpeed:e.particleAngle1}},{type:"blendMode",config:{blendMode:e.additive?"ADD":"NORMAL"}},{type:"textureSingle",config:{texture:s}},{type:"spawnShape",config:{type:"torus",data:{affectRotation:!1,innerRadius:0,radius:e.zoneRadius,x:0,y:0}}}]};this.renderer=new PIXI.Container,this.emitter=new PIXI.particles.Emitter(this.renderer,g),this.start();const l=t.getLayer(r.getLayer());l&&l.getRenderer().addRendererObject(this.renderer,r.getZOrder())}getRendererObject(){return this.renderer}update(t){const r=this.emitter.emit;this.emitter.update(t),!this.started&&r&&(this.started=!0)}setPosition(t,r){this.emitter.spawnPos.x=t,this.emitter.spawnPos.y=r}setAngle(t,r){const e=this.emitter.getBehavior("rotation");e.minStart=n.toRad(t),e.maxStart=n.toRad(r)}setForce(t,r){const e=this.emitter.getBehavior("moveAcceleration");e.maxStart=r||1e-6,e.minStart=t}setZoneRadius(t){const r=this.emitter.getBehavior("spawnShape");r.shape.radius=t}setLifeTime(t,r){this.emitter.minLifetime=t,this.emitter.maxLifetime=r}setGravity(t,r){const e=this.emitter.getBehavior("moveAcceleration");e.accel.x=t,e.accel.y=r,this._updateRotateFlagFromSpeed()}_updateRotateFlagFromSpeed(){const t=this.emitter.getBehavior("rotation"),r=this.emitter.getBehavior("moveAcceleration");r.rotate=t.minSpeed===0&&t.maxSpeed===0&&(r.accel.x!==0||r.accel.y!==0||r.minStart<0||r.maxStart<0)}setColor(t,r,e,i,a,s){const l=this.emitter.getBehavior("color").list.first,m=l.value;m.r=t,m.g=r,m.b=e,l.next=l.next||{time:1,value:{}};const d=l.next.value;d.r=i,d.g=a,d.b=s}setSize(t,r){const e=this.emitter.getBehavior("scale");u(e.list,t/100,r/100)}setParticleRotationSpeed(t,r){const e=this.emitter.getBehavior("rotation");e.minSpeed=n.toRad(t),e.maxSpeed=n.toRad(r),this._updateRotateFlagFromSpeed()}setMaxParticlesCount(t){this.emitter.maxParticles=t}setAdditiveRendering(t){const r=this.emitter.getBehavior("blendMode");r.blendMode=t?"ADD":"NORMAL"}setAlpha(t,r){const e=this.emitter.getBehavior("alpha");u(e.list,t/255,r/255)}setFlow(t,r){this.emitter.frequency=t<0?1e-4:1/t,this.emitter.emitterLifetime=o.computeLifetime(t,r)}resetEmission(t,r){this.setFlow(t,r);const e=this.emitter.emit;this.start(),e||this.stop()}isTextureNameValid(t,r){const e=r.getGame().getImageManager().getInvalidPIXITexture(),i=r.getGame().getImageManager().getPIXITexture(t);return i.valid&&i!==e}setTextureName(t,r){const e=r.getGame().getImageManager().getInvalidPIXITexture(),i=r.getGame().getImageManager().getPIXITexture(t);if(i.valid&&i!==e){const a=this.emitter.getBehavior("textureSingle");a.texture=i}}getParticleCount(){return this.emitter.particleCount}stop(){this.emitter.emit=!1}start(){this.emitter.emit=!0}recreate(){this.emitter.cleanup()}destroy(){this.emitter.destroy()}hasStarted(){return this.started}static computeLifetime(t,r){return r<0?-1:t<0?.001:(r+.1)/t}}n.ParticleEmitterObjectPixiRenderer=o,n.ParticleEmitterObjectRenderer=o})(gdjs||(gdjs={}));
//# sourceMappingURL=particleemitterobject-pixi-renderer.js.map
